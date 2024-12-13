function megnyit(patientName, doctorName, idopont, id) {
    const modalId = `#idopontModal`; // A modal id-ja a felhasználó ID-jától függ
    const modalElement = document.querySelector(modalId); // Kiválasztjuk a megfelelő modált
    console.log(modalElement);

    if (modalElement) {
        console.log(patientName, doctorName,idopont, id);
        // A modal tartalmának frissítése
        document.getElementById('modalName').textContent = patientName;
        document.getElementById('modalEmail').textContent = doctorName;
        // document.getElementById('modalIdopont').textContent = idopont;

        // Inicializáljuk a Bootstrap modalt és megnyitjuk
        const modal = new bootstrap.Modal(modalElement); // Bootstrap modal objektum
        console.log(modal);

        modal.show(); // Megjelenítjük a modált
    } else {
        console.error('A modális ablak nem található:', modalId);
    }
}
