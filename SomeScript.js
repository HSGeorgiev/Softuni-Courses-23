//Some JS file here for some functionality..
function SomeFunctionality (input){
    //The actual function here...
    let a = 'Some text to be printed.';
    console.log(a);
    let b = input;
    console.log(b);
}

function circleArea (input){
    let radius = input;
    let area = radius * radius * Math.PI;
    return area;
}

function circleLength(input){
    let radius = input;
    let length = 2 * Math.PI * radius;
    return length;
}


SomeFunctionality ("Now we can print all the array")
console.log(circleArea (1));
console.log(circleLength(1));
