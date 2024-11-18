document.addEventListener("DOMContentLoaded", () => {
    const data = document.getElementById("data");
  
    // Obtener el dato almacenado
    const storedData = localStorage.getItem("storedData");
  
    if (storedData) {
     data.textContent = ` ${storedData}`;
    } else {
      data.textContent = "No hay datos almacenados en LocalStorage.";
    }
  });
  