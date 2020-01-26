function fibonacci() {
    let sum = 0;
    let i = 0;
    let arr = [1,2];
    while(sum <= 4000000) {
        arr.push(arr[i] + arr[i + 1]);
        if(arr[i] % 2 === 0) { sum += arr[i]; }
        i++;
    }
    return sum;
}


module.exports.fibonacci = fibonacci;