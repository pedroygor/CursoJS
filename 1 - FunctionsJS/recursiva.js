let num = 0;
function recursiva (max) {

    if (num >= max)
        return;

    num += 1;
    console.log(num);
    recursiva(max);
}

recursiva(5);