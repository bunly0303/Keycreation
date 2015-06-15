$(document).ready(function(){
   $('img[alt="pic1"]').mouseover(function(){
      $('img[alt="big1"]').css('visibility','hidden');
       $('img[alt="pic1-big"]').css('visibility','visible');
       $(this).css('opacity', '0');
       $('img[alt="pic2"]').css('opacity', 0);
       $('img[alt="pic3"]').css('opacity', 0);
       $('img[alt="pic4"]').css('opacity', 0);
       $('img[alt="pic5"]').css('opacity', 0);
      // $('img[alt="pic1-hover"]').css('visibility','visible');
    
   });
    $('img[alt="pic1"]').mouseout(function(){
      $('img[alt="big1"]').css('visibility','visible');
        $('img[alt="pic1-big"]').css('visibility','hidden');
        $(this).css('opacity','1');
        $('img[alt="pic2"]').css('opacity', 1);
        $('img[alt="pic3"]').css('opacity', 1);
        $('img[alt="pic4"]').css('opacity', 1);
        $('img[alt="pic5"]').css('opacity', 1);
    });
    //Hover 2
        
        $('img[alt="pic2"]').mouseover(function(){
        $(this).css('opacity', '0');
        $('img[alt="big1"]').css('opacity', '0');
        $('img[alt="pic2-big"]').css('opacity', '1');
        $('img[alt="pic1"]').css('opacity', 0);
        $('img[alt="pic3"]').css('opacity', 0);
        $('img[alt="pic4"]').css('opacity', 0);
        $('img[alt="pic5"]').css('opacity', 0);
      // $('img[alt="pic1-hover"]').css('visibility','visible');
    
   });
    $('img[alt="pic2"]').mouseout(function(){
        $(this).css('opacity','1');
        $('img[alt="big1"]').css('opacity', '1');
        $('img[alt="pic2-big"]').css('opacity', '0');
        $('img[alt="pic1"]').css('opacity', 1);
        $('img[alt="pic3"]').css('opacity', 1);
        $('img[alt="pic4"]').css('opacity', 1);
        $('img[alt="pic5"]').css('opacity', 1);
        
   });
    
    //hover 3
    $('img[alt="pic3"]').mouseover(function(){
        $(this).css('opacity','0');
        $('img[alt="big1"]').css('opacity', '0');
        $('img[alt="pic3-big"]').css('opacity', 1);
        $('img[alt="pic1"]').css('opacity', 0);
        $('img[alt="pic2"]').css('opacity', 0);
        $('img[alt="pic4"]').css('opacity', 0);
        $('img[alt="pic5"]').css('opacity', 0);
    });
    $('img[alt="pic3"]').mouseout(function(){
        $(this).css('opacity','1');
        $('img[alt="big1"]').css('opacity', '1');
        $('img[alt="pic3-big"]').css('opacity', 0);
        $('img[alt="pic1"]').css('opacity', 1);
        $('img[alt="pic2"]').css('opacity', 1);
        $('img[alt="pic4"]').css('opacity', 1);
        $('img[alt="pic5"]').css('opacity', 1);
    });
    //hover 4
    $('img[alt="pic4"]').mouseover(function(){
        $(this).css('opacity','0');
        $('img[alt="big1"]').css('opacity', '0');
        $('img[alt="pic4-big"]').css('opacity', 1);
        $('img[alt="pic1"]').css('opacity', 0);
        $('img[alt="pic2"]').css('opacity', 0);
        $('img[alt="pic3"]').css('opacity', 0);
        $('img[alt="pic5"]').css('opacity', 0);
    });
    $('img[alt="pic4"]').mouseout(function(){
        $(this).css('opacity','1');
        $('img[alt="big1"]').css('opacity', '1');
        $('img[alt="pic4-big"]').css('opacity', 0);
        $('img[alt="pic1"]').css('opacity', 1);
        $('img[alt="pic2"]').css('opacity', 1);
        $('img[alt="pic3"]').css('opacity', 1);
        $('img[alt="pic5"]').css('opacity', 1);
    });
    
    //hover 5
    $('img[alt="pic5"]').mouseover(function(){
        $(this).css('opacity','0');
        $('img[alt="big1"]').css('opacity', '0');
        $('img[alt="pic5-big"]').css('opacity', 1);
        $('img[alt="pic1"]').css('opacity', 0);
        $('img[alt="pic2"]').css('opacity', 0);
        $('img[alt="pic3"]').css('opacity', 0);
        $('img[alt="pic4"]').css('opacity', 0);
    });
    $('img[alt="pic5"]').mouseout(function(){
        $(this).css('opacity','1');
        $('img[alt="big1"]').css('opacity', '1');
        $('img[alt="pic5-big"]').css('opacity', 0);
        $('img[alt="pic1"]').css('opacity', 1);
        $('img[alt="pic2"]').css('opacity', 1);
        $('img[alt="pic3"]').css('opacity', 1);
        $('img[alt="pic4"]').css('opacity', 1);
    });
});