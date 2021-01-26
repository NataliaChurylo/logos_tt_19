// let keysSmall = ['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace','Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','Caps Lock','a','s','d','f','g','h','j','k','l',';',"'",'Enter','Shift','z','x','c','v','b','n','m',',','.','/','Shift',''];

let letters = ['`','1','2','3','4','5','6','7','8','9','0','-','=','q','w','e','r','t','y','u','i','o','p','[',']','\\','a','s','d','f','g','h','j','k','l',';',"'",'z','x','c','v','b','n','m',',','.','/'];

let keysCode = ['192','49','50','51','52','53','54','55','56','57','48','189','187','8','9','81','87','69','82','84','89','85','73','79','80','219','221','220','20','65','83','68','70','71','72','74','75','76','186','222','13','16','90','88','67','86','66','78','77','188','190','191','16','32'];

let keyboard = document.querySelector('.keyboard');
let buttonSmall;
for (let i=0; i<letters.length; i++){
    buttonSmall = document.createElement('div');
    buttonSmall.classList.add('smallButtons');
    buttonSmall.innerText = letters[i];
    keyboard.appendChild(buttonSmall);
}

let buttonBig = () => document.createElement('div');
let backspace = buttonBig(), tab = buttonBig(), caps = buttonBig(), enter = buttonBig(), shift = buttonBig(), shift2 = buttonBig(), space = buttonBig();

let position = (btn, n, name) => {
    btn.innerText = name;
    btn.classList.add('bigButtons');
    return keyboard.insertBefore(btn, keyboard.children[n]);
}

position(backspace,14,'Backpace');
position(tab,15,'Tab');
position(caps,29,'Caps Lock');
position(enter,41,'Enter');
position(shift,42,'Shift');
position(shift2,56,'Shift');
position(space,57,'');

backspace.style.width = '110px';
tab.style.width = '105px';
caps.style.width = '120px';
enter.style.width = '95px';
shift.style.width = '130px';
shift2.style.width = '130px';
space.style.width = '800px';

let allButtons  = document.querySelectorAll('div');
let textarea = document.querySelector('textarea');
let keyDown = n => keyboard.children[n].style.backgroundColor = 'lightgrey';

for(let i = 1; i < allButtons.length; i++){
    document.addEventListener('keydown', function(event){
        // if (event.keyCode == keysCode[16]){
        //     if (event.position == '1') keyDown(42);
        //     else if (event.position =='2') keyDown(56);
        // }
        if(event.keyCode == keysCode[i-1]) allButtons[i].style.backgroundColor = 'lightgrey';
    })
    document.addEventListener('keyup', function(event){
        if(event.keyCode == keysCode[i-1]) allButtons[i].style.backgroundColor = '';
    })
}
