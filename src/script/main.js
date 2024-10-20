        let tableUpImg = document.querySelector('.table__img-up')
        let btns = document.querySelector('.table__up-down')
        let windowWidth = window.innerWidth
        btns.addEventListener('click', (e) => {
            let windowWidth = window.innerWidth

            if(e.target.classList.contains('down') && windowWidth > 1200){
                tableUpImg.style.top = '6.5vw'
                btns.style.top = '70%'
            } else if (e.target.classList.contains('down') && windowWidth <= 1200) {
                    tableUpImg.style.top = '14vw'
                    btns.style.top = '65%'
            } if(e.target.classList.contains('up')){
                tableUpImg.style = ''
                btns.style.top = ''
            }
        })
        window.addEventListener('DOMContentLoaded', () => {
            let woman = document.querySelector('.woman')
            if (windowWidth <= 1200){
                woman.style.top = '-30px'
                document.querySelector('.dark-block__ok-yamaguchi').innerHTML = `<span class="dark-block__ok-yamaguchi">«ОКЕЙ,<br>ЯМАГУЧИ»</span>`
            } else document.querySelector('.dark-block__ok-yamaguchi').innerHTML = `<span class="dark-block__ok-yamaguchi">«ОКЕЙ,ЯМАГУЧИ»</span>`
        })
        // Сделано для того, что бы когда стол опущен и меняем разрешение окна, не получалось так, что верхстола
        // лежит внизу экрана

        window.addEventListener('resize', ()=> {
            let windowWidth = window.innerWidth
            
            tableUpImg.style = ''
            btns.style.top = ''
            if (windowWidth <= 1200){
                
                document.querySelector('.dark-block__ok-yamaguchi').innerHTML = `<span class="dark-block__ok-yamaguchi">«ОКЕЙ,<br>ЯМАГУЧИ»</span>`
            } else if (windowWidth > 1200 )document.querySelector('.dark-block__ok-yamaguchi').innerHTML = `<span class="dark-block__ok-yamaguchi">«ОКЕЙ,ЯМАГУЧИ»</span>`
        })
        

        