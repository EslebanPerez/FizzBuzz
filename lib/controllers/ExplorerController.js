const ExplorerService = require("./../services/ExplorerServices");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");

class explorerController{
    static getExplorersByMission(mission){
        const read =  Reader.readJsonFile("explorers.json");
        return  ExplorerService .filterByMission(read, mission);
    }
}

module.exports = explorerController;