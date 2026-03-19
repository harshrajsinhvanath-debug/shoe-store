/* =============================
   ALL PRODUCTS DATA
   id 1-8   = index.html products
   id 101-109 = Products.html New Arrivals
   id 201-209 = Products.html Bestsellers
============================== */
const products = [

    // ── index.html products ──
    {
        id: 1,
        name: "Zoom Pegasus",
        price: "₹1500",
        img: "images/runing product1.jpg",
        category: "Running",
        description: "The Zoom Pegasus is built for everyday runners who want responsive cushioning and a smooth ride. Engineered with Nike React foam and a Zoom Air unit, it delivers comfort and energy return mile after mile."
    },
    {
        id: 2,
        name: "React Infinity",
        price: "₹1900",
        img: "images/product2.jpg",
        category: "Running",
        description: "Nike React Infinity Run is designed to help reduce injury and keep you on the run. More foam and a rocker-shaped sole work together to help keep you moving naturally."
    },
    {
        id: 3,
        name: "Revolution 6",
        price: "₹1700",
        img: "images/product3.jpg",
        category: "Running",
        description: "The Revolution 6 delivers lightweight, breathable comfort for everyday runs. A foam midsole provides soft, cushioned feel while the rubber outsole gives you reliable traction on any surface."
    },
    {
        id: 4,
        name: "Zoom Fly 5",
        price: "₹1400",
        img: "images/product4.jpg",
        category: "Racing",
        description: "The Zoom Fly 5 is built for speed. A carbon fibre plate provides stiffness and propulsion, while the thick stack of ZoomX foam gives you incredible energy return and cushioning for race day."
    },
    {
        id: 5,
        name: "Air Max Pro",
        price: "₹1100",
        img: "images/product5.jpg",
        category: "Lifestyle",
        description: "The Air Max Pro combines iconic style with modern comfort. Visible Air cushioning in the heel absorbs impact and adds a bold design element, making it perfect for everyday wear."
    },
    {
        id: 6,
        name: "Ultra Boost X",
        price: "₹1600",
        img: "images/product6.jpg",
        category: "Running",
        description: "Ultra Boost X features a Primeknit upper that adapts to your foot as you run. The Boost midsole returns energy with every stride, and the Stretchweb outsole flexes naturally for superior ground contact."
    },
    {
        id: 7,
        name: "Speed Runner",
        price: "₹6500",
        img: "images/product7.jpg",
        category: "Performance",
        description: "The Speed Runner is engineered for athletes who demand the best. Lightweight materials and a precision fit deliver maximum speed and agility, whether on the track or the road."
    },
    {
        id: 8,
        name: "Elite Trainer",
        price: "₹1300",
        img: "images/product8.jpg",
        category: "Training",
        description: "The Elite Trainer is designed for gym sessions and cross-training workouts. A stable base and durable outsole give you the support you need for weightlifting and lateral movements."
    },

    // ── Products.html New Arrivals ──
    {
        id: 101,
        name: "Air Max Pulse",
        price: "₹4,999",
        img: "images/runing product1.jpg",
        category: "New Arrival",
        description: "The Air Max Pulse brings bold energy to the streets. Inspired by the London music scene, it features a textile upper with ribbed details and a visible Air unit for all-day comfort."
    },
    {
        id: 102,
        name: "Retro Runner",
        price: "₹3,499",
        img: "images/product2.jpg",
        category: "New Arrival",
        description: "The Retro Runner blends vintage running aesthetics with modern performance. Its classic silhouette and updated cushioning make it perfect for both the track and the street."
    },
    {
        id: 103,
        name: "Jordan Street",
        price: "₹6,999",
        img: "images/product3.jpg",
        category: "New Arrival",
        description: "Jordan Street brings court heritage to everyday style. Premium leather upper, iconic Jumpman branding, and Air cushioning deliver the perfect combination of looks and comfort."
    },
    {
        id: 104,
        name: "Air Zoom Elite",
        price: "₹5,999",
        img: "images/product4.jpg",
        category: "New Arrival",
        description: "The Air Zoom Elite is engineered for serious runners. A full-length Zoom Air unit and lightweight mesh upper work together to help you run faster for longer."
    },
    {
        id: 105,
        name: "Air Flex Pro",
        price: "₹4,499",
        img: "images/product5.jpg",
        category: "New Arrival",
        description: "Air Flex Pro adapts to every movement with a flexible outsole and breathable upper. Designed for versatile training, it moves with you whether you're running, jumping, or lifting."
    },
    {
        id: 106,
        name: "Street Classic",
        price: "₹4,499",
        img: "images/product6.jpg",
        category: "New Arrival",
        description: "Street Classic keeps it simple and iconic. Clean lines, a durable leather upper, and a timeless low-top silhouette make it the perfect everyday sneaker."
    },
    {
        id: 107,
        name: "Ultra Speed",
        price: "₹4,999",
        img: "images/product7.jpg",
        category: "New Arrival",
        description: "Ultra Speed is built for those who refuse to slow down. A streamlined design, responsive midsole, and snug fit provide maximum performance at every pace."
    },
    {
        id: 108,
        name: "Max Trainer",
        price: "₹5,999",
        img: "images/product8.jpg",
        category: "New Arrival",
        description: "Max Trainer delivers gym-ready performance with street-ready style. Multi-directional outsole lugs provide grip on any surface, while plush cushioning keeps you comfortable all day."
    },
    {
        id: 109,
        name: "Lite Runner",
        price: "₹2,999",
        img: "images/product9.jpg",
        category: "New Arrival",
        description: "Lite Runner is your everyday essential. A featherlight design and breathable mesh upper keep you cool and comfortable, whether you're running errands or logging easy miles."
    },

    // ── Products.html Bestsellers ──
    {
        id: 201,
        name: "React Infinity",
        price: "₹1,900",
        img: "images/product2.jpg",
        category: "Bestseller",
        description: "Nike React Infinity Run is designed to help reduce injury and keep you on the run. More foam and a rocker-shaped sole work together to help keep you moving naturally."
    },
    {
        id: 202,
        name: "Zoom Fly 5",
        price: "₹1,400",
        img: "images/product4.jpg",
        category: "Bestseller",
        description: "The Zoom Fly 5 is built for speed. A carbon fibre plate provides stiffness and propulsion, while the thick stack of ZoomX foam gives you incredible energy return and cushioning for race day."
    },
    {
        id: 203,
        name: "Jordan Street",
        price: "₹6,999",
        img: "images/product3.jpg",
        category: "Bestseller",
        description: "Jordan Street brings court heritage to everyday style. Premium leather upper, iconic Jumpman branding, and Air cushioning deliver the perfect combination of looks and comfort."
    },
    {
        id: 204,
        name: "Street Classic",
        price: "₹4,499",
        img: "images/product6.jpg",
        category: "Bestseller",
        description: "Street Classic keeps it simple and iconic. Clean lines, a durable leather upper, and a timeless low-top silhouette make it the perfect everyday sneaker."
    },
    {
        id: 205,
        name: "Zoom Pegasus",
        price: "₹1,500",
        img: "images/runing product1.jpg",
        category: "Bestseller",
        description: "The Zoom Pegasus is built for everyday runners who want responsive cushioning and a smooth ride. Engineered with Nike React foam and a Zoom Air unit, it delivers comfort and energy return mile after mile."
    },
    {
        id: 206,
        name: "Elite Trainer",
        price: "₹1,300",
        img: "images/product8.jpg",
        category: "Bestseller",
        description: "The Elite Trainer is designed for gym sessions and cross-training workouts. A stable base and durable outsole give you the support you need for weightlifting and lateral movements."
    },
    {
        id: 207,
        name: "Ultra Boost X",
        price: "₹1,600",
        img: "images/product7.jpg",
        category: "Bestseller",
        description: "Ultra Boost X features a Primeknit upper that adapts to your foot as you run. The Boost midsole returns energy with every stride, and the Stretchweb outsole flexes naturally for superior ground contact."
    },
    {
        id: 208,
        name: "Air Max Pro",
        price: "₹1,100",
        img: "images/product5.jpg",
        category: "Bestseller",
        description: "The Air Max Pro combines iconic style with modern comfort. Visible Air cushioning in the heel absorbs impact and adds a bold design element, making it perfect for everyday wear."
    },
    {
        id: 209,
        name: "Lite Runner",
        price: "₹2,999",
        img: "images/product9.jpg",
        category: "Bestseller",
        description: "Lite Runner is your everyday essential. A featherlight design and breathable mesh upper keep you cool and comfortable, whether you're running errands or logging easy miles."
    }
];

/* =============================
   DESCRIPTIONS FOR URL PARAM PRODUCTS
   (all other sections beyond arrivals & bestsellers)
============================== */
const descriptions = {
    // Running
    "Air Max Pulse":        "The Air Max Pulse brings bold energy to the streets. Inspired by the London music scene, it features a textile upper with ribbed details and a visible Air unit for all-day comfort.",
    "Retro Runner":         "The Retro Runner blends vintage running aesthetics with modern performance. Its classic silhouette and updated cushioning make it perfect for both the track and the street.",
    "Air Zoom Elite":       "The Air Zoom Elite is engineered for serious runners. A full-length Zoom Air unit and lightweight mesh upper work together to help you run faster for longer.",
    "Ultra Speed":          "Ultra Speed is built for those who refuse to slow down. A streamlined design, responsive midsole, and snug fit provide maximum performance at every pace.",
    "Revolution 6":         "The Revolution 6 delivers lightweight, breathable comfort for everyday runs. A foam midsole provides soft, cushioned feel while the rubber outsole gives reliable traction on any surface.",
    "Lite Runner":          "Lite Runner is your everyday essential. A featherlight design and breathable mesh upper keep you cool and comfortable, whether running errands or logging easy miles.",
    "React Infinity":       "Nike React Infinity Run is designed to help reduce injury and keep you on the run. More foam and a rocker-shaped sole work together to help keep you moving naturally.",
    "Zoom Fly 5":           "The Zoom Fly 5 is built for speed. A carbon fibre plate provides stiffness and propulsion, while the thick stack of ZoomX foam gives incredible energy return for race day.",
    "Zoom Pegasus":         "The Zoom Pegasus is built for everyday runners who want responsive cushioning and a smooth ride. Nike React foam and a Zoom Air unit deliver comfort and energy return mile after mile.",
    // Jordan / Basketball
    "Jordan Street":        "Jordan Street brings court heritage to everyday style. Premium leather upper, iconic Jumpman branding, and Air cushioning deliver the perfect combination of looks and comfort.",
    "Jordan Low":           "The Jordan Low keeps it sleek and streetwear-ready. A lower cut silhouette gives you more ankle freedom while the Air unit keeps you cushioned all day.",
    "Air Jordan 1":         "The shoe that started it all. The Air Jordan 1 is a cultural icon — premium leather, classic colourways, and Air cushioning that never goes out of style.",
    "Air Jordan 4":         "The Air Jordan 4 is legendary. Mesh panels for breathability, a visible Air unit, and lace locks combine to create one of basketball's most iconic silhouettes.",
    "Dunk Low Pro":         "The Dunk Low Pro takes a classic court design and gives it street credibility. Low profile, padded ankle collar, and bold colourways make it a modern essential.",
    "Jordan Classic":       "Jordan Classic is the timeless choice. Clean design, premium materials, and iconic Jumpman branding make it perfect for any occasion.",
    "Dunk Retro":           "The Dunk Retro brings back the golden era of basketball footwear. Original colourways and classic materials pay homage to the court legends.",
    "Court Legacy":         "Court Legacy strips it back to basics. A simple, clean low-top silhouette built for everyday wear with just enough heritage to turn heads.",
    "Jordan Trainer":       "Jordan Trainer is built for athletes who train like champions. Multi-directional traction and locked-down fit deliver performance in the gym and on the court.",
    "Dunk High":            "The Dunk High offers maximum ankle support with iconic high-top style. Premium leather panels and bold colourways make it a standout on any court.",
    // Air Max
    "Air Max Pro":          "The Air Max Pro combines iconic style with modern comfort. Visible Air cushioning absorbs impact and adds a bold design element, perfect for everyday wear.",
    "Street Classic":       "Street Classic keeps it simple and iconic. Clean lines, a durable leather upper, and a timeless low-top silhouette make it the perfect everyday sneaker.",
    // Training
    "Air Flex Pro":         "Air Flex Pro adapts to every movement with a flexible outsole and breathable upper. Designed for versatile training, it moves with you whether running, jumping, or lifting.",
    "Max Trainer":          "Max Trainer delivers gym-ready performance with street-ready style. Multi-directional outsole lugs provide grip on any surface while plush cushioning keeps you comfortable.",
    "Elite Trainer":        "The Elite Trainer is designed for gym sessions and cross-training workouts. A stable base and durable outsole give the support you need for weightlifting and lateral movements.",
    "Power Cross":          "Power Cross is built for intense cross-training. A wide base and lateral support straps keep your foot locked in during heavy lifts and explosive movements.",
    "Gym Pro":              "Gym Pro delivers all-day comfort for your hardest sessions. Cushioned midsole and breathable upper make it your go-to training partner.",
    "Speed Trainer":        "Speed Trainer is engineered for athletes who train at pace. Lightweight construction and responsive cushioning keep you quick on your feet.",
    "Flex Trainer":         "Flex Trainer moves with you through every rep. Its flexible outsole and snug fit make it ideal for dynamic training and functional fitness.",
    "Cross Fit Pro":        "Cross Fit Pro is purpose-built for CrossFit athletes. Rope-grip texture, firm heel, and flexible forefoot handle whatever the WOD throws at you.",
    "Agility Pro":          "Agility Pro is designed for quick direction changes and explosive movements. Lightweight upper and responsive midsole keep you one step ahead.",
    // Cricket
    "Cricket Pro Spike":    "Cricket Pro Spike delivers superior grip on the pitch. Precision spike placement and ankle support keep you performing at your best during long innings.",
    "Speed Grip":           "Speed Grip provides exceptional traction on all cricket surfaces. Lightweight design keeps you agile between the wickets.",
    "Turf Warrior":         "Turf Warrior is built for turf pitches. Rubber studs and a reinforced toe cap give you the edge in every match situation.",
    "Boundary Runner":      "Boundary Runner lets you cover the outfield with speed and confidence. Lightweight build and grip sole help you chase down every ball.",
    "Wicket Keeper":        "Wicket Keeper is designed for the demands of keeping. Lateral stability and a reinforced toe protect through hours behind the stumps.",
    "Pitch Master":         "Pitch Master offers all-round cricket performance. Versatile stud pattern works on hard, soft, and artificial surfaces.",
    "Elite Spike":          "Elite Spike is the choice of professional cricketers. Premium leather upper, precision spikes, and responsive cushioning for elite performance.",
    // Football
    "Predator Grip":        "Predator Grip gives you total ball control. Grip zones on the upper and a snug fit make it the weapon of choice for playmakers.",
    "Strike Pro":           "Strike Pro is built for powerful shooting. A reinforced strike zone and firm outsole deliver clean contact and maximum power.",
    "Turf King":            "Turf King dominates artificial surfaces. Rubber studded outsole and lightweight upper give you speed and control on every surface.",
    "Goal Getter":          "Goal Getter is designed for strikers who live in the box. A textured upper and tight fit give you precise control in front of goal.",
    "Velocity Boot":        "Velocity Boot is engineered for pace. Ultra-lightweight construction and a locked-down fit help you accelerate past defenders.",
    "Pitch Control":        "Pitch Control delivers precision touch and passing accuracy. Textured upper zones enhance ball feel for creative midfielders.",
    "Sprint Cleat":         "Sprint Cleat is built for explosive pace. Lightweight build and stud configuration optimise acceleration and top-end speed.",
    "Ultra Speed":          "Ultra Speed is built for those who refuse to slow down. A streamlined design, responsive midsole, and snug fit provide maximum performance at every pace.",
    // Clothing
    "Dri-Fit Tee":          "Dri-Fit Tee keeps you cool and dry during intense workouts. Moisture-wicking fabric pulls sweat away from your skin for all-day comfort.",
    "Sport Tee Pro":        "Sport Tee Pro is built for performance. Lightweight, stretchy fabric moves with you through every training session.",
    "Classic Fit Tee":      "Classic Fit Tee is your everyday essential. Soft cotton blend and relaxed fit make it perfect for training or casual wear.",
    "Training Tee":         "Training Tee is designed to keep up with your hardest sessions. Breathable mesh panels and moisture management keep you fresh.",
    "Graphic Tee":          "Graphic Tee lets you express your style. Bold print design on soft, comfortable fabric makes a statement on and off the field.",
    "Polo Tee":             "Polo Tee combines athletic performance with smart casual style. Breathable fabric and classic collar make it versatile for any occasion.",
    "Slim Fit Tee":         "Slim Fit Tee delivers a sharp, modern silhouette. Stretchy fabric hugs your body without restricting movement.",
    "Oversized Tee":        "Oversized Tee gives you that relaxed, streetwear look. Dropped shoulders and a loose fit make it the ultimate off-duty essential.",
    "Henley Tee":           "Henley Tee adds a premium touch to your wardrobe. Button-up neckline and soft fabric make it a refined choice for any occasion.",
    "Running Shorts":       "Running Shorts are built for speed. Lightweight fabric, built-in liner, and side splits give you full freedom of movement on every run.",
    "Gym Shorts":           "Gym Shorts are your training essential. Moisture-wicking fabric and an elastic waistband keep you comfortable through every set.",
    "Casual Shorts":        "Casual Shorts bring laid-back style to your everyday look. Soft fabric and a relaxed fit make them perfect for the weekend.",
    "Sport Shorts":         "Sport Shorts are built for action. Quick-dry fabric and a secure waistband keep up with your most intense training sessions.",
    "Training Shorts":      "Training Shorts deliver comfort and performance. Stretch fabric and side pockets keep you ready for any workout.",
    "Cargo Shorts":         "Cargo Shorts offer function and style. Multiple pockets and a durable fabric make them perfect for adventures on and off the pitch.",
    "Compression Shorts":   "Compression Shorts support your muscles during intense training. Targeted compression zones reduce fatigue and aid recovery.",
    "Beach Shorts":         "Beach Shorts are made for sun, sand, and surf. Quick-dry fabric and a relaxed fit make them your summer essential.",
    "Pro Shorts":           "Pro Shorts are the choice of elite athletes. Lightweight construction, locked-down waistband, and split hem give you race-ready performance.",
    "Wind Jacket":          "Wind Jacket shields you from the elements without weighing you down. Lightweight, packable, and perfect for unpredictable weather.",
    "Track Jacket":         "Track Jacket brings retro athletic style to modern wardrobes. Ribbed cuffs, zip front, and bold colourways make it a streetwear icon.",
    "Rain Jacket":          "Rain Jacket keeps you dry when the weather turns. Waterproof coating and sealed seams lock out the rain on every run.",
    "Puffer Jacket":        "Puffer Jacket delivers warmth without bulk. Lightweight insulation traps heat while the slim silhouette keeps you looking sharp.",
    "Fleece Jacket":        "Fleece Jacket is your go-to mid-layer. Soft fleece fabric and a full zip make it perfect for cool mornings and post-workout warmth.",
    "Denim Jacket":         "Denim Jacket is the ultimate casual essential. Classic cut and durable fabric make it a wardrobe staple for any season.",
    "Bomber Jacket":        "Bomber Jacket brings edge and attitude to any outfit. Ribbed collar, cuffs, and hem give it that iconic silhouette.",
    "Hoodie Jacket":        "Hoodie Jacket combines the comfort of a hoodie with the structure of a jacket. Perfect for layering through any season.",
    "Sport Jacket":         "Sport Jacket delivers athletic performance in a sleek package. Stretch fabric and a tailored fit keep you looking and feeling your best.",
    // Bags
    "Backpack Pro":         "Backpack Pro is built for athletes on the move. Padded straps, multiple compartments, and a ventilated back panel keep you organised and comfortable.",
    "Gym Duffel":           "Gym Duffel carries everything you need for your session. Wet/dry compartment, adjustable strap, and durable construction make it your perfect gym companion.",
    "Sling Bag":            "Sling Bag keeps your essentials close. Compact design and a single adjustable strap make it perfect for a quick run or a day out.",
    "Tote Bag":             "Tote Bag is your everyday carry-all. Spacious interior and durable handles make it perfect for the gym, market, or beach.",
    "Messenger Bag":        "Messenger Bag combines style and function. A padded laptop compartment and multiple pockets keep you organised on the go.",
    "Travel Bag":           "Travel Bag is built for the road. Large capacity, durable wheels, and smart organisation help you travel in style.",
    "Mini Backpack":        "Mini Backpack carries your essentials in a compact package. Perfect for a day out, travel, or a light gym session.",
    "Waist Bag":            "Waist Bag keeps your valuables secure on the go. Compact, lightweight, and hands-free — perfect for runs, festivals, and travel.",
    "Sport Backpack":       "Sport Backpack is your ultimate training partner. Ventilated back panel, shoe compartment, and water bottle pocket keep you equipped for anything.",
    // Caps & Accessories
    "Sport Cap":            "Sport Cap keeps the sun out of your eyes during training. Moisture-wicking sweatband and adjustable back strap ensure a perfect fit.",
    "Snapback Cap":         "Snapback Cap is the ultimate streetwear accessory. Flat brim and snap closure give you that classic hip-hop inspired look.",
    "Running Cap":          "Running Cap is lightweight and breathable for long runs. Reflective details and a curved brim keep you safe and stylish.",
    "Bucket Hat":           "Bucket Hat provides all-round sun protection in a relaxed style. Packable design makes it perfect for travel and outdoor adventures.",
    "Beanie":               "Beanie keeps you warm on cold training days. Soft knit fabric and a snug fit make it your winter essential.",
    "Trucker Cap":          "Trucker Cap combines mesh panels and a foam front for breathable, casual style. Adjustable snap back fits any head size.",
    "Dad Cap":              "Dad Cap keeps it low-key and effortlessly cool. Unstructured design and curved brim give it that classic worn-in look.",
    "Fitted Cap":           "Fitted Cap gives you a sharp, polished look. Structured crown and fitted design make it the choice of cap connoisseurs.",
    "Visor Cap":            "Visor Cap lets the breeze in while keeping the sun out. Open top design and moisture-wicking sweatband are perfect for warm-weather training.",
    // Socks
    "Running Socks":        "Running Socks are engineered for performance. Arch support, moisture management, and cushioned sole protect your feet on every run.",
    "Ankle Socks":          "Ankle Socks are your everyday essential. Low-cut design and soft fabric keep you comfortable without the bulk.",
    "Crew Socks":           "Crew Socks deliver classic comfort. Cushioned sole and ribbed cuff provide all-day support for training and everyday wear.",
    "Compression Socks":    "Compression Socks boost circulation and reduce muscle fatigue. Perfect for long runs, travel, and post-workout recovery.",
    "No-Show Socks":        "No-Show Socks stay hidden below the ankle for a clean, sockless look. Silicone heel grip keeps them in place all day.",
    "Cushion Socks":        "Cushion Socks deliver maximum comfort underfoot. Extra padding in the heel and toe protects during high-impact activities.",
    "Grip Socks":           "Grip Socks keep your feet firmly planted during training. Non-slip sole and snug fit prevent movement inside your shoe.",
    "Knee High Socks":      "Knee High Socks provide full leg coverage and compression support. Perfect for cold weather training and post-run recovery.",
    "Trail Socks":          "Trail Socks are built for off-road adventures. Reinforced heel and toe, moisture management, and cushioning tackle any terrain.",
    // Jordan Clothing & Accessories
    "Jordan Sport Tee":     "Jordan Sport Tee combines performance and Jumpman style. Moisture-wicking fabric and a relaxed fit keep you cool on and off the court.",
    "Jordan Graphic Tee":   "Jordan Graphic Tee makes a bold statement. Iconic Jumpman graphics on soft, comfortable fabric let you represent your love for the game.",
    "Jordan Jacket":        "Jordan Jacket delivers court-ready style in a sleek package. Lightweight construction and iconic branding make it a streetwear essential.",
    "Jordan Shorts":        "Jordan Shorts bring classic basketball style to your wardrobe. Breathable fabric and an elastic waistband keep you comfortable all day.",
    "Jordan Hoodie":        "Jordan Hoodie wraps you in warmth and style. Soft fleece interior and bold Jumpman branding make it the ultimate post-game essential.",
    "Jordan Fleece Shorts": "Jordan Fleece Shorts deliver cosy comfort after your hardest sessions. Soft fleece fabric and a relaxed fit are perfect for rest days.",
    "Jordan Track Jacket":  "Jordan Track Jacket is a streetwear icon. Retro-inspired design, ribbed trim, and Jumpman branding make it a must-have for any collection.",
    "Jordan Polo Tee":      "Jordan Polo Tee blends athletic performance with smart casual style. Breathable fabric and Jumpman branding elevate any outfit.",
    "Jordan Training Shorts":"Jordan Training Shorts are built for performance. Moisture-wicking fabric, side pockets, and an elastic waistband keep you ready for anything.",
    "Jordan Sport Cap":     "Jordan Sport Cap keeps you looking fresh on and off the court. Adjustable strap and Jumpman branding make it the finishing touch to any outfit.",
    "Jordan Backpack":      "Jordan Backpack carries your game day essentials in iconic style. Padded straps, multiple compartments, and Jumpman branding set it apart.",
    "Jordan Socks":         "Jordan Socks deliver all-day comfort with iconic style. Cushioned sole and Jumpman branding make them the perfect finishing touch.",
    "Jordan Snapback":      "Jordan Snapback brings classic basketball culture to streetwear. Flat brim, structured crown, and Jumpman branding make it a collector's item.",
    "Jordan Duffel Bag":    "Jordan Duffel Bag carries everything you need in iconic Jordan style. Large capacity and durable construction make it your perfect court companion.",
    "Jordan Ankle Socks":   "Jordan Ankle Socks keep it low-key with premium comfort. Cushioned sole and Jumpman branding add that finishing touch.",
    "Jordan Running Cap":   "Jordan Running Cap keeps the sun off during your run. Lightweight, breathable, and finished with iconic Jumpman branding.",
    "Jordan Sling Bag":     "Jordan Sling Bag keeps your essentials close in compact Jordan style. Single strap design and multiple pockets make it your everyday carry.",
    "Jordan Crew Socks":    "Jordan Crew Socks deliver cushioned comfort with bold Jumpman style. Moisture-wicking fabric keeps your feet fresh all day.",
    // Kids
    "Boys Runner Pro":      "Boys Runner Pro is built for young athletes who love to run. Lightweight cushioning and a secure fit keep them comfortable and fast.",
    "Boys Air Max":         "Boys Air Max brings iconic Air style to junior feet. Visible Air unit and bold colourways make it a playground favourite.",
    "Boys Classic":         "Boys Classic delivers timeless style for young sneakerheads. Clean design and durable construction stand up to every adventure.",
    "Boys Trainer":         "Boys Trainer supports young athletes through every training session. Stable base and cushioned midsole provide all-day comfort.",
    "Boys Zoom":            "Boys Zoom brings responsive cushioning to young runners. Lightweight design and snug fit keep up with their fastest pace.",
    "Boys Street":          "Boys Street delivers streetwear style for the next generation. Bold design and durable construction make it the go-to everyday shoe.",
    "Boys Flex":            "Boys Flex moves with young athletes through every activity. Flexible outsole and breathable upper keep them comfortable all day.",
    "Boys Speed":           "Boys Speed is built for young athletes who love to go fast. Lightweight construction and responsive cushioning deliver junior performance.",
    "Boys Casual":          "Boys Casual is the perfect everyday shoe for active kids. Comfortable, durable, and stylish for school, play, and everything in between.",
    "Girls Runner Pro":     "Girls Runner Pro is built for young runners who love to go the distance. Lightweight cushioning and a secure fit keep them comfortable and fast.",
    "Girls Classic":        "Girls Classic delivers timeless style for young sneaker lovers. Clean design and durable construction stand up to every adventure.",
    "Girls Zoom":           "Girls Zoom brings responsive cushioning to young runners. Lightweight design and a snug fit keep up with their fastest pace.",
    "Girls Dunk Low":       "Girls Dunk Low brings court style to the playground. Low profile and bold colourways make it a junior street style essential.",
    "Girls Lite Runner":    "Girls Lite Runner is lightweight and breathable for active kids. Perfect for school runs, sports, and everyday adventures.",
    "Girls Air Max":        "Girls Air Max brings iconic Air cushioning to junior style. Visible Air unit and vibrant colourways make it a standout choice.",
    "Girls Trainer":        "Girls Trainer supports young athletes through every session. Cushioned midsole and a secure fit provide all-day comfort.",
    "Girls Speed":          "Girls Speed is built for young athletes who love to go fast. Lightweight construction and responsive cushioning deliver junior performance.",
    "Girls Street":         "Girls Street delivers streetwear style for the next generation. Bold design and durable construction make it the everyday essential.",
};

/* =============================
   ON PAGE LOAD
============================== */
document.addEventListener("DOMContentLoaded", function () {

    // Cart count
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = document.getElementById("cartcount");

    function updateCartCount() {
        const total = cart.reduce((sum, item) => sum + item.qty, 0);
        if (cartCount) cartCount.innerText = total;
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    updateCartCount();

    const params = new URLSearchParams(window.location.search);

    // ── CASE 1: URL has name param (all sections except arrivals & bestsellers) ──
    const nameParam  = params.get("name");
    const priceParam = params.get("price");
    const imgParam   = params.get("img");

    if (nameParam) {
        const desc = descriptions[nameParam] || "Premium quality product from the PORTO collection. Designed for performance, built for style.";

        document.getElementById("detailImg").src            = imgParam;
        document.getElementById("detailImg").alt            = nameParam;
        document.getElementById("detailTitle").innerText    = nameParam;
        document.getElementById("detailPrice").innerText    = priceParam;
        document.getElementById("detailDesc").innerText     = desc;
        document.getElementById("detailCategory").innerText = "";

        document.getElementById("addToCartBtn").addEventListener("click", function () {
            const existing = cart.find(item => item.name === nameParam);
            if (existing) existing.qty += 1;
            else cart.push({ name: nameParam, price: priceParam, img: imgParam, qty: 1 });
            updateCartCount();
            const msg = document.getElementById("cartAddedMsg");
            msg.style.display = "block";
            setTimeout(() => msg.style.display = "none", 2000);
        });

        return; // done
    }

    // ── CASE 2: URL has id param (arrivals & bestsellers) ──
    const productId = parseInt(params.get("id"));
    const product   = products.find(p => p.id === productId);

    if (!product) {
        document.getElementById("productDetail").innerHTML =
            "<p style='text-align:center;padding:80px;color:#888;font-family:Poppins,sans-serif;'>Product not found.</p>";
        return;
    }

    document.getElementById("detailImg").src            = product.img;
    document.getElementById("detailImg").alt            = product.name;
    document.getElementById("detailTitle").innerText    = product.name;
    document.getElementById("detailPrice").innerText    = product.price;
    document.getElementById("detailDesc").innerText     = product.description;
    document.getElementById("detailCategory").innerText = product.category.toUpperCase();

    document.getElementById("addToCartBtn").addEventListener("click", function () {
        const existing = cart.find(item => item.name === product.name);
        if (existing) existing.qty += 1;
        else cart.push({ name: product.name, price: product.price, img: product.img, qty: 1 });
        updateCartCount();
        const msg = document.getElementById("cartAddedMsg");
        msg.style.display = "block";
        setTimeout(() => msg.style.display = "none", 2000);
    });

});