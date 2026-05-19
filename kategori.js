function klikKota(e, kotak) {
  e.preventDefault();
  var namaKota = kotak.querySelector('div').textContent;
  alert('Menampilkan kuliner di ' + namaKota + ' 🌸\n(Fitur ini akan segera hadir!)');
}