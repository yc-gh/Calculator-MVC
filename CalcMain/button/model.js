var ButtonModel = function(id, value, options) {
   
    if(!options) {options = {};}
    this.options = {
        width: options.width ? options.width: '30px',
        height: options.height ? options.height: '30px',
        class: options.class ? options.class: 'button'
    };

    //check for the options and override the default values
    this.id = id;
    this.value = value;
};

