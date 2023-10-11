const {
  sum,
  multiply,
  isBelowZero,
  round,
  addingUp,
  findMinMax,
  afterXmasEve2020,
  sortByStringLength,
  charCounter,
  hasOnlyNumbers,
  numbersOnly,
  sortNumbers,
  Person,
  doublePrice,
  and,
  removeLeadingTrailing,
  getKeysAndValues,
} = require("../src/labb.js");

describe("Test cases for javascript exercise at Miun", () => {
  describe("sum returns sum of two integers", () => {
    it("should return the sum of two positive numbers", () => {
      const result = sum(2, 3);
      expect(result).toBe(5);
    });

    it("should return the sum of a positive and a negative number", () => {
      const result = sum(2, -3);
      expect(result).toBe(-1);
    });

    it("should return the sum of two negative numbers", () => {
      const result = sum(-2, -3);
      expect(result).toBe(-5);
    });

    it("should return NaN when one of the arguments is not a number", () => {
      const result = sum(2, "3");
      expect(result).toBe(NaN);
    });

    it("should return NaN when both arguments are not numbers", () => {
      const result = sum("2", "3");
      expect(result).toBe(NaN);
    });
  });

  describe("multiply returns the product of two positive numbers", () => {
    it("should return the product of two positive numbers", () => {
      const result = multiply(2, 3);
      expect(result).toEqual(6);
    });

    it("should return zero when one of the arguments is zero", () => {
      const result1 = multiply(0, 5);
      const result2 = multiply(3, 0);
      expect(result1).toEqual(0);
      expect(result2).toEqual(0);
    });

    it("should return a negative number when one of the arguments is negative", () => {
      const result1 = multiply(-2, 3);
      const result2 = multiply(2, -3);
      expect(result1).toEqual(-6);
      expect(result2).toEqual(-6);
    });

    it("should return the correct result when one of the arguments is a decimal", () => {
      const result1 = multiply(2.5, 3);
      const result2 = multiply(2, 1.5);
      expect(result1).toEqual(7.5);
      expect(result2).toEqual(3);
    });

    it("should return NaN when one of the arguments is not a number", () => {
      const result1 = multiply("2", 3);
      const result2 = multiply(2, "3");
      const result3 = multiply("2", "3");
      expect(result1).toBeNaN();
      expect(result2).toBeNaN();
      expect(result3).toBeNaN();
    });
  });

  describe("isBelowZero", () => {
    it("should return true when given a negative number", () => {
      const result = isBelowZero(-2);
      expect(result).toBe(true);
    });

    it("should return false when given zero", () => {
      const result = isBelowZero(0);
      expect(result).toBe(false);
    });

    it("should return false when given a positive number", () => {
      const result = isBelowZero(2);
      expect(result).toBe(false);
    });

    it("should return false when given a non-numeric value", () => {
      const result = isBelowZero("foo");
      expect(result).toBe(false);
    });
  });

  describe("round return the closes integer", () => {
    it("should round up to the nearest integer when decimal is >= 0.5", () => {
      const result = round(21.5);
      expect(result).toBe(22);
    });

    it("should round down to the nearest integer when decimal is < 0.5", () => {
      const result = round(17.4);
      expect(result).toBe(17);
    });

    it("should return the same integer when given an integer", () => {
      const result = round(21);
      expect(result).toBe(21);
    });

    it("should return NaN when given a non-numeric value", () => {
      const result = round("foo");
      expect(result).toBe(NaN);
    });
  });

  // Unit tests for addingUp
  describe("addingUp adds all the numbers from 1 to given argument", () => {
    it("should return the sum of numbers from 1 to 5", () => {
      const result = addingUp(5);
      expect(result).toBe(15);
    });

    it("should return zero when given zero", () => {
      const result = addingUp(0);
      expect(result).toBe(0);
    });

    it("should return one when given one", () => {
      const result = addingUp(1);
      expect(result).toBe(1);
    });

    it("should return NaN when given a non-numeric value", () => {
      const result = addingUp("foo");
      expect(result).toBe(NaN);
    });
  });

  // Unit tests for findMinMax
  describe("findMinMax takes an array of numbers and returns an object with min max keys containging min max values", () => {
    it("should return the minimum and maximum values in an array of positive numbers", () => {
      const result = findMinMax([2, 5, 1, 4, 3]);
      expect(result).toEqual({ min: 1, max: 5 });
    });

    it("should return the minimum and maximum values in an array of negative numbers", () => {
      const result = findMinMax([-2, -5, -1, -4, -3]);
      expect(result).toEqual({ min: -5, max: -1 });
    });

    it("should return the minimum and maximum values in an array of mixed positive and negative numbers", () => {
      const result = findMinMax([-2, 5, -1, 4, -3]);
      expect(result).toEqual({ min: -3, max: 5 });
    });

    it("should return NaN when given a non-array value", () => {
      const result = findMinMax("foo");
      expect(result).toBe(NaN);
    });

    it("should return NaN when given an empty array", () => {
      const result = findMinMax([]);
      expect(result).toBe(NaN);
    });
  });

  // Unit tests for afterXmasEve2020
  describe("afterXmasEve2020 takes a date as param and returns a boolean indicating if argument is after 2020-12-24", () => {
    it("should return true when given a date after December 24, 2020", () => {
      const result = afterXmasEve2020(new Date("2020-12-25"));
      expect(result).toBe(true);
    });

    it("should return false when given a date before December 24, 2020", () => {
      const result = afterXmasEve2020(new Date("2020-12-23"));
      expect(result).toBe(false);
    });

    it("should return false when given December 24, 2020", () => {
      const result = afterXmasEve2020(new Date("2020-12-24"));
      expect(result).toBe(false);
    });

    it("should return NaN when given a non-date value", () => {
      const result = afterXmasEve2020("foo");
      expect(result).toBe(NaN);
    });
  });

  // Unit tests for sortByStringLength
  describe("sortByStringLength takes an array of strings and returns it sorted based on string length", () => {
    it("should sort an array of strings by length in descending order", () => {
      const result = sortByStringLength(["apple", "banana", "cherry", "date"]);
      expect(result).toEqual(["banana", "cherry", "apple", "date"]);
    });

    it("should return an empty array when given an empty array", () => {
      const result = sortByStringLength([]);
      expect(result).toEqual([]);
    });

    it("should return the same array when given an array with one element", () => {
      const result = sortByStringLength(["apple"]);
      expect(result).toEqual(["apple"]);
    });
  });
  describe("charCounter takes a letter as first argument, and counts the number of times it occurs in the second argument, returning the number", () => {
    test('charCounter("x", "sex laxar i en lax ask") returns 3', () => {
      expect(charCounter("x", "sex laxar i en lax ask")).toBe(3);
    });

    test('charCounter("t", "It Takes Two To Tango") returns 5', () => {
      expect(charCounter("t", "It Takes Two To Tango")).toBe(5);
    });

    test("returns 0 if none found", () => {
      expect(charCounter("z", "this has none")).toBe(0);
    });
  });

  describe("hasOnlyNumbers checks an array for valid numbers", () => {
    it("should return true when given an array of numbers", () => {
      const result = hasOnlyNumbers([1, 2, 3]);
      expect(result).toBe(true);
    });

    it("should return false when given an array with non-numeric elements", () => {
      const result = hasOnlyNumbers([1, "foo", 3]);
      expect(result).toBe(false);
    });

    it("should return true when given an empty array", () => {
      const result = hasOnlyNumbers([]);
      expect(result).toBe(true);
    });

    it("should return NaN when given a non-array value", () => {
      const result = hasOnlyNumbers("foo");
      expect(result).toBe(NaN);
    });
  });
  describe("numbersOnly filters an array and returns a copy containing only numbers", () => {
    test('["hej", 7, 8, false, 3] === [7, 8, 3]', () => {
      const arg = ["hej", 7, 8, false, 3];
      const result = numbersOnly(arg);
      expect(result).toEqual([7, 8, 3]);
    });

    test("handles all non number values", () => {
      const arg = [9, NaN, 2, null, 0, "string", undefined, 4];
      const result = numbersOnly(arg);
      expect(result).toEqual([9, 2, 0, 4]);
    });

    test("returns empty array if no numbers", () => {
      const arg = ["miun", "2020", "javascript", "number", "1", "!"];
      const result = numbersOnly(arg);
      expect(result).toEqual([]);
    });
  });

  describe("sortNumbers takes an array and a sorting direction and returns the list in correct order", () => {
    it("should sort an array of positive numbers in ascending order", () => {
      const result = sortNumbers([2, 5, 1, 4, 3], "asc");
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });

    it("should sort an array of negative numbers in ascending order", () => {
      const result = sortNumbers([-2, -5, -1, -4, -3], "asc");
      expect(result).toEqual([-5, -4, -3, -2, -1]);
    });

    it("should sort an array of mixed positive and negative numbers in ascending order", () => {
      const result = sortNumbers([-2, 5, -1, 4, -3], "asc");
      expect(result).toEqual([-3, -2, -1, 4, 5]);
    });

    it("should sort an array of positive numbers in descending order", () => {
      const result = sortNumbers([2, 5, 1, 4, 3], "desc");
      expect(result).toEqual([5, 4, 3, 2, 1]);
    });

    it("should sort an array of negative numbers in descending order", () => {
      const result = sortNumbers([-2, -5, -1, -4, -3], "desc");
      expect(result).toEqual([-1, -2, -3, -4, -5]);
    });

    it("should sort an array of mixed positive and negative numbers in descending order", () => {
      const result = sortNumbers([-2, 5, -1, 4, -3], "desc");
      expect(result).toEqual([5, 4, -1, -2, -3]);
    });

    it("should return an empty array when given an empty array", () => {
      const result = sortNumbers([], "asc");
      expect(result).toEqual([]);
    });

    it("should return NaN when given a non-array value", () => {
      const result = sortNumbers("foo", "asc");
      expect(result).toBe(NaN);
    });
  });
  describe("Person uses a factory pattern that takes a firstname and a lastname and returns an new object Person", () => {
    it("should create a new Person object with the correct properties", () => {
      const person = new Person("John", "Doe");
      expect(person.firstName).toBe("John");
      expect(person.lastName).toBe("Doe");
      expect(person.fullName).toBe("John Doe");
      expect(person.initials).toBe("J.D");
    });

    it("should create a new Person object with the correct properties when given a single name", () => {
      const person = new Person("Jane", "");
      expect(person.firstName).toBe("Jane");
      expect(person.lastName).toBe("");
      expect(person.fullName).toBe("Jane ");
      expect(person.initials).toBe("J.");
    });
  });

  describe('getKeysAndValues takes an object and returns a new object with key "keys" where value is an array of its keys, and key "values" where value is an array of its values', () => {
    it("should return an object with keys and values arrays when given a non-empty object", () => {
      const obj = { a: 1, b: 2, c: 3 };
      const result = getKeysAndValues(obj);
      expect(result).toEqual({ keys: ["a", "b", "c"], values: [1, 2, 3] });
    });

    it("should return an object with empty keys and values arrays when given an empty object", () => {
      const obj = {};
      const result = getKeysAndValues(obj);
      expect(result).toEqual({ keys: [], values: [] });
    });
  });

  // Unit tests for doublePrice
  describe("doublePrice takes an array of product objects and returns the same array with price for each object doubled", () => {
    it("should double the price of each product in the object", () => {
      const products = {
        apple: { name: "Apple", price: 1 },
        banana: { name: "Banana", price: 2 },
        orange: { name: "Orange", price: 3 },
      };
      const result = doublePrice(products);
      expect(result).toEqual({
        apple: { name: "Apple", price: 2 },
        banana: { name: "Banana", price: 4 },
        orange: { name: "Orange", price: 6 },
      });
    });

    it("should return an empty object when given an empty object", () => {
      const obj = {};
      const result = doublePrice(obj);
      expect(result).toEqual({});
    });

    it("should return NaN when given a non-object value", () => {
      const products = {
        apple: { name: "Apple", price: 1 },
        banana: { name: "Banana", price: "foo" },
        orange: { name: "Orange", price: 3 },
      };
      const result = doublePrice(products);
      expect(result).toBe(NaN);
    });

    // unit tests for and
    describe("the function named 'and' returns true if both values are true", () => {
      it("should return true when both arguments are true", () => {
        const result = and(true, true);
        expect(result).toBe(true);
      });

      it("should return false when the first argument is false", () => {
        const result = and(false, true);
        expect(result).toBe(false);
      });

      it("should return false when the second argument is false", () => {
        const result = and(true, false);
        expect(result).toBe(false);
      });

      it("should return false when both arguments are false", () => {
        const result = and(false, false);
        expect(result).toBe(false);
      });
    });
  });
  // Unit tests for remove leading and trailing whitespace
  describe("removeLeadingTrailing removes leading and trailing zeros from a string or a number, returning a number without leading/trailing", () => {
    it("should remove leading and trailing zeros from a positive integer", () => {
      const result = removeLeadingTrailing("00100");
      expect(result).toBe("100");
    });

    it("should remove leading and trailing zeros from a negative integer", () => {
      const result = removeLeadingTrailing("-00100");
      expect(result).toBe("-100");
    });

    it("should remove leading and trailing zeros from a positive decimal", () => {
      const result = removeLeadingTrailing("00100.000");
      expect(result).toBe("100");
    });

    it("should remove leading and trailing zeros from a negative decimal", () => {
      const result = removeLeadingTrailing("-00100.000");
      expect(result).toBe("-100");
    });

    it("should return NaN when given a non-string value", () => {
      const result = removeLeadingTrailing(100);
      expect(result).toBe(NaN);
    });

    it("should return NaN when given an invalid string", () => {
      const result = removeLeadingTrailing("foo");
      expect(result).toBe(NaN);
    });
  });
});
