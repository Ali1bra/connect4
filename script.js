const circles = document.querySelectorAll('.circle');
const changeplayer = document.querySelector('.change-player'); 
const currentPlayer = document.querySelector('.current-player');
const reset = document.querySelectorAll('button');
const rowOne = document.querySelectorAll('.row1')
const rowTwo = document.querySelectorAll('.row2')
const rowThree = document.querySelectorAll('.row3')
const rowFour = document.querySelectorAll('.row4')
const rowFive = document.querySelectorAll('.row5')
const gameStarts = document.querySelector('.gamestarts')
const counter = document.querySelector('.counter')
const playerOne = document.querySelector('.playerOne')
const playerTwo = document.querySelector('.playerTwo')
const winnerPopup = document.querySelector('.winner-popup')
const dropdown = document.querySelector('.dropdown')

function dropdownColor(){
    if(dropdown.innerHTML === `tillykke ${playerTwo.innerHTML}`){
        dropdown.style.backgroundColor = 'orange';
    } else {
        dropdown.style.backgroundColor = 'red';
    }
    
}

setInterval(dropdownColor, 100);
















circles.forEach((circle, index) => {
    circle.id = 'circle' + (index + 1);
    circle.innerHTML = (index + 1);
    circle.style.color = '#2b92ff00';
});

let currentTime = 11;

/* kører timeren  */
function startTimer() {
    if (currentTime != 0 && gameStarts.innerHTML === 's') {

    let newTime = currentTime - 1;
    counter.innerHTML = newTime;

    currentTime = newTime;

    } 

}

setInterval(startTimer, 1000);



function giveUserColor(){
    if(changeplayer.innerHTML === '1'){
        playerOne.style.color = 'red';
        playerTwo.style.color = 'white';

    } else {
        playerTwo.style.color = 'orange';
        playerOne.style.color = 'white';

    }
}

setInterval(giveUserColor, 10);



function resetTimer() {
    if(currentTime === 0 &&  changeplayer.innerHTML === '1'){
        currentTime = 11;
        changeplayer.innerHTML = '2'

    } else {
        if(currentTime === 0 &&  changeplayer.innerHTML === '2'){
            currentTime = 11;
            changeplayer.innerHTML = '1'
    
        }

    }
}

setInterval(resetTimer, 1000);

function resetGame() {

    rowFive.forEach(five => {
        five.style.backgroundColor = 'white';
        
    });
    setTimeout(() => {
        rowFour.forEach(four => {
            four.style.backgroundColor = 'white';
        });
    }, 250);
    setTimeout(() => {
        rowThree.forEach(three => {
            three.style.backgroundColor = 'white';
        });
    }, 500);
    setTimeout(() => {
        rowTwo.forEach(two => {
            two.style.backgroundColor = 'white';
        });
    }, 750);
    setTimeout(() => {
        rowOne.forEach(one => {
            one.style.backgroundColor = 'white';
        });
    }, 1000);
    setTimeout(() => {
        circles.forEach((circle, index) => {
            circle.id = 'circle' + (index + 1);
            circle.innerHTML = (index + 1);
        /*     circle.style.color = '#2b92ff00'; */
        });
        location.reload();
    }, 1250);
    

}

reset.forEach(r => {
    r.addEventListener('click', () => {
        resetGame();
        location.reload();
    
    });
});




/*           ROW ONE            */ 
circle29.addEventListener('click', () => {

    if (circle29.innerHTML === '29'){
        if (changeplayer.innerHTML === '1' && circle29.innerHTML === '29') {
            circle29.style.backgroundColor = 'red';
            changeplayer.innerHTML = '2';
            currentTime = 11;
            circle29.classList.add('red');
            
        } else{
            changeplayer.innerHTML = '1';
            circle29.style.backgroundColor = 'orange';
            currentTime = 11;
            circle29.classList.add('yellow');
        }
    }
    circle29.innerHTML = '';
    gameStarts.innerHTML = 's';
});
circle30.addEventListener('click', () => {

    if (circle30.innerHTML === '30'){
        if (changeplayer.innerHTML === '1' && circle30.innerHTML === '30') {
            circle30.style.backgroundColor = 'red';
            changeplayer.innerHTML = '2';
            currentTime = 11;
            circle30.classList.add('red');



        } else{
            changeplayer.innerHTML = '1';
            circle30.style.backgroundColor = 'orange';
            currentTime = 11;
            circle30.classList.add('yellow');



        }
    }
    circle30.innerHTML = '';
    gameStarts.innerHTML = 's';
});
circle31.addEventListener('click', () => {

    if (circle31.innerHTML === '31'){
        if (changeplayer.innerHTML === '1' && circle31.innerHTML === '31') {
            circle31.style.backgroundColor = 'red';
            changeplayer.innerHTML = '2';
            currentTime = 11;
            circle31.classList.add('red');


        } else{
            changeplayer.innerHTML = '1';
            circle31.style.backgroundColor = 'orange';
            currentTime = 11;
            circle31.classList.add('yellow');


        }
    }
    circle31.innerHTML = '';
    gameStarts.innerHTML = 's';
});
circle32.addEventListener('click', () => {

    if (circle32.innerHTML === '32'){
        if (changeplayer.innerHTML === '1' && circle32.innerHTML === '32') {
            circle32.style.backgroundColor = 'red';
            changeplayer.innerHTML = '2';
            currentTime = 11;
            circle32.classList.add('red');


        } else{
            changeplayer.innerHTML = '1';
            circle32.style.backgroundColor = 'orange';
            currentTime = 11;
            circle32.classList.add('yellow');


        }
    }
    circle32.innerHTML = '';
    gameStarts.innerHTML = 's';
});
circle33.addEventListener('click', () => {

    if (circle33.innerHTML === '33'){
        if (changeplayer.innerHTML === '1' && circle33.innerHTML === '33') {
            circle33.style.backgroundColor = 'red';
            currentTime = 11;
            changeplayer.innerHTML = '2';
            circle33.classList.add('red');

        } else{
            changeplayer.innerHTML = '1';
            circle33.style.backgroundColor = 'orange';
            currentTime = 11;
            circle33.classList.add('yellow');


        }
    }
    circle33.innerHTML = '';
    gameStarts.innerHTML = 's';
});
circle34.addEventListener('click', () => {

    if (circle34.innerHTML === '34'){
        if (changeplayer.innerHTML === '1' && circle34.innerHTML === '34') {
            circle34.style.backgroundColor = 'red';
            currentTime = 11;
            circle34.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle34.style.backgroundColor = 'orange';
            currentTime = 11;
            circle34.classList.add('yellow');


        }
    }
    circle34.innerHTML = '';
    gameStarts.innerHTML = 's';
});
circle35.addEventListener('click', () => {

    if (circle35.innerHTML === '35'){
        if (changeplayer.innerHTML === '1' && circle35.innerHTML === '35') {
            circle35.style.backgroundColor = 'red';
            currentTime = 11;
            changeplayer.innerHTML = '2';
            circle35.classList.add('red');

        } else{
            changeplayer.innerHTML = '1';
            circle35.style.backgroundColor = 'orange';
            currentTime = 11;
            circle35.classList.add('yellow');

        }
    }
    circle35.innerHTML = '';
    gameStarts.innerHTML = 's';
});
/* ali was here */

/*            ROW TWO            */


circle22.addEventListener('click', () => {

    if (circle22.innerHTML === '22' && circle29.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle22.innerHTML === '22') {
            circle22.style.backgroundColor = 'red';
            currentTime = 11;
            changeplayer.innerHTML = '2';
            circle22.classList.add('red');

        } else{
            changeplayer.innerHTML = '1';
            circle22.style.backgroundColor = 'orange';
            currentTime = 11;
            circle22.classList.add('yellow');


        }
        circle22.innerHTML = '';
    }

});
circle23.addEventListener('click', () => {

    if (circle23.innerHTML === '23' && circle30.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle23.innerHTML === '23') {
            circle23.style.backgroundColor = 'red';
            currentTime = 11;
            circle23.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle23.style.backgroundColor = 'orange';
            currentTime = 11;
            circle23.classList.add('yellow');
        }
        circle23.innerHTML = '';
    }

});
circle24.addEventListener('click', () => {

    if (circle24.innerHTML === '24' && circle31.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle24.innerHTML === '24') {
            circle24.style.backgroundColor = 'red';
            currentTime = 11;
            circle24.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle24.style.backgroundColor = 'orange';
            currentTime = 11;
            circle24.classList.add('yellow');
        }
        circle24.innerHTML = '';
    }

});
circle25.addEventListener('click', () => {

    if (circle25.innerHTML === '25' && circle32.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle25.innerHTML === '25') {
            circle25.style.backgroundColor = 'red';
            currentTime = 11;
            circle25.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle25.style.backgroundColor = 'orange';
            currentTime = 11;
            circle25.classList.add('yellow');
        }
        circle25.innerHTML = '';
    }

});
circle26.addEventListener('click', () => {

    if (circle26.innerHTML === '26' && circle33.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle26.innerHTML === '26') {
            circle26.style.backgroundColor = 'red';
            currentTime = 11;
            circle26.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle26.style.backgroundColor = 'orange';
            currentTime = 11;
            circle26.classList.add('yellow');
        }
        circle26.innerHTML = '';
    }

});
circle27.addEventListener('click', () => {

    if (circle27.innerHTML === '27' && circle34.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle27.innerHTML === '27') {
            circle27.style.backgroundColor = 'red';
            currentTime = 11;
            circle27.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle27.style.backgroundColor = 'orange';
            currentTime = 11;
            circle27.classList.add('yellow');
        }
        circle27.innerHTML = '';
    }

});
circle28.addEventListener('click', () => {

    if (circle28.innerHTML === '28' && circle35.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle28.innerHTML === '28') {
            circle28.style.backgroundColor = 'red';
            currentTime = 11;
            circle28.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle28.style.backgroundColor = 'orange';
            currentTime = 11;
            circle28.classList.add('yellow');
        }
        circle28.innerHTML = '';
    }

});

/*            ROW THREE            */

circle15.addEventListener('click', () => {

    if (circle15.innerHTML === '15' && circle22.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle15.innerHTML === '15') {
            circle15.style.backgroundColor = 'red';
            currentTime = 11;
            circle15.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle15.style.backgroundColor = 'orange';
            currentTime = 11;
            circle15.classList.add('yellow');
        }
        circle15.innerHTML = '';
    }

});
circle16.addEventListener('click', () => {

    if (circle16.innerHTML === '16' && circle23.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle16.innerHTML === '16') {
            circle16.style.backgroundColor = 'red';
            currentTime = 11;
            circle16.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle16.style.backgroundColor = 'orange';
            currentTime = 11;
            circle16.classList.add('yellow');
        }
        circle16.innerHTML = '';
    }

});
circle17.addEventListener('click', () => {

    if (circle17.innerHTML === '17' && circle24.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle17.innerHTML === '17') {
            circle17.style.backgroundColor = 'red';
            currentTime = 11;
            circle17.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle17.style.backgroundColor = 'orange';
            currentTime = 11;
            circle17.classList.add('yellow');

        }
        circle17.innerHTML = '';
    }

});
circle18.addEventListener('click', () => {

    if (circle18.innerHTML === '18' && circle25.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle18.innerHTML === '18') {
            circle18.style.backgroundColor = 'red';
            currentTime = 11;
            circle18.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle18.style.backgroundColor = 'orange';
            currentTime = 11;
            circle18.classList.add('yellow');
        }
        circle18.innerHTML = '';
    }

});
circle19.addEventListener('click', () => {

    if (circle19.innerHTML === '19' && circle26.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle19.innerHTML === '19') {
            circle19.style.backgroundColor = 'red';
            currentTime = 11;
            circle19.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle19.style.backgroundColor = 'orange';
            currentTime = 11;
            circle19.classList.add('yellow');
        }
        circle19.innerHTML = '';
    }

});
circle20.addEventListener('click', () => {

    if (circle20.innerHTML === '20' && circle27.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle20.innerHTML === '20') {
            circle20.style.backgroundColor = 'red';
            currentTime = 11;
            circle20.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle20.style.backgroundColor = 'orange';
            currentTime = 11;
            circle20.classList.add('yellow');
        }
        circle20.innerHTML = '';
    }

});
circle21.addEventListener('click', () => {

    if (circle21.innerHTML === '21' && circle28.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle21.innerHTML === '21') {
            circle21.style.backgroundColor = 'red';
            currentTime = 11;
            circle21.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle21.style.backgroundColor = 'orange';
            currentTime = 11;
            circle21.classList.add('yellow');
        }
        circle21.innerHTML = '';
    }

});/* ali was here */
/* ROW FOUR */
circle8.addEventListener('click', () => {

    if (circle8.innerHTML === '8' && circle15.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle8.innerHTML === '8') {
            circle8.style.backgroundColor = 'red';
            currentTime = 11;
            circle8.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle8.style.backgroundColor = 'orange';
            currentTime = 11;
            circle8.classList.add('yellow');

        }
        circle8.innerHTML = '';
    }

});
circle9.addEventListener('click', () => {

    if (circle9.innerHTML === '9' && circle16.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle9.innerHTML === '9') {
            circle9.style.backgroundColor = 'red';
            currentTime = 11;
            circle9.classList.add('red');

            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle9.style.backgroundColor = 'orange';
            currentTime = 11;
            circle9.classList.add('yellow');

        }
        circle9.innerHTML = '';
    }

});
circle10.addEventListener('click', () => {

    if (circle10.innerHTML === '10' && circle17.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle10.innerHTML === '10') {
            circle10.style.backgroundColor = 'red';
            currentTime = 11;
            circle10.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle10.style.backgroundColor = 'orange';
            currentTime = 11;
            circle10.classList.add('yellow');

        }
        circle10.innerHTML = '';
    }

});
circle11.addEventListener('click', () => {

    if (circle11.innerHTML === '11' && circle18.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle11.innerHTML === '11') {
            circle11.style.backgroundColor = 'red';
            currentTime = 11;
            circle11.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle11.style.backgroundColor = 'orange';
            currentTime = 11;
            circle11.classList.add('yellow');
        }
        circle11.innerHTML = '';
    }

});
circle12.addEventListener('click', () => {

    if (circle12.innerHTML === '12' && circle19.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle12.innerHTML === '12') {
            circle12.style.backgroundColor = 'red';
            currentTime = 11;
            circle12.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle12.style.backgroundColor = 'orange';
            currentTime = 11;
            circle12.classList.add('yellow');

        }
        circle12.innerHTML = '';
    }

});
circle13.addEventListener('click', () => {

    if (circle13.innerHTML === '13' && circle20.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle13.innerHTML === '13') {
            circle13.style.backgroundColor = 'red';
            currentTime = 11;
            circle13.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle13.style.backgroundColor = 'orange';
            currentTime = 11;
            circle13.classList.add('yellow');
        }
        circle13.innerHTML = '';
    }

});
circle14.addEventListener('click', () => {

    if (circle14.innerHTML === '14' && circle21.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle14.innerHTML === '14') {
            circle14.style.backgroundColor = 'red';
            currentTime = 11;
            circle14.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle14.style.backgroundColor = 'orange';
            currentTime = 11;
            circle14.classList.add('yellow');
        }
        circle14.innerHTML = '';
    }

});

/*       ROW   5      */
circle1.addEventListener('click', () => {

    if (circle1.innerHTML === '1' && circle8.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle1.innerHTML === '1') {
            circle1.style.backgroundColor = 'red';
            currentTime = 11;
            circle1.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle1.style.backgroundColor = 'orange';
            currentTime = 11;
            circle1.classList.add('yellow');
        }
        circle1.innerHTML = '';
    }

});
circle2.addEventListener('click', () => {

    if (circle2.innerHTML === '2' && circle9.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle2.innerHTML === '2') {
            circle2.style.backgroundColor = 'red';
            currentTime = 11;
            circle2.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle2.style.backgroundColor = 'orange';
            currentTime = 11;
            circle2.classList.add('yellow');
        }
        circle2.innerHTML = '';
    }

});
circle3.addEventListener('click', () => {

    if (circle3.innerHTML === '3' && circle10.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle3.innerHTML === '3') {
            circle3.style.backgroundColor = 'red';
            currentTime = 11;
            circle3.classList.add('red');

            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle3.style.backgroundColor = 'orange';
            currentTime = 11;
            circle3.classList.add('yellow');
        }
        circle3.innerHTML = '';
    }

});
circle4.addEventListener('click', () => {

    if (circle4.innerHTML === '4' && circle11.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle4.innerHTML === '4') {
            circle4.style.backgroundColor = 'red';
            currentTime = 11;
            circle4.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle4.style.backgroundColor = 'orange';
            currentTime = 11;
            circle4.classList.add('yellow');
        }
        circle4.innerHTML = '';
    }

});/* ali was here */
circle5.addEventListener('click', () => {

    if (circle5.innerHTML === '5' && circle12.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle5.innerHTML === '5') {
            circle5.style.backgroundColor = 'red';
            currentTime = 11;
            circle5.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle5.style.backgroundColor = 'orange';
            currentTime = 11;
            circle5.classList.add('yellow');
        }
        circle5.innerHTML = '';
    }

});
circle6.addEventListener('click', () => {

    if (circle6.innerHTML === '6' && circle13.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle6.innerHTML === '6') {
            circle6.style.backgroundColor = 'red';
            currentTime = 11;
            circle6.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle6.style.backgroundColor = 'orange';
            currentTime = 11;
            circle6.classList.add('yellow');
        }
        circle6.innerHTML = '';
    }

});
circle7.addEventListener('click', () => {

    if (circle7.innerHTML === '7' && circle14.innerHTML === ''){
        if (changeplayer.innerHTML === '1' && circle7.innerHTML === '7') {
            circle7.style.backgroundColor = 'red';
            currentTime = 11;
            circle7.classList.add('red');
            changeplayer.innerHTML = '2';
        } else{
            changeplayer.innerHTML = '1';
            circle7.style.backgroundColor = 'orange';
            currentTime = 11;
            circle7.classList.add('yellow');
        }
        circle7.innerHTML = '';
    }

});
