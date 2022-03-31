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

createUnitPixel(16);