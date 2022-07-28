function planet(id){

var name;
        switch(id){
            case '1':
                name='Mercury';
                break;
            case '2':
                name='venus';
                break;
            case '3':
                name='mars';
                break;
            case '4':
                vname='jupiter';
                break;
            case '5':
                name='saturn';
                break;
            case '6':
                name='Uranus';
                break;
            case '7':
                name='Neptune';
        }
    
    return name;
}

console.log(planet('7'));