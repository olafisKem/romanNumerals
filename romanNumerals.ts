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
    if (x >= 40 && x <= 48 ){
        return "XL" +  numberToNumerals(x-40);
    }
    else {
        return "X" + numberToNumerals(x-10);
    }
};
//pattern: whenever the numeral is subtractive  i,e 4 is iv, 9 is ix the recursive expression subtracts the number(x)[