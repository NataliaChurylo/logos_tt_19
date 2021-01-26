let color = document.querySelector('.bg-color');
let image = document.querySelector('.bg-image');

let colorsBG = ['firebrick','red','orange','yellow','lime','limegreen','blue','violet','purple'];
let imagesBG = ['url(image/1.jpg)','url(image/2.jpeg)','url(image/3.jpeg)','url(image/4.jpg)','url(image/5.jpg)','url(image/6.jpg)','url(image/7.jpg)','url(image/8.jpg)','url(image/9.jpg)'];

color.addEventListener('click',function(){
    let boxBG = document.createElement('div');
    boxBG.classList.add('background-box');

    for (let i=0; i<colorsBG.length; i++){
        let bg = document.createElement('div');
        bg.classList.add('small-box');
        bg.style.backgroundColor = colorsBG[i];
        boxBG.appendChild(bg);
        for (let i=0; i<boxBG.children.length; i++){
            boxBG.children[i].addEventListener('click',function(){
                document.body.style.background = colorsBG[i];
            })
        }
    }
    document.body.appendChild(boxBG);
})

image.addEventListener('click',function(){
    let boxBG = document.createElement('div');
    boxBG.classList.add('background-box');

    for (let i=0; i<imagesBG.length; i++){
        let bg = document.createElement('div');
        bg.classList.add('small-box');
        bg.style.backgroundImage = imagesBG[i];
        boxBG.appendChild(bg);
        for (let i=0; i<boxBG.children.length; i++){
            boxBG.children[i].addEventListener('click',function(){
                document.body.style.background = imagesBG[i];
                document.body.style.backgroundSize = 'cover';
            })
        }
    }
    document.body.appendChild(boxBG);
})