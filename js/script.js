// Slider
const slider = document.querySelectorAll('.slide'),
      servicesBlock = document.querySelector('.services'),
      btn = document.querySelectorAll('.appointment');
let index = 0;

console.log(slider);

function changeslide(){
    for (let i=0; i<slider.length; i++){
        if(slider[i].classList.contains('active-slide')){
            slider[i].classList.remove('active-slide');
        }
        i++;
        // if(i > slider.length-1){
        //     i=0;
        // }
        console.log(slider[i]);
        slider[i].classList.add('active-slide');
       
        console.log(1);
    }
}

setInterval(changeslide, 5000);


