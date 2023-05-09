let a = 1 + 2
let b = a + 3
let c = {
    apple: a,
    banana: b
}
let d = c.apple * 4

// Обычная функция в которой при передаче строки будет NaN
//function squareOf(n) {
//    return n * n
// }

function squareOf(n: number) {
    return n * n
}
squareOf(2)

let e: {
    firstName: string,
    lastName:string
} = {
    firstName: "John",
    lastName: "Barrowman"
}

class Person {
    constructor(
        public firstName: string,
        public lastName: string 
    ){}
}
let f = new Person("Matt", "Daymon")