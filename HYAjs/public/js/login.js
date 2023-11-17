document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:8081/getUserId')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));   
    
   })
   
   
   function loadHTMLTable(data){
       const table = document.querySelector('table tbody');
   
       if (data.lenght === 0){
          table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
       }
  
   
   }