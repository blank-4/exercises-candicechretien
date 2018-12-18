function temps() {
    var d = new Date();
    console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
    
    document.getElementById("horloge").innerHTML = d.getFullYear()+""+d.getDate()+" "+d.getMonth()+" "+d.getHours()+" "+d.getMinutes()+" "+d.getSecondes();

}
setInterval (temps,1000);