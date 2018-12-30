export class ErrorPage extends Component {
    constructor(router) {
        super();
        this.meta = {
            title: "Упс... Страницата не съществува. | Lilly Drogerie",
            keywords: "",
            description: "",
        }
        this.router = router;
        this.template = '/components/not-found';
    }
    loaded(){
        this.router.attachListener('.error-details')
    }

    handle() {
        this.make();
    }
}