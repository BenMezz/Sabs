let i;
let beforeleft = [];
let somethingisclicked;
function clicked(obj, ahh) {
    if (somethingisclicked != undefined && somethingisclicked != obj.src) {
        return;
    }
  if (obj.parentElement.children[1].style.opacity != '100') {
    somethingisclicked = obj.src;
    obj.parentElement.parentElement.style.zIndex = '1';
    obj.parentElement.children[1].style.display = 'block';
    obj.parentElement.parentElement.children[1].style.display = "block";
    setTimeout( () => {
        obj.parentElement.children[1].style.opacity = '100';
        obj.parentElement.parentElement.children[1].style.opacity = "100";
    }, 1);
    obj.style.width = '40vw';
  	obj.style.height = '40vw';
    i = 0;
    while (i < obj.parentElement.parentElement.parentElement.childElementCount) {
    	if (obj.parentElement.parentElement.parentElement.children[i] != obj.parentElement.parentElement) {
      	obj.parentElement.parentElement.parentElement.children[i].style.top = "-20vw";
      }
      i++;
    }
    beforeleft[obj.src] = obj.parentElement.parentElement.style.left;
    obj.parentElement.parentElement.style.left = "2.5vw";
    obj.parentElement.parentElement.parentElement.style.height = "200vh";
  } else {
    somethingisclicked = undefined;
    obj.parentElement.children[1].style.opacity = '0';
    obj.parentElement.parentElement.children[1].style.opacity = "0";
    setTimeout( () => {
        if (obj.style.width == "20vw") {
            obj.parentElement.children[1].style.display = 'none';
            obj.parentElement.parentElement.children[1].style.display = "none";
            obj.parentElement.parentElement.style.zIndex = '';
        }
    }, ahh);
    obj.style.width = '20vw';
    obj.style.height = '20vw';
    i = 0;
    while (i < obj.parentElement.parentElement.parentElement.childElementCount) {
    	if (obj.parentElement.parentElement.parentElement.children[i] != obj.parentElement.parentElement) {
      	obj.parentElement.parentElement.parentElement.children[i].style.top = "2.5vw";
      }
      i++;
    }
    obj.parentElement.parentElement.style.left = beforeleft[obj.src];
    obj.parentElement.parentElement.parentElement.style.height = "25vw";
   }
}