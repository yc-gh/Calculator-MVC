var CalculatorView = function(model, Btns, display) {
    var init = function() {
        renderCalculator();
    };

    var renderCalculator = function()
    {
        
        //Create the div for calculator body
        this.calcView=document.createElement("div");

        //Set id
        this.calcView.id = model.id;
        
        //Set height and width
        this.calcView.style.height = model.options.height;
        this.calcView.style.width = model.options.width;
        
        //Append the created div to html body 
        document.body.appendChild(this.calcView);
        
        //Append the display DOM element 
        this.calcView.appendChild(display);

        //Create a second div for all the buttons
        this.buttonDiv = document.createElement("div");

        for(var i=0; i<Btns.length; i++)
        {
            this.buttonDiv.appendChild(Btns[i]);
        } 
        
        //Append button div 
        this.calcView.appendChild(buttonDiv);
    };

    init();
    return this.calcView;
};