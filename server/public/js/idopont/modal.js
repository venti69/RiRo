function szerkesztes(id, patientName, doctorName, idopont) {
    // console.log(patientName, doctorName, idopont);
    
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
    // Mentés gomb
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Mentés';
    saveButton.className = 'btn btn-success';
    saveButton.addEventListener('click', () => {
        // Küldd el az új adatokat a szervernek
        const updatedName = nameInput.value;
        const updatedEmail = emailInput.value;
        const updatedIdopont = idoInput.value;

        fetch(`/idopontmodositas/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ patientName: updatedName, doctorName: updatedEmail, idopont: updatedIdopont }),
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
