const balloonContainer = document.getElementById("balloons-container");

// Fungsi untuk membuat balon terbang
function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloons");
    balloon.style.left = Math.random() * window.innerWidth + "px"; // Posisi horizontal acak
    balloonContainer.appendChild(balloon);

    // Hapus balon setelah animasi selesai untuk mencegah balon menumpuk
    setTimeout(() => {
        balloon.remove();
    }, 8000); // Waktu yang sama dengan durasi animasi "rise"
}

// Tambah balon setiap 1 detik
setInterval(createBalloon, 1000);