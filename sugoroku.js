const sugoroku_items = ["一", "二", "三", "四", "五", "六"];

const btn = document.getElementById("btn");

const disp = document.getElementById("disp");

const num = 0;

btn.addEventListener('click', function () {
    const num = Math.floor(Math.random() * sugoroku_items.length);
    disp.innerHTML = sugoroku_items[num];

})