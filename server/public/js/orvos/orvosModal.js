function szerkesztes(id, nev, szak) {
    const modalContainer = document.getElementById('modal-container');

    // Töröljük a modal tartalmát
    modalContainer.innerHTML = '';

    // Megnyitjuk a modal-t
    modalContainer.style.display = 'flex';
    modalContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

    // Modális doboz
    const modalDialog = document.createElement('div');
    modalDialog.className = 'modal-dialog';

    // Modális doboz
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.style.padding = '1em';

    // Modális doboz
    const modalBox = document.createElement('div');
    modalBox.className = 'modal-box';

    // Szerkesztés fejléc
    const title = document.createElement('h2');
    title.textContent = `Szerkesztés - ${nev}`;
    modalBox.appendChild(title);

    // Név input mező
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = nev;
    nameInput.className = 'form-control mb-3';
    nameInput.placeholder = 'Név';
    modalBox.appendChild(nameInput);

    // Email input mező
    const emailInput = document.createElement('input');
    emailInput.type = 'szak';
    emailInput.value = szak;
    emailInput.className = 'form-control mb-3';
    emailInput.placeholder = 'Szakirány';
    modalBox.appendChild(emailInput);

    // Mentés gomb
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Mentés';
    saveButton.className = 'btn btn-success';
    saveButton.addEventListener('click', () => {
        // Küldd el az új adatokat a szervernek
        const updatedName = nameInput.value;
        const updatedEmail = emailInput.value;

        fetch(`/doctors/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nev: updatedName, szak: updatedEmail }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                
                if (data) {
                    alert('Adatok sikeresen frissítve!');
                    location.reload(); // Frissítjük az oldalt
                } else {
                    alert('Hiba történt!');
                }
            });

        // Modal bezárása
        modalContainer.style.display = 'none';
    });
    modalBox.appendChild(saveButton);

    // Bezáró gomb
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Mégse';
    closeButton.className = 'btn btn-secondary ms-2';
    closeButton.addEventListener('click', () => {
        modalContainer.style.display = 'none'; // Modal elrejtése
    });
    modalBox.appendChild(closeButton);

    // Hozzáadjuk a modális dobozt a konténerhez
    modalContent.appendChild(modalBox);

    // Hozzáadjuk a modális dobozt a konténerhez
    modalDialog.appendChild(modalContent);

    // Hozzáadjuk a modális dobozt a konténerhez
    modalContainer.appendChild(modalDialog);
}
