//Goal: determine if number is prime
function isPrime (num){
    //variables  
    let isPrime=true;
    //ONE
    if (num===1){
        console.log("1 is 1.")
        return;
    }
    //Prime
    if (1<num && num<4){
        isPrime=true;
    }
    for(let i=2; i<=Math.sqrt(num);i++){
        //isPrime=true;
        if (num%i ===0){
            isPrime=false;
            break;
        }
        //console.log(i);
    }  
    //Print Logic
    if (isPrime){
        console.log(`${num} is prime.`);
    }
    else{
        console.log(`${num} is a composite.`)
    }
}
//Test Dataset
function generateNums(sampleSize){
    for (let i=1; i<=sampleSize;i++){
        isPrime(i);
    }
}
generateNums(20);