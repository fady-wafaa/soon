
let newYear = () => {
    
    let countDate = new Date('Dec 31 , 2021 00:00:00').getTime();
  
    const now = new Date().getTime();
     let  gap = countDate - now;

     let second = 1000;
        minute = second * 60;
        hour = minute * 60;
        day = hour * 24;

        let D = Math.round(gap/ (day));
              H  = Math.round(gap % (day) / (hour));
              M =  Math.round(gap % (hour) / (minute));
             S  =  Math.round(gap % (minute) / (second));

             document.getElementById('day').innerHTML = D;
             document.getElementById('hour').innerHTML = H;
             document.getElementById('minute').innerHTML = M;
             document.getElementById('second').innerHTML = S;

}

setInterval(()=>{
    newYear()
},1000)