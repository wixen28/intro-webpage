

const menu = document.querySelector('.img-menu')
const menuIcon = document.querySelector('.menu-icon')
const InsideMenu = document.querySelector('.everything-insideMenu')
const main = document.querySelector('main')
const arrows = document.querySelectorAll('#img-arrow-down')
const featureList = document.querySelectorAll('.feature-list')
const imagePath = document.querySelector('#img-main')
const btnLogin = document.querySelectorAll('.login')
const loginDiv = document.querySelector('.login-div')
const closeBtn = document.querySelector('.close-btn')
const loginBtn = document.querySelector('.login-btn')
const signUp = document.querySelector('.sign-up')
const username = document.querySelector('#username')
let password = document.querySelector('#password')




window.addEventListener('DOMContentLoaded', function(e){
    menu.addEventListener('click', function(e){
        InsideMenu.classList.toggle('unactive')
        if(!InsideMenu.classList.contains('unactive')) {
            menuIcon.src = './images/icon-menu.svg'
            menuIcon.classList.remove('menu-icon-active')
            main.style.opacity = '1'
        } else if(InsideMenu.classList.contains('unactive')){
            menuIcon.src = './images/icon-close-menu.svg'
            menuIcon.classList.add('menu-icon-active')
            main.style.opacity = '0.3'
        }
    
    })


    
    arrows.forEach( (arrow) => {
        arrow.addEventListener('click', function(e){
            e.preventDefault()
           
            if(arrow.dataset.id === '1') {
                featureList[0].classList.toggle('feature-list-active')
                let arrow = document.querySelector('#img-arrow-down')
                if(featureList[0].classList.contains('feature-list-active')){
                    main.addEventListener('click', function(e){
                        featureList[0].classList.remove('feature-list-active')
                        arrow.src = './images/icon-arrow-down.svg'
                     })
                    arrow.src = './images/icon-arrow-up.svg'
                } 
                else  {
                    arrow.src = './images/icon-arrow-down.svg'
                }
            } else if (arrow.dataset.id === '2') {
                featureList[1].classList.toggle('feature-list-active')
                if(featureList[1].classList.contains('feature-list-active')){
                    main.addEventListener('click', function(e){
                        featureList[1].classList.remove('feature-list-active')
                        arrow.src = './images/icon-arrow-down.svg'
                    })
                    arrow.src = './images/icon-arrow-up.svg'
                } else {
                    arrow.src = './images/icon-arrow-down.svg'
                }
            }


        })

    })

})

btnLogin.forEach( (oneBtn) => {
    
    oneBtn.addEventListener('click', function(e){
        e.preventDefault()
        loginDiv.style.display = 'block'
        if(loginDiv.style.display === 'block') {
           document.querySelector('.container').style.opacity = '0.5'
           InsideMenu.classList.remove('unactive')
           main.style.opacity = '1'
           loginBtn.addEventListener('click', function(e){
            if(username.value === '' || password.value.length < 8) {
                alert('No input fields can be empty and password has to be at least 8 digits long')
                
            } else if(username.value !== '' && password.value.length >8) {
                e.preventDefault()
                loginDiv.style.display = 'none'
                 document.querySelector('.container').style.opacity = '1'                 
            }

           })
           closeBtn.addEventListener('click', function(e){
            e.preventDefault()
            loginDiv.style.display = 'none'
            document.querySelector('.container').style.opacity = '1'
           })

            signUp.addEventListener('click', function(e){
            e.preventDefault()
            loginDiv.style.display = 'none'
            document.querySelector('.container').style.opacity = '1'
           })
        }
        
    })
})

