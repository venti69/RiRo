function szerkesztes(id, patientName, doctorName, idopont, phone, gender, address, ssn, motherName, birthName, birthDate) {
    console.log(patientName, doctorName, phone);
    
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
    title.textContent = `Szerkesztés - ${patientName}`;
    modalBox.appendChild(title);

    // Név input mező
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = patientName;
    nameInput.className = 'form-control mb-3';
    nameInput.placeholder = 'Páciens neve';
    modalBox.appendChild(nameInput);

    // Email input mező
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.value = doctorName;
    emailInput.className = 'form-control mb-3';
    emailInput.placeholder = 'Orvos neve';
    modalBox.appendChild(emailInput);
    // Időpont
    const idoInput = document.createElement('input');
    idoInput.type = 'időpont';
    idoInput.value = idopont;
    idoInput.className = 'form-control mb-3';
    idoInput.placeholder = 'Időpont';
    modalBox.appendChild(idoInput);
    // Telefonszám
    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.value = phone;
    phoneInput.className = 'form-control mb-3';
    phoneInput.placeholder = 'Telefonszám';
    modalBox.appendChild(phoneInput);
    // Neme
    const genderInput = document.createElement('input');
    genderInput.type = 'text';
    genderInput.value = gender;
    genderInput.className = 'form-control mb-3';
    genderInput.placeholder = 'Neme';
    modalBox.appendChild(genderInput);
    // Cím
    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.value = address;
    addressInput.className = 'form-control mb-3';
    addressInput.placeholder = 'Cím';
    modalBox.appendChild(addressInput);
    // Tajszám
    const ssnInput = document.createElement('input');
    ssnInput.type = 'number';
    ssnInput.value = ssn;
    ssnInput.className = 'form-control mb-3';
    ssnInput.placeholder = 'Tajszám';
    modalBox.appendChild(ssnInput);
    // Anyja neve
    const motherNameInput = document.createElement('input');
    motherNameInput.type = 'text';
    motherNameInput.value = motherName;
    motherNameInput.className = 'form-control mb-3';
    motherNameInput.placeholder = 'Anyja neve';
    modalBox.appendChild(motherNameInput);
    // Birthname
    const birthNameInput = document.createElement('input');
    birthNameInput.type = 'text';
    birthNameInput.value = birthName;
    birthNameInput.className = 'form-control mb-3';
    birthNameInput.placeholder = 'Birthname';
    modalBox.appendChild(birthNameInput);
    // Birthdate
    const birthDateInput = document.createElement('input');
    birthDateInput.type = 'text';
    birthDateInput.value = birthDate;
    birthDateInput.className = 'form-control mb-3';
    birthDateInput.placeholder = 'Birthdate';
    modalBox.appendChild(birthDateInput);
    // Mentés gomb
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Mentés';
    saveButton.className = 'btn btn-success';
    saveButton.addEventListener('click', () => {
        // Küldd el az új adatokat a szervernek
        const updatedName = nameInput.value;
        const updatedEmail = emailInput.value;
        const updatedIdopont = idoInput.value;
        const updatedPhone = phoneInput.value;
        const updatedGender = genderInput.value;
        const updatedAddress = addressInput.value;
        const updatedSsn = ssnInput.value;
        const updatedMotherName = motherNameInput.value;
        const updatedBirthName = birthNameInput.value;
        const updatedBirthDate = birthDateInput.value;

        fetch(`/idopontmodositas/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ patientName: updatedName, doctorName: updatedEmail, idopont: updatedIdopont, phone: updatedPhone, gender: updatedGender, address: updatedAddress, ssn: updatedSsn, motherName: updatedMotherName, birthName: updatedBirthName, birthDate: updatedBirthDate}),
        })
            .then((response) => response.json())
            .then((data) => {
            console.log(data);
            
                if (data) {
                    alert(data.msg);
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
