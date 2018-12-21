import { scrollToTop } from "../helpers";

export class GiftCardComponent extends Component {
    constructor() {
        super();
        this.meta = {
            title: "Гифт карта | Lilly Drogerie",
            keywords: "подарък, подаръчна карт, гифт карта",
            description: "Подарете на ваш любим човек...",
        };
        this.template = '/components/gift-card';
    }
    loaded(){
        scrollToTop();
    }

    handle() {
        this.make();
    }
}