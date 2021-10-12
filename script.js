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

const buy_bonus = () => {
    if (score >= buttons[5].getAttribute('data-min')) {
        score -= buttons[5].getAttribute('data-min');
        display[0].textContent = score.toString();

        //display in info section while the clock is running
        information[4].textContent = `200% bonus active!`

        // variable for the timer is declared but it's value is null before clicking
        let start_timer = null;

        //create countdown
        let clock = 5;
        click_worth *=2;
        console.log(click_worth);
        const countdown = () => {
            if (clock > 0) {
                clock--;
                clock < 2 ? buttons[5].textContent = `${clock} second to go!`: buttons[5].textContent = `${clock} seconds to go!`;
                display[5].textContent = "Bonus active, hurry!";
            } else {
                buttons[5].textContent = "500 cookies for a bonus";
                click_worth /=2;
                console.log(click_worth);
                //stop countdown
                clearInterval(start_timer);
                information[4].textContent = "No bonus is currently running.";
                display[5].textContent = "You don't have a bonus running...";
            }
        };

        //start countdown
        start_timer = setInterval(countdown, 1000);


    } else {
        display[5].textContent = 'bake more cookies first!'
    }
}

(buttons)[1].addEventListener("click", buy_item.bind(null, buttons[1], display[1], information[0], 10000));
(buttons)[2].addEventListener("click", buy_item.bind(null, buttons[2], display[2], information[1], 5000));
(buttons)[3].addEventListener("click", buy_item.bind(null, buttons[3], display[3], information[2], 1000));
(buttons)[4].addEventListener("click", buy_booster);
(buttons)[5].addEventListener("click", buy_bonus);
