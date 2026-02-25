const button = document.getElementById("move");

const getRandomNumber=(num) => {
    return Math.floor(Math.random()* (num+1));
};

const moveButton=() =>{
    const newTop = getRandomNumber((window.innerHeight - button.offsetHeight) - ((3/4) *(window.innerHeight - button.offsetHeight))) +  ((3/4) *(window.innerHeight - button.offsetHeight)) ;
    const newLeft = getRandomNumber(window.innerWidth - button.offsetWidth);

    button.style.top = `${newTop}px`;
    button.style.left = `${newLeft}px`;
};

button.addEventListener('mouseenter', moveButton);

let score =0;

const scoreDisplay = document.getElementById('score-value');

function updateScore(points) {
  score += points;
  scoreDisplay.textContent = score; 
}

runawayBtn.addEventListener('click', () => {
  updateScore(10);
  alert("Caught me!");
});