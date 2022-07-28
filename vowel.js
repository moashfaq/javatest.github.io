function getCount(str){
    let vowelsCount=0;

    const arr= str.split("");

    for(let i=0; i < arr.lenght;i++)
    {
        switch(arr[i]){
            case 'a':
                vowelsCount++;
                break;
                
            case 'e':
                vowelsCount++;
                break;
                
            case 'i':
                vowelsCount++;
              
            case 'o':
                vowelsCount++;
                
            case 'u':
                vowelsCount++;

        }
    }
    return vowelsCount;
}

console.log(getCount("avfceiosgv"));