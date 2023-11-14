document.addEventListener('DOMContentLoaded', function() {
 fetch('http://localhost:8081/getAll')
 .then(response => response.json())
 .then(data => loadHTMLTable(data['data']));   
 
})


function loadHTMLTable(data){
    const table = document.querySelector('table tbody');



    if (data.lenght === 0){
       table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
    }

var pr1 = data[0].parente1; //Grau de parentesco carta 1
var pr2 = data[0].parente2; //Grau de parentesco carta 2
var pr3 = data[0].parente3; //Grau de parentesco carta 3
var pr4 = data[0].parente4; //Grau de parentesco carta 4
var pr5 = data[0].parente5; //Grau de parentesco carta 5
var pr6 = data[0].parente6; //Grau de parentesco carta 6

var np1 = data[0].nome1; //nome parente carta 1
var np2 = data[0].nome2; //nome parente carta 2
var np3 = data[0].nome3; //nome parente carta 3
var np4 = data[0].nome4; //nome parente carta 4
var np5 = data[0].nome5; //nome parente carta 5
var np6 = data[0].nome6; //nome parente carta 6

    console.log(pr1, pr2, pr3, pr4, pr5, pr6, np1, np2, np3, np4, np5, np6)

}



