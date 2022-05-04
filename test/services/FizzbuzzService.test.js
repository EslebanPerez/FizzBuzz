const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Test para FizzbuzzService", () =>{
    test("Prueba 1: Asigna Score si no cumple función", () =>{
        const explorer1 = {name: "Explorer1", score: 1};
        FizzbuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1} 
        expect(explorer1.trick).toBe(1);
    });
    test("Prueba 2: Asigna FIZZ si el score es divisible entre 3", () =>{
        const explorer3 = {name: "Explorer3", score: 3};
        FizzbuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}
        expect(explorer3.trick).toBe("FIZZ");
    });
    test("Prueba 3: Asigna BUZZ si el score es divisible entre 5", () =>{
        const explorer5 = {name: "Explorer5", score: 5};
        FizzbuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}
        expect(explorer5.trick).toBe("BUZZ");
    });
    test("Prueba 4: Asigna FIZZBUZZ si el score es divisible entre 5 y 3", () =>{
        const explorer15 = {name: "Explorer15", score: 15};
        FizzbuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
        expect(explorer15.trick).toBe("FIZZBUZZ");
    });
    test("Prueba 5: Asigna FIZZ cuando recibe el número 3",()=>{
        const scoreVal = 3;
        const resp = FizzbuzzService.applyValidationInNumber(scoreVal);
        expect(resp).toBe("FIZZ");
    });
    test("Prueba 6: Asigna BUZZ cuando recibe el número 5",()=>{
        const scoreVal = 5;
        const resp = FizzbuzzService.applyValidationInNumber(scoreVal);
        expect(resp).toBe("BUZZ");
    });
    test("Prueba 7: Asigna FIZZBUZZ cuando recibe el número divicible entre 3 y 5",()=>{
        const scoreVal = 15;
        const resp = FizzbuzzService.applyValidationInNumber(scoreVal);
        expect(resp).toBe("FIZZBUZZ");
    });
    test("Prueba 8: Regresa el mismo número cuando no cumple con alguna de las validaciones",()=>{
        const scoreVal = 1;
        const resp = FizzbuzzService.applyValidationInNumber(scoreVal);
        expect(resp).toBe(1);
    });
});