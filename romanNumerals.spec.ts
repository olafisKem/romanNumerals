import { describe, expect, it } from "@jest/globals";
import { numberToNumerals } from "./romanNumerals";

describe("numberToNumerals", () => {
    it("should convert 1 ", () => {
        expect(numberToNumerals(1)).toEqual("I");
    })
    it("should convert 2 ", () => {
        expect(numberToNumerals(2)).toEqual("II");
    })
    it("should convert 3 ", () => {
        expect(numberToNumerals(3)).toEqual("III");
    })
    it("should convert 4 ", () => {
        expect(numberToNumerals(4)).toEqual("IV");
    })
    it("should convert 5 ", () => {
        expect(numberToNumerals(5)).toEqual("V");
    })
    it("should convert 6 ", () => {
        expect(numberToNumerals(6)).toEqual("VI");
    })
    it("should convert 7 ", () => {
        expect(numberToNumerals(7)).toEqual("VII");
    })
    it("should convert 8 ", () => {
        expect(numberToNumerals(8)).toEqual("VIII");
    })
    it("should convert 9 ", () => {
        expect(numberToNumerals(9)).toEqual("IX");
    })
    it("should convert 10 ", () => {
        expect(numberToNumerals(10)).toEqual("X");
    })
    it("should convert 11 ", () => {
        expect(numberToNumerals(11)).toEqual("XI");
    })

    it("should convert 21 ", () => {
        expect(numberToNumerals(21)).toEqual("XXI");
    })
    it("should convert 40 ", () => {
        expect(numberToNumerals(40)).toEqual("XL");
    })
    it("should convert 41 ", () => {
        expect(numberToNumerals(41)).toEqual("XLI");
    })
    it("should convert 48 ", () => {
        expect(numberToNumerals(48)).toEqual("XLVIII");
    })
})

