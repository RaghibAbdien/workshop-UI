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





// Membuat objek untuk menyimpan status notifikasi untuk setiap elemen
const notificationStatus = {};

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-cart')) {
        const targetId = event.target.getAttribute('data-target');
        const increment = document.getElementById(targetId);
        
        // Memeriksa apakah notifikasi sudah ditambahkan oleh elemen ini sebelumnya
        if (!notificationStatus[targetId]) {
            // Jika belum, tambahkan notifikasi
            let currentNotificationValue = parseInt(document.querySelector('.notif').textContent, 10);
            document.querySelector('.notif').textContent = currentNotificationValue + 1;

            // Mengubah status notifikasi menjadi sudah ditambahkan
            notificationStatus[targetId] = true;
        }

        document.querySelector('.notif').style.display = 'flex';
        event.target.style.display = 'none';
        increment.style.display = 'flex';
    }
});

// Mendapatkan elemen tombol decrement, input, dan tombol increment
const decrementButtons = document.querySelectorAll('.input #minus');
const quantityInputs = document.querySelectorAll('.input #quantity');
const incrementButtons = document.querySelectorAll('.input #plus');
const addCartButtons = document.querySelectorAll('.add-cart');
const tambahs = document.querySelectorAll('.input');

// Fungsi untuk memperbarui nilai notifikasi
function updateNotification() {
    let totalQuantity = 0;

    // Mereset status notifikasi sebelum menghitung total
    notificationStatus = {};

    quantityInputs.forEach((input, index) => {
        totalQuantity += parseInt(input.value, 10);
    });

    document.querySelector('.notif').textContent = totalQuantity;
}

// Menambahkan event listener untuk tombol decrement
decrementButtons.forEach((decrementButton, index) => {
    decrementButton.addEventListener('click', function() {
        // Mendapatkan nilai saat ini
        const currentValue = parseInt(quantityInputs[index].value, 10);

        // Memastikan nilai tidak kurang dari 1
        if (currentValue > 1) {
            quantityInputs[index].value = currentValue - 1;
        } else {
            addCartButtons[index].style.display = 'block';
            tambahs[index].style.display = 'none';
            quantityInputs[index].value = 1; // Set nilai menjadi 1 jika mencoba mengurangi dari 1
        }
        // Memperbarui nilai notifikasi setelah perubahan
        updateNotification();
    });
});


// Menambahkan event listener untuk tombol increment
incrementButtons.forEach((incrementButton, index) => {
    incrementButton.addEventListener('click', function() {
        // Menambahkan nilai saat ini
        const currentValue = parseInt(quantityInputs[index].value, 10);
        quantityInputs[index].value = currentValue + 1;
        // Memperbarui nilai notifikasi setelah perubahan
        updateNotification();
    });
});










		const toggleBtn = document.querySelector('.toggle-btn');
		const toggleBtnIcon = document.querySelector('.toggle-btn i');
		const dropdownMenu = document.querySelector('.dropdown-menu');

		toggleBtn.onclick = function(){
			dropdownMenu.classList.toggle('open');
			const isOpen = dropdownMenu.classList.contains('open');
			toggleBtnIcon.classList = isOpen?'fa-solid fa-xmark':'fa-solid fa-bars';
		}

		let slideIndex = 1;
		showSlides(slideIndex);

		// Next/previous controls
		function plusSlides(n) {
		  showSlides(slideIndex += n);
		}

		// Thumbnail image controls
		function currentSlide(n) {
		  showSlides(slideIndex = n);
		}

		function showSlides(n) {
		  let i;
		  let slides = document.getElementsByClassName("banner");
		  let dots = document.getElementsByClassName("dot");
		  if (n > slides.length) {slideIndex = 1}
		  if (n < 1) {slideIndex = slides.length}
		  for (i = 0; i < slides.length; i++) {
		    slides[i].style.display = "none";
		  }
		  for (i = 0; i < dots.length; i++) {
		    dots[i].className = dots[i].className.replace(" active", "");
		  }
		  slideIndex++;
  		  if (slideIndex > slides.length) {slideIndex = 1}
		  slides[slideIndex-1].style.display = "flex";
		  setTimeout(showSlides, 8000);
		  dots[slideIndex-1].className += " active";
		}


		//infinite loop slider
		const carousel = document.querySelector(".carousel");
		const carouselChildrens =  [...carousel.children];
		const firstCardWidth = carousel.querySelector(".card").offsetWidth;


		let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

		carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
			carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
		});

		carouselChildrens.slice(0,cardPerView).forEach(card => {
			carousel.insertAdjacentHTML("beforeend", card.outerHTML);
		});


		const infiniteScroll = () =>{
			if(carousel.scrollLeft === 0){
				carousel.classList.add("no-transition");
				carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
				carousel.classList.remove("no-transition");
			} else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
				carousel.classList.add("no-transition");
				carousel.scrollLeft = carousel.offsetWidth;
				carousel.classList.remove("no-transition");
			}
		}

		carousel.addEventListener("scroll", infiniteScroll);



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



// Modal	
const buka = document.getElementById('buka');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

buka.addEventListener('click', () => {
	modal.style.display = 'flex';
});

close.addEventListener('click', () => {
	modal.style.display = 'none';
});	