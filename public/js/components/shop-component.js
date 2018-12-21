
export class ShopComponent extends Component {
    constructor() {
        super();
        this.template = '/components/shops';
        this.meta = {
            title: "Магазини | Lilly Drogerie",
            keywords: "магазини, работно време, адреси",
            description: "Тук можете да намерите информация за работното време...",
        };
        this.componentVariables = {
            title: "Магазини",
            shops: [
                {
                    title: "бул. 8 Приморски полк №105-107",
                    thumbnail: "/img/shops-1-in.jpg",
                    phone: "052/60-02-90",
                    work_time: `Понеделник - Петък: 08:00-20:00 часа`
                },
                {
                    title: "бул. Владислав Варненчик №186",
                    thumbnail: "/img/lilly-drogerie-3.jpg",
                    phone: "052/50-22-73",
                    work_time: `Понеделник - Неделя: 10:00-22:00 часа`
                },
                {
                    title: "бул. Сливница №10",
                    thumbnail: "/img/lilly-drogerie-2.jpg",
                    phone: "052/60-14-94",
                    work_time: `Понеделник - Петък: 08:00-20:00 часа`
                },
            ]
        }
    }
    handle() {
        this.make();
    }
}
