const btn = document.getElementById("cookie");
const display_score = document.getElementById('score_display');

let score = parseInt(display_score.textContent);
console.log(score);

btn.addEventListener("click", () => {
    score++;
    display_score.textContent = score.toString();
})