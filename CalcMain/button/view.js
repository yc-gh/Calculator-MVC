var ButtonView = function (model) {
    var btnViewElement;

  
    var init =  function() {
        createBtnElement();
    };
    
    var createBtnElement = function() {
        
        btnViewElement = document.createElement('button');
        btnViewElement.innerHTML = model.value;
        btnViewElement.style.height = model.options.height;
        btnViewElement.style.width = model.options.width;
        btnViewElement.className = model.options.class;
        btnViewElement.tabIndex = -1;
    };

    init();
    return btnViewElement;
    
};