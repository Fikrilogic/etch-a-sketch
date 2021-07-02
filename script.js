
function draw (color = 'red') {
    const container = document.querySelectorAll('.grid-container > div');
    container.forEach(div => {
        div.count = 0;
        div.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = color;
        })
    })
}

function changeColor() {
    const btnChangeColor = document.querySelectorAll('.color');
    btnChangeColor.forEach(button => {
        button.addEventListener('click', () => {
            if(button.classList.contains('red')) {
                draw('red')
            }
            if(button.classList.contains('blue')) {
                draw('blue')
            }
            if(button.classList.contains('green')) {
                draw('green');
            }
        })
    })
}

function clear (container) {
    container.forEach(div => {
        div.count = 0;
        div.style.backgroundColor = '#fff'
    })
}

function reset() {
    const container = document.querySelectorAll('.grid-container > div');
    const reset = document.querySelector('.reset>button');
    reset.addEventListener('click', () => {
        clear(container);
    });
}

function setGrid(size=10*10, style='medium-grid') {
    const container = document.querySelector('.grid-container');
    container.innerHTML = '';
    container.classList.remove('small-grid', 'medium-grid', 'large-grid');
    container.classList.add(style);

    for(let i = 0; i < size; i++) {
        const box = document.createElement('div');
        container.appendChild(box);
    }

}

const changeSizeGrid = () => {
    const smallSize = 5*5;
    const mediumSize = 10*10;
    const largeSize = 16*16;

    const smallClass = 'small-grid';
    const mediumClass = 'medium-grid';
    const largeClass = 'large-grid';

    const btnChangeSize = document.querySelectorAll('.btn');
    console.log(btnChangeSize)
    btnChangeSize.forEach( button => {
        button.addEventListener('click', () => {
            if(button.classList.contains('btn-small')) {
                setGrid(smallSize, smallClass);
                draw();
                changeColor();
                reset()
                
            }
            if(button.classList.contains('btn-medium')) {
                setGrid(mediumSize, mediumClass);
                draw();
                changeColor()
                reset()
                
            }
            if(button.classList.contains('btn-large')) {
                setGrid(largeSize, largeClass);
                draw();
                changeColor();
                reset();
                
            }
        })
    })
}

// function smallGrid() {
//     let smallSize = 5*5;
//     let styleClass = 'small-grid';
//     const container = document.querySelectorAll('.grid-container > div');
//     const btnSmall = document.querySelector('#btn-small');
//     btnSmall.addEventListener('click', () => {
//         setGrid(smallSize, styleClass);
//         draw(container)
//     })
// }
// function mediumGrid() {
//     let mediumSize = 10*10;
//     let styleClass = 'medium-grid';
//     const container = document.querySelectorAll('.grid-container > div');

//     const btnMedium = document.querySelector('#btn-medium');
//     btnMedium.addEventListener('click', () => {
//         setGrid(mediumSize, styleClass);
//         draw(container);
//     })
// }
// function largeGrid() {
//     let largeSize = 16*16;
//     let styleClass = 'large-grid';
//     const container = document.querySelectorAll('.grid-container > div');

//     const btnlarge = document.querySelector('#btn-large');
//     btnlarge.addEventListener('click', () => {
//         setGrid(largeSize, styleClass);
//         draw(container);
//     })
// }

const startGame = () => {
    setGrid();
    // const container = document.querySelectorAll('.grid-container > div');
    draw();
    // smallGrid();
    // mediumGrid();
    // largeGrid();
    changeSizeGrid();
}

startGame();
reset();