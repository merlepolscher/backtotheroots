document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        if(this.getAttribute('href') !== '#'){
            document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        }
    });
});

$('.navbar').affix({
	offset: {
		top: 100
	}
});

var imgDefer = document.getElementsByTagName('img');
for (var i=0; i<imgDefer.length; i++) {
    if(imgDefer[i].getAttribute('data-src')) {
        imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
} }

