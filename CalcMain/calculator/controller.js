var CalculatorController = function(id) {
    var cId, calcModel, calcView;
    var display, Btns=[];
    var checkResult = false;
    var sendDisplay;

    var init = function() {
        cId = 'cId-' + id;
        renderCalculator();
    };

    var renderCalculator = function() {
        calcModel = new CalculatorModel(cId);

        dispId=cId + '-display';

        display=new DisplayController(dispId);
        sendDisplay=display.getDisplayView();

        //Create button controllers
        getButtons(calcModel);

        //Create button view
        calcView=new CalculatorView(calcModel,Btns,sendDisplay);

        //Set keypress listener for calculator
        setDisplayEventListener(sendDisplay);        
    };

    function getButtons(model)
    {
        var nb = model.options.numberButton;
        var ob = model.options.operatorButton;

        //Add buttons to view in specified order
        var btns = ['+','-','*','/','%','C',7,8,9,4,5,6,1,2,3,'.',0,'='];

        for(var i=0; i<btns.length; i++)
        {
            //Get buttons from model to create controllers
            if(nb.includes(btns[i]))
            {
                btnCtrl=new NumericButtonController(cId+'-nb'+i,nb[nb.indexOf(btns[i])]);
                btnCtrl.onClickHandler=function(event,id,value)
                {
                    calculateValues('number',value);
                    //Set focus on current display
                    sendDisplay.focus();
                };
                Btns.push(btnCtrl.getButtonView());
            }
            else
            {
                btnCtrl=new OperatorButtonController(cId+'-ob'+i,ob[ob.indexOf(btns[i])]);
                btnCtrl.onClickHandler=function(event,id,value)
                {
                    calculateValues('operator',value);
                    //Set focus on current display
                    sendDisplay.focus();
                };
                Btns.push(btnCtrl.getButtonView());
            }
        }

    }

    var calculateValues=function(type,value)
    {
        var calcValue=value;

        var currentValue=display.getDisplayView().value;

        if(type === 'operator')
        {
            if(value === "C")
            {
                calcValue=" ";
                checkResult=false;
            }
            else if(value === "=")
            {
                calcValue=eval(currentValue);
                checkResult=true;
            }
            else
            {
                calcValue=currentValue+""+value;
                checkResult=false;
            }
        
        }
        else
        {
            if(checkResult)
            {
                calcValue=value;
                checkResult=false;
            }
            else
            {
                calcValue=currentValue+""+value;
            }
        }
        updateDisplayValue(calcValue);
    };

    var updateDisplayValue=function(value)
    {
        var currentDisplayValue=value;
        display.setDisplayView(currentDisplayValue);
    };

    var setDisplayEventListener = function(displayViewDiv) {
        displayViewDiv.addEventListener('keypress', function(event){
            var key = String.fromCharCode(event.keyCode);
            if((calcModel.options.numberButton).includes(key))
            {
                calculateValues('number',key);         
            }
            else
            {
                calculateValues('operator',key);
            }
        });
    };

    init();
    return this;
};


