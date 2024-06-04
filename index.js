let homeScore = 0;
let awayScore = 0;

let homeScoreEl = document.getElementById('homeScore');
let awayScoreEl = document.getElementById('awayScore');
console.log(homeScoreEl)
console.log(awayScoreEl)

function homePlusOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore;
}
function homePlusTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore;
}
function homePlusThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore;
}
function awayPlusOne() {
    awayScore += 1
    awayScoreEl.textContent = awayScore;
}
function awayPlusTwo() {
    awayScore += 2
    awayScoreEl.textContent = awayScore;
}
function awayPlusThree() {
    awayScore += 3
    awayScoreEl.textContent = awayScore;
}