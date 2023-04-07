


    var windowHeight = $(window).height();
    var  windowScrollPosTop=$(window).scrollTop();
    var  windowScrollPosBottom= windowHeight+windowScrollPosTop;

//otsivchiviy palka nav
 menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
  
  $('nav li').on('click', function(e) {                
    var w = $(window).width(); if(w < 480 ) {
      menu.slideToggle(); 
    }
  });
  $('.open-menu').height($(window).height());


  //  prekol с картинками
  $('#tablet_picture').css("opacity",0);
  $(window).scroll(function(){
     windowHeight = $(window).height();
     windowScrollPosTop=$(window).scrollTop();
     windowScrollPosBottom= windowHeight+windowScrollPosTop;

    $('#computer_picture').revealOnScroll();
    $('#tablet_picture').revealOnScroll();
    $('#gift-card').revealOnScroll();
    $('.text-precol').slcrolll();
   
   
  });

  $.fn.revealOnScroll = function() {
    return this.each(function(){

                
                var obj = $(this);
                var objOff= obj.offset();
                var objectOffsetTop=objOff.top;
                if(!$(this).hasClass('hidden')){
                  $(this).css("opacity",0).addClass('hidden');
                }
                if(!$(this).hasClass('animation-complete'))
                {if(windowScrollPosBottom>objectOffsetTop){
                  console.log('loshok');
                  $(this).animate({opacity:'1'},4000).addClass('animation-complete');
                }
                  
                }
              
             
    });
  }

  $.fn.slidee=function(){
     return this.each(function(){
      var objj = $(this);
      var objOfff= objj.offset();
      var objectOffsetTopp=objOfff.top;
      if(!$(this).hasClass('hidden')){
        $(this).hide().addClass('hidden');
      }
      if(!$(this).hasClass('animation-complete'))
                {if(windowScrollPosBottom>objectOffsetTopp){
                  $(this).slideDown("6000");
               
                  $(this).addClass('animation-complete');
                }
                  
                }
     });

  }

  function slowScroll(id){
    var offset = 0;
    $('html, body').animate({
      scrollTop: $(id).offset().top - offset
    },1000);
    return false;
  }


// prekol s textom
$.fn.slcrolll=function(){
  return this.each(function(){
   var objj = $(this);
   var objOfff= objj.offset();
   var objectOffsetTopp=objOfff.top;
   if(!$(this).hasClass('animation-complete'))
             {
    if(windowScrollPosBottom>objectOffsetTopp){
               $(this).addClass("come-in");
            
               $(this).addClass('animation-complete');
             }
               
             }
  });

}


//comment section 
if(!$('#display_comment').hasClass('written'))
{$('#display_comment').hide();}

var commentSection = $('#reviews'),
enterButton = commentSection.find('#submit');
enterButton.click(function(){
  $(this).addClass('written');
  $('#display_comment').show();
    var title = $('#comment_name').val();
    var body = $('#comment_content').val();
    $('#display_comment').append('<br>'+'<h3>'+'user: '+title+'</h3><p>'+body+'</p>'+'<br>');
    console.log('<h3>'+title+'</h3><p>'+body+'</p>');
    $('#comment_name').val('');
    $('#comment_content').val('');
});
