// Menangani interaksi tombol
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('action-btn');

    if (button) {
        button.addEventListener('click', function() {
            alert('Terima kasih telah tertarik! Fitur selengkapnya akan segera hadir.');
            console.log('Tombol Introduction diklik.');
        });
    }
});