var imgList = Array.from( document.getElementsByClassName('img-item') );
var lightboxContainer = document.querySelector('.lightbox-container');
var lightboxItem = document.querySelector('.lightbox-item');
//2
var currentIndex ;
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');
var closeButton = document.getElementById('close');

//1
for(var i=0;i<imgList.length;i++)
{
    imgList[i].addEventListener('click', function(e){
        currentIndex = imgList.indexOf(e.target);//2
        var imgSrc = e.target.getAttribute('src');
        lightboxContainer.classList.replace('d-none','d-flex');
        lightboxItem.style.backgroundImage = `url(${imgSrc})`;

        
    })
}

//2
//--------------- ( both next and prev functions )--------------------------------------------------
function slide (i){
    currentIndex = currentIndex + i;

    if(currentIndex == -1)
    {
        currentIndex = imgList.length -1;
    }

    if(currentIndex == imgList.length)
    {
        currentIndex = 0;
    }

    var imgSrc = imgList[currentIndex].getAttribute('src');
    lightboxItem.style.backgroundImage = `url(${imgSrc})`;

}

nextButton.addEventListener('click',function (){
    slide(1)
});

prevButton.addEventListener('click',function (){
    slide(-1)
});


//3
function closeSlide (){
    lightboxContainer.classList.replace('d-flex','d-none');
}

closeButton.addEventListener('click', closeSlide);


// slide and close by keyboard
document.addEventListener('keydown', function (e) {
    if(e.key == 'ArrowRight')
    {
        slide(1)
    }
    if(e.key == 'ArrowLeft')
    {
        slide(-1)
    }
    if(e.key == 'Escape')
    {
        closeSlide()
    }
})



//--------------------------------------------------------------------------------------------------


let counter = 0;
let projectCounterElement1 = document.getElementById('projectCounter1');
let projectCounterElement2 = document.getElementById('projectCounter2');
let projectCounterElement3 = document.getElementById('projectCounter3');
let projectCounterElement4 = document.getElementById('projectCounter4');


function setCounter () {
    counter++;
    projectCounterElement1.innerHTML = counter;
    projectCounterElement2.innerHTML = counter;
    projectCounterElement3.innerHTML = counter;
    projectCounterElement4.innerHTML = counter;

    if(counter == 100)
    {
        clearInterval(x);
    }
}

var x = setInterval(() => {
    setCounter()
}, 40);





//---------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------


let aboutOffset = $("#about").offset().top

$(window).scroll(function(){

    let wScroll = $(window).scrollTop();

    if( wScroll > aboutOffset - 150)
    {
        $("#nav").css("backgroundColor","rgba(0,0,0,0.6)");
        // $("#nav").addClass("padd");
        $("#btnUp").fadeIn(500);
    }
    else
    {
        $("#nav").css("backgroundColor","transparent");
        // $("#nav").removeClass("padd");
        $("#btnUp").fadeOut(500);
    }

    // console.log(aboutOffset);
});

$("#btnUp").click(function(){
    // $(window).scrollTop(0);
    $("html,body").animate({scrollTop:0},2000)
})

$("a[href^='#']").click(function(e){
    let Href = e.target.getAttribute('href');
    let sectionOffset = $(Href).offset().top;
    $("html,body").animate({scrollTop:sectionOffset},1000)
})

$(document).ready(function(){

    let colorBoxWidth = $(".colors-box").outerWidth();
    $("#optionsBox").animate({left:`-${colorBoxWidth}`},1000);

    $("#loading .spinner").fadeOut(1000, ()=>{

        $("#loading").fadeOut(1000, ()=>{
            $("#loading").remove();
            $("body").css("overflow-y","auto");
        })

    })


    var typed = new Typed('.element', {
        strings: ['Professional Web Developer', 'Kungfu And kickboxing Champion'],
        typeSpeed:50,
        loop: true,
      });
})


$("#toggleBtn").click(function(){

    let colorBoxWidth = $(".colors-box").outerWidth();
    if ($("#optionsBox").css("left")=="0px") {
        $("#optionsBox").animate({left:`-${colorBoxWidth}`},1000);
    } else {
        $("#optionsBox").animate({left:`0px`},1000);
    }
})

let colorItem = $(".color-item");
colorItem.eq(0).css("backgroundColor","lightgreen")
colorItem.eq(1).css("backgroundColor","tomato")
colorItem.eq(2).css("backgroundColor","#09c")
colorItem.eq(3).css("backgroundColor","orange")
colorItem.eq(4).css("backgroundColor","darkblue")

colorItem.click(function (e) {
    let bgColor = $(e.target).css("backgroundColor");

    $('h2,h3,h4,h5').css('color',bgColor);

})


let bgItem = $(".bg-item");

bgItem.click(function (e) {
    let bgImg = $(e.target).attr("src");

    $('.home').css('backgroundImage',`url(${bgImg})`);

})

