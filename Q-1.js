// Q-1 => Return the Sum of Numbers

// As we know there are different possible solutions to solve a problems 
// Note :- Here variables used are considered as Non-meaningful as it shows the lack of understandability and redability of code.
//         Thus it is not a good practice, so try to use a meaningful variables. 


//Possible Solution - 1 

const a1 = 5 + 3

console.log(a1);


//Possible Solution - 2

const a2 = 3
const b2 = 2

const c2 = a2 + b2

console.log(c2);

//Possible solution - 3

const array3 = [2,4,5]

const c3 = array3.reduce((p,c) => p+c , 0) 

console.log(c3);


//Possible Solution - 4

const array4 = [3,6,1,8]
let sum4 = 0

for (let i = 0; i < array4.length; i++) {
    const element = array4[i];
    sum4 += element
}

console.log(sum4);


//Possible Solution - 5

const a5 = (x5, y5, z5) => {
    return x5 + y5 + z5
}

const c5 = a5(4,1,7)

console.log(c5);