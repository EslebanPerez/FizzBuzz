const ExplorerService = require('../../lib/services/ExplorerServices')
const Reader = require('../../lib/utils/Reader')

describe("Test for ExplorerService", () => {
    const explorers = Reader.readJsonFile('explorers.json') 

    test("Requerimiento 1: Obtener explorers", () =>{
        expect(explorers.length).toBe(15);
    });
    test("Requerimiento 2: Calcular la cantidad de exploradores en Node", () =>{
        const ExplorersInNode = ExplorerService.filterByMission(explorers,"node");
        expect(ExplorersInNode.length).toBe(10);
    });
    test("Requerimiento 3: Verifica la cantidad de explorers", () =>{
        const NumExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(NumExplorersInNode).toBe(10);
    });
    test('Requerimiento 4: Obtener nombres de los explorers en node', () =>{
        const usernamesInNode =  ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(usernamesInNode).toContain('ajolonauta11')
    })
});