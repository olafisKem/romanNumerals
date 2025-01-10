// ({}–>nil) no code at all->code that employs nil
// (nil->constant)
// (constant->constant+) a simple constant to a more complex constant
// (constant->scalar) replacing a constant with a variable or an argument
// (statement->statements) adding more unconditional statements.
// (unconditional->if) splitting the execution path
// (scalar->array)
// (array->container)
// (statement->recursion)
// (if->while)
// (expression->function) replacing an expression with a function or algorithm
// (variable->assignment) replacing the value of a variable.

export const numberToNumerals = (x: number) : string => {
    if (x === 0){
        return "";
    }
    if (x <= 3 ){
        return "I" + numberToNumerals(x-1);
    }
    if (x === 4){
        return "IV"  + numberToNumerals(x-4);
    }
    if (x <= 8){
        return "V" + numberToNumerals(x-5);
    }
    if (x === 9){
        return "IX" +  numberToNumerals(x-9);
    }
    if (x >= 40 && x <= 49 ){
        return "XL" +  numberToNumerals(x-40);
    }
    if (x >= 50 && x <= 89){
        return "L" +  numberToNumerals(x-50);
    }
    if (x >= 90 && x <= 99){
        return "XC" +  numberToNumerals(x-90);
    }
    if (x >= 100 && x <= 399){
        return "C" +  numberToNumerals(x-100);
    }
    if (x >= 400 && x <= 499){
        return "CD" +  numberToNumerals(x-400);
    }
    if (x >= 500 && x <= 899){
        return "D" +  numberToNumerals(x-500);
    }
    if (x >= 900 && x <= 999){
        return "CM" +  numberToNumerals(x-900);
    }
    if (x >= 1000){
        return "M" +  numberToNumerals(x-1000);
    }
    else {
        return "X" + numberToNumerals(x-10);
    }
};
