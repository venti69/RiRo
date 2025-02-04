document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.getElementById("gordolo");
    const patientCards = document.querySelectorAll(".patient-card");
  
    selectElement.addEventListener("change", () => {
      const selectedName = selectElement.value;
  
      patientCards.forEach(card => {
        const nameElement = card.querySelector("strong:nth-child(2)");
        const patientName = nameElement ? nameElement.textContent.trim() : "";
  
        if (selectedName === "" || patientName === selectedName) {
          card.style.display = "block"; // Megjelenítés
        } else {
          card.style.display = "none"; // Elrejtés
        }
      });
    });
  });
  