//buttons: cookie, cursor, grandma, farm, booster, bonus
const buttons = document.getElementsByTagName("BUTTON");

//display: score, cursor, grandma, farm, booster, bonus
const display = document.querySelectorAll(".display");

//info: cursor, grandma, farm, booster, bonus
const information = document.querySelectorAll(".solid");

let score = parseInt(display[0].textContent);
let click_worth = 1;
console.log(score);

//clicking the button adds cookies
buttons[0].addEventListener("click", () => {
    score += click_worth;
    display[0].textContent = score.toString();
    console.log(click_worth);
})

//indicators for cursors, farms and grandmas
let cursors = 0;
let grandmas = 0;
let farms = 0;

//buying items, either cursors, grandmas and farms
const buy_item = (button, dpl, info, time) => {
    if (score >= button.getAttribute('data-min')) {
        score -= button.getAttribute('data-min');
        display[0].textContent = score.toString();
        setInterval(multiplier, time);
        dpl.textContent = 'item purchased';

        //adjust indicator number of cursors, grandmas or farms in the info section, taking grammar into account
        switch (info) {
            case information[0]:
                cursors++;
                cursors < 2 ? info.textContent = `${cursors} cursor is currently autoclicking cookies.` : info.textContent = `${cursors} cursors are currently autoclicking cookies.`;
                break;
            case information[1]:
                grandmas++;
                grandmas < 2 ? info.textContent = `${grandmas} grandma is currently baking cookies.`: info.textContent = `${grandmas} grandmas are currently baking cookies.`;
                break;
            case information[2]:
                farms++;
                farms < 2 ? info.textContent = `${farms} farm is currently planting cookie-seeds.`: info.textContent = `${farms} farms are currently planting cookie-seeds.`;
                break;
        }
    } else {
        dpl.textContent = 'bake more cookies first!'
    }
}

const multiplier = () => {
    score++
    console.log(score);
    display[0].textContent = score.toString();
};

//one click is worth the specified number of cookies
const booster = () => {
    click_worth++;
    console.log(click_worth);
}

//each purchase of a booster increases the click worth by one
//the price of each consecutive booster is doubled
const buy_booster = () => {
    if (score >= buttons[4].getAttribute('data-min')) {
        score -= buttons[4].getAttribute('data-min');
        display[0].textContent = score.toString();
        booster();

        let min = parseInt(buttons[4].getAttribute('data-min'));
        min *= 2;
        buttons[4].setAttribute('data-min', min.toString());

        buttons[4].textContent = `${min} cookies for a booster`
        display[4].textContent = `Each click is now worth ${click_worth} cookies!`;

        console.log(min);

        //display in info section
        information[3].textContent = `One click is currently worth ${click_worth} cookies.`

    } else {
        display[4].textContent = 'bake more cookies first!'
    }
}
//create timer


/*var timer = 30;
var interval = setInterval(function() {
    counter--;
    if (timer <= 0) {
        clearInterval(interval);
        return;
    }else{
        console.log(timer);
    }*/

// const countdown = () => {
//     if (time_left < 0) {
//         clearInterval(timer);
//         buttons[5].textContent = "500 cookies for a bonus";
//     } else {
//         time_left < 2 ? buttons[5].textContent = `${time_left} second to go!`: btn_o.textContent = `${time_left} seconds to go!`;
//     }
// }
//
// const time_left = 30;
// let timer = setInterval(countdown, 1000);


//const bonus = while (timer > 0) =>{
//    click_worth *= 2;
//    }
//if (timer <= 0) {
//    console.log(click_worth);
//    }
//}, 1000);
    //todo: temporary doubling, while timer runs




//each purchase of a booster increases the click worth by one
//the price of each consecutive booster is doubled
const buy_bonus = () => {
    if (score >= buttons[5].getAttribute('data-min')) {
        score -= buttons[5].getAttribute('data-min');
        display[0].textContent = score.toString();
        bonus();

        //code

        //display in info section
        info_o.textContent = `200% bonus active!`

    } else {
        display_bonus.textContent = 'bake more cookies first!'
    }
}

(buttons)[1].addEventListener("click", buy_item.bind(null, buttons[1], display[1], information[0], 10000));
(buttons)[2].addEventListener("click", buy_item.bind(null, buttons[2], display[2], information[1], 5000));
(buttons)[3].addEventListener("click", buy_item.bind(null, buttons[3], display[3], information[2], 1000));
(buttons)[4].addEventListener("click", buy_booster);
(buttons)[5].addEventListener("click", buy_bonus);
