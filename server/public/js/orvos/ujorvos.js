// ujorvos.js
function hozzaadOrvos() {
    const nev = document.getElementById("nev").value;
    const szak = document.getElementById("szak").value;
    const kor = document.getElementById("kor").value;
    const neme = document.getElementById("neme").value;
    const email = document.getElementById("email").value;
    const telszam = document.getElementById("telszam").value;
    const idopont = document.getElementById("idopont").value;
    const orvoskep = document.getElementById("orvoskep").value;

    const newDoctor = {
        nev,
        szak,
        kor,
        neme,
        email,
        telszam,
        idopont,
        orvoskep
    };

    fetch('/doctors', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDoctor)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Orvos sikeresen hozzáadva!");
            location.reload(); // Refresh the page or update the UI dynamically
        } else {
            alert("Hiba történt!");
        }
    })
    .catch(error => {
        console.error('Hiba:', error);
        alert("Hiba történt az orvos felvétele során.");
    });
}
