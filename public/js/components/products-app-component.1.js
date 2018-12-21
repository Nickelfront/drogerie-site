import { ProductsComponent } from "./products-component";

export class ProductsAppComponent extends Component {
    constructor(router) {
        super();
        this.router=router;
        this.api = null;
        this.setUpClient();

        this.meta = {
            title: "Продукти | Lilly Drogerie",
            keywords: "козметика, дамски превръзки",
            description: "Сайт, от който няма да останете разочаровани, всичко за вашата кожа..."
        };

        this.instance = new ProductsComponent(router);
        this.template = "/components/products/products";

        this.componentVariables = {
            productsLinks:[
                {
                    name:"Шампоани",
                    url: "/products/shampoos"
                },{
                    name:"Балсами",
                    url: "/products/balsams"
                },{
                    name:"Шампоани",
                    url: "/products/shampoos"
                },{
                    name:"Шампоани",
                    url: "/products/shampoos"
                },{
                    name:"Шампоани",
                    url: "/products/shampoos"
                },
            ]
        };
        this.categoryResponse = {};
       
    }
    loaded(){
        this.instance[this.pageType]();
        this.router.attachListener('.products-container')
    }

    list(category) {
        this.pageType = "listing";
        this.getCategory(category).then((response)=>{
            try{
                this.categoryResponse = JSON.parse(response);
                this.instance.setContent(Object.assign({},this.categoryResponse['meta'],{productionList:this.categoryResponse['data']}))
                this.make()
            }catch(e){
                console.log(e);
            }
           
        });
    }

    single(category, id) {
        this.pageType = "single";
        this.getCategory(category).then((response)=>{
            try{
                this.categoryResponse = JSON.parse(response);
                this.categoryResponse["data"].some(el => {
                    if(el.id==id){
                        this.instance.setContent(el);
                        return true;
                    }
                });
                
                this.make()
            }catch(e){
                console.log(e);
            }
            
        });
    }

    setUpClient() {
        this.api = new XMLHttpRequest();
    }
    getCategory(category) {
        return new Promise((resolve, reject) => {
            this.api.onreadystatechange = ()=>{
                if (this.api.readyState == 4 && this.api.status == 200) {
                    resolve(this.api.responseText);
                 }
            
            }

            this.api.open("GET",`${window.location.origin}/categories/${category}.json`)
            this.api.send();
        });
    }
}