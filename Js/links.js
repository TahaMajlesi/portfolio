$(".goAbout , .goProjects , .goArticles").click(function () {
  if ($(window).scrollTop() > 100) {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }
});
