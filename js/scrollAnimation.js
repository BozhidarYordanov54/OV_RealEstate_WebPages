const observerOptions = {
  threshold: 0.15,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, observerOptions);

const blogPosts = document.querySelectorAll(".blog-post");
blogPosts.forEach((el) => observer.observe(el));

const teamMembers = document.querySelectorAll(".team-member-card");
teamMembers.forEach((el) => observer.observe(el));

const listings = document.querySelectorAll(".listing");
listings.forEach((listing) => observer.observe(listing));
