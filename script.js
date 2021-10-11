const btn_c = document.getElementById("cookie");
const display_score = document.getElementById('score_display');
const btn_m = document.getElementById("purchase_cursor");
const display_cursor = document.getElementById("cursor_display");
const btn_g = document.getElementById("purchase_grandma");
const display_grandma = document.getElementById("grandma_display");
const btn_f = document.getElementById("purchase_farm");
const display_farm = document.getElementById("farm_display");
const btn_b = document.getElementById("purchase_booster");
const display_booster = document.getElementById("booster_display");

let score = parseInt(display_score.textContent);
let click_worth = 1;
console.log(score);

btn_c.addEventListener("click", () => {
    score += click_worth;
    display_score.textContent = score.toString();
    console.log(click_worth);
})


const buy_item = (button, display, time) => {
    if (score >= button.getAttribute('data-min')) {
        score -= button.getAttribute('data-min');
        display_score.textContent = score.toString();
        setInterval(multiplier, time);
        display.textContent = 'item purchased';
        button.removeEventListener('click', buy_item);
    } else {
        display.textContent = 'bake more cookies first!'
    }
}


// const test = () => {
//     console.log('test')
// }

const multiplier = () => {
    score++
    console.log(score);
    display_score.textContent = score.toString();
};

//one click is worth the specified number of cookies
const booster = () => {
    click_worth++;
    console.log(click_worth);
}

//each purchase of a booster increases the click worth by one
//the price of each consecutive booster is doubled
const buy_booster = () => {
    if (score >= btn_b.getAttribute('data-min')) {
        score -= btn_b.getAttribute('data-min');
        display_score.textContent = score.toString();
        booster();

        let min = parseInt(btn_b.getAttribute('data-min'));
        min *= 2;
        btn_b.setAttribute('data-min', min.toString());

        btn_b.textContent = `${min} cookies for a booster`
        display_booster.textContent = `Each click is now worth ${click_worth} cookies!`;

        console.log(min);
    } else {
        display_booster.textContent = 'bake more cookies first!'
    }
}

btn_m.addEventListener("click", buy_item.bind(null, btn_m, display_cursor, 10000));
btn_g.addEventListener("click", buy_item.bind(null, btn_g, display_grandma, 6000));
btn_f.addEventListener("click", buy_item.bind(null, btn_f, display_farm, 2000));
btn_b.addEventListener("click", buy_booster);
