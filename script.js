const btn_c = document.getElementById("cookie");
const display_score = document.getElementById('score_display');
const btn_m = document.getElementById("purchase_multiplier");
const display_purchase = document.getElementById("purchase_display");




let score = parseInt(display_score.textContent);
console.log(score);

btn_c.addEventListener("click", () => {
    score++;
    display_score.textContent = score.toString();
})


const buy_cursor = () => {
    if (score >= 10) {
        score -= 10;
        setInterval(multiplier, 10000)
        display_purchase.textContent = 'cursor purchased';
        btn_m.removeEventListener('click', buy_cursor);
    } else {
        display_purchase.textContent = 'bake more cookies first!'
    }
}


const multiplier = () => {
    score++
    console.log(score);
    display_score.textContent = score.toString();
};

btn_m.addEventListener("click", buy_cursor);
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