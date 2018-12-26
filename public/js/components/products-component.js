import {scrollToTop} from "../helpers";

export class ProductsComponent extends Component {
    constructor(router) {
        super();
        this.router=router;
        this.meta = {
            title: "Продукти | Lilly Drogerie",
            keywords: "продукти, закупуване, лист от продукти, шампоани, балсами",
            description: "Вижте асортимента ни от най-различни продукти....",
        };
        this.componentVariables = {};
    }
    loaded(){
        this.router.attachListener('.products-handler');
        scrollToTop();
    }
    handle(){
        this.make();
    }


    listing(){
        this.setContainer("product");
        this.template = "/components/products/products-listing";
        this.handle();
    }
    single(){
        this.setContainer("product");
        this.template = "/components/products/products-single";
        this.handle();
    }

    setContent(data){
        this.componentVariables = data;
    }
}