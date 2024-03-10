// ex1

const func = (a, b, c) => {
 return Math.sqrt(a+b+c)   
}

console.log(func(5, 15, 25))



// ex2

const str = 'here we have some text written for no reason'
console.log(str.length)

const func1 = (str) => {
    let index = Math.floor(Math.random() * 44)
    return (str [index])
}

console.log(func1(str))



// ex3

const str1 = 'i have written some text here '
const str2 = 'but the text have no sense'

const func2 = (a, b) => {
    return (a+b)
}

console.log(func2(str1, str2))