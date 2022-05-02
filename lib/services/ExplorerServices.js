class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersbyMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersbyMission
    }

    static getAmountOfExplorersByMission(explorers, mission){
        return  explorers.filter((explorer) => explorer.mission == mission).length; 
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersbyMission = explorers.filter((explorer) => explorer.mission == mission);
        const explorersName = explorersbyMission.map((explorer) => explorer.githubUsername)
        return explorersName
    }
}

module.exports = ExplorerService