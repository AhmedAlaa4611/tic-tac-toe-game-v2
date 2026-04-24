var char = 'X';

window.onload = function() {
    window.setTimeout(function() {
        changeGameTitle('Plater ' + char + ' Turn');
    }, 1400);
}

var buttons = document.querySelectorAll('button');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        var p = this.querySelector('p');
        p.innerHTML = char;
        this.disabled = true;
        check();
    }
}

var isWiner = false;

function check() {
    // raws.
    if (buttons[0].innerHTML === buttons[1].innerHTML  && buttons[1].innerHTML === buttons[2].innerHTML) {
        playerWins(0, 1, 2);
    }
    if (buttons[3].innerHTML === buttons[4].innerHTML  && buttons[4].innerHTML === buttons[5].innerHTML) {
        playerWins(3, 4, 5);
    }
    if (buttons[6].innerHTML === buttons[7].innerHTML  && buttons[7].innerHTML === buttons[8].innerHTML) {
        playerWins(6, 7, 8);
    }

    // columns.
    if (buttons[0].innerHTML === buttons[3].innerHTML  && buttons[3].innerHTML === buttons[6].innerHTML) {
        playerWins(0, 3, 6);
    }
    if (buttons[1].innerHTML === buttons[4].innerHTML  && buttons[4].innerHTML === buttons[7].innerHTML) {
        playerWins(1, 4, 7);
    }
    if (buttons[2].innerHTML === buttons[5].innerHTML  && buttons[5].innerHTML === buttons[8].innerHTML) {
        playerWins(2, 5, 8);
    }

    // diagonal.
    if (buttons[0].innerHTML === buttons[4].innerHTML  && buttons[4].innerHTML === buttons[8].innerHTML) {
        playerWins(0, 4, 8);
    }
    if (buttons[2].innerHTML === buttons[4].innerHTML  && buttons[4].innerHTML === buttons[6].innerHTML) {
        playerWins(2, 4, 6);
    }

    if (isWiner === false)
    {
        char = (char == 'X') ? 'O' : 'X';
        changeGameTitle('Plater ' + char + ' Turn');

        if (isStalemate())
        {
            for (var i = 0; i < buttons.length; i++) {
                var p = buttons[i].querySelector('p');
                p.style.color = "tomato";
            }

            changeGameTitle('Sorry, No player wins');
        }
    }
}

function playerWins(b1, b2, b3) {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    changeGameTitle('Plater ' + char + ' Wins');

    var p1 = buttons[b1].querySelector('p');
    var p2 = buttons[b2].querySelector('p');
    var p3 = buttons[b3].querySelector('p');

    p1.style.color = "tomato";
    p2.style.color = "tomato";
    p3.style.color = "tomato";

    isWiner = true;
}

function isStalemate() {
    var stalemate = true;

    for (var i = 0; i < buttons.length; i++)
    {
        if (buttons[i].disabled === false) {
            return false;
        }
    }

    return true;
}

var gameDivTitle = document.querySelector('.text-stroke');
var gamePTitle = document.querySelector('.text-stroke p');
function changeGameTitle(text) {
    gamePTitle.innerHTML = text;
    gameDivTitle.setAttribute('data-p-content', text);
}
