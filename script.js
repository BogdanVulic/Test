let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]
let forma = document.querySelector('#forma');
let kupac = document.querySelector('#kupac');
let napomena = document.querySelector('.textarea-field');
let select = document.querySelector('#select-dino');

let arr = [];

dinos.forEach(dino => {
    let option =document.createElement('option');
    option.value = dino.id + ':' + dino.name;
    option.textContent = dino.name;
    select.append(option);
})

const isValid = () => {
    kupac.value != '' && select.value != '' && kupac.value.length >= 4?
    makeObj():window.alert('ENTRY NOT VALID!');
}
const makeObj = () => {
    if(napomena.value == '') napomena.value = '-----';
    let obj = {
        dinosaurus: select.value.split(':')[1],
        kupac: kupac.value,
        napomena: napomena.value,
        cena: dinos[select.value.split(':')[0]].cena
    }
    arr.push(obj);
    objToDOM(obj);
}
let ispisi = document.querySelector('#btn-all');
ispisi.addEventListener('click', () => {
    console.log(arr);
})


let itemContainer = document.querySelector('#item-container');
const objToDOM = (obj) => {
    let item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `
        <p><span>Купац:</span> ${obj.kupac}</p>
        <p><span>Напомена:</span> ${obj.napomena}</p>
        <p><span>Диносаурус: </span> ${obj.dinosaurus}</p>
        <p><span>Цена: </span> ${obj.cena}</p>
    `
    let p = document.createElement('p');
    let obrisi = document.createElement('button');
    obrisi.textContent = 'Обриши';
    obrisi.addEventListener('click', () => {
        item.remove();
        arr.splice(arr.indexOf(obj),1)
    })
    p.append(obrisi);
    item.append(p);
    itemContainer.append(item);
    
}
forma.addEventListener('submit', (event) => {
    event.preventDefault();
    isValid();
    kupac.value = ''; napomena.value = '';
})