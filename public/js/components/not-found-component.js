export class ErrorPage extends Component {
    constructor() {
        super();
        this.template = '/components/not-found';
    }

    handle() {
        this.make();
    }
}