//adding card
var cards=document.getElementById("shop").innerHTML=`
<object data="./card.html" height="100%" width="100%">
</object>`;
//adding about page
var about=document.getElementById("about").innerHTML=`
<object data="./about.html" height="100%" width="100%">
</object>`;


//re-direction to home after hiting khalti.html on cancel
var replaced=document.getElementById("CC");

replaced.onclick=function(){
    location.replace("http://127.0.0.1:5500/khalti.html")
}



