   var oLearn = document.getElementById('container-learn');
   var aLi = oLearn.getElementsByTagName('li');
   var aImg = oLearn.getElementsByTagName('img');
   var aSpan = oLearn.getElementsByTagName('span');
   for (var i = 0; i < aLi.length; i++) {
       aLi[i].index = i;
       aLi[i].onclick = function () {
           for (var i = 0; i < aLi.length; i++) {
               aLi[i].className = '';
               aImg[i].className = '';
               aSpan[i].className = 'hidden';
           }
           this.className = 'selected';
           aImg[this.index].className = 'img-selected';
           aSpan[this.index].className = ''
       };
   }