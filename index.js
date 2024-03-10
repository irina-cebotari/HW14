// ex1

const func = (a, b, c) => {
 return Math.sqrt(a+b+c)   
}

console.log(func(5, 15, 25))



// ex2

const str = 'here we have some text written for no reason'
const str1 = str.replaceAll(' ', '')

const func1 = (str1) => {
    let index = Math.floor(Math.random() * str1.length)
    return (str1 [index])
}

console.log(func1(str1))



// ex3

const str2 = 'i have written some text here '
const str3 = 'but the text have no sense'

const func2 = (a, b) => {
    return (a+b)
}

console.log(func2(str2, str3))