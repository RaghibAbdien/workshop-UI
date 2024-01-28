// Aktif Sidebar
const cart = document.getElementById('cart');
const side = document.getElementById('side');
const bar = document.getElementById('bar');
const tutup = document.getElementById('tutup');

cart.addEventListener('click', function(event) {
    // Toggle antara 'flex' dan 'none' untuk mengubah tampilan dropdown
    bar.style.display = 'flex';
    side.classList.add('aktif');

    // Hentikan penyebaran event agar event tidak mencapai document
    event.stopPropagation();
});

// Menambahkan event listener untuk menutup sidebar saat klik di luar sidebar
tutup.addEventListener('click', function() {
    // Menutup sidebar jika diklik di luar elemen 'cart'
    bar.style.display = 'none';
    side.classList.remove('aktif');
});


// dropdown transaksi
const user = document.getElementById('user');
const drop = document.getElementById('drop');

user.addEventListener('click', function(event) {
    // Toggle antara 'flex' dan 'none' untuk mengubah tampilan dropdown
    drop.style.display = (drop.style.display === 'flex') ? 'none' : 'flex';

    // Hentikan penyebaran event agar event tidak mencapai document
    event.stopPropagation();
});

// Menambahkan event listener untuk menutup dropdown saat klik di luar dropdown
document.addEventListener('click', function() {
    // Menutup dropdown jika diklik di luar elemen 'user'
    drop.style.display = 'none';
});


//datatable jquery       
$(document).ready( function () {
    $('#myTable').DataTable();
});