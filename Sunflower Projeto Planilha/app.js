function dadosDasCrops(statusDaCrop) {
    let crop = ['',sunflower, potato, pumpkin, carrot, cabbage, soybean, beetroot, cauliflower, parsnip, eggplant, corn, radish, wheat, kale, barley];
    //console.log(`        Semente = ${crop[statusDaCrop][0]}
    //    Tempo = ${crop[statusDaCrop][1]}
    //    Custo = ${crop[statusDaCrop][2]} coins
    //    Venda = ${crop[statusDaCrop][3]} coins
    //    Stock = ${crop[statusDaCrop][4]} sementes`);
    let semente = document.getElementById('resultado1');
    semente.innerHTML = `Semente = ${crop[statusDaCrop][0]}`;
    let tempo = document.getElementById('resultado2');
    tempo.innerHTML = `Tempo = ${crop[statusDaCrop][1]}`;
    let custo = document.getElementById('resultado3');
    custo.innerHTML = `Custo = ${crop[statusDaCrop][2]} coins`;
    let venda = document.getElementById('resultado4');
    venda.innerHTML = `Venda = ${crop[statusDaCrop][3]} coins`;
    let stock = document.getElementById('resultado5');
    stock.innerHTML = `Stock = ${crop[statusDaCrop][4]} sementes`;
}


let statusDaCrop = parseInt(prompt('Gostaria de ver o status de qual Crop? Digite o numero correspondente da Crop:\n 01 - Sunflower\n 02 - Potato\n 03 - Pumpkin\n 04 - Carrot\n 05 - Cabbage\n 06 - Soybean\n 07 - Beetroot\n 08 - Cauliflower\n 09 - Parsnip\n 10 - Eggplant\n 11 - Corn\n 12 - Radish\n 13 - Wheat\n 14 - Kale\n 15 - Barley'));
//Semente - Tempo - Custo - Venda - Estoque
let sunflower = ['Sunflower', '00:01:00', 0.01, 0.02, 400];
let potato = ['Potato', '00:05:00', 0.1, 0.14, 200];
let pumpkin = ['Pumpkin', '00:30:00', 0.2, 0.4, 150];
let carrot = ['Carrot', '01:00:00', 0.5, 0.8, 100];
let cabbage = ['Cabbage', '02:00:00', 1, 1.5, 90];
let soybean = ['Soybean', '03:00:00', 1.5, 2.3, 90];
let beetroot = ['Beetroot', '04:00:00', 2, 2.8, 80];
let cauliflower = ['Cauliflower', '08:00:00', 3, 4.25, 80];
let parsnip = ['Parsnip', '12:00:00', 5, 6.5, 60];
let eggplant = ['Eggplant', '16:00:00', 6, 8, 50];
let corn = ['Corn', '20:00:00', 7, 9, 50];
let radish = ['Radish', '24:00:00', 7, 9.5, 40];
let wheat = ['Wheat', '24:00:00', 5, 7, 40];
let kale = ['Kale', '36:00:00', 7, 10, 30];
let barley = ['Barley', '48:00:00', 10, 12, 30];

dadosDasCrops(statusDaCrop);