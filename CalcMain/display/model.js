var DisplayModel = function(id, options) {
   

    if(typeof options === "undefined")
    {
        this.options = {
            width:'200px',
            height:'80px'
        };
    }
    else
    {
        var w=options.width;
        var h=options.height;

        if(w == undefined)
        {
            w="200px";
        }
        if(h == undefined)
        {
            h="80px";
        }
        this.options = {
            width:w,
            height:h
         };
    }

    //check for the options and override the default values
    this.id = id;
};

