'use strict';
// let block = document.getElementsByClassName('.block1');
let totBlock = document.getElementById('yes');
let totBlock2 = document.getElementById('yes1');
let blocks = document.getElementById('blocks');

totBlock.addEventListener('click', ()=>{
    totBlock.innerHTML = ' ';
    totBlock.innerText += 'Нужно сделать селфи втроём на память о сегодняшнем дне';
    totBlock.style.width = '135px';
    totBlock.style.height = '130px';
    totBlock.style.fontSize = '12px';
})
totBlock2.addEventListener('click', ()=>{
    totBlock2.innerHTML = ' ';
    totBlock2.style.width = '135px';
    totBlock2.style.height = '130px';
    totBlock2.style.fontSize = '12px';
    totBlock2.innerText += 'Сфоткай предмет красного/розовго цвета или маленького размера'
})

totBlock.addEventListener('dblclick', ()=>{
    totBlock.innerText = '17';
    totBlock.style.width = '60px';
    totBlock.style.height = '60px';
    totBlock.style.color = '#FF033E';
    totBlock.style.fontSize = '16px';
    totBlock.style.fontWeight = '700';
})

totBlock2.addEventListener('dblclick', ()=>{
    totBlock2.innerText = '17';
    totBlock2.style.width = '60px';
    totBlock2.style.height = '60px';
    totBlock2.style.color = '#FF033E';
    totBlock2.style.fontSize = '16px';
    totBlock2.style.fontWeight = '700';
})

