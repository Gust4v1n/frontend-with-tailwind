const colorMode = document.getElementById('colorMode');
const icon = document.getElementById('icon');
let clicked = false

if (colorMode && icon) {
    colorMode.addEventListener('click', () => {
        if (icon.src.includes("Moon.svg")) {
            icon.src = "img/Sun.svg";
        } else {
            icon.src = "img/Moon.svg";
        }

        colorMode.classList.toggle('bg-white');
        colorMode.classList.toggle('bg-black');
        colorMode.classList.toggle('text-white');
        colorMode.classList.toggle('text-black');
        colorMode.classList.toggle('border');
        colorMode.classList.toggle('border-black');
    });

}

colorMode.addEventListener('click', () => {
    if(!clicked){
        document.documentElement.style.setProperty('--background', '#0d0d0d');
        document.documentElement.style.setProperty('--second-panel', '#ffffff');
        document.documentElement.style.setProperty('--theme', '#0d0d0d');
        clicked = true
    }
    else{
        document.documentElement.style.setProperty('--background', '#ffffff');
        document.documentElement.style.setProperty('--second-panel', '#0d0d0d');
        document.documentElement.style.setProperty('--theme', '#ffffff');
        clicked = false;
    }
});