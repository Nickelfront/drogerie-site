import {BlogComponent} from "./blog-component";

export class BlogAppComponent extends Component {
    constructor(router) {
        super();
        this.meta = {
            title: "Блог | Lilly Drogerie",
            keywords: "актуално, блог, постове, най-популярни техники",
            description: "Разгледайте нашите най-нови статии от проверени източници...",
        }
        this.router = router;
        this.instance = new BlogComponent(router);
        this.template = '/components/blog/blog';
        this.componentVariables = {
            sideTitle: "За нас",
            sideImage: "/img/thumbnails/magazin-lily.jpg",
            sideContent: "Когато през 2003 година в Република Сърбия учредихме верига дрогерии Лили искахме само едно: да предоставим на нашите клиенти ...",
            recent: [{
                id: 1,
                title: "Грижа и хидратация на кожата",
                thumbnail: "/img/thumbnails/grija-koja.jpg",
                created_at: "20 Ноември, 2016",
                author: "Lilly Drogerie"
            },
            {
                id: 2,
                title: "Излагане на слънце и слънцезащитни средства",
                thumbnail: "/img/thumbnails/momiche-plaj.jpeg",
                created_at: "20 Ноември, 2016",
                author: "Lilly Drogerie"
            },
            {
                id: 3,
                thumbnail: "/img/thumbnails/35772532348831.jpg",
                title: "Как да засилите имунитета",
                created_at: "20 Ноември, 2016",
                author: "Lilly Drogerie"
            }]
        }
    }

    loaded() {
        if (this.selectedId === null) {
            this.instance.handle()
        } else {
            this.instance.showInner(this.selectedId);
        }
        this.router.attachListener('.blog-post-handlers');
    }

    list() {
        this.selectedId = null;
        this.make();
    }

    single(id) {
        this.selectedId = id;
        this.make();
    }
}
