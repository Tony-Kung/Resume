//key api
let C1 ={
    CityName1 : '新北市',
    CityName2 : 'New Taipei'
}

let C2 ={
    CityName1 : '台北市',
    CityName2 : 'Taipei'
}
let C3 ={
    CityName1 : '桃園市',
    CityName2 : 'Peach orchard'
}

let C4 ={
    CityName1 : '台中市',
    CityName2 : 'Taichung'
}

let C5 ={
    CityName1 : '高雄市',
    CityName2 : 'Kaohsiung'
}
let mykey ="4473c22efc0bb4b7f1b39402fdb98ccc";
var city='';
async function getweather(){
   
   var theplace =  $("#selectElem option:selected").text()
   

   if(theplace == C1.CityName1){
       city = C1.CityName2
   }
   else if(theplace == C2.CityName1){
    city = C2.CityName2
   }
   else if(theplace == C3.CityName1){
    city = C3.CityName2
   }
   else if(theplace == C4.CityName1){
    city = C4.CityName2
   }
   else{
    city = C5.CityName2
   }
   //console.log(city);

   let url='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+mykey;

    let d = await fetch(url);
    let dj = await d.json();
  
    //console.log(dj.weather[0].main);
    document.getElementById("Ans").innerHTML= theplace + ' Weather is :' + dj.weather[0].main
}

// $(document).ready(function (){
        
//         var colleges=['請選擇城市','新北市','台北市','桃園市','台中市','高雄市'];
//         //var collegeSelect=document.getElementById("selectElem");
//         var inner="";
//         for(var i=0;i<colleges.length;i++){
//         inner=inner+'<option value=i>'+colleges[i]+'</option>';
//         }
//         console.log(inner);

//         document.getElementById("selectElem")=inner;

  
//     });



