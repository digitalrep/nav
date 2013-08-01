$(function()
{
  var index;
  var tmenus = $(".firstlevel");
  var menus = $(".secondlevel");
	
  $(".navsingle").hover(function()
  {	
	$(this).fadeOut(0).addClass('navhover').fadeIn(400).css("border-left", "solid 1px #000");
  },
  function()
  {
	$(this).removeClass('navhover').css("border-left", "solid 1px #33383a");
  });
	
  $(".firstlevel").each(function()
  {
	$(this).mouseenter(function()
	{
	  if(!$(this).hasClass('navhover'))
	  {
	    $(this).fadeOut(0).addClass('navhover').fadeIn(400).css("border-left", "solid 1px #000");
	  }
	  var pos = $(this).position();
	  index = $(".firstlevel").index(this);
	  $(menus[index]).css("left", pos.left);
	  $(menus[index]).css("top", pos.top + 45);	
	  $(menus[index]).addClass("navlist").fadeIn(400);
	}).mouseleave(function()
	{
	  $(tmenus[index]).removeClass('navhover').css('border-left', 'solid 1px #33383a');
	  $(menus[index]).css("display", "none");
	});
  });
	
  $(".secondlevel").each(function()
  {
	$(this).mouseenter(function()
	{
	  index = $(".secondlevel").index(this);
	  $(this).css("display", "block");
	  $(tmenus[index]).addClass('navhover').fadeIn(400).css("border-left", "solid 1px #000");
	}).mouseleave(function()
	{
	  $(tmenus[index]).removeClass('navhover').css('border-left', 'solid 1px #33383a');
	  $(menus[index]).css("display", "none");
	});
  });
});