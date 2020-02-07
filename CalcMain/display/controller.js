var DisplayController = function (id, options) {
    var dispModel, dispView;

    this.init =  function() {
        dispModel = new DisplayModel(id, options);
        dispView = new DisplayView(dispModel);

        this.getDisplayView = function() {
           return dispView;
        };

        this.setDisplayView = function(value) {
            dispView.value = value;
        };
    };

    this.init();
    return this;
};
