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

import { it } from "@jest/globals";
export const numberToNumerals = (x: number) : string => {
    if (x === 1){
        return "I";
    }
    if (x === 2){
        return "II";
    }
    if (x === 3){
        return "III";
    }
    else {
        return "IV";
    }
};