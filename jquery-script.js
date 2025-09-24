/* **********************
    css changes using jquery 
***************************** */

$(document).ready(function () {
  // resume container css changes
  $(".change-bg").addClass("highlight-bg border");

  // Animating header
  let header = $("#mypage-header");
  header.addClass("border-bottom highlight-bg");

  header.hover(
    function () {
      header.stop().animate({ height: "100px" }, 1000);
    },
    function () {
      header.stop().animate({ height: "10px" }, 1000);
    }
  );

  // input box
  $(".input-box").addClass("input-field");

  $(".card-color").addClass("card-bg");

  // section title border color
  $(".section-title").addClass("border-color");

  // content text color
  $(".change-color").addClass("text-color");

  // Animating footer
  let footer = $("#mypage-footer");
  let footer_content = $("#mypage-footer-content");
  footer.addClass("border");

  let myModal = new bootstrap.Modal(document.getElementById("bootstrap-modal"));
  let modalOpen = false;

  footer.on("mouseenter", function () {
    footer_content.stop(true, true).slideDown(1000, function () {
      if (!modalOpen) {
        footer_content.stop(true, true).slideDown(1000, function () {
          myModal.show();
        });
      }
    });
  });

  footer.on("mouseleave", function () {
    if (!modalOpen) {
      footer_content.stop(true, true).slideUp(1000);
    }
  });

  $("#bootstrap-modal").on("shown.bs.modal", function () {
    modalOpen = true;
  });

  // Detect when modal closes
  $("#bootstrap-modal").on("hidden.bs.modal", function () {
    modalOpen = false;
    footer_content.slideUp(1000);
  });

  // showing refernce div
  $("#references").css("display", "flex");
});
