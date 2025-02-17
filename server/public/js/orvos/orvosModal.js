function szerkesztes(id, nev, szak, kor, neme, email, telszam, idopont) {
    // console.log(idopont);
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

    // Nev input mező
    const nevInput = document.createElement('input');
    nevInput.type = 'text';
    nevInput.value = nev;
    nevInput.className = 'form-control mb-3';
    nevInput.placeholder = 'Név';
    modalBox.appendChild(nevInput);

    // Szak input mező
    const szakInput = document.createElement('input');
    szakInput.type = 'szak';
    szakInput.value = szak;
    szakInput.className = 'form-control mb-3';
    szakInput.placeholder = 'Szakirány';
    modalBox.appendChild(szakInput);

    // Kor input mező
    const korInput = document.createElement('input');
    korInput.type = 'number';
    korInput.value = kor;
    korInput.className = 'form-control mb-3';
    korInput.placeholder = 'Kor';
    modalBox.appendChild(korInput);

    //Neme input mező
    const nemeInput = document.createElement('input');
    nemeInput.type = 'text';
    nemeInput.value = neme;
    nemeInput.className = 'form-control mb-3';
    nemeInput.placeholder = 'Nem';
    modalBox.appendChild(nemeInput);

    //Email input mező
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.value = email;
    emailInput.className = 'form-control mb-3';
    emailInput.placeholder = 'Email cím';
    modalBox.appendChild(emailInput);

    // Telszam input mező
    const telszamInput = document.createElement('input');
    telszamInput.type = 'text';
    telszamInput.value = telszam;
    telszamInput.className = 'form-control mb-3';
    telszamInput.placeholder = 'Telefonszám';
    modalBox.appendChild(telszamInput);

    // Idopont input mező
    const idopontInput = document.createElement('input');
    idopontInput.type = 'text';
    idopontInput.value = idopont;
    idopontInput.className = 'form-control mb-3';
    idopontInput.placeholder = 'Rendeles';
    modalBox.appendChild(idopontInput);

    // Mentés gomb
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Mentés';
    saveButton.className = 'btn btn-success';
    saveButton.addEventListener('click', () => {
        // Küldd el az új adatokat a szervernek
        const updatedNev = nevInput.value;
        const updatedSzak = szakInput.value;
        const updatedKor = korInput.value;
        const updatedNeme = nemeInput.value;
        const updatedEmail = emailInput.value;
        const updatedTelszam = telszamInput.value;
        const updatedIdopont = idopontInput.value;

        fetch(`/doctors/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nev: updatedNev, szak: updatedSzak, kor: updatedKor, neme: updatedNeme, email: updatedEmail, telszam: updatedTelszam, idopont: updatedIdopont}),
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                
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
