var OperatorButtonModel=function(id,value,options,type)
{
    this.type="operator_button";
    ButtonModel.call(this,id,value,options);
};
OperatorButtonModel.prototype=Object.create(ButtonModel.prototype);
OperatorButtonModel.prototype.constructor=OperatorButtonModel;