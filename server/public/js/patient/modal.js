function szerkesztes(id, name, age, gender) {
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
    title.textContent = `Szerkesztés - ${name}`;
    modalBox.appendChild(title);

    // Név input mező
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = name;
    nameInput.className = 'form-control mb-3';
    nameInput.placeholder = 'Név';
    modalBox.appendChild(nameInput);

    // Életkor input mező
    const ageInput = document.createElement('input');
    ageInput.type = 'age';
    ageInput.value = age;
    ageInput.className = 'form-control mb-3';
    ageInput.placeholder = 'Életkora';
    modalBox.appendChild(ageInput);

    // Neme input mező
    const genderInput = document.createElement('input');
    genderInput.type = 'gender';
    genderInput.value = gender;
    genderInput.className = 'form-control mb-3';
    genderInput.placeholder = 'Neme';
    modalBox.appendChild(genderInput);

    // Mentés gomb
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Mentés';
    saveButton.className = 'btn btn-success';
    saveButton.addEventListener('click', () => {
        // Küldd el az új adatokat a szervernek
        const updatedName = nameInput.value;
        const updatedAge = ageInput.value;
        const updatedGender = genderInput.value;

        fetch(`/users/${id}/edit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: updatedName,age: updatedAge, gender: updatedGender }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
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
};
