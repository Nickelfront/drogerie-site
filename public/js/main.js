		var mobileMenu = document.querySelector(".mobile #main");
		console.log(mobileMenu.style);
		window.onscroll = function() {
			scrollFunction();
		}

		function scrollFunction() {
		    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		        document.getElementById("back-to-top").style.bottom = "20px";
   		        document.getElementById("back-to-top").style.width = "45px";
   		        document.getElementById("back-to-top").style.height = "45px";
   		        document.getElementById("back-to-top").style.fontSize = "18px";
   		        if (document.body.clientWidth < 768) {
					document.querySelector("header").style.position = "fixed";
				}
		    } else {
		        document.getElementById("back-to-top").style.bottom = "-100px";
		        document.getElementById("back-to-top").style.width = "0px";
   		        document.getElementById("back-to-top").style.height = "0px";
   		        document.getElementById("back-to-top").style.fontSize = "0px";
   		        if (document.body.clientWidth < 768) {
					document.querySelector("header").style.position = "relative";
				}
		    }
		}

		// When the user clicks on the button, scroll to the top of the document
		function topFunction() {
		    document.body.scrollTop = 0;
		    document.documentElement.scrollTop = 0;
		}

		document.getElementById("hamburger").addEventListener("click", function () {
			console.log("click");
			var header = document.querySelector("header");
			console.log(mobileMenu.style.right);
			console.log(mobileMenu.style.display);
			mobileMenu.style.display = "block";
			if (mobileMenu.style.right == "-800px") {
				// mobileMenu.style.display = "block";
				mobileMenu.style.right = "0";
				document.body.classList.add("no-scroll");
			} else {
				// mobileMenu.style.display = "none";
				mobileMenu.style.right = "-800px"
				document.body.classList.remove("no-scroll");
			}
		});

		document.querySelector(".mobile #loyal").addEventListener("click", function () {
			console.log("click");
			var menu = document.querySelector("#loyal-menu");
			if (menu.style.right == "-800px"){
				menu.style.right = "0";
				console.log("-800px");
				mobileMenu.style.right = "800px";
			} else {
				console.log(menu.style.right);
				menu.style.right = "-800px";
				mobileMenu.style.right = "0";
			}
		});

		document.querySelectorAll(".mobile .menu-item a[_href]").forEach(function (menuItem) {
			menuItem.addEventListener("click", function () {
				mobileMenu.style.right = "-800px";
			});
		});

		var allLinks = document.querySelectorAll("a[_href]");
		allLinks.forEach(function (innerLink) {
			innerLink.addEventListener("click", function () {
				scrollFunction();
			});
		});

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

		document.querySelector(".glyphicon-search").addEventListener("click", function () {
			var searchBox = document.querySelector("#search-box");
			searchBox.style.display = "block";//TODO : Hide when clicked elsewhere
			searchBox.style.width = "150px";
		});