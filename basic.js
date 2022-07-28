function basic(op,v1,v2){
    let result;
    
    switch (op){
        case '+':
            result=v1+v2;
            break;
        case '-':
            result=v1-v2;
            break;
        case '*':
            result=v1*v2;
            break;
        case '/':
            result=v1/v2;
            break;
    }
    return result;
}

console.log(basic("+",333,2));