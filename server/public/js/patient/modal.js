function szerkesztes(id, name, email, phone, gender, address, ssn, motherName, birthName, birthDate) {
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

    // Email input mező
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.value = email;
    emailInput.className = 'form-control mb-3';
    emailInput.placeholder = 'Email';
    modalBox.appendChild(emailInput);

    // Telefonszám input mező
    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.value = phone;
    phoneInput.className = 'form-control mb-3';
    phoneInput.placeholder = 'Telefonszám';
    modalBox.appendChild(phoneInput);

    // Neme input mező
    const genderInput = document.createElement('input');
    genderInput.type = 'text';
    genderInput.value = gender;
    genderInput.className = 'form-control mb-3';
    genderInput.placeholder = 'Neme';
    modalBox.appendChild(genderInput);

    // Lakcím input mező
    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.value = address;
    addressInput.className = 'form-control mb-3';
    addressInput.placeholder = 'Lakcím';
    modalBox.appendChild(addressInput);

    // TAJ szám input mező
    const ssnInput = document.createElement('input');
    ssnInput.type = 'text';
    ssnInput.value = ssn;
    ssnInput.className = 'form-control mb-3';
    ssnInput.placeholder = 'TAJ szám';
    modalBox.appendChild(ssnInput);

    // Anyja neve input mező
    const motherNameInput = document.createElement('input');
    motherNameInput.type = 'text';
    motherNameInput.value = motherName;
    motherNameInput.className = 'form-control mb-3';
    motherNameInput.placeholder = 'Anyja neve';
    modalBox.appendChild(motherNameInput);

    // Születés neve input mező
    const birthNameInput = document.createElement('input');
    birthNameInput.type = 'text';
    birthNameInput.value = birthName;
    birthNameInput.className = 'form-control mb-3';
    birthNameInput.placeholder = 'Születés neve';
    modalBox.appendChild(birthNameInput);

    // Születés dátum input mező
    const birthDateInput = document.createElement('input');
    birthDateInput.type = 'date';
    birthDateInput.value = birthDate;
    birthDateInput.className = 'form-control mb-3';
    modalBox.appendChild(birthDateInput);

    // Mentés gomb
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Mentés';
    saveButton.className = 'btn btn-success';
    saveButton.addEventListener('click', () => {
        // Küldd el az új adatokat a szervernek
        const updatedName = nameInput.value;
        const updatedEmail = emailInput.value;
        const updatedPhone = phoneInput.value;
        const updatedGender = genderInput.value;
        const updatedAddress = addressInput.value;
        const updatedSsn = ssnInput.value;
        const updatedMotherName = motherNameInput.value;
        const updatedBirthName = birthNameInput.value;
        const updatedBirthDate = birthDateInput.value;

        fetch(`/patientmodositas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: updatedName,
                email: updatedEmail,
                phone: updatedPhone,
                gender: updatedGender,
                address: updatedAddress,
                ssn: updatedSsn,
                motherName: updatedMotherName,
                birthName: updatedBirthName,
                birthDate: updatedBirthDate
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert('Hiba történt!');
                } else {
                    alert('Adatok sikeresen frissítve!');
                    location.reload(); // Frissítjük az oldalt
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
