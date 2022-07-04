import CardBack from '../cards/CardBack';
import PixelFrog from '../cards/PixelFrog';
import UkrainianFrog from '../cards/UkrainianFrog';
import BattleWednesdayFrog from "../cards/BattleWednesdayFrog";
import AristocratFrog from "../cards/AristocratFrog";
import ClassicFrog from "../cards/ClassicFrog";
import WorkFrog from "../cards/WorkFrog";
import Jabaka from "../cards/Jabaka";
import JapanFrog from "../cards/JapanFrog";
import KingFrog from "../cards/KingFrog";
import JodaFrog from "../cards/JodaFrog";
import SamuraiFrog from "../cards/SamuraiFrog";
import UnderwaterFrog from "../cards/UnderwaterFrog";
//import GameHandler from "./GameHandler";

export default class DeckHandler{
    constructor(scene) {
        let cards = {
            cardBack: new CardBack(scene),
            pixelFrog: new PixelFrog(scene),
            ukrainianFrog: new UkrainianFrog(scene),
            battleWednesdayFrog: new BattleWednesdayFrog(scene),
            aristocratFrog: new AristocratFrog(scene),
            classicFrog: new ClassicFrog(scene),
            workFrog: new WorkFrog(scene),
            jabaka: new Jabaka(scene),
            japanFrog: new JapanFrog(scene),
            kingFrog: new KingFrog(scene),
            jodaFrog: new JodaFrog(scene),
            samuraiFrog: new SamuraiFrog(scene),
            underwaterFrog: new UnderwaterFrog(scene)
        }

        this.dealCard = (x, y, name, type) => {
            let newCard = cards[name];
            return(newCard.render(x, y, type));
        }
    }
}