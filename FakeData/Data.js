// ((list price - actual price) / (list price)) * 100%

const products = [
    {
        title: 'Seeds of Change Organic Quinoa, Brown',
        id: '3689346394',
        reviews: 32,
        price: 52,
        offerPrice: 38,
        description:
            '26% Off $52 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.',
        'size/weight': ['50g', '60g', '80g', '100g', '150g'],
        stock: 20,
        details:
            'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
        tags: 'snackorganicbrownnestfood',
        onSale: false,
        images: [
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596470/MBeCommerece/Products/product-1-1_cnyywq.jpg',
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596230/MBeCommerece/Products/SeedsQuinoe_xyrj8z.jpg',
        ],
        vendorId: 243243443,
        featured: ['popular', 'bestSell', 'dealOfTheDay'],
        category: 'Hodo Foods',
    },
    {
        title: 'All Natural Italian-Style Chicken Meatballs',
        id: '3689346454',
        reviews: 25,
        price: 55,
        offerPrice: 52,
        description:
            ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.',
        'size/weight': ['50g', '60g', '80g', '100g', '150g'],
        stock: 29,
        details:
            'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
        tags: 'snackorganicbrownnaturalfoodmeatballsstouffer',
        onSale: true,
        images: [
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596470/MBeCommerece/Products/product-2-1_aegj5m.jpg',
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596231/MBeCommerece/Products/AllNaturalItalianStyleChickenMeatballs_rrfivk.jpg',
        ],
        vendorId: 243243444,
        featured: ['popular'],
        category: 'snack',
    },
    {
        title: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
        id: '3689346454',
        reviews: 36,
        price: 52,
        offerPrice: 48.85,
        description:
            ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.',
        'size/weight': ['50g', '60g', '80g', '100g', '150g'],
        stock: 29,
        details:
            'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
        tags: "snackangie'sboomchickapopsweetandsaltykettlecornstarki",
        onSale: false,
        images: [
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596470/MBeCommerece/Products/product-3-1_ie0nwk.jpg',
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596231/MBeCommerece/Products/Angie_sBoomchickapop_esi0om.jpg',
        ],
        vendorId: 243243445,
        featured: ['popular', 'dealOfTheDay'],
        category: 'snack',
    },
    {
        title: 'Foster Farms Takeout Crispy Classic Buffalo Wings',
        id: '36893469347',
        reviews: 50,
        price: 19,
        offerPrice: 17.85,
        description:
            ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.',
        'size/weight': ['50g', '60g', '80g', '100g', '150g'],
        stock: 29,
        details:
            'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
        tags: 'snackfosterfarmstakeoutcrispyclassicbuffalowingsnestfood',
        onSale: false,
        images: [
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596470/MBeCommerece/Products/product-4-1_lxym5j.jpg',
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596231/MBeCommerece/Products/FosterFarmsTakeout_irt4ap.jpg',
        ],
        vendorId: 243243443,
        featured: ['popular'],
        category: 'snack',
    },
    {
        title: 'Blue Diamond Almonds Lightly Salted Vegetables',
        id: '36893469234',
        reviews: 19,
        price: 25,
        offerPrice: 23.85,
        description:
            ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.',
        'size/weight': ['50g', '60g', '80g', '100g', '150g'],
        stock: 50,
        details:
            'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
        tags: 'vegetablesbluediamonalmondssaltednestfood',
        onSale: false,
        images: [
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596470/MBeCommerece/Products/product-5-1_ieidxl.jpg',
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596230/MBeCommerece/Products/BlueDiamondAlmonds_hjmvq2.jpg',
        ],
        vendorId: 243243443,
        featured: ['popular'],
        category: 'vegetables',
    },
    {
        title: 'Chobani Complete Vanilla Greek Yougurt',
        id: '36893469264',
        reviews: 12,
        price: 55.8,
        offerPrice: 54.85,
        description:
            ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.',
        'size/weight': ['50g', '60g', '80g', '100g', '150g'],
        stock: 14,
        details:
            'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
        tags: 'hodofoodschobanicompletevanillagreekyougurtnestfood',
        onSale: false,
        images: [
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596469/MBeCommerece/Products/product-6-1_e2rpqk.jpg',
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596230/MBeCommerece/Products/ChobaniVanillaGreek_b1vrk2.jpg',
        ],
        vendorId: 243243443,
        featured: ['popular', 'dealOfTheDay'],
        category: 'Hodo Foods',
    },
    {
        title: 'Canada Dry Ginger Ale -2L Bootle 200ml-400g',
        id: '36893464544',
        reviews: 18,
        price: 33.8,
        offerPrice: 30.99,
        description:
            ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.',
        'size/weight': ['50g', '60g', '80g', '100g', '150g'],
        stock: 10,
        details:
            'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
        tags: 'dairyproductcanadadrygingerale200ml400gnestfood',
        onSale: false,
        images: [
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596469/MBeCommerece/Products/product-7-1_k14yrq.jpg',
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596230/MBeCommerece/Products/CanadaDryGinger_bibjut.jpg',
        ],
        vendorId: 243243443,
        featured: ['popular'],
        category: 'Dairy Product',
    },
    {
        title: 'Encore Seafoods Stuffed Alaskan Salmon',
        id: '36893464544',
        reviews: 5,
        price: 37.8,
        offerPrice: 35.99,
        description:
            ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.',
        'size/weight': ['50g', '60g', '80g', '100g', '150g'],
        stock: 17,
        details:
            'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
        tags: 'oilencoreseafoodsstuffedalaskansalmonnestfood',
        onSale: false,
        images: [
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596469/MBeCommerece/Products/product-8-1_awxrgi.jpg',
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596230/MBeCommerece/Products/EncoreSeafoods_hlgbkg.jpg',
        ],
        vendorId: 243243443,
        featured: ['popular', 'dealOfTheDay'],
        category: 'Oil',
    },
    {
        title: "Gorton's Beer Battered Fish Fillets with Soft paper",
        id: '368934644544',
        reviews: 20,
        price: 30.8,
        offerPrice: 25.99,
        description:
            ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.',
        'size/weight': ['50g', '60g', '80g', '100g', '150g'],
        stock: 7,
        details:
            'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
        tags: 'cafecoffeesgorttonsbeerbatteredfishfilletswithsoftpaperoldelpaso',
        onSale: true,
        images: [
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596469/MBeCommerece/Products/product-9-1_kzvwml.jpg',
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596230/MBeCommerece/Products/GortonsBeer_f2awp6.jpg',
        ],
        vendorId: 243243446,
        featured: ['popular'],
        category: 'Coffees',
    },
    {
        title: 'All Natural Italian-Style Chicken Meatballs',
        id: '3689346654',
        reviews: 25,
        price: 55,
        offerPrice: 52,
        description:
            ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.',
        'size/weight': ['50g', '60g', '80g', '100g', '150g'],
        stock: 29,
        details:
            'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
        tags: 'snackorganicbrownnaturalfoodmeatballsstouffer',
        onSale: true,
        images: [
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596470/MBeCommerece/Products/product-2-1_aegj5m.jpg',
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596231/MBeCommerece/Products/AllNaturalItalianStyleChickenMeatballs_rrfivk.jpg',
        ],
        vendorId: 243243444,
        featured: [''],
        category: 'snack',
    },
    {
        title: 'Foster Farms Takeout Crispy Classic Buffalo Wings',
        id: '368937549347',
        reviews: 50,
        price: 19,
        offerPrice: 17.85,
        description:
            ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.',
        'size/weight': ['50g', '60g', '80g', '100g', '150g'],
        stock: 29,
        details:
            'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
        tags: 'snackfosterfarmstakeoutcrispyclassicbuffalowingsnestfood',
        onSale: false,
        images: [
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596470/MBeCommerece/Products/product-4-1_lxym5j.jpg',
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596231/MBeCommerece/Products/FosterFarmsTakeout_irt4ap.jpg',
        ],
        vendorId: 243243443,
        featured: [''],
        category: 'snack',
    },
    {
        title: 'Chobani Complete Vanilla Greek Yougurt',
        id: '3689454569264',
        reviews: 12,
        price: 55.8,
        offerPrice: 54.85,
        description:
            ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.',
        'size/weight': ['50g', '60g', '80g', '100g', '150g'],
        stock: 14,
        details:
            'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
        tags: 'hodofoodschobanicompletevanillagreekyougurtnestfood',
        onSale: false,
        images: [
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596469/MBeCommerece/Products/product-6-1_e2rpqk.jpg',
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596230/MBeCommerece/Products/ChobaniVanillaGreek_b1vrk2.jpg',
        ],
        vendorId: 243243443,
        featured: ['bestSell'],
        category: 'Hodo Foods',
    },
    {
        title: 'Seeds of Change Organic Quinoa, Brown',
        id: '368945444394',
        reviews: 32,
        price: 52,
        offerPrice: 38,
        description:
            '26% Off $52 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.',
        'size/weight': ['50g', '60g', '80g', '100g', '150g'],
        stock: 20,
        details:
            'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
        tags: 'snackorganicbrownnestfood',
        onSale: false,
        images: [
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596470/MBeCommerece/Products/product-1-1_cnyywq.jpg',
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596230/MBeCommerece/Products/SeedsQuinoe_xyrj8z.jpg',
        ],
        vendorId: 243243443,
        featured: ['bestSell'],
        category: 'Hodo Foods',
    },
    {
        title: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
        id: '4354346454',
        reviews: 36,
        price: 52,
        offerPrice: 48.85,
        description:
            ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.',
        'size/weight': ['50g', '60g', '80g', '100g', '150g'],
        stock: 29,
        details:
            'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
        tags: "snackangie'sboomchickapopsweetandsaltykettlecornstarki",
        onSale: false,
        images: [
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596470/MBeCommerece/Products/product-3-1_ie0nwk.jpg',
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596231/MBeCommerece/Products/Angie_sBoomchickapop_esi0om.jpg',
        ],
        vendorId: 243243445,
        featured: ['bestSell'],
        category: 'snack',
    },

    {
        title: 'Canada Dry Ginger Ale -2L Bootle 200ml-400g',
        id: '38343034ff64544',
        reviews: 18,
        price: 33.8,
        offerPrice: 30.99,
        description:
            ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.',
        'size/weight': ['50g', '60g', '80g', '100g', '150g'],
        stock: 10,
        details:
            'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
        tags: 'dairyproductcanadadrygingerale200ml400gnestfood',
        onSale: false,
        images: [
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596469/MBeCommerece/Products/product-7-1_k14yrq.jpg',
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596230/MBeCommerece/Products/CanadaDryGinger_bibjut.jpg',
        ],
        vendorId: 243243443,
        featured: ['bestSell'],
        category: 'Dairy Product',
    },
    {
        title: 'Fully Fresh Carrots, Original Carrot pure organic',
        id: '38343034ff64544',
        reviews: 33,
        price: 33.8,
        offerPrice: 30.99,
        description:
            ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.',
        'size/weight': ['50g', '60g', '80g', '100g', '150g'],
        stock: 10,
        details:
            'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
        tags: 'dairyproductcanadadrygingerale200ml400gnestfood',
        onSale: false,
        images: [
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596670/MBeCommerece/Products/thumbnail-1_j8twtg.jpg',
        ],
        vendorId: 243243443,
        featured: ['bestSell'],
        category: 'Dairy Product',
    },
    {
        title: 'Capsicum, ref pepper or chilli pepper fully fresh',
        id: '38343034ht64544',
        reviews: 33,
        price: 43.8,
        offerPrice: 35.99,
        description:
            ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi.',
        'size/weight': ['50g', '60g', '80g', '100g', '150g'],
        stock: 10,
        details:
            'Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart. Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.',
        tags: 'dairyproductcanadadrygingerale200ml400gnestfood',
        onSale: false,
        images: [
            'https://res.cloudinary.com/doircnueq/image/upload/v1635596670/MBeCommerece/Products/thumbnail-2_bvefyq.jpg',
        ],
        vendorId: 243243443,
        featured: ['bestSell'],
        category: 'Dairy Product',
    },
];

export default products;
