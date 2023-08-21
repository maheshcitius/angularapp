import { CalculatorService } from "./calculator.service";

describe("Sample Unit Tests", () => {
    let svc: CalculatorService | undefined;

    beforeEach(() => {
        svc = new CalculatorService();    
    });
    afterEach(() => {
        svc = undefined;
    })

    it("should return addition of 2 nos." , () => {
        let ans: number | undefined = svc?.Add(10, 20);
        expect(ans).toBe(30);
    });
    it("should return subtraction of 2 nos." , () => {
        let ans: number | undefined = svc?.Subtract(100, 50);
        expect(ans).toBe(50);
    });

    it("should return multiplication of 2 nos." , () => {
        let ans: number | undefined = svc?.Multiply(5, 5);
        expect(ans).toBe(25);
    });

    it("should return division of 2 nos." , () => {
        let ans: number | undefined = svc?.Divide(10, 2);
        expect(ans).toBe(5);
    });
});