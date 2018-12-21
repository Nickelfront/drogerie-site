import { scrollToTop } from "../helpers";

export class MBConditionsComponent extends Component {
    constructor() {
        super();
        this.meta = {
            title: "Мама и бебе | Lilly Drogerie",
            keywords: "мама, майка, бебе, промоции, промо-карта",
            description: "азаруването с карта Lilly Club, в която са включени промоциите от Mamma&Baby..."
        };
        this.template = '/components/mb-conditions';
    }
    loaded(){
        scrollToTop();
    }

    handle() {
        this.make();
    }
}