function pos_sum(arr){
    let sum =0;

    for (let i=0; i<arr.length; i++)
        {
                if(arr[i]>0){
                    sum=sum+arr[i];

                }
        }
    return sum;
}

console.log(pos_sum([1,2,-2]));