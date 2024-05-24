"use strict";

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1, // Show only one item at a time
    loop: true,
    margin: 10,
    nav: false, // Disable navigation arrows
    dots: false, // Disable dots
    autoplay: true, // Enable autoplay
    autoplayTimeout: 3500, // Set autoplay interval in milliseconds (e.g., 3000ms = 3 seconds)
  });
});
