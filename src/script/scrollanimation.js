let currentSection = 0;
    const sections = document.querySelectorAll('section');
    let isScrolling = false;
    let oval = document.querySelector('.oval-open')

    function smoothScrollTo(targetPosition) {
        let startPosition = window.scrollY;
        let distance = targetPosition - startPosition;
        let duration = 600; // Длительность анимации в мс
        let startTime = null;

        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            let timeElapsed = currentTime - startTime;
            let run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            } else {
                window.scrollTo(0, targetPosition); // Убедимся, что попали точно в цель
                isScrolling = false; // Анимация закончилась
            }
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    window.addEventListener('wheel', function(event) {
        event.preventDefault(); // Полностью блокируем стандартную прокрутку
        if (isScrolling) return; // Не запускаем новое действие, если ещё идёт скролл

        isScrolling = true;
        if (event.deltaY > 0) {
            // Скролл вниз
            if (currentSection < sections.length - 1) {
                currentSection++;
                if (oval.classList.contains('oval-open')){
                    womanAnimation()
                }
            }
        } else {
            // Скролл вверх
            if (currentSection > 0) {
                currentSection--;
            }
        }

        const targetSection = sections[currentSection];
        const targetPosition = targetSection.offsetTop;

        smoothScrollTo(targetPosition);
    }, { passive: false }); // Не пассивное, чтобы работал preventDefault

    function womanAnimation () {
        let woman = document.querySelector('.woman')
        let oval = document.querySelector('.oval-open')
        setTimeout(() => {
            woman.style.top = '-30px'
        }, 1000)
        
            setTimeout(() => {
            oval.classList.toggle('oval-open')
        }, 1500)
        
        
    }

    