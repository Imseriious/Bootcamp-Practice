//Math.PI << Pi number.
//parse.Float('3.14') << Creats a number from string.

//----Typical Function-------

function circleArea (radius){ //function "functioname" (Calling with a value)
    return Math.PI * radius ** 2; //return to return to caller, '**' means at the power of '2'
}

//cirleArea (5) = Call function giving the value of 'Radius we predefined in the function'

//-----functions are values! This is what really happens-----------
const circleArea = function (radius) {
    return Math.PI * radius ** 2;
}

//----NEW WAY OF FUNCTION----
const circleArea = (radius) => {      //Not using 'Function' Just the input in () and using '=>' and then the body
    return Math.PI * radius ** 2;
}

//you can use empty () if you dont need values.

