import { scrollToTop } from "../helpers";

export class ContactComponent extends Component {
    constructor(router) {
        super();
        this.meta = {
            title: "Контакти | Lilly Drogerie",
            keywords: "свързване, контакти, телефонен номер, адрес",
            description: "Стараем се да отговорим на Вашите запитвания и писма в срок от три работни...",
        }
        this.router = router;
        this.template = '/components/contacts';
        this.componentVariables = {
            top_banner: "/img/banner/cosmetics_banner.jpg",
            person_name: 'Вашето име',
            person_email: 'Е-мейл',
            person_phone: 'Телефон',
            subject: 'Тема',
            message: 'Вашето съобщение...',
            contactAddress: 'София, ул. "Иван Денкоглу" 26 ет.2',
            contactPhone: '02 / 987 98 91',
            contactEmail: 'office@lillydrogerie.bg'
        }
    }
    loaded(){
        scrollToTop();
    }

    handle() {
        this.make();
    }
}