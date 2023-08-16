$(".open-icon").click(function () {
  $("#sidebar").css("width", "250px");
  $(".home-content").css("margin-left", "250px");
});
$("#closeBar").click(function () {
  $("#sidebar").css("width", "0px");
  $(".home-content").css("margin-left", "0px");
});
$(".sidebar-link").click(function () {
  $(this).addClass("active");
  $(".sidebar-link").not(this).removeClass("active");
  let hrefValue = $(this).attr("href");
  let sectonTarget = $(hrefValue).offset().top;
  $("html,body").animate({ scrollTop: sectonTarget }, 4000);
});
$(".inner-head").click(function () {
  $(this)
    .siblings()
    .slideToggle(1000, function () {
      $(this).siblings().css({ display: "block" });
    });
  let innerContent = $(this).siblings();
  $(".inner-content").not(innerContent).slideUp(1000);
});
// counter down
let deadLine = new Date("oct 22, 2023 15:00:00").getTime();
let counterDown = setInterval(function () {
  let timeNow = new Date().getTime();
  let counter = deadLine - timeNow;
  let days = Math.floor(counter / (1000 * 60 * 60 * 24));
  let hours = Math.floor((counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((counter % (1000 * 60)) / 1000);
  let temp = `<div class="col-md-3">
    <div class="border border-1 py-5">
        <span class="day-count">-${days}D</span>
    </div>
</div>
<div class="col-md-3">
    <div class="border border-1 py-5">
        <span class="day-count">${hours}H</span>
    </div>
</div>
<div class="col-md-3">
    <div class="border border-1 py-5">
        <span class="day-count">${minutes}M</span>
    </div>
</div>
<div class="col-md-3">
    <div class="border border-1 py-5">
        <span class="day-count">${seconds}S</span>
    </div>
</div>`;
  document.getElementById("counter").innerHTML = temp;
}, 1000);
$("#masseg").keyup(function () {
  let textAreaLength = $("#masseg").val().length;
  let characyer = 100 - textAreaLength
  $('.area-counter').text(characyer)
});
