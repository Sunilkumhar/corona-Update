fetch("https://corona.lmao.ninja/v2/countries", {
    "method": "GET",
})
.then(response => response.json()) 
    .then(data => {    
        console.log(data)
        outputEach (data);
        // chart(data);
        // mapbox(data);
        leading(data);
        showDataOnMap(data);
    })
    .catch(err => {
        console.log(err);
    }); 

fetch("https://corona.lmao.ninja/v2/all", {
    "method": "GET",
})
.then(response => response.json()) 
    .then(data => {    
        console.log(data)
        outputWorldwide (data);
    })
    .catch(err => {
        console.log(err);
    }); 

const input = document.getElementById("myInput");

input.addEventListener('keyup',function (){
    var  filter, table, tr, td, i, txtValue;
    filter = input.value.toUpperCase();
    table = document.getElementById("stats");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
        }       
    }

})

function outputEach(data1) {
    
    const x = document.getElementById("stats");

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



function outputWorldwide (ww){

    const lastUpdated = document.querySelector('.lastUpdated');
    const x =new Date(ww.updated).toUTCString();
    lastUpdated.innerHTML=`<h4>Cases are updated latest by ${x}</h4>`

    // console.log(ww);
    const worldWide = document.querySelector('.worldwide');

    worldWide.innerHTML=`
    <h2 style="text-decoration: underliner;" >World Wide</h2>
    <h4 style="display: inline;" >Total Cases : ${ww.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
    <h4 style="display: inline;">Total Recovered : ${ww.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
    <h4 style="display: inline;">Total Deaths : ${ww.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
    <h4 style="display: inline;">Today's Cases : ${ww.todayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
    <h4 style="display: inline;">Today's Deaths : ${ww.todayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
    `

}

function leading(data){
    let first =0,second=0,third =0;
    let f,s,t;
    data.forEach(i => {
        if(i.cases>first){
            first = i.cases;
            f=i;
        }
    });
    console.log(first, f);
    data.forEach(i => {
        if(i.cases>second && i.cases != first){
            second = i.cases;
            s=i;
        }
    });
    console.log(second, s);
    data.forEach(i => {
        if(i.cases>third && i.cases != first && i.cases != second){
            third = i.cases;
            t=i;
        }
    });
    console.log(third, t);

    const top = document.querySelector('.top')
    top.innerHTML=`
    <strong style="letter-spacing: 1px;font-size: 16px;"><marquee onmouseover="stop()" onmouseout="start()">
      Top 3 countries with highest number of cases.  1. ${f.country} : ${(f.cases).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}  2. ${s.country} : ${s.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}  3. ${t.country} : ${t.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </marquee>
    </strong>
    `
    
}

// function mapbox(data) {
//     mapboxgl.accessToken = 'pk.eyJ1Ijoic3VuaWw3ODk0NTYxMjMiLCJhIjoiY2tiZzRid2RqMTF2NjJ4bnZzbzl2OHUwYiJ9.hxAKQkdzqvJEJBlAPVfQUQ';
//     var map = new mapboxgl.Map({
//         container: 'map',
//         style: 'mapbox://styles/mapbox/dark-v10',
//         center: [12.550343, 55.665957],
//         zoom: 2,
//         center: [45,30],
//     });
    
//     data.forEach(i => {
//         var marker = new mapboxgl.Marker()
//         .setLngLat([i.countryInfo.long, i.countryInfo.lat])
//         .addTo(map);
//     });
   
// }

var map;
var infoWindow;

var casesTypeColors = {
    cases: '#cc1034',

}
const mapCentre = {
    lat: 12.550343,
    lng: 55.665957
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: mapCentre,
        zoom: 2,
        styles: mapStyle
    });
    infoWindow = new google.maps.InfoWindow();
}

const showDataOnMap = (data, casesType="cases") => {
    data.map((country)=>{
        let countryCenter = {
            lat: country.countryInfo.lat,
            lng: country.countryInfo.long
        }

        var countryCircle = new google.maps.Circle({
            strokeColor: casesTypeColors[casesType],
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: casesTypeColors[casesType],
            fillOpacity: 0.35,
            map: map,
            center: countryCenter,
            radius: country[casesType]
        });

        var html = `
            <div class="info-container">
                <div class="info-flag" style="background-image: url(${country.countryInfo.flag});">
                </div>
                <div class="info-name">
                    ${country.country}
                </div>
                <div class="info-confirmed">
                    Total: ${country.cases}
                </div>
                <div class="info-recovered">
                    Recovered: ${country.recovered}
                </div>
                <div class="info-deaths">   
                    Deaths: ${country.deaths}
                </div>
            </div>
        `

        var infoWindow = new google.maps.InfoWindow({
            content: html,
            position: countryCircle.center
        });

        google.maps.event.addListener(countryCircle, 'mouseover', function() {
            infoWindow.open(map);
        });

        google.maps.event.addListener(countryCircle, 'mouseout', function(){
            infoWindow.close();
        })

    })

}
