import { scrollToTop } from "../helpers";

export class AboutComponent extends Component {
    constructor() {
        super();
        this.meta = {
            title: "За нас | Lilly Drogerie",
            keywords: "за нас, история, пътят, първи магазин",
            description: "Когато през 2003 година в Република Сърбия учредихме верига дрогерии Лили...",
        }
        this.template = '/components/about-us';
    }
    loaded(){
        scrollToTop();
    }

    handle() {
        this.make();
    }
}