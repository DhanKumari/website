//home loading animation 
const home=[...document.querySelector('.home').childrem];

FormData.forEach((item,i)=>{
    setTimeout(()=>{
        item.style.opacity = 1;
    }, i*100);
})
