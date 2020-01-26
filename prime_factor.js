var p_nums = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53,
                     59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 
                     127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 
                     191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 
                     257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
                     331, 337, 347, 349];

var p_factors = [];
var target = 228;
var divisor = 0;

while(target > 1) {
    console.log("target: ", target);
    console.log("divisor: ", divisor);
    console.log("primary number: ", p_nums[divisor]);
    if(target % p_nums[divisor] === 0) {
        p_factors.push(p_nums[divisor]);
        target = target / p_nums[divisor];
    } else {
        divisor++;
    }
}

console.log(p_factors);