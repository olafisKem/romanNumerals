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
    it("should convert numbers 40 - 49 to numerals", () => {
        expect(numberToNumerals(40)).toEqual("XL");
        expect(numberToNumerals(41)).toEqual("XLI");
        expect(numberToNumerals(48)).toEqual("XLVIII");
        expect(numberToNumerals(49)).toEqual("XLIX");
    })
    it("should convert numbers 50 - 89 to numerals ", () => {
        expect(numberToNumerals(50)).toEqual("L");
        expect(numberToNumerals(51)).toEqual("LI");
        expect(numberToNumerals(60)).toEqual("LX");
        expect(numberToNumerals(88)).toEqual("LXXXVIII");
        expect(numberToNumerals(89)).toEqual("LXXXIX");
    })

    it("should convert number 100 to numerals ", () => {
        expect(numberToNumerals(100)).toEqual("C");
    })
    it("should convert number 90 - 99 to numerals ", () => {
        expect(numberToNumerals(90)).toEqual("XC");
        expect(numberToNumerals(91)).toEqual("XCI");
        expect(numberToNumerals(95)).toEqual("XCV");
        expect(numberToNumerals(99)).toEqual("XCIX");
    })
    it("should convert numbers 100 to 399 to numerals ", () => {
        expect(numberToNumerals(101)).toEqual("CI");
        expect(numberToNumerals(399)).toEqual("CCCXCIX");
    })

    it("should convert number 400 to 499 to numerals ", () => {  
        expect(numberToNumerals(400)).toEqual("CD");
        expect(numberToNumerals(499)).toEqual("CDXCIX");
    })

    it("should convert number 500 to 899 to numerals ", () => {  
        expect(numberToNumerals(500)).toEqual("D");
        expect(numberToNumerals(501)).toEqual("DI");
        expect(numberToNumerals(899)).toEqual("DCCCXCIX");

    })
    it("should convert number 900 to 999 to numerals ", () => {  
        expect(numberToNumerals(900)).toEqual("CM");
        expect(numberToNumerals(999)).toEqual("CMXCIX");

    })

    it("should convert number 1000 numerals ", () => {  
        expect(numberToNumerals(1000)).toEqual("M");
    })
})

