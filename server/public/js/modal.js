function megnyit(name, email) {
    const modalContainer = document.getElementById('modal-container');

    // Minden korábbi tartalom törlése
    modalContainer.innerHTML = '';

    // Beállítjuk a modál stílusát (megnyitás)
    modalContainer.style.display = 'flex';

    // Modális doboz létrehozása
    const modalBox = document.createElement('div');
    modalBox.className = 'modal-box';

    // Név megjelenítése
    const nameTitle = document.createElement('h2');
    nameTitle.textContent = `Név: ${name}`;
    modalBox.appendChild(nameTitle);

    // Email megjelenítése
    const emailInfo = document.createElement('p');
    emailInfo.textContent = `E-mail: ${email}`;
    modalBox.appendChild(emailInfo);

    // Bezáró gomb létrehozása
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Bezár';
    closeButton.className = 'modal-close-btn';
    closeButton.addEventListener('click', () => {
        modalContainer.style.display = 'none'; // Modál elrejtése
    });
    modalBox.appendChild(closeButton);

    // Modális doboz hozzáadása a tartályhoz
    modalContainer.appendChild(modalBox);
}