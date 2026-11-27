export const SKY_SCRIPT =
  '(function(){try{var d=document.documentElement,h=new Date().getHours();d.dataset.sky=h>=6&&h<18?"day":"night";d.dataset.weather="clear";}catch(e){document.documentElement.dataset.sky="day";document.documentElement.dataset.weather="clear";}})();';
