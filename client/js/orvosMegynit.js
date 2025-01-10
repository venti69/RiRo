function megnyit(name, email, telszam, kor, neme) {
    const modalId = `#employeeModal`; // A modal id-ja a felhasználó ID-jától függ
    const modalElement = document.querySelector(modalId); // Kiválasztjuk a megfelelő modált
    console.log(modalElement);

    if (modalElement) {
        // A modal tartalmának frissítése
        document.getElementById('modalNev').textContent = name;
        document.getElementById('modalEmail').textContent = email;
        document.getElementById('modalTelszam').textContent = telszam;


        // Inicializáljuk a Bootstrap modalt és megnyitjuk
        const modal = new bootstrap.Modal(modalElement); // Bootstrap modal objektum
        console.log(modal);

        modal.show(); // Megjelenítjük a modált
    } else {
        console.error('A modális ablak nem található:', modalId);
    }
}
