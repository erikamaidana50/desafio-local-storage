document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("buttonText");

    boton.addEventListener("click", (e) => {
        e.preventDefault(); // Evitar que la página se recargue
        const inputData = document.getElementById("inputText").value;
    
        if (inputData) {
          // Guardar el dato en localStorage
          localStorage.setItem("storedData", inputData);
          alert("Dato guardado en LocalStorage"); // Confirmación para usuario
          inputData.reset(); // Limpiar el input

    }
    
    
    
    
})

})