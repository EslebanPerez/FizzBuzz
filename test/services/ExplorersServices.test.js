const ExplorerService = require('../../lib/services/ExplorerServices')
const Reader = require('../../lib/utils/Reader')

describe("Test for ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en Node", () =>{
        const explorers = Reader.readJsonFile('explorers.json') 
        const ExplorersInNode = ExplorerService.filterByMission(explorers,"node");
        expect(ExplorersInNode.length).toBe(10);
    });
});