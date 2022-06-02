// Trailers Section image to video efect
$(".trailer-item-info").click(function () {
  var video = $("<iframe />", {
    class: "trailer-item-video",
    src: "https://www.youtube.com/embed/" + this.dataset.video + "?controls=0",
    height: "100%",
    width: "100%",
    frameborder: "0",
  });
  $(this).siblings("img").replaceWith(video);
  $(this).hide();
});
