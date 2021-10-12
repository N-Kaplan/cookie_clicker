const btn_c = document.getElementById("cookie");
const display_score = document.getElementById('score_display');
const btn_m = document.getElementById("purchase_cursor");
const display_cursor = document.getElementById("cursor_display");
const btn_g = document.getElementById("purchase_grandma");
const display_grandma = document.getElementById("grandma_display");
const btn_f = document.getElementById("purchase_farm");
const display_farm = document.getElementById("farm_display");

let score = parseInt(display_score.textContent);
console.log(score);

btn_c.addEventListener("click", () => {
    score++;
    display_score.textContent = score.toString();
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

btn_m.addEventListener("click", buy_item.bind(null, btn_m, display_cursor, 10000));
btn_g.addEventListener("click", buy_item.bind(null, btn_g, display_grandma, 6000));
btn_f.addEventListener("click", buy_item.bind(null, btn_f, display_farm, 2000));

/*
const buy_grandma = () => {
    if (score >= 100) {
        score -= 100;
        setInterval(multiplier, 100000)
        display_purchase.textContent = 'grandma purchased';
        btn_m.removeEventListener('click', buy_grandma);
    } else {
        display_purchase.textContent = 'bake more cookies first!'
    }
    btn_m.addEventListener("click", buy_grandma);

    const buy_farm = () => {
        if (score >= 1000) {
            score -= 1000;
            setInterval(multiplier, 10000)
            display_purchase.textContent = 'farm purchased';
            btn_m.removeEventListener('click', buy_farm);
        } else {
            display_purchase.textContent = 'bake more cookies first!'
        }
        btn_m.addEventListener("click", buy_farm);
}*/


}());