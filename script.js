function updateDate()
{
    let a=new Date();
    let hr=a.getHours();
    let mn=a.getMinutes();
    let ss=a.getSeconds();
    let hr2,mn2,ss2;
    hr2=document.getElementById("hour1");
    hr2.innerHTML=hr;
    mn2=document.getElementById("min1");
    mn2.innerHTML=mn;
    ss2=document.getElementById("sec1");
    ss2.innerHTML=ss;
    let dd1,dd2,mm1,mm2=["January","February","March","April","May","June","July","August","September","October","November","December"],yy1,yy2,ddd1,ddd2=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],finaldate="";
    dd1=a.getDate();
    mm1=mm2[a.getMonth()];
    yy1=a.getFullYear();
    ddd1=ddd2[a.getDay()];
    document.getElementById("date").innerHTML=(dd1+" "+mm1+", "+yy1).toUpperCase();
    document.getElementById("day").innerHTML=ddd1.toUpperCase();
    
}
setInterval(updateDate,1000);