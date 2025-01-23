function szerkesztes(id, name, email, gender, phone, address, ssn, motherName, birthName, birthDate) {
    const modalContainer = document.getElementById('modal-container');
    // console.log(birthDate);
    

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
    emailInput.placeholder = 'Email cím';
    modalBox.appendChild(emailInput);

    // Gender input mező
    const genderInput = document.createElement('input');
    genderInput.className = 'form-control mb-3';
    genderInput.type = 'text';
    genderInput.value = gender;
    genderInput.placeholder = 'Neme';
    modalBox.appendChild(genderInput);

    // Phone input mező

    const phoneInput = document.createElement('input');
    phoneInput.type = 'number';
    phoneInput.value = phone;
    phoneInput.className = 'form-control mb-3';
    phoneInput.placeholder = 'Telefonszám';
    modalBox.appendChild(phoneInput);

    // Address input mező

    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.value = address;
    addressInput.className = 'form-control mb-3';
    addressInput.placeholder = 'Cím';
    modalBox.appendChild(addressInput);

    // SSN input mező

    const ssnInput = document.createElement('input');
    ssnInput.type = 'number';
    ssnInput.value = ssn;
    ssnInput.className = 'form-control mb-3';
    ssnInput.placeholder = 'Tajszám';
    modalBox.appendChild(ssnInput);

    // MotherName input mező

    const motherNameInput = document.createElement('input');
    motherNameInput.type = 'text';
    motherNameInput.value = motherName;
    motherNameInput.className = 'form-control mb-3';
    motherNameInput.placeholder = 'Anyja neve';
    modalBox.appendChild(motherNameInput);

    // BirthName input mező

    const birthNameInput = document.createElement('input');
    birthNameInput.type = 'text';
    birthNameInput.value = birthName;
    birthNameInput.className = 'form-control mb-3';
    birthNameInput.placeholder = 'Születés neve';
    modalBox.appendChild(birthNameInput);

    // BirthDate input mező

    const birthDateInput = document.createElement('input');
    birthDateInput.type = 'text';
    birthDateInput.value = birthDate;
    birthDateInput.className = 'form-control mb-3';
    birthDateInput.placeholder = 'Születés dátuma';
    modalBox.appendChild(birthDateInput);

    // Mentés gomb
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Mentés';
    saveButton.className = 'btn btn-success';
    saveButton.addEventListener('click', () => {
        // Küldd el az új adatokat a szervernek
        const updatedName = nameInput.value;
        const updatedEmail = emailInput.value;
        const updatedGender = genderInput.value;
        const updatedPhone = phoneInput.value;
        const updatedAddress = addressInput.value;
        const updatedSsn = ssnInput.value;
        const updatedMotherName = motherNameInput.value;
        const updatedBirthName = birthNameInput.value;
        const updatedBirthDate = birthDateInput.value;

        fetch(`/patient/edit/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: updatedName, email: updatedEmail, gender: updatedGender, phone: updatedPhone, address: updatedAddress, ssn: updatedSsn, motherName: updatedMotherName, birthName: updatedBirthName, birthDate: updatedBirthDate }),
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                
                if (data.msg === "ASd") {
                    alert('Adatok sikeresen frissítve!');
                    location.reload();
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
