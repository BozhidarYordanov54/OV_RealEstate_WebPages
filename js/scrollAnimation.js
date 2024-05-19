document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: Array.from({ length: 101 }, (_, i) => i / 100),
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const intersectionRatio = entry.intersectionRatio;
      const minOpacity = 0.3;
      const maxOpacity = 1;
      // Calculate the opacity based on intersection ratio
      const calculatedOpacity =
        minOpacity + (maxOpacity - minOpacity) * intersectionRatio;
      entry.target.style.opacity = calculatedOpacity;
    });
  }, observerOptions);

  const blogPostContainer = document.querySelectorAll(
    ".blog-posts-container .blog-post"
  );
  if (blogPostContainer) {
    blogPostContainer.forEach((blog) => {
      observer.observe(blog);
    });
  }
});
