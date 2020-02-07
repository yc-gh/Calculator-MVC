var NumericButtonController=function(id,value,options,type)
{
    ButtonController.call(this,id,value,{class:"numeric"});
};
NumericButtonController.prototype=Object.create(ButtonController.prototype);
NumericButtonController.prototype.constructor=NumericButtonController;