const favColours = ['#922B21', '#76448A', '#1F618D', '#148F77', '#1E8449', '#239B56', '#B7950B', '#AF601A', '#909497', '#616A6B']

const rectangleWrapper = document.getElementById('rectangleWrapper');

for (let color of favColours) {
    const colorRect = document.createElement('div');
    const colorDiv = document.createElement('div');
    const colorBlock = document.createElement('div');
    const colorDivParagraph = document.createElement('p');

    colorDivParagraph.innerText = color;
    colorDiv.setAttribute('class', 'box');
    colorDiv.setAttribute('id', `id-${color}`);

    setTimeout(() => {
        console.log(colorDiv.id);
    }, 1000)

    colorDiv.style.backgroundColor = color;
    colorDiv.style.padding = "50px 50px 0 50px";

    rectangleWrapper.appendChild(colorRect);
    colorRect.appendChild(colorDiv);
    colorRect.appendChild(colorBlock);
    colorRect.appendChild(colorDivParagraph);

}
