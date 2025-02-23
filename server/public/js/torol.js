function torol(id) {
    if (confirm("Biztosan törölni szeretnéd ezt az orvost?")) {
        fetch(`/torol/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
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
}
