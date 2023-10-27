let header = document.querySelector('.header')
let headerHeight = document.querySelector('.header').clientHeight
let sticky = header.offsetTop
let margin = 120
let main = document.querySelector('.main')
let body = document.querySelector('body')
let burger = document.querySelector('.header-burger')
let burgerMenu = document.querySelector('.header-dropdown')
window.onscroll = function () {
	headerFixed()
}
function headerFixed() {
	if (window.pageYOffset > sticky) {
		header.classList.add('fixed')
		main.style.paddingTop = headerHeight + 'px'
		//body.style.paddingTop = margin + 'px'
	} else {
		header.classList.remove('fixed')
		main.style.paddingTop = 0

	}
}

burger.onclick = function(){
	if ((window.pageYOffset) === 0){
		header.classList.toggle('fixed');
		main.classList.toggle('_padding-fix')
	}
	
	burgerMenu.classList.toggle('_active')
	burger.classList.toggle('_open')
	body.classList.toggle('scroll_disable')

}








$(function(){
	$('.reviews__more').click(function(){
		$('.reviews-item__hidden').slideToggle(300)
	})



	$('.programs-item__more').click(function(){
		$('.programs-item__row-hidden').slideToggle(300, function(){
		});
		
		$('.programs-item__row-hidden').css({'display' : 'flex'});
		return false;
	})

	$('.programs-tabs__online').click(function(){
		$('.programs-tabs__offline').removeClass('_active');
		$('.programs-tabs__online').addClass('_active');
		$('.programs-cards._offline').removeClass('active');
		$('.programs-cards._online').addClass('active');
		
	})

	$('.programs-tabs__offline').click(function(){
		$('.programs-tabs__online').removeClass('_active');
		$('.programs-tabs__offline').addClass('_active');
		$('.programs-cards._online').removeClass('active');
		$('.programs-cards._offline').addClass('active');
		
	})

	$('.magnific-popup').magnificPopup()


	$('.select2').select2({
		minimumResultsForSearch: -1,
		width: '100%',
		
	 })

	 
	
  


	 document.querySelectorAll('a[href^="#"').forEach(link => {
		link.addEventListener('click', function(e) {
			 e.preventDefault();
			 let href = this.getAttribute('href').substring(1);
			 const scrollTarget = document.getElementById(href);
			 const topOffset = 100
			 const elementPosition = scrollTarget.getBoundingClientRect().top;
			 const offsetPosition = elementPosition - topOffset;
			 window.scrollBy({
				  top: offsetPosition,
				  behavior: 'smooth'
				 });
			});
		});




		AOS.init({
			disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
			startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
			initClassName: 'aos-init', // class applied after initialization
			animatedClassName: 'aos-animate', // class applied on animation
			useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
			disableMutationObserver: false, // disables automatic mutations' detections (advanced)
			debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
			throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
			
		 
			// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
			offset: 120, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 800, // values from 0 to 3000, with step 50ms
			easing: 'ease', // default easing for AOS animations
			once: true, // whether animation should happen only once - while scrolling down
			mirror: false, // whether elements should animate out while scrolling past them
			anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
		 
		 });

		 $(".popup-call__form").submit(function() { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
			}).done(function () {
				$(th)
				  .find('.success')
				  .addClass('active')
				//   .css('display', 'flex')
				  .hide()
				  .fadeIn()
				setTimeout(function () {
				  $(th).find('.success').removeClass('active').fadeOut()
				  th.trigger('reset')
				}, 6000)
			 })
			 return false
		  });
		$(".popup-application__form").submit(function() { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
			}).done(function () {
				$(th)
				  .find('.success')
				  .addClass('active')
				//   .css('display', 'flex')
				  .hide()
				  .fadeIn()
				setTimeout(function () {
				  $(th).find('.success').removeClass('active').fadeOut()
				  th.trigger('reset')
				}, 6000)
			 })
			 return false
		  })

	$(".popup-payment__form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			document.location.href = 'https://www.liqpay.ua/checkout/i51922545826';
		})
		return false
	})

	// Input tel mask
  if ($('*').is('input[type="tel"]')) {
	$('input[type=tel]').inputmask({
	  mask: '+99 (999) 999 99 99',
	  showMaskOnHover: false,
	})
 }

})
