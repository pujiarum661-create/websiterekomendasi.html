var daftarMakanan = [
  { nama:"Rawon Surabaya",  kategori:"indonesia", gambar:"https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80",  rating:4.9, harga:35000,  hargaTeks:"Rp 35.000",  lokasi:"Surabaya, Jawa Timur",         tags:["Berkuah","Pedas","Khas Jatim"] },
  { nama:"Sate Madura Pak Arif",  kategori:"indonesia", gambar:"https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=400&q=80", rating:4.8, harga:28000,  hargaTeks:"Rp 28.000",  lokasi:"Madura, Jawa Timur",           tags:["Bakar","Gurih","Khas Madura"] },
  { nama:"Es Campur Pak Kumis",   kategori:"dessert",   gambar:"https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&q=80", rating:4.9, harga:15000,  hargaTeks:"Rp 15.000",  lokasi:"Bandung, Jawa Barat",          tags:["Segar","Manis","Dingin"] },
  { nama:"Nasi Padang Ampera",    kategori:"indonesia", gambar:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80", rating:4.8, harga:25000,  hargaTeks:"Rp 25.000",  lokasi:"Padang, Sumatera Barat",       tags:["Komplit","Pedas","Khas Minang"] },
  { nama:"Mie Aceh Istimewa",     kategori:"indonesia", gambar:"https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&q=80", rating:4.7, harga:30000,  hargaTeks:"Rp 30.000",  lokasi:"Banda Aceh, Aceh",             tags:["Pedas","Rempah","Khas Aceh"] },
  { nama:"Burger Smash Juicy",    kategori:"western",   gambar:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80", rating:4.7, harga:55000,  hargaTeks:"Rp 55.000",  lokasi:"Jakarta Selatan",              tags:["Western","Kenyang","Cheesy"] },
  { nama:"Takoyaki Osaka Style",  kategori:"jajanan",   gambar:"https://images.unsplash.com/photo-1606483956061-46a898dce538?w=400&q=80", rating:4.6, harga:20000,  hargaTeks:"Rp 20.000",  lokasi:"Surabaya, Jawa Timur",         tags:["Jajanan","Gurih","Hits"] },
  { nama:"Kepiting Saus Padang",  kategori:"seafood",   gambar:"https://images.unsplash.com/photo-1550525811-e5869dd03032?w=400&q=80", rating:4.8, harga:120000, hargaTeks:"Rp 120.000", lokasi:"Makassar, Sulawesi Selatan",   tags:["Seafood","Pedas","Premium"] },
  { nama:"Teh Tarik Harum",       kategori:"minuman",   gambar:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80", rating:4.6, harga:12000,  hargaTeks:"Rp 12.000",  lokasi:"Medan, Sumatera Utara",        tags:["Minuman","Manis","Hangat"] },
  { nama:"Gudeg Yu Djum",         kategori:"indonesia", gambar:"https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&q=80",rating:4.9, harga:20000,  hargaTeks:"Rp 20.000",  lokasi:"Yogyakarta, DIY",              tags:["Manis","Khas Jogja","Legendaris"] },
  { nama:"Martabak Telur Spesial",kategori:"jajanan",   gambar:"https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80", rating:4.8, harga:30000,  hargaTeks:"Rp 30.000",  lokasi:"Bandung, Jawa Barat",          tags:["Gurih","Malam","Populer"] },
  { nama:"Pudding Mochi Matcha",  kategori:"dessert",   gambar:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80", rating:4.5, harga:18000,  hargaTeks:"Rp 18.000",  lokasi:"Surabaya, Jawa Timur",         tags:["Dessert","Matcha","Manis"] }
];

var filterAktif = "semua";
var urutanAktif = "default";

function tampilkanKartu(data) {
  var grid        = document.getElementById("gridKartu");
  var pesanKosong = document.getElementById("pesanKosong");
  var jumlah      = document.getElementById("jumlahHasil");

  jumlah.textContent = data.length;

  if (data.length === 0) {
    grid.innerHTML = "";
    pesanKosong.style.display = "block";
    return;
  }
  pesanKosong.style.display = "none";

  var html = "";
  for (var i = 0; i < data.length; i++) {
    var m = data[i];
    var badgeHTML = m.badge ? '<div class="kartu-badge badge-' + m.badge + '">' + m.badgeText + '</div>' : "";
    var tagsHTML  = m.tags.map(function(t){ return '<span class="tag">' + t + '</span>'; }).join("");
    var gambarHTML = '<img src="' + m.gambar + '" alt="' + m.nama + '" onerror="this.style.display=\'none\';this.parentElement.classList.add(\'gambar-fallback\')" />';

    html += '<div class="col-lg-4 col-md-6"><div class="kartu"><div class="kartu-gambar">' + gambarHTML + badgeHTML + '</div><div class="kartu-isi"><div class="kartu-kategori-label">' + m.kategori.toUpperCase() + '</div><div class="kartu-nama">' + m.nama + '</div><div class="kartu-lokasi">📍 ' + m.lokasi + '</div><div class="kartu-bawah"><div class="kartu-rating"><span class="bintang">★</span> ' + m.rating + '</div><div class="kartu-harga">' + m.hargaTeks + '</div></div><div class="kartu-tags">' + tagsHTML + '</div></div></div></div>';
  }
  grid.innerHTML = html;
}

function terapkanFilter() {
  var kataCari = document.getElementById("inputCari").value.toLowerCase().trim();

  var hasil = daftarMakanan.filter(function(m) {
    var cocokKategori = (filterAktif === "semua") || (m.kategori === filterAktif);
    var cocokCari     = !kataCari || m.nama.toLowerCase().includes(kataCari) || m.lokasi.toLowerCase().includes(kataCari);
    return cocokKategori && cocokCari;
  });

  if (urutanAktif === "rating") hasil.sort(function(a,b){ return b.rating - a.rating; });
  if (urutanAktif === "murah")  hasil.sort(function(a,b){ return a.harga  - b.harga;  });
  if (urutanAktif === "mahal")  hasil.sort(function(a,b){ return b.harga  - a.harga;  });

  tampilkanKartu(hasil);
}

function filterKategori(kategori, tombol) {
  filterAktif = kategori;
  document.querySelectorAll(".tombol-filter").forEach(function(t){ t.classList.remove("aktif"); });
  tombol.classList.add("aktif");
  terapkanFilter();
}

function cariMakanan()  { terapkanFilter(); }

function urutkanKartu() {
  urutanAktif = document.getElementById("urutkan").value;
  terapkanFilter();
}

tampilkanKartu(daftarMakanan);