const MENU = [
    {
        categoryId: "chicken_shawarma_rolls",
        categoryName: "Chicken Shawarma Rolls",
        addons: [
            { id: "high_protein", name: "Make it High Protein", price: 40 },
            { id: "jumbo", name: "Make it Jumbo", price: 30 },
            { id: "cheesy", name: "Make it Cheesy", price: 30 },
            { id: "meal", name: "Make it a Meal", price: 80 },
        ],
        items: [
            { id: "tandoori", name: "Tandoori", price: 120 },
            { id: "peri_peri", name: "Peri Peri", price: 110 },
            { id: "new_spicy", name: "New Spicy", price: 100 },
            { id: "mexican", name: "Mexican", price: 90 },
            { id: "arabian", name: "Arabian", price: 90 },
        ],
    },

    {
        categoryId: "paneer_shawarma_rolls",
        categoryName: "Paneer Shawarma Rolls",
        addons: [
            { id: "jumbo", name: "Make it Jumbo", price: 30 },
            { id: "cheesy", name: "Make it Cheesy", price: 30 },
            { id: "meal", name: "Make it a Meal", price: 80 },
        ],
        items: [
            { id: "tandoori", name: "Tandoori", price: 110 },
            { id: "peri_peri", name: "Peri Peri", price: 100 },
            { id: "bbq", name: "BBQ", price: 100 },
            { id: "mexican", name: "Mexican", price: 90 },
        ],
    },

    {
        categoryId: "plate_shawarma_fries",
        categoryName: "Plate Shawarma with Fries",
        addons: [
            { id: "rumali", name: "Make it Rumali", price: 20 },
            { id: "high_protein", name: "Make it High Protein", price: 80 },
            { id: "cheesy", name: "Make it Cheesy", price: 30 },
        ],
        items: [
            { id: "tandoori", name: "Tandoori", price: 200 },
            { id: "peri_peri", name: "Peri Peri", price: 190 },
            { id: "new_spicy", name: "New Spicy", price: 180 },
            { id: "mexican", name: "Mexican", price: 170 },
            { id: "arabian", name: "Arabian", price: 170 },
        ],
    },

    {
        categoryId: "fusion_shawarma",
        categoryName: "Fusion Shawarma",
        addons: [
            { id: "cheesy", name: "Make it Cheesy", price: 30 },
            { id: "meal", name: "Make it a Meal", price: 80 },
        ],
        items: [
            { id: "fiery", name: "Fiery", price: 140 },
            { id: "firangi", name: "Firangi", price: 130 },
            { id: "smoky", name: "Smoky", price: 120 },
        ],
    },

    {
        categoryId: "burger",
        categoryName: "Burger",
        addons: [
            { id: "meal", name: "Make it a Meal", price: 80 },
            { id: "cheesy", name: "Make it Cheesy", price: 30 },
        ],
        items: [
            { id: "chicken_burger", name: "Chicken Burger", price: 90 },
            { id: "veg_burger", name: "Veg Burger", price: 80 },
            { id: "aloo_tikki_burger", name: "Aloo Tikki Burger", price: 70 },
        ],
    },

    {
        categoryId: "starters",
        categoryName: "Starters",
        items: [
            { id: "chicken_fingers", name: "Chicken Fingers", price: 130 },
            { id: "chicken_nuggets", name: "Chicken Nuggets", price: 120 },
            { id: "chicken_popcorn", name: "Chicken Popcorn", price: 100 },
        ],
    },

    {
        categoryId: "french_fries",
        categoryName: "French Fries",
        items: [
            { id: "chicken_loaded", name: "Chicken Loaded", price: 150 },
            { id: "peri_peri", name: "Peri Peri", price: 100 },
            { id: "salted", name: "Salted", price: 90 },
        ],
    },

    {
        categoryId: "beverages",
        categoryName: "Beverages",
        items: [
            { id: "blue_curacao", name: "Blue Curacao", price: 60 },
            { id: "mint_mojito", name: "Mint Mojito", price: 50 },
            { id: "pulpy_grape", name: "Pulpy Grape", price: 40 },
            { id: "cold_drink", name: "Cold Drink", price: 20 },
        ],
    },

    {
        categoryId: "extras",
        categoryName: "Extras",
        items: [
            { id: "mayo_dip", name: "Mayonnaise Dip", price: 30 },
            { id: "rumali", name: "Rumali", price: 15 },
            { id: "khuboos", name: "Khuboos", price: 10 },
        ],
    },
];
