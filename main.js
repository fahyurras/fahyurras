const text = "Hai, Aku FahYurRas! Aku adalah seorang Pengembang & Petani Kopi asal Indonesia.";
let index = 0;

function typingEffect() {
  if (document.getElementById('typing-text') && index <= text.length) {
    document.getElementById('typing-text').textContent = text.substring(0, index);
    index++;
    setTimeout(typingEffect, 75);
  } else { document.getElementById('cursor').style.display = 'none'; }
}

window.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('year')) document.getElementById('year').textContent = new Date().getFullYear();
  typingEffect();
});

if (document.querySelector('.dark-toggle')) {
  document.querySelector('.dark-toggle').addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  });
}