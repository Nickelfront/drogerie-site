export class GalleryComponent extends Component {
    constructor() {
        super();
		this.meta = {
            title: "Галерия | Lilly Drogerie",
            keywords: "галерия, снимки, lilly магазин, лили магазин, лили галерия",
            description: "Вижте нашият магазин и нашите усмихнати служители...",
        }
        this.template = '/components/gallery';
	    this.componentVariables = {
    		images: [
	    		{
		    		imgSrc: "../img/gallery/81989610112375.jpg"
		    	},
		    	{
		    		imgSrc: "../img/gallery/78786017042067.jpg"
		    	},	
		    	{
		    		imgSrc: "../img/gallery/82662941763798.jpg"
		    	},
		    	{
		    		imgSrc: "../img/gallery/52290490021308.jpg"
		    	},
		    	{
		    		imgSrc: "../img/gallery/87678898539808.jpg"
		    	},
		    	{
		    		imgSrc: "../img/gallery/78376450762152.jpg"
		    	},
		    	{
		    		imgSrc: "../img/gallery/56351835860146.jpg"
		    	},
		    	{
		    		imgSrc: "../img/gallery/81558973424964.jpg"
		    	},{
		    		imgSrc: "../img/gallery/53196174858344.jpg"
		    	},
    		]
    	}
    }

    loaded() {
    	console.log("Loaded. Can write functions here.");
    	let images = document.querySelectorAll("img.thumbnail");
    	images.forEach(image => {
    		image.addEventListener("click", this.viewFullImage.bind(this));
    	});
        
        let prevButton = document.getElementById("image-prev");
        let nextButton = document.getElementById("image-next");
        let closeButton = document.getElementById("image-close");

        prevButton.addEventListener("click", this.goToPrev.bind(this));
        nextButton.addEventListener("click", this.goToNext.bind(this));
        closeButton.addEventListener("click", this.closeView.bind(this));
    }

    handle() {
        
        this.make();
    }

    viewFullImage(event) {
    	// console.log(event.currentTarget);
    	// let image = event.currentTarget;
    	// let imgSrc = image.src;
    	// let fullScreenView = document.querySelector(".image-fullscreen");
    	// fullScreenView.style.display = "block";
    	// // let fullSizeImg = document.querySelector(".image-fullscreen img");
    	// // fullSizeImg.src = imgSrc;
    	// fullScreenView.style.backgroundImage = "url(" + imgSrc + ")";
    	// document.querySelector('body').style.overflow = "hidden!important";
    	// //TODO: ADD CONTROLS
        
        console.log(event.currentTarget);
        let allImages = document.querySelectorAll("img.thumbnail");
        
        let fullScreenView = document.querySelector(".image-fullscreen");
        fullScreenView.style.display = "block";
        let image = event.currentTarget;
        let imgSrc = image.src;

        let prevButton = document.getElementById("image-prev");
        let nextButton = document.getElementById("image-next");
        let closeButton = document.getElementById("image-close");

        let fullSizeImg = document.querySelector(".image-fullscreen img");
        fullSizeImg.src = imgSrc;
        
        prevButton.style.display = "block";            
        nextButton.style.display = "block";

        if (imgSrc == allImages[0].src) {
            prevButton.style.display = "none";
        } else if (imgSrc == allImages[allImages.length-1].src) {
            nextButton.style.display = "none";
        }
        //...THERE IS A BUG.
    }
     goToPrev(event) {
        document.getElementById("image-next").style.display = "block";

        let allImages = document.querySelectorAll("img.thumbnail");
        let currentImage = document.querySelector(".image-fullscreen img");
       
        for (var i = 0; i < allImages.length; i++) {
            if (allImages[i].src == currentImage.src) {
                if (i-1 < 1) {
                    event.currentTarget.style.display = "none";
                }
                currentImage.src = allImages[i-1].src;
                console.log(i);
            }
        }
    }

    goToNext(event) {
        document.getElementById("image-prev").style.display = "block";

        let allImages = document.querySelectorAll("img.thumbnail");
        let currentImage = document.querySelector(".image-fullscreen img");

        for (var i = 0; i < allImages.length; i++) {
            if (allImages[i].src == currentImage.src) {
                if (i+1 > allImages.length-1) {
                    event.currentTarget.style.display = "none";
                }
                currentImage.src = allImages[i+1].src;
                console.log(i);
                break;
            }
        }
    }

    closeView(event) {
        document.querySelector(".image-fullscreen").style.display = "none";
    }
}