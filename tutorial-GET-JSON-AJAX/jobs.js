

xreq = new XMLHttpRequest(); //start request
xreq.open('GET', "jobs.json"); //open request
xreq.onload = () => {
var btn = document.getElementById('btn');
var result = document.getElementById('result');

btn.addEventListener('click', () =>{
    var xdata = JSON.parse(xreq.responseText) //responseText


    xdata.forEach(x => {
        result.innerHTML = x.xdata
    
});


});







} //process request
xreq.send() //send request
