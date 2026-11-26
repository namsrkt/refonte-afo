type Article = {
    key : "uiTrends" | "websiteEssential" | "facebookCreations";
    date : string;
    image : string;
};

export const articles : Article[] = [
    {
        key: "uiTrends",
        date: "14 mai 2026",
        image: "/images/Blog/ui-trend.png"
    },
    {
        key: "websiteEssential",
        date: "14 mai 2026",
        image: "/images/Blog/webste-essential.png"
    },
    {
        key: "facebookCreations",
        date: "14 mai 2026",
        image: "/images/Blog/facebook-creations.png"
    }
];