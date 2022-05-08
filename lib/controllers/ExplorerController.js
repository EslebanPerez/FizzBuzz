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

    static BotResponse(msg, bot){
        const chatId = msg.chat.id;
        const numberToApplyFb = parseInt(msg.text);

        if(!isNaN(numberToApplyFb)){
            const fizzbuzzTrick = this.getApplyValidationInNumber(numberToApplyFb);
            const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
            bot.sendMessage(chatId, responseBot);
        } else {
            bot.sendMessage(chatId, "Envía un número válido");
        }
    }
}

module.exports = explorerController;