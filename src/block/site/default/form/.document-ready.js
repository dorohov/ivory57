$(".form__control[type='tel']").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
$(".form__block").validationEngine(
	'attach', {
		promptPosition : "bottomLeft",
		//scrollOffset: 200,		
		scroll: false
	}
); 

//
//
var heading = $('.azbn_modal_catalog').attr('data-catalog-card');
var hidden = $('.azbn_form_hidden');
$('.azbn_modal_catalog').on('click', function(e) {
	hidden.attr({'name':'f[Товар]', 'value':''+heading+''});
	//console.log(hidden.attr('name'));
});