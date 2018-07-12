$(function() {
  var words = [
    'le développement web',
    'concevoir des sites en responsive design',
    'faire du CSS avec SASS',
    'rire',
    "l'UX Design"
  ],
  i = 0;

  // responsive for tablet and smartphone
  $(".navbar-responsive").toggle();

  $(".menu").click(function () {
    $(".navbar-responsive").toggle("slow");
  });

  // gestion affichage phrases d'accroche header (3.5s)
  setInterval(function() {
    $("#word").fadeOut(function() {
      $(this).html(words[i = (i + 1) % words.length]).fadeIn();
    });
  }, 3500);

  // gestion scroll section du site
  $(".scroll").click(function() {
    var section = $("." + this.id);
    $("html,body").animate({scrollTop: section.offset().top}, 'slow');
  });

  // gestion affichage scrollbar compétences
  window.sr = ScrollReveal();
  sr.reveal('.progress-bar', {
    origin: 'left',
    duration: 2500,
    distance: '100%'
  })
});
