var OperatorButtonController=function(id,value,options,type)
{
    ButtonController.call(this,id,value,{class:"operator"});
};
OperatorButtonController.prototype=Object.create(ButtonController.prototype);
OperatorButtonController.prototype.constructor=OperatorButtonController;