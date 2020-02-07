var ButtonController = function (id, value, options) {
    var btnModel, btnView;
    var _this = this;
    var init =  function() {
        
        btnModel = new ButtonModel(id, value, options);
        btnView = new ButtonView(btnModel);
        
        btnView.onclick = function(event) {
           //inside onclick function ,this refers to the window object not the ButtonController Object 
           _this.onClickHandler(event, id, value);
        };
        btnView.onmousedown = function(event) {
            event.preventDefault();
        };
    };
/**
* on click handler for the button
**/

        this.onClickHandler = function(event, id , value) {

        };
/**
* returns the button view
**/
        this.getButtonView = function() {
           return btnView;
        };

       init();
       return this;
 };
//var obj=new ButtonController("button1",1);