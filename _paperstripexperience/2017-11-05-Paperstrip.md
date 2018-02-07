---
layout: default
title: Paperstrip
project_year: 2016
img: /img/paperstrip.jpg
---

<script>
$('body').append('<div class="progress"></div>')
$('body').css('background-color','hsl(195, 100%, 7%)');
$('body').append('<div class="container__button clearfix"></div>')

$('.container__button').append('<div class="sound"><p>Harpe:</p><div class=" button 4"><img src="/img/btn3.png"></div></div>')
$('.container__button').append('<div class="sound"><p>Piano:</p><div class="button 1"><img src="/img/btn1.png"></div></div>')
$('.container__button').append('<div class="sound"><p>Percu:</p><div class=" button 2bis"><img src="/img/btn2.png"></div></div>')

$('.container__button').append('<div class="sound"><p>Kick:</p><div class=" button 2"><img src="/img/btn2.png"></div></div>')

$('.container__button').append('<div class="sound"><p>Bass:</p><div class=" button 3"><img src="/img/btn3.png"></div></div>')
$('.container__button').append('<div class="sound"><p>Stevie:</p><div class=" button 5"><img src="/img/btn1.png"></div></div>')


$('body').append('<div class="logo_small"><img src="/img/small_whale.png"></div>');
var audio = new Audio('/audio/clap.mp3');
var sax = new Audio('/audio/piano.mp3');
var kick = new Audio('/audio/bass.mp3');
var percu = new Audio('/audio/percu.mp3');

var harpe = new Audio('/audio/harpe.mp3');
var superstation = new Audio('/audio/superstation.mp3');
$('.5').mousedown(function(){
    superstation.play();

  })
  $('.5').mouseup(function(){
      superstation.pause();
      superstation.currentTime = 0


    })
$('.1').click(function(){
      arrayMelody.push(sax);
      arrayGlobal.push(sax);

      $(this).addClass('active');

      $('.1').addClass('waiting');

    })
    $('.2').click(function(){
      $(this).addClass('active');
      arrayPercu=[];
      arrayPercu.push(audio);
      arrayGlobal.push(audio);
      $('.2').addClass('waiting');



    });
    $('.2bis').click(function(){
      $(this).addClass('active');
      arrayPercu=[];
      arrayPercu.push(percu);
      arrayGlobal.push(percu);

      $('.2bis').addClass('waiting');



    });
    $('.3').click(function(){
      arrayMelody.push(kick);
      arrayGlobal.push(kick);

      $(this).addClass('active');
      $('.3').addClass('waiting');

    })
    $('.4').click(function(){
          arrayMelody.push(harpe);
          arrayGlobal.push(harpe);

          $(this).addClass('active');
          $('.4').addClass('waiting');



        })


            var arrayPercu=[];
            var arrayMelody=[];
            var arrayGlobal=[]

              callToSoundCloud()
              function callToSoundCloud (){
                    setInterval(function () {
                      for (var i = 0; i < arrayGlobal.length; i++) {
                        arrayGlobal[i].pause(); // Stop playing
                        arrayGlobal[i].currentTime = 0
                        arrayGlobal[i].play();

                        $('.progress').addClass('launch');
                        $('.button').removeClass('waiting');
                        $('.active').addClass('reading');
                          $('.button .active').each(function() {
                          $(this).find("").addClass('reading');
                        });

                      }
                    },8350);
                  }







</script>
