window.addEventListener('DOMContentLoaded', () => {
    const shouldPlay = localStorage.getItem('autoPlayMusic');
    const music = document.getElementById('bg-music');

    if (shouldPlay === 'true') {
        music.play().catch(error => {
            console.log("Autoplay disekat oleh pelayar.");
        });
        localStorage.removeItem('autoPlayMusic');
    }

    // Jalankan fungsi hujan nota muzik yang lebih lebat
    startMusicRain();
});

function startMusicRain() {
    const noteContainer = document.getElementById('noteContainer');
    const notesSymbols = ['♪', '♫', '🎵', '🎶', '♩'];
    
    // Senarai warna-warni untuk nota muzik
    const colors = ['#800020', '#b33b54', '#e63946', '#ffb703', '#d4a373', '#ff6b6b'];

    // Masa dikurangkan kepada 150 milisaat supaya hujan jadi sangat lebat
    setInterval(() => {
        const note = document.createElement('div');
        note.classList.add('music-note');
        note.innerText = notesSymbols[Math.floor(Math.random() * notesSymbols.length)];
        
        // Tetapkan kedudukan dan kelajuan rawak
        note.style.left = Math.random() * window.innerWidth + 'px';
        note.style.animationDuration = (Math.random() * 2.5 + 2) + 's'; // Jatuh lebih dinamik (2 hingga 4.5 saat)
        note.style.fontSize = (Math.random() * 12 + 16) + 'px'; // Saiz nota berbeza-beza (16px hingga 28px)
        
        // Pilih warna secara rawak daripada senarai di atas
        note.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Kesan kilat/cahaya lembut (glow) belakang nota supaya nampak lebih cantik
        note.style.textShadow = '0 0 5px rgba(255, 255, 255, 0.4)';

        noteContainer.appendChild(note);

        // Buang elemen selepas jatuh selesai
        setTimeout(() => {
            note.remove();
        }, 5000);
    }, 150); // <--- Angka ni mengawal kekerapan (semakin kecil, semakin lebat hujannya)
}