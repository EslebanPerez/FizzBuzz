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
 
    

})