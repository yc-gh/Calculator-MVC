var NumericButtonModel=function(id,value,options,type)
{
    this.type="numeric_button";
    ButtonModel.call(this,id,value,options);
};
NumericButtonModel.prototype=Object.create(ButtonModel.prototype);
NumericButtonModel.prototype.constructor=NumericButtonModel;