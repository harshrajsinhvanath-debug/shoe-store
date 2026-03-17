/* =============================
   ALL PRODUCTS DATA
   id 1-8   = index.html ના products
   id 101-109 = Products.html ના products
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

    // ── Products.html (New Arrivals) products ──
    {
        id: 101,
        name: "Air Max Pulse",
        price: "₹4999",
        img: "images/runing product1.jpg",
        category: "New Arrival",
        description: "The Air Max Pulse brings bold energy to the streets. Inspired by the London music scene, it features a textile upper with ribbed details and a visible Air unit for all-day comfort."
    },
    {
        id: 102,
        name: "Retro Runner",
        price: "₹3499",
        img: "images/product2.jpg",
        category: "New Arrival",
        description: "The Retro Runner blends vintage running aesthetics with modern performance. Its classic silhouette and updated cushioning make it perfect for both the track and the street."
    },
    {
        id: 103,
        name: "Jordan Street",
        price: "₹6999",
        img: "images/product3.jpg",
        category: "New Arrival",
        description: "Jordan Street brings court heritage to everyday style. Premium leather upper, iconic Jumpman branding, and Air cushioning deliver the perfect combination of looks and comfort."
    },
    {
        id: 104,
        name: "Air Zoom Elite",
        price: "₹5999",
        img: "images/product4.jpg",
        category: "New Arrival",
        description: "The Air Zoom Elite is engineered for serious runners. A full-length Zoom Air unit and lightweight mesh upper work together to help you run faster for longer."
    },
    {
        id: 105,
        name: "Air Flex Pro",
        price: "₹4499",
        img: "images/product5.jpg",
        category: "New Arrival",
        description: "Air Flex Pro adapts to every movement with a flexible outsole and breathable upper. Designed for versatile training, it moves with you whether you're running, jumping, or lifting."
    },
    {
        id: 106,
        name: "Street Classic",
        price: "₹4499",
        img: "images/product6.jpg",
        category: "New Arrival",
        description: "Street Classic keeps it simple and iconic. Clean lines, a durable leather upper, and a timeless low-top silhouette make it the perfect everyday sneaker."
    },
    {
        id: 107,
        name: "Ultra Speed",
        price: "₹4999",
        img: "images/product7.jpg",
        category: "New Arrival",
        description: "Ultra Speed is built for those who refuse to slow down. A streamlined design, responsive midsole, and snug fit provide maximum performance at every pace."
    },
    {
        id: 108,
        name: "Max Trainer",
        price: "₹5999",
        img: "images/product8.jpg",
        category: "New Arrival",
        description: "Max Trainer delivers gym-ready performance with street-ready style. Multi-directional outsole lugs provide grip on any surface, while plush cushioning keeps you comfortable all day."
    },
    {
        id: 109,
        name: "Lite Runner",
        price: "₹2999",
        img: "images/product9.jpg",
        category: "New Arrival",
        description: "Lite Runner is your everyday essential. A featherlight design and breathable mesh upper keep you cool and comfortable, whether you're running errands or logging easy miles."
    }
];

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

    // Get id from URL
    const params    = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get("id"));

    // Find product
    const product = products.find(p => p.id === productId);

    if (!product) {
        document.getElementById("productDetail").innerHTML =
            "<p style='text-align:center;padding:80px;color:#888;font-family:Poppins,sans-serif;'>Product not found.</p>";
        return;
    }

    // Fill data
    document.getElementById("detailImg").src             = product.img;
    document.getElementById("detailImg").alt             = product.name;
    document.getElementById("detailTitle").innerText     = product.name;
    document.getElementById("detailPrice").innerText     = product.price;
    document.getElementById("detailDesc").innerText      = product.description;
    document.getElementById("detailCategory").innerText  = product.category.toUpperCase();

    // Add to Cart
    document.getElementById("addToCartBtn").addEventListener("click", function () {
        const existing = cart.find(item => item.name === product.name);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({
                name:  product.name,
                price: product.price,
                img:   product.img,
                qty:   1
            });
        }

        updateCartCount();

        const msg = document.getElementById("cartAddedMsg");
        msg.style.display = "block";
        setTimeout(() => msg.style.display = "none", 2000);
    });

});