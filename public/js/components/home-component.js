
export class HomeComponent extends Component {
    constructor(router) {
        super();
        this.router = router;
        this.meta = {
            title: "Начало | Lilly Drogerie",
            keywords: "козметика, дамски превръзки",
            description: "Сайт, от който няма да останете разочаровани, всичко за вашата кожа...",
            download_catalogue: "/pdf/catalogue.pdf"
        };
        this.template = '/components/home';
        this.componentVariables = {
            
            brands: [
                {
                    imgSrc: "./img/brand/lilly.svg",
                    name: "lilly",
                }
                , {
                    imgSrc: "./img/brand/LLUMS.svg",
                    name: "LLUMS",
                }
                , {
                    imgSrc: "./img/brand/velnea.png",
                    name: "velnea",
                }
                , {
                    imgSrc: "./img/brand/watte-watte.svg",
                    name: "watte-watte",
                }
                , {
                    imgSrc: "./img/brand/moe.svg",
                    name: "moe",
                }
                , {
                    imgSrc: "./img/brand/mamma-baby.svg",
                    name: "mamma-baby",
                }
                , {
                    imgSrc: "./img/brand/veoma-zdrava-krema.svg",
                    name: "veoma-zdrava-krema",
                }
            ]
        }
       

        this.popUp = new SimplePopup('/components/popup', {
            TITLE: "Абонамент за каталог",
            SubTitle: "Абонирайте се за нашия месечен каталог!",
            Content: `В сътрудничество с водещи дерматолози и фармацевти разработихме богат асортимент от продукти SOLEVITA, 
                VELNEA, LILLY, Mamma&Baby, Watte & Watte, Moe 28 и други, които може да намерите въвъ всеки наш обект. 
                Днес в дрогерии Lilly работят над 1 500 души в съответствие с ISO стандартите за качество.`, //hell no
            IMAGE_PATH: "/img/gallery/catalog-mini.jpg",
            BUTTON: `<a class="btn lilly-btn" href="/pdf/Lilly-katalog-September-2018.pdf">ВЗЕМИ КАТАЛОГ</a></button>`
        });
    }

    loaded() {
        try {
            this.popUp.make();
            this.popUp.render();
        } catch (e) { console.table(['NICKIE IS A DUMMY']) }

        const slider = new NvSlider({ slices: 6, height: "405px" });
        slider.loadImages([
            '../img/banner/sp-1.jpg',
            '../img/banner/lavender-oil.jpg',
            '../img/banner/make-up-kit.jpg'
        ])
        slider.ini();
        this.router.attachListener('[data-bi-location="app"]');
    }
    handle() {
        this.fetchPromotions().then(res=>{
            try{
                let pr = JSON.parse(res);
                this.componentVariables["products"] = pr.products;
            }catch(e){
                console.log(e);
            }
            this.make();
        });
    }

    fetchPromotions(){
        let http = new XMLHttpRequest();
        return new Promise((resolve, reject) => {
            http.onreadystatechange = ()=>{
                if (http.readyState == 4 && http.status == 200) {
                    resolve(http.responseText);
                }
            
            }

            http.open("GET",`${window.location.origin}/common/promotions.json`)
            http.send();
        });
    }
}
