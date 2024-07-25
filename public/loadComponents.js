function loadHTML(url, elementId) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading the HTML file:', error);
      });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    loadHTML('Components/Navbar.html', 'navbar-container');
    loadHTML('Components/Carousel.html', 'carousel-container');
    loadHTML('Components/Featured.html', 'featured-container');
    loadHTML('Components/FAQ.html', 'faq-container');
    loadHTML('Components/About.html', 'about-container');
    loadHTML('Components/Contact.html', 'contact-container');
    loadHTML('Components/Footer.html', 'footer-container');
  });
  