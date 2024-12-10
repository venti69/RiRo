function megnyit(name, email, id) {
    const modalId = `#employeeModal${id}`;  // A modal id-ja a felhasználó ID-jától függ
    const modalElement = document.querySelector(modalId);  // Kiválasztjuk a megfelelő modált

    if (modalElement) {
        // A modal tartalmának frissítése
        document.getElementById('modalName').textContent = name;
        document.getElementById('modalEmail').textContent = email;

        // Inicializáljuk a Bootstrap modalt és megnyitjuk
        const modal = new bootstrap.Modal(modalElement);  // Bootstrap modal objektum
        modal.show();  // Megjelenítjük a modált
    } else {
        console.error('A modális ablak nem található:', modalId);
    }
}
