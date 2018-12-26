document.addEventListener("DOMContentLoaded", function 	() {
	var header = document.querySelector("header");

	window.onscroll = function () {
		scrollFunction();
	}

	function scrollFunction() {
		var topButton = document.getElementById("back-to-top");
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			topButton.style.bottom = "20px";
			topButton.style.width = "45px";
			topButton.style.height = "45px";
			topButton.style.fontSize = "18px";
			if (document.body.clientWidth < 768) {
				header.style.position = "fixed";
				header.style.marginTop = "0px";
				header.style.paddingTop = "25px";
				// header.style.top="-5px";
			}
		} else {
			topButton.style.bottom = "-100px";
			topButton.style.width = "0px";
			topButton.style.height = "0px";
			topButton.style.fontSize = "0px";
			if (document.body.clientWidth < 768) {
				header.style.position = "relative";
				header.style.marginTop = "";
				header.style.paddingTop = "";
			}
		}
	}

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	// --- start of mobile specific script ---

	var mobileMenu = document.querySelector(".mobile #main");
	var mobileLoyalMenu = document.querySelector(".mobile #loyal-menu")
	var mobileProductsMenu = document.querySelector(".mobile #products-menu")

	mobileMenu.style.right = "-800px";
	mobileLoyalMenu.style.right = "-800px";
	mobileProductsMenu.style.right = "-800px";

	mobileProductsMenu.style.zIndex = "20";
	mobileLoyalMenu.style.zIndex = "20";

	document.getElementById("hamburger").addEventListener("click", function (e) {
		var header = document.querySelector("header");
		mobileMenu.style.display = "block";
		if (mobileMenu.style.right == "-800px") {
			mobileMenu.style.right = "0";
			document.body.classList.add("no-scroll");
			e.currentTarget.classList.add("opened");
		} else {
			mobileMenu.style.right = "-800px";
			// doesnt work:
			e.currentTarget.classList.remove("opened");
			document.body.classList.remove("no-scroll");
		}
	});

	document.getElementById("loyal-mobile").addEventListener("click", function () {
		var backBtn = mobileLoyalMenu.querySelector("#back-to-main");
		backBtn.addEventListener("click", function () {
			mobileLoyalMenu.style.zIndex = "20";
			mobileLoyalMenu.style.right = "-800px";
			mobileMenu.style.right = "0";
		});
		if (mobileLoyalMenu.style.right == "-800px") {
			mobileLoyalMenu.style.right = "0";
			mobileMenu.style.right = "800px";
		} else {
			mobileLoyalMenu.style.right = "-800px";
			mobileMenu.style.right = "0";
		}

	});

	document.getElementById("products-mobile").addEventListener("click", function () {
		console.log("click");
		var backBtn = mobileProductsMenu.querySelector("#back-to-main");
		backBtn.addEventListener("click", function () {
			mobileProductsMenu.style.right = "-800px";
			mobileMenu.style.right = "0";
		});
		if (mobileProductsMenu.style.right == "-800px") {
			mobileProductsMenu.style.right = "0";
			mobileMenu.style.right = "800px";
		} else {
			mobileProductsMenu.style.right = "-800px";
			mobileMenu.style.right = "0";
		}
	});

	document.querySelectorAll(".mobile .menu-item a[_href]").forEach(function (menuItem) {
		let ham = document.querySelector("#hamburger");
		menuItem.addEventListener("click", function () {
			mobileMenu.style.right = "-800px";
			ham.classList.remove('opened');
		});
	});
	// --- end of mobile specific script ---

	//scroll to top of page when opening a new link
	var allLinks = document.querySelectorAll("a[_href]");
	allLinks.forEach(function (innerLink) {
		innerLink.addEventListener("click", function () {
			scrollFunction();
		});
	});

	// hide menu on click of one of the links inside
	var dropdownLinks = document.querySelectorAll(".dropdown");
	dropdownLinks.forEach(function (dropdown) {
		dropdown.addEventListener("mouseover", function () {
			dropdown.querySelector(".mega-menu").style.visibility = "visible";
			dropdown.querySelector(".mega-menu").style.opacity = "1";
		});
		dropdown.addEventListener("mouseout", function () {
			dropdown.querySelector(".mega-menu").style.visibility = "hidden";
			dropdown.querySelector(".mega-menu").style.opacity = "0";
		});
	});

	var megaMenuLinks = document.querySelectorAll(".mega-menu a[_href]");
	megaMenuLinks.forEach(function (link) {
		link.addEventListener("click", function () {
			document.querySelectorAll(".mega-menu").forEach(function (menu) {
				menu.style.visibility = "hidden";
			});
		});
	});

	//Search option - questionable
	// document.querySelector(".glyphicon-search").addEventListener("click", function () {
	// 	var searchBox = document.querySelector("#search-box");
	// 	searchBox.style.display = "block";//TODO : Hide when clicked elsewhere
	// 	searchBox.style.width = "150px";
	// });
})