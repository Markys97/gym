let faqItemImgs= document.querySelectorAll('.faq__item-img');
let faqItemTexts= document.querySelectorAll('.faq__item-text');


let imgSrc;

faqItemImgs.forEach(faqItemImg=>{
    faqItemImg.addEventListener('click',e=>{
        imgSrc= e.target.src;
        
      faqItemTexts.forEach(faqItemText =>{
          if(faqItemImg.dataset.id === faqItemText.dataset.id){
              let textHeight= getComputedStyle(faqItemText).height
              
              e.target.src= e.target.dataset.close
                 if(textHeight === '0px'){
                      faqItemText.classList.add('show-text')
                  }else{
                   faqItemText.classList.remove('show-text');
                   e.target.src= imgSrc
                  }
          }
      })




    //    
    })
})
















