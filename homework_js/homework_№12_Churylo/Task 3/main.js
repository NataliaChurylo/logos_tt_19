let box = document.querySelectorAll('div');
let i=0;

while (i < box.length){
    box[i].onclick = function(){
        let address = prompt('Задайте url-адресу зображення');
        this.style.backgroundImage = `url(${address})`;
        this.style.backgroundSize = 'cover';
        this.style.backgroundPosition = 'center';
        this.style.backgroundOrigin = 'border-box';
    }
    i++;
}