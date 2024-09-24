document.addEventListener("DOMContentLoaded", function () {
  const homeButton = document.getElementById("home-button");
  const blogButton = document.getElementById("blog-button");

  // Get the current page URL
  const currentPage = window.location.pathname;

  // Check if we are on the Blog page or the Home page
  if (currentPage.includes("blog.html")) {
    // On Blog page: hide Blog button and show Home button
    blogButton.classList.add("hidden");
    homeButton.classList.remove("hidden");
  } else {
    // On Home page: hide Home button and show Blog button
    homeButton.classList.add("hidden");
    blogButton.classList.remove("hidden");
  }

  // Event listener for Blog button click
  blogButton.addEventListener("click", function () {
    // Redirect to Blog page
    window.location.href = "/blog.html";
  });

  // Event listener for Home button click
  homeButton.addEventListener("click", function () {
    // Redirect to Home page
    window.location.href = "/index.html";
  });
});
