let count = document.getElementById('count');
let increaseBtn = document.getElementById('increaseBtn');
let decreaseBtn = document.getElementById('decreaseBtn');

increaseBtn.addEventListener('click', () => {
    let countValue = Number(count.innerHTML);
     countValue++;
     count.innerHTML = countValue;
})

decreaseBtn.addEventListener('click', () => {
    let countValue = Number(count.innerHTML);
    countValue--;
    count.innerHTML = countValue;
})