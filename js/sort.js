var sum1=0,sum2=0,sum3=0,sum4=0;
function namesort(){
    sum1=sum1+1;
    fetch("https://corona.lmao.ninja/v2/countries", {
    "method": "GET",
    })
    .then(response => response.json()) 
        .then(data => {    
            sorting(data);
        })
        .catch(err => {
            console.log(err);
        }); 

    function sorting (data1) {

        if(sum1 % 2){
            data1.sort(function(a, b) {
                return b.name - a.name;
            }); 
        }else{
            data1.sort(function(a, b) {
                return a.name - b.name;
            });
        }
        
        var x = document.getElementById("stats");
        x.innerHTML = ``;
        data1.forEach(countrystat => {

            var row = x.insertRow(-1);
            var cell_flag = row.insertCell(0);
            var cell_name = row.insertCell(1);
            var cell_total = row.insertCell(2);
            var cell_active = row.insertCell(3);
            var cell_deaths = row.insertCell(4);
    
            cell_flag.innerHTML = `<img class="flag-size" src="${countrystat.countryInfo.flag}">`;
            cell_name.innerHTML = countrystat.country;
            cell_total.innerHTML = countrystat.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            cell_active.innerHTML = countrystat.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            cell_deaths.innerHTML = countrystat.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
        });
    }
}
function casessort(){
    sum2=sum2+1;

    fetch("https://corona.lmao.ninja/v2/countries", {
    "method": "GET",
    })
    .then(response => response.json()) 
        .then(data => {    
            sorting(data);
        })
        .catch(err => {
            console.log(err);
        }); 

    function sorting (data1) {
        
        if(sum2 % 2){
            data1.sort(function(a, b) {
                return b.cases - a.cases;
            }); 
        }else{
            data1.sort(function(a, b) {
                return a.cases - b.cases;
            });
        }
        var x = document.getElementById("stats");
        x.innerHTML = ``;
        data1.forEach(countrystat => {

            var row = x.insertRow(-1);
            var cell_flag = row.insertCell(0);
            var cell_name = row.insertCell(1);
            var cell_total = row.insertCell(2);
            var cell_active = row.insertCell(3);
            var cell_deaths = row.insertCell(4);
    
            cell_flag.innerHTML = `<img class="flag-size" src="${countrystat.countryInfo.flag}">`;
            cell_name.innerHTML = countrystat.country;
            cell_total.innerHTML = countrystat.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            cell_active.innerHTML = countrystat.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            cell_deaths.innerHTML = countrystat.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
        });
    }
}
function activesort(){
    sum3=sum3+1;
    fetch("https://corona.lmao.ninja/v2/countries", {
    "method": "GET",
    })
    .then(response => response.json()) 
        .then(data => {    
            sorting(data);
        })
        .catch(err => {
            console.log(err);
        }); 

    function sorting (data1) {
        if(sum3 % 2){
            data1.sort(function(a, b) {
                return b.active - a.active;
            }); 
        }else{
            data1.sort(function(a, b) {
                return a.active - b.active;
            });
        }
        
        var x = document.getElementById("stats");
        x.innerHTML = ``;
        data1.forEach(countrystat => {

            var row = x.insertRow(-1);
            var cell_flag = row.insertCell(0);
            var cell_name = row.insertCell(1);
            var cell_total = row.insertCell(2);
            var cell_active = row.insertCell(3);
            var cell_deaths = row.insertCell(4);
    
            cell_flag.innerHTML = `<img class="flag-size" src="${countrystat.countryInfo.flag}">`;
            cell_name.innerHTML = countrystat.country;
            cell_total.innerHTML = countrystat.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            cell_active.innerHTML = countrystat.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            cell_deaths.innerHTML = countrystat.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
        });
    }
}
function deathsort(){
    sum4=sum4+1;
    fetch("https://corona.lmao.ninja/v2/countries", {
    "method": "GET",
    })
    .then(response => response.json()) 
        .then(data => {    
            sorting(data);
        })
        .catch(err => {
            console.log(err);
        }); 

    function sorting (data1) {
        if(sum4 % 2){
            data1.sort(function(a, b) {
                return b.deaths - a.deaths;
            }); 
        }else{
            data1.sort(function(a, b) {
                return a.deaths - b.deaths;
            });
        }
        
        var x = document.getElementById("stats");
        x.innerHTML = ``;
        data1.forEach(countrystat => {

            var row = x.insertRow(-1);
            var cell_flag = row.insertCell(0);
            var cell_name = row.insertCell(1);
            var cell_total = row.insertCell(2);
            var cell_active = row.insertCell(3);
            var cell_deaths = row.insertCell(4);
    
            cell_flag.innerHTML = `<img class="flag-size" src="${countrystat.countryInfo.flag}">`;
            cell_name.innerHTML = countrystat.country;
            cell_total.innerHTML = countrystat.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            cell_active.innerHTML = countrystat.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            cell_deaths.innerHTML = countrystat.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
        });
    }
}
