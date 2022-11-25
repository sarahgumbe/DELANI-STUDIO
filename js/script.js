//what do we do functionalities/responces
$(document).ready(function(){
$("#design-icon").click(function(){
$("#design-icon").slideDown('1500').hide('1000');
$("#DESIGN").show("1500");
});
$("#DESIGN").click(function(){
$("#DESIGN").slideUp('1500')
$("#design-icon").slideDown("1500");
});
});