/**
 * Efecto parallax con el mouse
 */
//se realizara el efecto al momento de realizar el scroll
$(document).on("mousemove", function (e) {
  //capturo el desplazamiento del mause
  var posX = e.clientX / 100;
  //afecto el css del elemento con el desplazamiento capturado
  $("#cristiano").css({ left: 38 + posX / 3 + "%" });
  $("#hazard").css({ left: 5 - posX / 5 + "%" });
  $("#suarez").css({ right: 5 - posX / 5 + "%" });
  $("#messi").css({ right: 13 + posX / 6 + "%" });
  $("#zlatan").css({ right: 20 + posX / 3 + "%" });
  $("#totti").css({ right: 30 - posX / 2 + "%" });
  $("#ozil").css({ left: 34 - posX / 5 + "%" });
  $("#james").css({ left: 28 + posX / 2 + "%" });
  $("#iniesta").css({ left: 20 + posX / 2 + "%" });
});

/**
 * Efecto parallax con el scroll
 */
//se realizara el efecto al momento de realizar el scroll
$(window).on("scroll", function () {
  var posY = window.pageYOffset;
  $("#bloque2").css({ top: -180 - posY / 3 + "px" });
  $("#cristiano").css({ top: -250 + posY / 5 + "px" });
  //le damos el efecto del movimiento paralelo al vista de grupos
  $("#grupos").css({ "margin-left": -100 + posY / 3.3 + "%" });
  if (posY > $("#bloque2").offset().top) {
    $("#grupos").css({ margin: "auto" });
  }
  //le damos el efecto del movimiento paralelo al vista de Estadios
  $("#estadios").css({ "margin-left": 200 - posY / 5.7 + "%" });
  if (posY > $("#bloque3").offset().top) {
    $("#estadios").css({ margin: "auto" });
  }
});

/**
 * Implementacion del Plugins animateScroll()
 */

$("nav#botonera ul li a").on("click", function (e) {
  e.preventDefault();
  let href = $(this).attr("href");
  $(href).animatescroll({ scrollSpeed: 2500 });
});

/**
 * Implementacion del Plugins scrollUp()
 */
//Para este plugins se debe realizar una reglas css tambien
$.scrollUp({
  scrollText: "",
  scrollSpeed: 2500,
});

/**
 * Animacion para el bloque de los grupos
 */
$("nav#botonesGrupo ul li").on("click", function () {
  $("#grupos").animate({ height: 0 }, 900);
  $("#grupos").animate({ width: 0 }, 900);
  $("#grupos").animate({ height: 400 }, 1000, "easeOutBounce");
  $("#grupos").animate({ width: 770 }, 1000);

  //Enlazando la imagen correspondiente al boton del grupo
  //en el html al boton le creamos una propiedad personalizada llamada enlace
  let enlace = $(this).attr("enlace");
  $("#grupos img").hide(300);
  $(enlace).delay(1000).show(100);
});

/**
 * Creacion de animacion para slider utilizando plugins fleslider
 */
//para este caso se debe modificar el html donde se desea el slider

$(".flexslider").flexslider({
  randomizer: true,
  slideshowSpeed: 3000,
  animation: "slide",
});

/**
 * Creacion de animacion para  galeria utilizando plugins fancybox
 */
//para este caso tambien se debe modificar el html para poder
// realizar el efecto que queremops vizualizar
$("ul#galeria li a").fancybox({
  openSpeed: 150,
  closeSped: 150,
});

/**
 * Funcionalidad de buscador aplicando plugins Datatable
 */
// para utilizar este pligins se debe tener la tabla
// bien estructurada como se presenta en el html

let consulta = $("table").DataTable();
console.log(consulta);
$("input[type='search']").keyup(function () {
  consulta.search($(this).val()).draw();
});

/**
 * implementacion efecto SlideToggle
 *
 */
$("#bloque5 button").on("click", function () {
  $("#bloque5 form").slideToggle("fast"); // fadeToggle
});
