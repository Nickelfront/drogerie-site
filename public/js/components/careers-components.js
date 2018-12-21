import { scrollToTop } from "../helpers";

export class CareersComponent extends Component {
    constructor() {
        super();
        this.meta = {
            title: "Кариери | Lilly Drogerie",
            keywords: "работни места, работна възможност, стажове, стаж, лили стаж",
            description: "\"Лили Дрогерие\" ЕООД оперира успешно на територията на България от началото на 2010 година...",
        }
        this.template = '/components/careers';
    }
    loaded(){
        scrollToTop();
    }

    handle() {
        this.make();
    }
}