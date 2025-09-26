/* **********************
    css changes using jquery 
***************************** */

$(document).ready(function () {

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


    // Animating footer
    let footer = $("#mypage-footer");
    let footer_content = $("#mypage-footer-content"); 

    let myModal = new bootstrap.Modal(document.getElementById("bootstrap-modal"));

    footer.on("mouseenter",  () => {
        footer_content.stop(true, true).slideDown(4000,  () => {
            myModal.show();
        });
    });

    footer.on("mouseleave",  () => {
      footer_content.stop(true).slideUp(1000);
    });

    // showing refernce div
    $("#references").css("display", "flex");
});
