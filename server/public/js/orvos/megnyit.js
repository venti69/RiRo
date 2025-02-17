function megnyit(name, email, id) {
    const modalId = `#doctorModal`; // A modal id-ja a felhasználó ID-jától függ
    const modalElement = document.querySelector(modalId); // Kiválasztjuk a megfelelő modált
    // console.log(modalElement);

    if (modalElement) {
        // console.log(name, email, id);
        // A modal tartalmának frissítése
        document.getElementById('modalName').textContent = name;
        document.getElementById('modalSzak').textContent = szak;
        document.getElementById('modalKor').textContent = kor;
        document.getElementById('modalNeme').textContent = neme;
        document.getElementById('modalEmail').textContent = email;
        document.getElementById('modalTelszam').textContent = telszam;
        document.getElementById('modalRendeles').textContent = idopont;

        // Inicializáljuk a Bootstrap modalt és megnyitjuk
        const modal = new bootstrap.Modal(modalElement); // Bootstrap modal objektum
        // console.log(modal);

        modal.show(); // Megjelenítjük a modált
    } else {
        console.error('A modális ablak nem található:', modalId);
    }
}
