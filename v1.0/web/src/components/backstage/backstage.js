import $ from 'jquery';
$(document).on('click',function(e){
    console.log(e.target.className)
    if(e.target.className.toLowerCase()=='bill_h3'){
        $(e.target).next('ul').css({display:'block'})
        $(e.target).find('span').css({display:'block'})
        
    }
    if(e.target.className.toLowerCase()=='bill_h2'){
        $(e.target).parent('ul').css({display:'none'})
        $(e.target).parent('ul').prev('h3').find('span').css({display:'none'})
        
    }
    if(e.target.className.toLowerCase()=='bill_span'){
        $(e.target).parent('h3').next('ul').css({display:'none'})
        $(e.target).css({display:'none'})
        
    }
    

})