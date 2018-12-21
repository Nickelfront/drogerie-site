import { scrollToTop } from "../helpers";

export class LoyalConditionsComponent extends Component {
    constructor() {
        super();
        this.meta = {
            title: "Лоялен клиент | Lilly Drogerie",
            keywords: "Лоялен, клиент, lilly club, loyalty card, карта, правила",
            description: "Спестете пари, като пазарувате при нас. Всяко „ЦВЕТЕНЦЕ“ ви спестява 1 стотинка....",
        };
        this.template = '/components/loyal-conditions';
    }
    loaded(){
        scrollToTop();
    }


    handle() {
        this.make();
    }
}