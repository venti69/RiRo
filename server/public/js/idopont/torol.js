function torol(id) {
    fetch(`/torol/${id}`, {
        method: 'DELETE',
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
