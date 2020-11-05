function f1(callback) {
    setTimeout(() => {
        console.log('f1');
        if(callback) callback();
    }, 2000);
}
function f2(callback) {
    setTimeout(() => {
        console.log('f2');
        if(callback) callback();
    }, 3000);
}
function f3(callback) {
    setTimeout(() => {
        console.log('f3');
        if(callback) callback();
    }, 1000);
}
function olamundo(callback) {
    console.log('Olá mundo');
    if(callback) callback();
}


f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}
function f2Callback(){
    f3(f3Callback);
}
function f3Callback(){
olamundo();
}