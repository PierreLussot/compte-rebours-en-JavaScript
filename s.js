const text = document.querySelector('h1');



function getChrono(params) {
    
const now = new Date().getTime();
const contdouwnDate = new Date('August 25,2022').getTime();

const distanceBase = contdouwnDate - now;
//converti en jour
const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
//converti en heure
const hour =  Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const min =  Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));
const sec =  Math.floor((distanceBase % (1000 * 60)) / (1000));

text.innerHTML = days +' J' + '<br> ' + hour + ' H'+'<br>  ' +  min + ' M' + ' <br> ' + sec + ' S'
}


const contDownInterval = setInterval(()=>{
getChrono()

}, 1000);

getChrono()
/** */
