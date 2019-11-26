//Metodo 1

// $('.header-right > a').click(function () {
//   $('.hamburger-menu').addClass('active');
// });
//
// $('.hamburger-menu .close').click(function () {
//   $('.hamburger-menu').removeClass('active');
// })

//Metodo 2

$(".header-right > a").click(function () {
  $(".hamburger-menu").show();
});
$(".close").click(function () {
  $(".hamburger-menu").hide();
});
