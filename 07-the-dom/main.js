const favColours = ['#922B21', '#76448A', '#1F618D', '#148F77', '#1E8449', '#239B56', '#B7950B', '#AF601A', '#909497', '#616A6B']

const rectangleWrapper = document.getElementById('rectangleWrapper');

for (let color of favColours) {
    const colorRect = document.createElement('div');
    const colorDiv = document.createElement('div');
    const colorBlock = document.createElement('div');
    const colorDivParagraph = document.createElement('p');

    colorDivParagraph.innerText = color;
    colorDiv.setAttribute('id', color);

    rectangleWrapper.appendChild(colorRect);
    colorRect.appendChild(colorDiv);
    colorRect.appendChild(colorBlock);
    colorRect.appendChild(colorDivParagraph);

}
