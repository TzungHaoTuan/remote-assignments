//Assignment-1
function max(numbers) {
    // your code here
    let maxNum = numbers[0]
    for(let i = 1; i < numbers.length; i++ ){
        if(numbers[i] > maxNum){
            maxNum = numbers[i] 
        }
        
        }
        return maxNum
    }
    console.log(max([1, 2, 4, 5])); // expected output: 5
    console.log(max([5, 2, 7, 1, 6])); // expected output: 7

//Assignment-2
function calculate(args) {
    // your code here
    if(args.op === "+"){
        return args.n1 + args.n2
    }else if(args.op === "-"){
        return args.n1 - args.n2
    }return 'Not supported'
    }
    console.log(calculate({ n1: 2, n2: 3, op: '+' })); // expected output: 5
    console.log(calculate({ n1: 5, n2: 2, op: '-' })); // expected output: 3
    console.log(calculate({ n1: 1, n2: 6, op: 'x' })); // expected output: 'Not supported'

//Assignment-3
function calculateData(data) {
    // your code here
    const afterDiscount = 1 - data.discount
    const discountProducts = data.products.map(product => product.price * afterDiscount)
    const totalPrice = discountProducts.reduce((acc, cur) => acc + cur)
    return totalPrice
}
const discountedPrice = calculateData({
    discount: 0.1,
    products: [
        {
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
});
console.log(discountedPrice) // show the total price of all products after applying a discount

// Assignment-5
function twoSum(nums, target) {
    // your code here
    for(let i = 0; i < nums.length; i++){
        if(nums[i] + nums[i+1] === target){
            return [i, i+1]
        }else if(nums[i] + nums[i+2] === target){
            return [i, i+2]
        }else if(nums[i] + nums[i+3] === target){
            return [i, i+3]
    }
    }
}
console.log(twoSum([2, 7, 11, 15], 22))
    /*
    For example:
    twoSum([2, 7, 11, 15], 9); Should returns:
    [0, 1] Because:nums[0] + nums[1] is 9
    */

function twoSumNew(nums, target) {
    // your code here
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
}
console.log(twoSumNew([2, 7, 11, 15], 22))
    