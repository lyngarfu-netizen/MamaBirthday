// TULIS LIRIK / LUAHAN HATI KAU KAT SINI.
// Guna simbol \n kalau nak buat barisan baru (enter)
const myText = "Happy birthday Mama🌹.\n\nWalaupun kita sik banyak bercakap dan mek jarang tunjuk, jauh di sudut hati kmk tetap sayangkan mama.\n\nMakseh sebab dah besarkan kmk.\n\n Kmk doakan semoga mama sentiasa sihat tubuh badan, dipermudahkan segala urusan, dan sentiasa dimurahkan rezeki.\n\n Sorry mama sebab selalu molah mama kecik hati.\n\nSemoga mama sentiasa ceria dan bahagia.";

let overflowBox = document.getElementById("typing-box");
let index = 0;

function typeWriter() {
    if (index < myText.length) {
        // Tambah satu huruf demi satu huruf
        overflowBox.innerHTML += myText.charAt(index);
        index++;
        
        // Skrin automatik scroll ke bawah sendiri ikut tulisan baru
        overflowBox.scrollTop = overflowBox.scrollHeight;
        
        setTimeout(typeWriter, 50); 
    }
}

// Jalankan fungsi taip sebaik sahaja page selesai dipaparkan
window.onload = typeWriter;

function createHeart() {
    const heart = document.createElement('div');
    // Guna simbol text '♥' supaya warna putih boleh masuk (emoji ❤️ tak boleh ubah warna)
    heart.innerHTML = '♥'; 
    heart.classList.add('heart');
    
    // Kedudukan rawak kiri ke kanan
    heart.style.left = Math.random() * 100 + 'vw';
    // Kelajuan jatuh rawak
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    // Saiz hati rawak
    heart.style.fontSize = Math.random() * 15 + 20 + 'px';
    
    // Tetapkan warna putih untuk hujan hati
    heart.style.color = '#ffffff'; 
    
    // Pastikan nama ID HTML anda betul ('heart-container' atau 'heartContainer')
    document.getElementById('heartContainer').appendChild(heart);
    
    // Padam elemen selepas jatuh untuk elak website jadi berat
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Munculkan hati baru setiap 0.3 saat
setInterval(createHeart, 300);