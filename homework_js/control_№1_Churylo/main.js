let buttonEdit = document.querySelector('.btn-edit');
let blockEdit = document.querySelector('.block-edit');
let textBlock = document.querySelector('.main-block');
let tags = document.querySelector('.tags');
let buttonSave = document.querySelector('.btn-save');

buttonEdit.addEventListener('click',function(){
    blockStyle.style.display = 'none';
    blockEdit.style.display = 'block';
    tags.value = textBlock.innerHTML;

})

buttonSave.addEventListener('click',function(){
    textBlock.innerHTML = tags.value;
    blockEdit.style.display = 'none';
})

let buttonStyle = document.querySelector('.btn-style');
let blockStyle = document.querySelector('.block-style');

buttonStyle.addEventListener('click',function(){
    blockEdit.style.display = 'none';
    blockStyle.style.display = 'block';
})

let styleForm = document.forms['styleForm'];

for (let i=0; i<styleForm.textSize.length; i++){
    styleForm.textSize[i].addEventListener('click',function(){
        textBlock.style.fontSize = this.value;
    })
}

styleForm.fontSelect.addEventListener('change',function(){
    textBlock.style.fontFamily = this.value;
})

let colorsBG = ['black','red','orange','yellow','white','lime','blue','violet','purple'];
let colorsBlock = document.querySelector('.block-colors');
let textBGColor = document.getElementsByClassName('color-background');

for (let i=0; i<colorsBG.length; i++){
    textBGColor[i].style.backgroundColor = colorsBG[i];
}

let colorTextButton = document.querySelector('.btn-textColor');
let backgroundButton = document.querySelector('.btn-backgroundColor');

backgroundButton.addEventListener('click',function(){
    colorsBlock.style.display = 'flex';
    for (let i=0; i<textBGColor.length; i++){
        textBGColor[i].onclick = function(){
            textBlock.style.backgroundColor = colorsBG[i];
            colorsBlock.style.display = 'none';
        }
    }
})

colorTextButton.addEventListener('click',function(){
    colorsBlock.style.display = 'flex';
    for (let i=0; i<textBGColor.length; i++){
        textBGColor[i].onclick = function(){
            textBlock.style.color = colorsBG[i];
            colorsBlock.style.display = 'none';
        }
    }
})

styleForm.boldText.addEventListener('click',function(){
    if (this.checked) textBlock.style.fontWeight = this.value;
    else textBlock.style.fontWeight = '';
})

styleForm.cursiveText.addEventListener('click',function(){
    if (this.checked) textBlock.style.fontStyle = this.value;
    else textBlock.style.fontStyle = '';
})

let buttonAdd = document.querySelector('.btn-add');
let chooseBlock = document.querySelector('.block-table-list');
let allElementsBlock = document.querySelector('.all-elements');
let chooseForm = document.forms['chooseForm'];
let listChoose = document.forms['listChoose'];
let tableChoose = document.forms['tableChoose'];

buttonAdd.addEventListener('click', function(){
    allElementsBlock.style.display = 'none';
    chooseBlock.style.display = 'block';
    listChoose.style.display = 'none';
    tableChoose.style.display = 'none';
})

for(let i = 0; i<chooseForm.elements.length; i++){
    chooseForm.elements[i].addEventListener('click', function(){
        if (chooseForm.elements[i].value == 'table'){
            tableChoose.style.display = 'block';
            listChoose.style.display = 'none';
        }
        else if (chooseForm.elements[i].value == 'list'){
            listChoose.style.display = 'block';
            tableChoose.style.display = 'none';
        }
    })
}

let buttonCreateList = document.querySelector('.btn-createList');
let buttonCreateTable = document.querySelector('.btn-createTable');

buttonCreateList.addEventListener('click',function(){
    allElementsBlock.style.display = 'block';
    chooseBlock.style.display = 'none';

    let li = [];
    for(let i=0; i<listChoose.li.value; i++){
        li += `<li>Item ${i+1}</li>`;
    }

    let typeLi = `type="${listChoose.marksType.value}"`;
    let ul = `<ul ${typeLi}>${li}</ul>`;
    tags.value += ul;
    listChoose.reset();
    chooseForm.reset();
})

buttonCreateTable.addEventListener('click',function(){
    allElementsBlock.style.display = 'block';
    chooseBlock.style.display = 'none'; 

    let border = `style = "width: ${tableChoose.widthTD.value}px; height:${tableChoose.heightTD.value}px; border: ${tableChoose.widthBorder.value}px ${tableChoose.borderType.value} ${tableChoose.borderColor.value}"`; 

    let td = [];
    for(let i=0; i<tableChoose.countTD.value; i++){
        td += `<td ${border}>TD</td>`;
    }
    let tr = [];
    for(let i=0; i<tableChoose.countTR.value; i++){
        tr += `<tr>${td}</tr>`;
    }
    let table = `<table><tbody>${tr}</tbody></table>`;
    tags.value += table;
    tableChoose.reset();
    chooseForm.reset();
})