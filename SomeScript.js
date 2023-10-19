//Some JS file here for some functionality..


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

function RectangleArea(side1, side2){
    let sideOne = side1;
    let sideTwo = side2;
    let areaRectangle = sideOne * sideTwo;
    return areaRectangle;
}

function RectangeLength(side1, side2){
    let sideOne = side1;
    let sideTwo = side2;
    let lengthRectangle = 2 * (sideOne + sideTwo);
    return lengthRectangle;
}



console.log(circleArea (1));
console.log(circleLength(1));
console.log(RectangleArea(3,5));
console.log(RectangeLength(3, 5));
