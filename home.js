function daftarNewsletter() {
  var inputEmail  = document.getElementById('inputEmail');
  var pesanSukses = document.getElementById('pesanSukses');
  var email       = inputEmail.value.trim();

  if (email === '' || !email.includes('@') || !email.includes('.')) {
    alert('Masukkan email yang valid dulu ya! 🌸');
    return;
  }

  pesanSukses.style.display = 'block';
  inputEmail.value = '';

  setTimeout(function() {
    pesanSukses.style.display = 'none';
  }, 4000);
}