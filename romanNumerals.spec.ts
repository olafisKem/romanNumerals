import { describe, expect, it } from "@jest/globals";
import { numberToNumerals } from "./romanNumerals";

describe("numberToNumerals", () => {
    it("should convert 1 ", () => {
        expect(numberToNumerals(1)).toEqual("I");
    })
    it("should convert 2 ", () => {
        expect(numberToNumerals(2)).toEqual("II");
    })
})

