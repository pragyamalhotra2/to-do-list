$("ul").on("click", "li",function(){
	$(this).toggleClass("completed");
});


//click on x to delete
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();

});

$("input[type='text'").keypress(function(event){
	if(event.which===13){
		var todotext=$(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todotext + "</li>")
	}


});

$(".fa-pencil-alt").click(function(){
	$("input[type='text'").fadeToggle();


});