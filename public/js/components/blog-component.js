import NvHttp from "../nv-http-loader.bundle"

export class BlogComponent extends Component {
    constructor(router) {
        super();
        this.router = router;
        this.api = new NvHttp(`${window.location.origin}/common/blog-posts.json`);
        this.meta = {
            title: "Блог | Lilly Drogerie",
            keywords: "актуално, блог, постове, най-популярни техники",
            description: "Разгледайте нашите най-нови статии от проверени източници...",
        };

        this.componentVariables = {};
    }
    makeCopy() {
        this.copy = Object.assign({}, this.componentVariables);
    }

    loaded() {
        this.router.attachListener('.blog-post-handlers')
    }

    handle() {
        this.setContainer('blog');
        this.template = '/components/blog/blog-listing';
        this.api.get().then(response => {
            if (response.hasOwnProperty('posts')) {
                this.componentVariables = response;
                this.make();
            }
        });
    }

    showInner(id) {
        this.setContainer('blog');
        this.template = '/components/blog/blog-inner';
        this.api.get().then(response=>{
            if (response.hasOwnProperty('posts')) {
                const postExist = response['posts'].some(post=>{
                    if(post.id == id){
                        this.componentVariables = post;
                        return true;
                    }
                });
                (postExist)?this.make():this.router.updateState('not-found');
            }
        });
    }
}
