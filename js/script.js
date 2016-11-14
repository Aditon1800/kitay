jQuery(document).ready(function() {

  // FAQ

  if ($('.faq-list__question')) {

    var $quest = $('.faq-list__question');
    var $easy = $('.faq-list__answer');

    $quest.each(function() {
      $(this).on('click', function() {

        var $answer = $(this).next($easy);
        var $child = $(this).children('span');
        var $span =$('.faq-list__question span');


        if($answer.is(':hidden')) {
            $answer.slideDown();
            $span.removeClass('click-qw-icon-minus').addClass('click-qw-icon');
            $child.removeClass('click-qw-icon').addClass('click-qw-icon-minus')
            $easy.not($answer).slideUp();
          } else { 
            $answer.slideUp();
            $child.removeClass('click-qw-icon-minus').addClass('click-qw-icon')
          }
         return false;
      });
    });
  };

  // Why-us-title block
  if ($('.why-us-title')) {

    var $whyTitle = $('.why-us-title');
    var $whyList = $('.why-us-list');

    $whyTitle.each(function() {
      $(this).on('click', function() {
        
        var $whyListNext = $(this).next($whyList);
        var $questIcon = $(this).children('.icon-title');

        if ($whyListNext.is(':hidden')) {
            $whyListNext.slideDown();
            $questIcon.removeClass('icon-title_plus').addClass('icon-title_minus');

        } else { 
          $whyListNext.slideUp();
          $questIcon.removeClass('icon-title_minus').addClass('icon-title_plus');
        }
      
         return false;
      });
    });
  }

  // Mobile menu
  if ($('.mobile-menu-btn')) {
    var $menuBtn = $('.mobile-menu-btn');
    var $mobileNav = $('.mobile-nav');
    var $menuBtnClose = $('.btn-close');

    $menuBtn.on('click', function() {
      $mobileNav.slideDown();
    })

    $menuBtnClose.on('click', function() {
      $mobileNav.slideUp();
    })
  };

  // Select
  if ($('.modal-form')) {
    var $select = $('.modal-form .select');
      $select.on('click', function() {
        var $selectDrop = $(this).next('.modal-form .select-drop');
        if($selectDrop.is(':hidden')) {
          $selectDrop.slideDown(300);
        } else {
          $selectDrop.slideUp(300);
        }
        return false;
      })
    }

  // Next button on modal form
  if ($('.btn-modal-form')) {

    var btnNext = $('.btn-modal-form');

    // Assign click event to all Next buttons
    $.each(btnNext, function (key, btn) {
      $(btn).on('click', nextBlock);
    });

    // Get next form block
    function nextBlock () {
      var elStep = $(this).parents('.modal-form');

      if ( elStep.data('is-last') === undefined ) {
        elStep.hide()
              .next()
              .show();
      };

      return false;
    }
  }



  // Popup menu
  if ($('#btn-uni-desc') && ($('#popup-btn'))) {
    var $modalBtn = $('#popup-btn');
    var $modalForm = $('.modal-form');
    var $modalFormFirst= $('.modal-form-first');
    var $overlay = $('#overlay');
    var $descBtn = $('#btn-uni-desc');
    var $popup= $('#popup-window');


    $descBtn.on('click', function() {
      $popup.fadeIn();
      $overlay.fadeIn('fast');
    })

    $modalBtn.on('click', function() {
      $modalFormFirst.fadeIn();
      $overlay.fadeIn('fast');
    })

    $overlay.on('click', function() {
      $popup.fadeOut('fast');
      $modalForm.fadeOut();
      $(this).fadeOut('fast');
    })
  }
});

