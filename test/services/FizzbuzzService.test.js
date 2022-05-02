const FizzbuzzService = require('../../lib/services/FizzbuzzService')

describe('Test para FizzbuzzService', () =>{
    test('Prueba 1: Asigna Score si no cumple función', () =>{
        const explorer1 = {name: "Explorer1", score: 1}
        FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 
        expect(explorer1.trick).toBe(1)
    })
    test('Prueba 2: Asigna FIZZ si el score es divisible entre 3', () =>{
        const explorer3 = {name: "Explorer3", score: 3}
        FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}
        expect(explorer3.trick).toBe("FIZZ")
    })
    test('Prueba 3: Asigna BUZZ si el score es divisible entre 5', () =>{
        const explorer5 = {name: "Explorer5", score: 5}
        FizzbuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}
        expect(explorer5.trick).toBe("BUZZ")
    })
    test('Prueba 4: Asigna FIZZBUZZ si el score es divisible entre 5 y 3', () =>{
        const explorer15 = {name: "Explorer15", score: 15}
        FizzbuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
        expect(explorer15.trick).toBe("FIZZBUZZ")
    })

})