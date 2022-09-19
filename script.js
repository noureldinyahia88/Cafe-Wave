const mainLink = document.querySelectorAll('.main-link')
const links = document.querySelectorAll('.link')
const Fruit = document.querySelector('.Fruit')
const hot = document.querySelector('.hot')
const ice = document.querySelector('.ice')
const coffee = document.querySelectorAll('.coffee')
const IcedCoffee = document.querySelector('.iceCoffe')
const hotCoffe = document.querySelector('.hotCofee')
const FruitJuice = document.querySelector('.FruitJuice')
const DrinkMenu = document.getElementById('DrinkMenu')
const drink = document.querySelector('.drink')
const about = document.getElementById('about')
const aboutsection = document.querySelector('.about')
const rightSection = document.querySelectorAll('.tm-right ')
const SpecialSection = document.querySelector('.Special')
const SpecialLink = document.getElementById('SpecialLink')
const ContactSection = document.querySelector('.Contact')
const ContactLink = document.getElementById('Contact')
const boxes = document.querySelectorAll('.box')
const btn = document.getElementById('tm-video-control-button')
const video = document.getElementById("tm-video");

// make drink menu active by defult
drink.classList.add('active')
// Drink menu function
DrinkMenu.addEventListener('click',()=>{
    removeActiveSection()
    removeboxesActive()  //calling function in line 196
    DrinkMenu.classList.add('active') //Add active to box after click
    drink.classList.add('active')
})

about.addEventListener('click',()=>{
    removeActiveSection()
    removeboxesActive()  //calling function in line 196
    about.classList.add('active') //Add active to box after click
    aboutsection.classList.add('active')
})

SpecialLink.addEventListener('click',()=>{
    removeActiveSection()
    removeboxesActive()  //calling function in line 196
    SpecialLink.classList.add('active')
    SpecialSection.classList.add('active')
})

ContactLink.addEventListener('click',()=>{
    removeActiveSection()
    removeboxesActive()  //calling function in line 196
    ContactLink.classList.add('active') //Add active to box after click
    ContactSection.classList.add('active')
})

//make icecoffee active by defult
ice.classList.add('active') //Add active to box after click
IcedCoffee.classList.add('active')

//Nav bar coffee function to add active on link 
links.forEach((e)=>{
    e.addEventListener('click',()=>{
        links.forEach((link)=>{
            link.classList.remove('active')
        })
        e.classList.add('active')
        if(e.classList.contains('Fruit')){
            remove()
            FruitJuice.classList.add('active')
        } else if(e.classList.contains('hot')){
            remove()
            hotCoffe.classList.add('active')
        } else if(e.classList.contains('ice')){
            remove()
            IcedCoffee.classList.add('active')
        }
    })
})





//remove active for menu
function remove(){
    coffee.forEach(a=>{
        a.classList.remove('active')
    })
}

function removeboxesActive() {
    mainLink.forEach(x=>{
        x.classList.remove('active')
    })
}
//remove function show item
function removeActiveSection() {
    rightSection.forEach(a=>{
        a.classList.remove('active')
    })
}

    btn.addEventListener("click", function(e) {
        if (video.paused) {
        video.play();
        } else {
        video.pause();
        }
    });