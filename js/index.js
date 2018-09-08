var oLearn = document.getElementById('container-learn');
var aLi = oLearn.getElementsByTagName('li');
var aSpan = oLearn.getElementsByTagName('span');
var aIcon = oLearn.getElementsByTagName('p');
var oMark = document.getElementById('mark');
for (var i = 0; i < aLi.length; i++) {
    aLi[i].index = i;
    aLi[i].onclick = function () {
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].className = '';
            aSpan[i].className = 'hidden';
            aIcon[i].className=''
        }
        this.className = 'selected';
        aSpan[this.index].className = '';
        aIcon[this.index].className='icon-selected'
    };
}
