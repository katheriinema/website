// Contact form handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('感謝您的留言，我們將盡快與您聯絡！');
    contactForm.reset();
  });
} 