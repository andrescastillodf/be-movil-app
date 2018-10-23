var Phone = require('../models/phone');

var mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/movil',{useNewUrlParser:true});

var phones = [
    new Phone({
        title: 'Apple iPhone XS Max 6.5"',
        description: "iPhone XS Max features a 6.5-inch Super Retina display with custom-built OLED panels for an HDR display that provides the industry's best color accuracy, true blacks, and remarkable brightness.¹ Advanced Face ID lets you securely unlock your iPhone, log in to apps, and pay with just a glance. The A12 Bionic chip with next-generation Neural Engine uses real-time machine learning to transform the way you experience photos, gaming, augmented reality, and more. A breakthrough 12MP dual-camera system takes your portraits to the next level with Portrait mode, Portrait Lighting, enhanced bokeh, and all-new Depth Control. Water resistance.² And iOS 12 – the most advanced mobile operating system – with powerful new tools that make iPhone more personal than ever.",
        color: 'Space Gray',
        price: 1450.22,
        image_route: 'http://andrescastillo.ddns.net/phones-images/iphone-xs-max-space-gray.jpg' 
    }),
    new Phone({
        title: 'Apple iPhone XS',
        description: "The latest generation of iPhones with Super Retina HD Display, A12 Bionic chip and True Tone Display.",
        color: 'Silver',
        price: 1300.52,
        image_route: 'http://andrescastillo.ddns.net/phones-images/iphone-xs-silver.jpg' 
    }),
    new Phone({
        title: 'Apple iPhone X',
        description: "iPhone x features an all-screen design with a 5.8-Inch super Retina HD display with HDR and true tone. Face ID lets you unlock and use Apple pay with just a glance. Powered by A11 Bionic, the most powerful and smartest chip ever in a smartphone. Supports augmented reality experiences in games and apps.",
        color: 'Silver',
        price: 1050.25,
        image_route: 'http://andrescastillo.ddns.net/phones-images/iphone-x.jpg' 
    }),
    new Phone({
        title: 'Samsung Galaxy S8',
        description: "Meet the Galaxy S8 - Infinitely Brilliant. The Galaxy S8 has the world's first Infinity Screen, A screen without limits. The expansive display stretches from edge to edge, giving you the most amount of screen in the least amount of space. The revolutionary design of the Galaxy S8 begins from the inside out. We rethought every part of the phone's layout to break through the confines of the smartphone screen. So all you see is pure content and no bezel. It's the biggest, most immersive screen on a Galaxy smartphone of this size. And it's easy to hold in one hand. The Infinity Display has an incredible end-to-end screen that spills over the phone’s sides, forming a completely smooth, continuous surface with no bumps or angles. It’s pure, pristine, uninterrupted glass. And it takes up the entire front of the phone, flowing seamlessly into the aluminum shell. The result is a beautifully curved, perfectly symmetrical, singular object. Capture life as it happens with the Galaxy S8 cameras. The 12MP rear camera and the 8MP front camera are so accurate and fast that you won't miss a moment, day or night. Prying eyes are not a problem when you have iris scanning on the Galaxy S8. No two irises have the same pattern, not even yours, and they're nearly impossible to replicate. That means with iris scanning, your phone and its contents open to your eyes only. And when you need to unlock really fast, face recognition is a handy option. You never really stop using your phone. That's why Galaxy S8 is driven by the world's first 10nm processor. It's fast and powerful and increases battery efficiency. Plus, there's the ability to expand storage, and to work through rain and dust with IP68-rated performance.",
        color: 'Midnight Black',
        price: 480.22,
        image_route: 'http://andrescastillo.ddns.net/phones-images/samsung-s8-midnight-black.jpg' 
    }),
    new Phone({
        title: 'Samsung Galaxy S8',
        description: "Samsung Galaxy S8 has the cutting-edge features you need to do the things you love faster, easier and better. An Eye catching, 5.8 inch curved display goes all the way to the edge, so you can see more. The 12MP camera and advanced processor takes sharp, clear photos faster. Introducing Bixby - Samsung's new intelligent interface that is able to navigate easily through services and apps so that users can experience more with their phones. A phone this advanced deserves a network that can keep up. The Galaxy S8 comes in 64GB.",
        color: 'Orchid Gray',
        price: 399.80,
        image_route: 'http://andrescastillo.ddns.net/phones-images/samsung-s9-orchild-gray.jpg' 
    }),
    new Phone({
        title: 'Samsung Galaxy S9',
        description: "The Camera. Reimagined. The Galaxy S9 is packed with incredible features to help you do more than you ever imagined. With a revolutionary camera that adapts like the human eye, get ready to capture your world like never before.Note: REGIONAL LOCK will be removed by activating (opening) unit prior to shipping.",
        color: 'Lilac Purple',
        price: 699.00,
        image_route: 'http://andrescastillo.ddns.net/phones-images/samsung-s9-purple.jpg' 
    }),
    new Phone({
        title: 'Huawei P20 Pro',
        description: "The Huawei P20 Pro isn’t one of those underwhelming phones that get churned out annually with a negligible upgrade – this device is something special. Super-stylish and packed with features, this flagship smartphone has been created with an OLED screen, a bezel-less design and a glass back, while the octa-core processor and 6GB of RAM mean that it’s fast. Then there are the fantastic front 24MP and rear 40MP cameras that not only shames competitors due to picture quality and speed, they positively destroy their ‘innovative’ reputations too.",
        color: 'Midnight Blue',
        price: 880.99,
        image_route: 'http://andrescastillo.ddns.net/phones-images/huawei-p20-pro.jpg' 
    }),
    new Phone({
        title: 'Huawei Mate 10 Pro',
        description: "Designed to bring your vision to life: enjoy an immersive viewing experience with HDR 10 technology. The Huawei mate 10 Pro features a strong and Robust glass casing both front and back, for a uniquely elegant design. An innovative technique is used to heat the rear glass to nearly 1300 degree before shaping to deliver ultimate style. With the new LEICA Dual lens with F/1.6 aperture, you can easily take beautiful depth of field pictures, crystal clear low-light photographs and blur-free shots of objects on the move. The 20MP Monochrome sensor and 12MP RGB sensor with optical image stabilization captures more light to perform at an expert standard. Powered by Ai to ‘Learn’ from our data cache of portrait images, the Huawei mate 10 Pro can differentiate between 13 different subjects like people, pets, food, Flowers, landscape, etc. To automatically adjust Settings for the perfect shot every time. It can also seamlessly evoke a professional Bokeh effect by shifting the focal point onto the subject of the Photograph, for picture-perfect portraits and selfies. Combine these professional quality camera features with its 4000 mAh battery for extra-long life even for power-users. The Huawei mate 10 Pro is the ultimate flagship smartphone for your demanding lifestyle.",
        color: 'Titanium Gray',
        price: 1450.22,
        image_route: 'http://andrescastillo.ddns.net/phones-images/huawei-mate-10-pro.jpg' 
    })
];
var done = 0;
for (var i=0; i<phones.length; i++) {
    phones[i].save(function(err, result){
        done++;
        if(done === phones.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}