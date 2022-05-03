const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Prueba para ExplorerController", () =>{
    test("Prueba 1", () =>{
        const getExplorers = ExplorerController.getExplorersByMission("node");
        expect(getExplorers.length).toBe(10);
    });
    test("Prueba 2", () =>{
        const getExplorers = ExplorerController.getExplorersUsernamesByMission("node");
        expect(getExplorers).toContain("ajolonauta1");
    });
    test("Prueba 3", () =>{
        const getExplorers = ExplorerController.getExplorersAmonutByMission("node");
        expect (getExplorers).toBe(10);
    });
   
});