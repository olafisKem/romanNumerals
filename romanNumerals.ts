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

// ideas for general logic - numbers 1-3, number 7-8  - formed by repeating I
// numbers that do not repeat smaller I's but used I to subtract from a bigger V or X:  4(IV) or 9 (IX)
// numbers usedto add to a bigger value like V or X:  6(VI) or 11 (XI)

// need to create a map or something
// const romanNumerals : [number, string][] = [
//     [10, "X"],
//     [9, "IX"],
//     [5, "V"],
//     [4, "IV"],
//     [1, "I"]
// ];

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
    if (x === 4){
        return "I" + "V";
    }
    if (x === 5){
        return "V";
    }
    if (x === 6){
        return "VI";
    }
    if (x === 7){
        return "VII";
    }
    if (x === 8){
        return "VIII";
    }
    if (x === 9){
        return "IX";
    }
    if (x === 10){
        return "X";
    }
    else {
        return "XI";
    }
};