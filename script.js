let toggleElement = document.querySelector(".first")

    var texts = ['Web Developer', 'Programmer', 'Electrical Engineer'];
    var currentIndex = 0;


    function toggleText() {

        toggleElement.style.opacity = 0;

        setTimeout(function (){

            toggleElement.innerText = texts[currentIndex];
            toggleElement.style.opacity = 1;

            currentIndex = (currentIndex + 1) % texts.length;
        }, 500);
    }
    setInterval(toggleText, 3000);
