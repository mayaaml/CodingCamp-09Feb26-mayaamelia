// 1. Welcoming Speech (Meminta nama saat halaman dibuka)
window.onload = function() {
    let name = prompt("Haii, Ketikkan nama kamu disini ya!");
    if (name) {
        document.getElementById("welcome-title").innerText = "Hi " + name + ", Welcome To Our Website";
    }
};

// 2. Validasi Form & Menampilkan Hasil
const messageForm = document.getElementById("messageForm");
const displayResult = document.getElementById("displayResult");

messageForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil nilai dari input
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const phone = document.getElementById("phoneInput").value;
    const message = document.getElementById("messageInput").value;

    // Validasi sederhana (Cek apakah kosong)
    if (name === "" || email === "" || phone === "") {
        alert("Mohon lengkapi data Anda!");
        return;
    }

    // Tampilkan hasil di HTML
    displayResult.innerHTML = `
        <b>Nama:</b> ${name} <br>
        <b>Email:</b> ${email} <br>
        <b>Telepon:</b> ${phone} <br>
        <b>Pesan:</b> ${message}
    `;
    
    alert("Pesan berhasil dikirim!");
});
