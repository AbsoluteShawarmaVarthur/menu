const MENU = [
    {
        categoryId: "combo_offers",
        categoryName: "Combo Offers",
        addons: [
            { id: "high_protein", name: "Make it High Protein", price: 40 },
            { id: "jumbo", name: "Make it Jumbo", price: 30 },
            { id: "cheesy", name: "Make it Cheesy", price: 30 },
            { id: "tandoori", name: "Make it Tandoori", price: 20 },
            { id: "mexican", name: "Make it Mexican", price: 10 },
            { id: "spicy", name: "Make it Spicy", price: 10 },
            { id: "peri_peri", name: "Make it Peri Peri", price: 10 },
            { id: "blue", name: "Make it Blue", price: 10 },
        ],
        items: [
            { id: "shawarma_burger_mojito", name: "Arabian Chicken Shawarma + Chicken Patty Burger + Mint Mojito", price: 210 },
            { id: "shawarma_fries_mojito", name: "Arabian Chicken Shawarma + Fries + Mint Mojito", price: 200 },
            { id: "plate_mojito", name: "Arabian Plate Shawarma + Mint Mojito", price: 190 },
            { id: "veg_burger_mojito", name: "2x Veg Burger + Mint Mojito", price: 180 },
            { id: "veg_burger_mojito", name: "Veg Burger + Fries + Mint Mojito", price: 170 },
            { id: "aloo_tikki_mojito", name: "2x Aloo Tikki Burger + Mint Mojito", price: 160 },
        ],
    },

    {
        categoryId: "absolute_combo",
        categoryName: "Absolute Combo",
        addons: [
            { id: "meal", name: "Make it a Meal", price: 80 },
            { id: "cheesy", name: "Make it Cheesy", price: 30 },
        ],
        items: [
            { id: "sunday", name: "Sunday - Arabian Sandwich + Loaded Fries + Pulpy Grape", price: 250 },
            { id: "monday", name: "Monday - Mexican Sandwich + Chicken Fingers + Pulpy Grape", price: 240 },
            { id: "tuesday", name: "Tuesday - Spicy Sandwich + Chicken Nuggets + Pulpy Grape", price: 240 },
            { id: "wednesday", name: "Wednesday - Peri Peri Sandwich + Chicken Popcorn + Pulpy Grape", price: 230 },
            { id: "thursday", name: "Thursday - Tandoori Sandwich + Chicken Popcorn + Pulpy Grape", price: 240 },
            { id: "friday", name: "Friday - Tandoori Sandwich + Chicken Popcorn + Pulpy Grape", price: 240 },
            { id: "saturday", name: "Saturday - Mexican Sandwich + Loaded Fries + Pulpy Grape", price: 250 },
        ],
    },
    
    {
        categoryId: "chicken_shawarma_rolls",
        categoryName: "Chicken Shawarma Rolls",
        addons: [
            { id: "meal", name: "Make it a Meal", price: 80 },
            { id: "high_protein", name: "Make it High Protein", price: 40 },
            { id: "jumbo", name: "Make it Jumbo", price: 30 },
            { id: "cheesy", name: "Make it Cheesy", price: 30 },
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
            { id: "meal", name: "Make it a Meal", price: 80 },
            { id: "jumbo", name: "Make it Jumbo", price: 30 },
            { id: "cheesy", name: "Make it Cheesy", price: 30 },
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
            { id: "high_protein", name: "Make it High Protein", price: 80 },
            { id: "cheesy", name: "Make it Cheesy", price: 30 },
            { id: "rumali", name: "Make it Rumali", price: 20 },
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
            { id: "meal", name: "Make it a Meal", price: 80 },
            { id: "cheesy", name: "Make it Cheesy", price: 30 },
        ],
        items: [
            { id: "fiery", name: "Fiery", price: 140 },
            { id: "firangi", name: "Firangi", price: 130 },
            { id: "smoky", name: "Smoky", price: 120 },
        ],
    },

    {
        categoryId: "chicken_shawarma_sandwich",
        categoryName: "Chicken Shawarma Sandwich",
        addons: [
            { id: "meal", name: "Make it a Meal", price: 80 },
            { id: "cheesy", name: "Make it Cheesy", price: 30 },
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
