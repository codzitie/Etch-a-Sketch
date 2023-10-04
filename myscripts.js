let color = 'red';
let click = true;

function createBoard(size){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div)=>div.remove());
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    amount = size*size;
    for (i = 0; i<amount; i++){
        let square = document.createElement('div');
        square.addEventListener('mousemove',colorSquare);
        square.style.backgroundColor = 'grey';
        board.insertAdjacentElement('beforeend',square);
    }
};

createBoard(16);

function changeSize(input){
    if (input >=2 && input <=100){
        createBoard(input);
    }else{
        console.log('many square')
    }
    
};

function colorSquare(){
    if (click) {
        if(color === 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }else{
            this.style.backgroundColor = color;
        };
    };
        
            
};

function changeColor(choice){
    color = choice;
}

function resetBoard(){
    click = !false;
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div)=>div.remove());
    // squares.forEach((div) => (div.style.backgroundColor = 'grey'));
    value = document.querySelector('input').value;
    createBoard(value);
}

document.querySelector('body').addEventListener('click',(e)=>{
    if (e.target.tagname != 'BUTTON'){
        click = !click;
        if(click){
            document.querySelector('.mode').textContent = 'Mode: Coloring'
        }else{
            document.querySelector('.mode').textContent = 'Mode: Not Coloring'

        }
    }
})