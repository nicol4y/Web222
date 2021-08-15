function show(){

var m = document.getElementById('wages');

if(m.children.length === 0){

var gg = document.createElement('input');
gg.type="text";
gg.id="wage";
gg.name="wage"; 
gg.placeholder="Hourly Wage";

m.appendChild(gg);
}

}