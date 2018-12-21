import { scrollToTop } from "../helpers";

export class PrivacyComponent extends Component {
    constructor() {
        super();
        this.meta = {
            title: "Защита на личните данни | Lilly Drogerie",
            keywords: "защита, лични данни, данни, клиентски данни",
            description: "„Лили Дрогерие“ ЕООД (за краткост по-долу „Лили“ и/или „Администратор“), е дружество, регистриран..."
        };
        this.template = '/components/privacy-policy';
    }
    loaded(){
        scrollToTop();
    }


    handle() {
        this.make();
    }
}