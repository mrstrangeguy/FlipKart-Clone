console.log("Product Slider")

const productList1=[
    {
        imgUrl:'https://rukminim1.flixcart.com/image/200/200/l5jxt3k0/dslr-camera/m/n/a/-original-imagg7hsggshhwbz.jpeg?q=70',
        name:'Top Mirrorless Cameras',
        price:'Shop Now!',
        brand:'Canon, Sony, Fujifilm...'
    },
    {
        imgUrl:'https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70',
        name:'Printers',
        price:'From ₹3999',
        brand:'HP'
    },
    {
        imgUrl:'./images//main-product-3.webp',
        name:'Projector',
        price:'From ₹6990',
        brand:'Egate'
    },
    {
        imgUrl:'./images//new_image.jpg',
        name:'Best of Trimmers',
        price:'From ₹399',
        brand:'Veet,braun,philips...'
    },
    {
        imgUrl:'./images//shaver.jpg',
        name:'Best of Shavers',
        price:'From ₹1,649',
        brand:'Phillips & Havells'
    },
    {
        imgUrl:'./images//main-product-6.webp',
        name:'BenQ Monitors',
        price:'From ₹9990',
        brand:'Lenovo'
    },
    {
        imgUrl:'https://m.media-amazon.com/images/I/51FGbb3EbgL.jpg',
        name:'Best of Hair Dryers',
        price:'From ₹549',
        brand:'Realme'
    },
    {
        imgUrl:'https://rukminim1.flixcart.com/image/200/200/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70',
        name:'Monitors',
        price:'From ₹7949',
        brand:'SAMSUNG'
    },


    

    
]
//First Slide
let renderProduct1="";
let cardProductContainer1=document.getElementById('card-product-container1')
for(let i = 0;i<productList1.length;i++){
    console.log(productList1[i])
     renderProduct1 += `
      <div class="card-product">
      
      <img src="${productList1[i].imgUrl}">
    
      <div class="card-product-des">
      <h3>${productList1[i].name}</h3>
      <h5>${productList1[i].price}</h5>
      <p>${productList1[i].brand}</p>
      </div>
      </div>
    `
}

cardProductContainer1.innerHTML=renderProduct1
console.log(renderProduct1)

let cardBtnRight1=document.getElementById('card-btn-right1')
let cardBtnLeft1=document.getElementById('card-btn-left1')

cardBtnRight1.addEventListener('click',function(){
    console.log('click Right')
   
  
        cardProductContainer1.style.transform="translateX(-16%)"
        cardProductContainer1.style.transition="0.5s "
    
    cardBtnRight1.style.display="none"
    cardBtnLeft1.style.display="block"
})
cardBtnLeft1.addEventListener('click',function(){
    
    cardProductContainer1.style.transform="translateX(0%)"
    cardBtnLeft1.style.display="none"
    cardBtnRight1.style.display="block"
})

//Second Slide

const productList2=[
    {
        imgUrl:'https://rukminim1.flixcart.com/image/200/200/kc3p30w0/headphone/i/h/z/k52-akg-original-imaftb5hptnuajfu.jpeg?q=70',
        name:'Studio Headphones',
        price:'Upto 80% off',
        brand:'Explore Now!'
    },
    {
        imgUrl:'https://rukminim1.flixcart.com/image/200/200/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=70',
        name:'Top Selling Stationary',
        price:'Pens,Notebooks & more',
        brand:'HP'
    },
    {
        imgUrl:'https://rukminim1.flixcart.com/image/200/200/kz5vwy80/helmet/o/4/k/-original-imagb8azfdthjhqr.jpeg?q=70',
        name:'Rider Helmets',
        price:'80% Off',
        brand:'Vega,SteelBird,HRX and more'
    },
    {
        imgUrl:'https://rukminim1.flixcart.com/image/200/200/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=70',
        name:'Remote Control Toys',
        price:'70% Off',
        brand:'Show Now!'
    },
    {
        imgUrl:'https://rukminim1.flixcart.com/image/200/200/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=70',
        name:'Gym Essentials',
        price:'From ₹139',
        brand:'Shop Now!'
    },
    {
        imgUrl:'https://rukminim1.flixcart.com/image/200/200/kdbzqfk0/bar/8/h/q/push-up-bar-0-8-long-ankaro-original-imafu9dmvdk3rzvy.jpeg?q=70',
        name:'Microphones',
        price:'70% Off',
        brand:'Explore Now!'
    },
    {
        imgUrl:'https://rukminim1.flixcart.com/image/200/200/jwqpocw0/microphone-accessory/8/j/s/easy-way-wireless-handheld-bluetooth-mic-with-speaker-bluetooth-original-imafgtg9zgcwcdzg.jpeg?q=70',
        name:'Dry Fruits',
        price:'75% Off',
        brand:'Happilo,Farmley & More'
    },
    {
        imgUrl:'https://rukminim1.flixcart.com/image/200/200/xif0q/watch/z/1/h/-original-imagqhvgybexgkmh.jpeg?q=70',
        name:'Wrist Watches',
        price:'From ₹7949',
        brand:'Shop Now!'
    },


    

    
]

let renderProduct2=""
let cardProductContainer2=document.getElementById('card-product-container2')


for(let i = 0;i<productList2.length;i++){
    console.log(productList2[i])
     renderProduct2 += `
      <div class="card-product">
      
      <img src="${productList2[i].imgUrl}">
    
      <div class="card-product-des">
      <h3>${productList2[i].name}</h3>
      <h5>${productList2[i].price}</h5>
      <p>${productList2[i].brand}</p>
      </div>
      </div>
    `
}
cardProductContainer2.innerHTML=renderProduct2
let cardBtnLeft2=document.getElementById('card-btn-left2')
let cardBtnRight2=document.getElementById('card-btn-right2')

cardBtnRight2.addEventListener('click',function(){
    console.log('click Right')
    
     
   
        cardProductContainer2.style.transform="translateX(-16%)"
        cardProductContainer2.style.transition="0.5s "
    
    cardBtnRight2.style.display="none"
    cardBtnLeft2.style.display="block"
})
cardBtnLeft2.addEventListener('click',function(){
    
    cardProductContainer2.style.transform="translateX(0%)"
    cardProductContainer2.style.transition="0.5s"
    cardBtnLeft2.style.display="none"
    cardBtnRight2.style.display="block"


})

//slide 3
const productList3=[
    {
        imgUrl:'https://rukminim1.flixcart.com/image/200/200/xif0q/headphone/r/7/g/m19-bluetooth-earphone-touch-control-dual-led-display-with-torch-original-imaggyfy8ycgwh5g.jpeg?q=70',
        name:'Headset',
        price:'Min. 50% Off',
        brand:'Explore Now!'
    },
    {
        imgUrl:'https://rukminim1.flixcart.com/image/200/200/xif0q/shopsy-lunch-box/c/d/r/1400-premium-quality-plastic-lunch-box-tiffin-box-for-school-original-imagzjajawxyk2nc.jpeg?q=70',
        name:'Lunch Boxes',
        price:'From ₹49',
        brand:'Explore Now'
    },
    {
        imgUrl:'https://rukminim1.flixcart.com/image/200/200/kqttg280/jean/5/8/i/32-mss21jn688-metronaut-original-imag4rcndacnwraz.jpeg?q=70',
        name:'Jeans for Men',
        price:'80% Off',
        brand:'Explore Now!'
    },
    {
        imgUrl:'https://rukminim1.flixcart.com/image/200/200/l05lx8w0/backpack/m/s/t/medium-30-l-laptop-casual-backpack-bagpack-for-men-women-blg15-original-imagcy8zk9yywffq.jpeg?q=70',
        name:'Shool Bags',
        price:'70% Off',
        brand:'Explore Now!'
    },
    {
        imgUrl:'https://rukminim1.flixcart.com/image/200/200/xif0q/computer/g/w/y/-original-imagmuhrzbmzwnee.jpeg?q=70',
        name:'Laptops',
        price:'From ₹19,999',
        brand:'Explore Now!'
    },
    {
        imgUrl:'https://rukminim1.flixcart.com/image/200/200/l5ld8y80/smartwatch/r/q/t/-original-imagg8dksgct9hxg.jpeg?q=70',
        name:'Smart Watches',
        price:'70% Off',
        brand:'Explore Now!'
    },
    {
        imgUrl:'https://rukminim1.flixcart.com/image/200/200/xif0q/backpack/v/6/j/-original-imagz87k72ygwfzn.jpeg?q=70',
        name:'Laptop Bags',
        price:'75% Off',
        brand:'Explore Now!'
    },
    {
        imgUrl:'https://rukminim1.flixcart.com/image/200/200/klscivk0/trouser/q/q/k/28-sktr-4242-olv-fubar-original-imagyuff8uq6cxny.jpeg?q=70',
        name:'Trousers',
        price:'From ₹7949',
        brand:'Explore Now'
    },
 
]

let renderProduct3=""
let cardProductContainer3=document.getElementById('card-product-container3')


for(let i = 0;i<productList3.length;i++){
    console.log(productList3[i])
     renderProduct3 += `
      <div class="card-product">
      
      <img src="${productList3[i].imgUrl}">
    
      <div class="card-product-des">
      <h3>${productList3[i].name}</h3>
      <h5>${productList3[i].price}</h5>
      <p>${productList3[i].brand}</p>
      </div>
      </div>
    `
}
cardProductContainer3.innerHTML=renderProduct3

let cardBtnLeft3=document.getElementById('card-btn-left3')
let cardBtnRight3=document.getElementById('card-btn-right3')

cardBtnRight3.addEventListener('click',function(){
    console.log('click Right')
    
     
   
        cardProductContainer3.style.transform="translateX(-16%)"
        cardProductContainer3.style.transition="0.5s "
    
    cardBtnRight3.style.display="none"
    cardBtnLeft3.style.display="block"
})
cardBtnLeft3.addEventListener('click',function(){
    
    cardProductContainer3.style.transform="translateX(0%)"
    cardProductContainer3.style.transition="0.5s"
    cardBtnLeft3.style.display="none"
    cardBtnRight3.style.display="block"


})
