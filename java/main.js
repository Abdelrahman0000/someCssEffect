

$(document).ready(function(){

    $('.navegation ul li').click(function() {

        $(this).addClass('active').siblings().removeClass('active')
    })






},)
let cont=document.querySelector('.head-cont')

for(var i=0 ;i<=400;i++)
{
let tex1=document.createElement('div');
tex1.classList.add('block')
cont.appendChild(tex1)
}
let block=document.querySelectorAll('.block')

let animation=anime.timeline({
targets:block,
easing:'easeInOutExpo',
loop:true,
delay:anime.stagger(10,{start:50})
})
console.log(1)
animation
.add({
 
    scale:0,
    translateX:function(){
        
        return anime.random(360,2100);
    },
    
    translateX:function(){
        return anime.random(360,-2100);
    },
    
    rotate:function(){
        return anime.random(-360,360);
    },
    
    duration:function(){
        return anime.random(500,3000);
    }
    })
.add({
scale:1,
translateX:0,

translateX:0,

rotate:0, 

duration:function(){
 
    return anime.random(500,3000);
}
})
