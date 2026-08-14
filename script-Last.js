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