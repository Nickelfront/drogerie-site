import { scrollToTop } from "../helpers";

export class FAQComponent extends Component {
    constructor() {
        super();
        this.meta = {
            title: "Често задавани въпроси | Lilly Drogerie",
            keywords: "faq, често задавани въпроси, въпроси, отговори",
            description: "Разбира се, всички магазини на Лили Дрогерие са оборудвани с ПОС терминали. Плащане...",
        }
        this.template = '/components/faq';
    }
    loaded(){
        scrollToTop();
        // console.log("Loaded. Can write functions here.");
        let accordions = document.querySelectorAll(".accordion");
        accordions.forEach(button => {
            button.addEventListener("click", this.togglePanel.bind(this));
        });
    }

    handle() {
        this.make();
    }

    togglePanel(event) {
        var accordion = event.currentTarget;
        var panel = accordion.nextElementSibling;
        console.log(panel);
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
           panel.style.display = "block";
        }
    }
}