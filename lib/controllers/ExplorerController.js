const ExplorerService = require("./../services/ExplorerServices");
const FizzbuzzService = require("./../services/FizzbuzzService");
const Reader = require("./../utils/Reader");


class explorerController{
    static getExplorersByMission(mission){
        const explorers =  Reader.readJsonFile("explorers.json");
        return  ExplorerService.filterByMission(explorers, mission);
    }
    static getExplorersUsernamesByMission(mission){
        const explorers =  Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers,mission);
    }
    static getExplorersAmonutByMission(mission){
        const explorers =  Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
    static getApplyValidationInNumber(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }
}

module.exports = explorerController;