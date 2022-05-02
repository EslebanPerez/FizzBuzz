class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersbyMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersbyMission
    }

    static getAmountOfExplorersByMission(explorers, mission){
        return  explorers.filter((explorer) => explorer.mission == mission).length; 
    }

    static getExplorersUsernamesByMission(explorers, mission){
        
    }
}

module.exports = ExplorerService