function kirimPesan() {
  var nama  = document.getElementById('inputNama').value.trim();
  var email = document.getElementById('inputEmail').value.trim();
  var topik = document.getElementById('inputTopik').value;
  var pesan = document.getElementById('inputPesan').value.trim();
  var setuju = document.getElementById('setuju').checked;

  
  if (!nama || !email || !topik || !pesan) {
    alert('Mohon lengkapi semua field yang wajib diisi! 🌸');
    return;
  }

  
  if (!setuju) {
    alert('Mohon setujui Kebijakan Privasi terlebih dahulu.');
    return;
  }

  
  var tombol = document.querySelector('.tombol-kirim');
  tombol.innerHTML = '⏳ Mengirim...';
  tombol.disabled = true;

  
  setTimeout(function() {
    tombol.innerHTML = '✅ Terkirim!';
    tombol.style.background = 'linear-gradient(135deg,#10b981,#059669)';

    var pesanSukses = document.getElementById('pesanSukses');
    pesanSukses.style.display = 'block';

    
    document.getElementById('inputNama').value  = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputHP').value    = '';
    document.getElementById('inputTopik').value = '';
    document.getElementById('inputPesan').value = '';
    document.getElementById('setuju').checked   = false;

    
    setTimeout(function() {
      tombol.innerHTML = '✉️ Kirim Pesan Sekarang';
      tombol.style.background = '';
      tombol.disabled = false;
      pesanSukses.style.display = 'none';
    }, 4000);

  }, 1500);
}