// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid(e) {
    event.preventDefault();
    const width = document.getElementById('inputWidth').value;
    const height = document.getElementById('inputHeight').value; 
    const canvas = document.getElementById('pixelCanvas');
    canvas.innerHTML = '';

for(var i = 0; i<height; i++) {
    const row = canvas.appendChild(document.createElement('tr'));
        for (var j=0; j<width; j++) {
            const cell = row.appendChild(document.createElement('td'));
            cell.addEventListener('click', changeColor);
            function changeColor(){
                let color = document.getElementById("colorPicker").value;
               // $("tr").eq(i).find("td").eq(j).css("background-color", color);
                cell.style.backgroundColor = color;
            };
            }
        
}
} 


