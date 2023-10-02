function createBoard(size){
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div)=>div.remove());
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    amount = size*size;
    for (i = 0; i<amount; i++){
        let square = document.createElement('div');
        square.addEventListener('mousemove',()=> {
            square.style.backgroundColor = 'pink';
        });
        square.style.backgroundColor = 'grey';
        square.style.border = 'white';
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