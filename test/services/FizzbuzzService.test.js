const FizzbuzzService = require('../../lib/services/FizzbuzzService')

describe('Test para FizzbuzzService', () =>{
    test('Prueba 1: Asigna Score si no cumple función', () =>{
        const explorer1 = {name: "Explorer1", score: 1}
        FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 
        expect(explorer1.trick).toBe(1)
    })

})