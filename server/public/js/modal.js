function megnyit(name, email) {
    let modalContainer = document.getElementById('modal-container');

    // Minden korábbi tartalom törlése
    modalContainer.innerHTML = '';
    
    // Beállítjuk a modál stílusát (megnyitás)
    modalContainer.style.display = 'block';

    // Név megjelenítése
    let nevTarto = document.createElement('div');
    nevTarto.textContent = `Név: ${name}`;
    modalContainer.appendChild(nevTarto);

    // E-mail megjelenítése
    let emailTarto = document.createElement('div');
    emailTarto.textContent = `E-mail: ${email}`;
    modalContainer.appendChild(emailTarto);

    // Bezáró gomb létrehozása
    let bezaroGomb = document.createElement('button');
    bezaroGomb.textContent = 'Bezár';
    bezaroGomb.addEventListener('click', () => {
        modalContainer.style.display = 'none'; // Modál elrejtése
        modalContainer.innerHTML = ''; // Tartalom törlése
    });
    modalContainer.appendChild(bezaroGomb);
}
