function createUnitPixel(uSize)
{
    const container = document.querySelector('#canvas');
    const content = [uSize];
    const containerWidth=600;
    for(var i=0;i<uSize**2;i++)
    {
        content[i]=document.createElement('div');
        content[i].classList.add('unit');
        content[i].setAttribute('id','sq'+i);
        content[i].style.width=containerWidth/uSize+'px';
        content[i].style.height=containerWidth/uSize+'px';
        container.appendChild(content[i]);
    }
}
function delUnit(){
    const container = document.querySelector('#canvas');
    container.textContent="";
}
function addEvLis(){
    
    document.querySelectorAll('.unit').forEach(item => {
        item.addEventListener('mouseover', event =>
          item.style.backgroundColor='red')
      });

}
function reset() {
    delUnit();
    sqrs=-1;
    while(sqrs<0 ||sqrs>100||isNaN(sqrs)|| !(/^\d+$/.test(sqrs))) 
        sqrs=prompt("Number Of Squares per Side : ","Enter a number between 1 to 100");
    createUnitPixel(sqrs);
    addEvLis();
}

var sqrs=5;
createUnitPixel(sqrs);
addEvLis();
document.getElementById("reset").onclick = () =>reset();