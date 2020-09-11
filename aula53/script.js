function random(min, max) {
    let r = Math.random() * (max - min) + min;
    r = Math.floor(r);
    return r;
}
const min = 1;
const max = 50;
let rand = random(min, max);
let i = 1;

while (rand !== 10) {
    rand = random(min, max);
    console.log(i, rand);
    i++;
}