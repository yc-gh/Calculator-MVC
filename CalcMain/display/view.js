var DisplayView = function (model) {
    var dispViewElement;

  
    var init =  function() {
        createDisplayElement();
    };
    
    var createDisplayElement = function() {
        
        dispViewElement = document.createElement('input');
        dispViewElement.setAttribute("type","text");
        dispViewElement.style.height = model.options.height;
        dispViewElement.style.width = model.options.width;
        dispViewElement.readOnly = true;
    };

    init();
    return dispViewElement;
};