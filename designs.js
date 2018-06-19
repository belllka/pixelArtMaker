// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	let row = parseInt(document.getElementById("inputHeight").value);
	let column = parseInt(document.getElementById("inputWidth").value);
	let table = document.getElementById("pixelCanvas");

	while(table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }

	for (let i=0; i<row; ++i) {
		let tr = table.appendChild(document.createElement('tr'));
		for (let j=0; j<column; ++j) {
			let td = tr.appendChild(document.createElement('td'));
            //td.id = "cell"+ i + j;
            td.addEventListener('click', changeColor);

          /*  function changeColor() {
                let color = document.getElementById("colorPicker").value;
                this.style.backgroundColor = color;
                return false;
            }*/

            
            function changeColor(){
                let color = document.getElementById("colorPicker").value;
                $("tr").eq(i).find("td").eq(j).css("background-color", color);
                //td.style.backgroundColor = color;
            };
        }
    
    }
}

