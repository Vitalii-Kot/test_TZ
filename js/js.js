jQuery('form button').click( function () {
  let form = jQuery(this).closest('form');  
      let actUrl = form.attr('action');
      jQuery.ajax({
        url: actUrl, 
        type: 'post',
        dataType: 'html', 
        data: form.serialize(),  
        success: function(data) { 
          $('#myModal').show();
      },
      });   
});

/* ========== Плавный якорь ===================================== */


if (anchor == true) {
	$(document).ready(function() { 
		$('a[href^="#"]').on('click', function() {
			var target = $(this).attr('href');
			if (target.search('#modal') == -1) {
				$('html, body').animate({scrollTop: $(target).offset().top}, 800);
				return false;
			}
		});  
	});
}



/* ========== Модалка ===================================== */

// Получить модальный
let modal = document.getElementById("myModal");
// Получить кнопку, которая открывает модальный
let btn = document.getElementById("myBtn");
// Получить элемент <span>, который закрывает модальный
let span = document.getElementsByClassName("close")[0];
// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
  modal.style.display = "block";
}
// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}
// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* ========== /Модалка ===================================== */

