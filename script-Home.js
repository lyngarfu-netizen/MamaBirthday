function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    
    // Kedudukan rawak kiri ke kanan
    heart.style.left = Math.random() * 100 + 'vw';
    // Kelajuan jatuh rawak
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    // Saiz hati rawak
    heart.style.fontSize = Math.random() * 20 + 25 + 'px';
    
    // >>> TAMBAH BARIS NI UNTUK TUKAR JADI PUTIH <<<
    heart.style.color = '#ffffff'; 
    // Atau kalau nak warna lain (contoh pink lembut): heart.style.color = '#ffccd5';
    
    document.getElementById('heartContainer').appendChild(heart);
    
    // Padam elemen selepas jatuh untuk elak website jadi berat
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Munculkan hati baru setiap 0.3 saat
setInterval(createHeart, 300);