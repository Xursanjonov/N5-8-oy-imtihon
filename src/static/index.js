import image1 from '../assets/images/tape.png'
import image2 from '../assets/images/fit.png'
import image3 from '../assets/images/shirt.png'
import image4 from '../assets/images/sleeve.png'
import image5 from '../assets/images/vertical.png'
import image6 from '../assets/images/courage.png'
import image7 from '../assets/images/loose.png'
import image8 from '../assets/images/faded.png'
import image9 from '../assets/images/polo.png'
import image10 from '../assets/images/gradient.png'
import image11 from '../assets/images/polo2.png'
import image12 from '../assets/images/black.png'
// brands img
import brand1 from '../assets/images/brand-img/google.png'
import brand2 from '../assets/images/brand-img/amazon.png'
import brand3 from '../assets/images/brand-img/alibaba.png'
import brand4 from '../assets/images/brand-img/chevrolet.png'
import brand5 from '../assets/images/brand-img/bmw.png'
import brand6 from '../assets/images/brand-img/maclern.jpg'
import brand7 from '../assets/images/brand-img/rolls-royce.png'
import brand8 from '../assets/images/brand-img/adidas.png'
import brand9 from '../assets/images/brand-img/armani.png'
import brand10 from '../assets/images/brand-img/chanel.jpg'
import brand11 from '../assets/images/brand-img/dior.png'
import brand12 from '../assets/images/brand-img/guggi.png'
import brand13 from '../assets/images/brand-img/nike.jpg'
import brand14 from '../assets/images/brand-img/prada.png'
import brand15 from '../assets/images/brand-img/puma.png'
import brand16 from '../assets/images/brand-img/reebook.png'
import brand17 from '../assets/images/brand-img/vuitton.png'
import brand18 from '../assets/images/brand-img/zara.png'
import brand19 from '../assets/images/brand-img/samsung.jpg'
import brand20 from '../assets/images/brand-img/nokia.png'

export const PRODUCTS = [
    {
        title: "T-shirt with Tape Details",
        id: 1,
        price: 120,
        rating: 4.5,
        reviews: 5,
        oldPrice: 0,
        urls: image1
    },
    {
        title: "Skinny Fit Jeans",
        id: 2,
        price: 240,
        rating: 3.5,
        reviews: 5,
        oldPrice: 260,
        urls: image2
    },
    {
        title: "Checkered Shirt",
        id: 3,
        price: 180,
        rating: 4.5,
        reviews: 5,
        oldPrice: 0,
        urls: image3
    },
    {
        title: "Sleeve Striped T-shirt",
        id: 4,
        price: 130,
        rating: 4.5,
        reviews: 5,
        oldPrice: 160,
        urls: image4
    },
    {
        title: "Vertical Striped Shirt",
        id: 5,
        price: 212,
        rating: 5.0,
        reviews: 5,
        oldPrice: 232,
        urls: image5
    },
    {
        title: "Courage Graphic T-shirt",
        id: 6,
        price: 145,
        rating: 4.0,
        reviews: 5,
        oldPrice: 0,
        urls: image6
    },
    {
        title: "Loose Fit Bermuda Shorts",
        id: 7,
        price: 80,
        rating: 3.0,
        reviews: 5,
        oldPrice: 0,
        urls: image7
    },
    {
        title: "Faded Skinny Jeans",
        id: 8,
        price: 210,
        rating: 4.5,
        reviews: 5,
        oldPrice: 0,
        urls: image8
    },
    {
        title: "Polo with Contrast Trims",
        id: 9,
        price: 212,
        rating: 4.0,
        reviews: 5,
        oldPrice: 242,
        urls: image9
    },
    {
        title: "Gradient Graphic T-shirt",
        id: 10,
        price: 145,
        rating: 3.5,
        reviews: 5,
        oldPrice: 0,
        urls: image10
    },
    {
        title: "Polo with Tipping Details",
        id: 11,
        price: 180,
        rating: 4.5,
        reviews: 5,
        oldPrice: 0,
        urls: image11
    },
    {
        title: "Black Striped T-shirt",
        id: 12,
        price: 120,
        rating: 5.0,
        reviews: 5,
        oldPrice: 150,
        urls: image12
    },
]

export const COMMENTS = [
    {
        id: 1,
        fname: "Sarah",
        lname: "M",
        rating: 5,
        text: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    },
    {
        id: 2,
        fname: "Alex",
        lname: "K",
        rating: 3.5,
        text: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
    },
    {
        id: 3,
        fname: "James",
        lname: "L",
        rating: 4.0,
        text: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    },
    {
        id: 4,
        fname: "Emily",
        lname: "R",
        rating: 5.0,
        text: "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt.",
    },
    {
        id: 5,
        fname: "James",
        lname: "S",
        rating: 4.5,
        text: "Sed porttitor lectus nibh. Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    },
    {
        id: 6,
        fname: "Jessica",
        lname: "W",
        rating: 3.0,
        text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    },
    {
        id: 7,
        fname: "David",
        lname: "L",
        rating: 4.0,
        text: "Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    }
];

export const BRANDS = [
    {
        id: 1,
        title: "Google",
        image: brand1,
        createdAt: "2024-08-01",
        link: "https://www.google.com"
    },
    {
        id: 2,
        title: "Amazon",
        image: brand2,
        createdAt: "2024-08-02",
        link: "https://www.amazon.in"
    },
    {
        id: 3,
        title: "Alibaba",
        image: brand3,
        createdAt: "2024-08-03",
        link: "https://www.alibaba.com"
    },
    {
        id: 4,
        title: "Chevrolet",
        image: brand4,
        createdAt: "2024-08-04",
        link: "https://www.chevrolet.com"
    },
    {
        id: 5,
        title: "BMW",
        image: brand5,
        createdAt: "2024-08-05",
        link: "https://www.bmw.com/en/index.html"
    },
    {
        id: 6,
        title: "MacLaren",
        image: brand6,
        createdAt: "2024-08-06",
        link: "https://www.mclaren.com"
    },
    {
        id: 7,
        title: "Rollse Royce",
        image: brand7,
        createdAt: "2024-08-07",
        link: "https://www.rolls-roycemotorcars.com/en_GB/home.html"
    },
    {
        id: 8,
        title: "Adidsa",
        image: brand8,
        createdAt: "2024-08-08",
        link: "https://www.adidas.co.in/"
    },
    {
        id: 9,
        title: "Armani",
        image: brand9,
        createdAt: "2024-08-09",
        link: "https://www.armani.com/countries/index"
    },
    {
        id: 10,
        title: "Chanel",
        image: brand10,
        createdAt: "2024-08-10",
        link: "https://www.chanel.com/us/"
    },
    {
        id: 11,
        title: "Dior",
        image: brand11,
        createdAt: "2024-08-11",
        link: "https://www.dior.com/en_int"
    },
    {
        id: 12,
        title: "Guggi",
        image: brand12,
        createdAt: "2024-08-12",
        link: "https://www.gucci.com/us/en/ca/whats-new/new-in/this-week-men-c-new-men"
    },
    {
        id: 13,
        title: "Nike",
        image: brand13,
        createdAt: "2024-08-13",
        link: "https://www.nike.com/"
    },
    {
        id: 14,
        title: "Prada",
        image: brand14,
        createdAt: "2024-08-14",
        link: "https://www.prada.com/us/en.html"
    },
    {
        id: 15,
        title: "Puma",
        image: brand15,
        createdAt: "2024-08-15",
        link: "https://us.puma.com/us/en"
    },
    {
        id: 16,
        title: "Reebook",
        image: brand16,
        createdAt: "2024-08-16",
        link: "https://www.reebok.com/"
    },
    {
        id: 17,
        title: "Louis Vuitton",
        image: brand17,
        createdAt: "2024-08-17",
        link: "https://eu.louisvuitton.com/eng-e1/homepage"
    },
    {
        id: 18,
        title: "Zara",
        image: brand18,
        createdAt: "2024-08-18",
        link: "https://www.zara.com/"
    },
    {
        id: 19,
        title: "Samsung",
        image: brand19,
        createdAt: "2024-08-19",
        link: "https://www.samsung.com/uz_ru/"
    },
    {
        id: 20,
        title: "Nokia",
        image: brand20,
        createdAt: "2024-08-20",
        link: "https://www.nokia.com/"
    }
];