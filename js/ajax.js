// $( document ).ready(function() {
//     $("#btn").click(
// 		function(){
// 			sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
// 			return false; 
// 		}
// 	);
// });
 
// function sendAjaxForm(result_form, ajax_form, url) {
//     $.ajax({
//         url:     url, //url страницы (action_ajax_form.php)
//         type:     "POST", //метод отправки
//         dataType: "html", //формат данных
//         data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
//         success: function(response) { //Данные отправлены успешно
//         	result = $.parseJSON(response);
//         	$('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
//     	},
//     	error: function(response) { // Данные не отправлены
//             $('#result_form').html('Ошибка. Данные не отправлены.');
//     	}
//  	});
// }


// try {
// 	$.ajax ({
// 		type: 'POST',
// 		url: 'https://jsonplaceholder.typicode.com',
// 		contentType: 'aplication/json; charset=utf-8',
// 		timeuot: 1500, 
// 		async: false,
// 		data: JSON.stringify({
// 			first__name: localStorage.form_firstName,
// 			phone: validPhone,
// 			address: localStorage.form_address,
// 		})
// 	})
// }
// } catch (e) {
// 	console.error(e);
// } finally {
// 	const redirectURL //
// } try {
// 	window.location.replace(redirectURL);
// } catch(e) {
// 	window.location = redirectURL;
// }