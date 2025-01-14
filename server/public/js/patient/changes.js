function szerkesztes(id) {
    fetch(`/patientmodositas/${id}`, {
        method: 'PUT',
        
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: document.getElementById('name').value,
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value
        }),
        
    })
    .then(response => response.json())
    .then(data => {
        alert(data.msg);
        location.reload();
    })
    .catch(error => {
        console.error('Hiba történt:', error);
        alert('Hiba történt a törlés során.');
    });
}
