import { scrollToTop } from "../helpers";

export class TermsComponent extends Component {
    constructor() {
        super();
        this.meta = {
            title: "Условия за ползване на сайта | Lilly Drogerie",
            keywords: "правила, използване, лили правила",
            description: "Вашият достъп и използването на сайта www.lillydrogerie.bg (в текста: \"сайт\") трябва да е съобразено ...",
        };
        this.template = '/components/terms-and-conditions';
    }
    loaded(){
        scrollToTop();
    }


    handle() {
        this.make();
    }
}
