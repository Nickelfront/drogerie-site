let routes = [
    {
        path: "",
        func: "HomeComponent"
    },
    {
        path: "shops",
        func: "ShopComponent"
    },
    {
        path: "contacts",
        func: "ContactComponent"
    },
    {
        path: "blog",
        func: "BlogAppComponent@list"
    },
    {
        path: "blog/{id}",
        func: "BlogAppComponent@single"
    },
    {
        path: "products/{category}",
        func: "ProductsAppComponent@list"
    },
    {
        path: "products/{category}/{id}",
        func: "ProductsAppComponent@single"
    },
    {
        path: "about-us",
        func: "AboutComponent"
    },
    {
        path: "gallery",
        func: "GalleryComponent"
    },
    {
        path: "loyal-register",
        func: "RegisterComponent"
    },
    {
        path: "privacy-policy",
        func: "PrivacyComponent"
    },
    {
        path: "terms-and-conditions",
        func: "TermsComponent"
    },
    {
        path: "faq",
        func: "FAQComponent"
    },
    {
        path: "loyal-conditions",
        func: "LoyalConditionsComponent"
    },
    {
        path: "mb-conditions",
        func: "MBConditionsComponent"
    },
    {
        path: "careers",
        func: "CareersComponent"
    },
    {
        path: "gift-card",
        func: "GiftCardComponent"
    },
    {
        path: "not-found",
        func: "NotFoundComponent"
    }
];

export default routes;