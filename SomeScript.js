//A simple set of four JS functions, aimed to 
//be part of a Git exercises 


function circleArea (input){
    //Determine the area of a circle
    let radius = input;
    let area = radius * radius * Math.PI;
    return area;
}

function circleLength(input){
    //Determine the length of a circle
    let radius = input;
    let length = 2 * Math.PI * radius;
    return length;
}

function RectangleArea(side1, side2){
    //Determine the area of a rectangle
    let sideOne = side1;
    let sideTwo = side2;
    let areaRectangle = sideOne * sideTwo;
    return areaRectangle;
}

function RectangeLength(side1, side2){
    //Determine the length /perimeter/ of a rectangle
    let sideOne = side1;
    let sideTwo = side2;
    let lengthRectangle = 2 * (sideOne + sideTwo);
    return lengthRectangle;
}



console.log(circleArea (1));
console.log(circleLength(1));
console.log(RectangleArea(3,5));
console.log(RectangeLength(3, 5));
