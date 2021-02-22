let activeElement = 0;
const timeChange = 5000;

const imgSection = document.querySelector('.image img')
const textSection = document.querySelector('.text-change')

const imgsSection = ['images/s1a.png', 'images/s2a.png', 'images/s3a.png']
const textsSection = ['...something interesting :o', '...something happy :D', '...something  amazing :)']

function changeElements() {
    activeElement++;
    if (activeElement == imgsSection.length) {
        activeElement = 0;
    }
    imgSection.src = imgsSection[activeElement];
    textSection.textContent = textsSection[activeElement];
}

setInterval(changeElements, timeChange)