import { expect } from "@jest/globals";
import { describe, it } from "@jest/globals";
import { addTwoNumbers } from "./practise";

describe("addTwoNumbers",() => {
    it("Should return 0 when both numbers are 0", () => {
        expect(addTwoNumbers(0,0)).toEqual(0);
    })
    it("Should return the sum when one value is 0", () => {
        expect(addTwoNumbers(0,5)).toEqual(5);
    })

    it("Should return the sum when 2 positive numbers are given", () => {
        expect(addTwoNumbers(4,5)).toEqual(9);
        expect(addTwoNumbers(1,9)).toEqual(10);
    })
});