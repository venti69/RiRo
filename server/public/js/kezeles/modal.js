function szerkesztes(id, paciens, orvos, idopont) {
    // console.log(id, paciens, orvos, idopont);
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
    title.textContent = `Szerkesztés - ${paciens}`;
    modalBox.appendChild(title);

    // paciens input mező
    const paciensInput = document.createElement('input');
    paciensInput.type = 'text';
    paciensInput.value = paciens;
    paciensInput.className = 'form-control mb-3';
    paciensInput.placeholder = 'Név';
    modalBox.appendChild(paciensInput);

    // orvos input mező
    const orvosInput = document.createElement('input');
    orvosInput.type = 'text';
    orvosInput.value = orvos;
    orvosInput.className = 'form-control mb-3';
    orvosInput.placeholder = 'Orvos neve';
    modalBox.appendChild(orvosInput);

    // Időpont input mező
    const idopontInput = document.createElement('input');
    idopontInput.type = 'text';
    idopontInput.value = idopont;
    idopontInput.className = 'form-control mb-3';
    idopontInput.placeholder = 'Időpont';
    modalBox.appendChild(idopontInput);

    // Mentés gomb
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Mentés';
    saveButton.className = 'btn btn-success';
    saveButton.addEventListener('click', () => {
        // Küldd el az új adatokat a szervernek
        const updatedPaciens = paciensInput.value;
        const updatedOrvos = orvosInput.value;
        const updatedIdopont = idopontInput.value;

        fetch(`/kezeles/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ paciens: updatedPaciens, orvos: updatedOrvos, idopont: updatedIdopont}),
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
