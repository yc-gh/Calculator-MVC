var CalculatorModel = function (id, options) {
        
        this.options = {
                type:'basic',
                height:'200px',
                width:'200px',
                operatorButton:['+','-','*','/','%','=','.','C'],
                numberButton:[1,2,3,4,5,6,7,8,9,0]
        };
        this.id = id;
};
