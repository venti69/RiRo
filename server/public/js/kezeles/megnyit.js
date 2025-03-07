function megnyit(paciens, orvos, idopont, id) {
    const modalId = `#doctorModal`; // A modal id-ja a felhasználó ID-jától függ
    const modalElement = document.querySelector(modalId); // Kiválasztjuk a megfelelő modált
    // console.log(modalElement);

    if (modalElement) {
        // console.log(name, email, id);
        // A modal tartalmának frissítése
        document.getElementById('modalPaciens').textContent = paciens;
        document.getElementById('modalOrvos').textContent = orvos;
        document.getElementById('modalIdopont').textContent = idopont;

        // Inicializáljuk a Bootstrap modalt és megnyitjuk
        const modal = new bootstrap.Modal(modalElement); // Bootstrap modal objektum
        console.log(modal);

        modal.show(); // Megjelenítjük a modált
    } else {
        console.error('A modális ablak nem található:', modalId);
    }
}
