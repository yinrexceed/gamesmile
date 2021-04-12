/*===================================================================================*/
/*	ANIMATIONS ON SCROLL
/*===================================================================================*/

$(document).ready(function() {
	var waypointClass = '[class*="post"]';
	var animationClass = 'fadeInUp';
	var delayTime;

	$(waypointClass).waypoint(function() {
		delayTime += 100;
		$(this).delay(delayTime).queue(function(next){
			$(this).toggleClass('animated');
			$(this).toggleClass(animationClass);
			delayTime = 0;
			next();
		});
	},
	{
		offset: '90%',

	});

    var showTopClass = '[class*="sectionabout"]';
    $(showTopClass).waypoint(function() {
		$('a.back-to-top').fadeIn('slow');
	},
	{
		offset: 100,

	});

    var showTopClass = '[class*="slidersection"]';
    $(showTopClass).waypoint(function() {
		$('a.back-to-top').fadeOut('slow');
	},
	{
		offset: -50,

	});

    $('a.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      loop: true,
      centeredSlides: true,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    $(".game-thumb").click(function() {
        var imageUrl = $(this).attr("rel");
        $(this).closest('div.game-image').find('img.game-show').attr("src",imageUrl);
    });

		$(document).on('submit', 'form', function (e) {
			e.preventDefault();
			var oForm = $(this);
    	var formId = oForm.attr("id");
			var category = $("#"+formId+"-category").val();
			var company = $("#"+formId+"-company").val();
			var name = $("#"+formId+"-name").val();
			var kana = $("#"+formId+"-kana").val();
		  var email = $("#"+formId+"-email").val();
		  var message = $("#"+formId+"-message").val();
		  var dataString = 'category=' + category + '&company=' + company + '&name=' + name + '&kana=' + kana + '&email=' + email+ '&message=' + message;

		    function isValidEmail(emailAddress) {
		        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
		        return pattern.test(emailAddress);
		    }
		    if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
		        $.ajax({
		            type: "POST",
		            url: "sendmail.php",
		            data: dataString,
		            success: function () {
									$("#"+formId+"-company").val('');
									$("#"+formId+"-name").val('');
									$("#"+formId+"-kana").val('');
									$("#"+formId+"-email").val('');
									$("#"+formId+"-message").val('');
		              $('.'+formId+'-alert').fadeIn(1000).delay(3000).fadeOut(2000);
		            }
		        });
		    } else {
		        //$('.error').fadeIn(1000);
		        //$('.success').fadeOut(500);
		    }
		    return false;
		});


});
