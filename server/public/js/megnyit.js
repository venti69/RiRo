function megnyit(name, email, id, phone, gender, address, ssn, motherName, birthName, birthDate, isAdmin) {
    const modalId = `#patientModal`; // A modal id-ja a felhasználó ID-jától függ
    const modalElement = document.querySelector(modalId); // Kiválasztjuk a megfelelő modált
    // console.log(isAdmin);

    if (modalElement) {
        const ev = new Date(birthDate).getFullYear();
        const honap = new Date(birthDate).getMonth() +1;
        const nap = new Date(birthDate).getDate();
        // console.log(ev, honap, nap);
        // A modal tartalmának frissítése
        document.getElementById('modalName').textContent = name;
        document.getElementById('modalEmail').textContent = email;
        document.getElementById('modalPhone').textContent = phone;
        document.getElementById('modalGender').textContent = gender;
        document.getElementById('modalAddress').textContent = address;
        document.getElementById('modalSsn').textContent = ssn;
        document.getElementById('modalMotherName').textContent = motherName;
        document.getElementById('modalBirthName').textContent = birthName;
        document.getElementById('modalBirthDate').textContent = `${ev}-${honap < 10 ? '0' : ''}${honap}-${nap < 10 ? '0' : ''}${nap}`;
        document.getElementById('modalIsAdmin').textContent = isAdmin;


        // Inicializáljuk a Bootstrap modalt és megnyitjuk
        const modal = new bootstrap.Modal(modalElement); // Bootstrap modal objektum
        // console.log(modal);

        modal.show(); // Megjelenítjük a modált
    } else {
        console.error('A modális ablak nem található:', modalId);
    }
}
