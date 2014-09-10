$(document).ready(function(){

  function init(){
    initTriggerIndexLinkClick();
  }

  if(isCurrentPathName('/')){
    init();
  }

});

function initTriggerIndexLinkClick(){
  $(document).on('click', '.Home__overlay', function(){
    var linkToClick = $(this).attr('data-link');
    $(linkToClick)[0].click();
  });
}