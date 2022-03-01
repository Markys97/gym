let faqItemImgs= document.querySelectorAll('.faq__item-img');
let faqItemTexts= document.querySelectorAll('.faq__item-text');
let burgerBtn= document.querySelector('.header__burger');
let btnCloseNav= document.querySelector('.header__close-menu');
let mobileNav=document.querySelector('.header__mobile');
let body = document.querySelector('body');
console.log(body)


burgerBtn.addEventListener('click',e=>{
    mobileNav.classList.add('open-mobile')
    burgerBtn.style.display='none';
    btnCloseNav.style.display='block';
    body.classList.add('close')
    
})

btnCloseNav.addEventListener('click',e=>{
    mobileNav.classList.remove('open-mobile')
    
    burgerBtn.style.display='block';
    btnCloseNav.style.display='none';

    body.classList.remove('close')
})



let imgSrc;

faqItemImgs.forEach(faqItemImg=>{
    faqItemImg.addEventListener('click',e=>{
        imgSrc= e.target.src;
        console.log(imgSrc)
        
      faqItemTexts.forEach(faqItemText =>{
          if(faqItemImg.dataset.id === faqItemText.dataset.id){
              let textHeight= getComputedStyle(faqItemText).height
              
              e.target.src= e.target.dataset.close
                 if(textHeight === '0px'){
                     e.target.src=faqItemImg.dataset.close
                      faqItemText.classList.add('show-text')
                  }else{
                   faqItemText.classList.remove('show-text');
                   faqItemImg.setAttribute('src', imgSrc) 
                   console.log(imgSrc)
                  }
          }
      })




    //    
    })
})
















