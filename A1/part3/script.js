function appendDisplay(val){
    console.log("appending: " + val);
    var data = document.getElementById('calc-display');
    data.innerHTML = data.innerHTML + val;
}

function calculate(){
    console.log("evaluating result");
    var data = document.getElementById('calc-display');
    data.innerHTML = eval(data.innerHTML);
}