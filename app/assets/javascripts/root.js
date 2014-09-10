$(document).ready(function(){

  function init(){
    initToggleHomeOverlay();
    initTriggerIndexLinkClick();
  }

  if(isCurrentPathName('/')){
    init();
  }

});

function initToggleHomeOverlay(){
  $(document).on('mouseenter', '.Home__overlay', function(){
    // $('.Home__overlay').css('opacity', '0');
    var elemToToggle = $(this).attr('data-toggle-class');
    var elemNewOpacity = $(this).attr('data-new-opacity');
    $("." + elemToToggle).fadeTo(350, elemNewOpacity);
    $(this).closest('.Home__overlay').css('opacity', '0');
  });
}

function initTriggerIndexLinkClick(){
  $(document).on('click', '.Home__overlay', function(){
    var linkToClick = $(this).attr('data-link');
    $(linkToClick)[0].click();
  });
}