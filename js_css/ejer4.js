function clasificarResiduo() {
    let codigo = parseInt(document.getElementById("codigo-residuo").value);
    let resultado = document.getElementById("resultado-residuo");

    let tipo = "";
    let descripcion = "";
    let recomendacion = "";
    let color = "";

    switch (codigo) {
        case 1:
            tipo = "♻️ Orgánico";
            descripcion = "Restos de comida, cáscaras, hojas y materiales biodegradables.";
            recomendacion = "Depositar en un contenedor de residuos orgánicos o compost.";
            color = "#8BC34A"; // verde
            break;
        
        case 2:
            tipo = "🧴 Plástico";
            descripcion = "Botellas, envases y materiales derivados del petróleo.";
            recomendacion = "Enjuagar y reciclar en el contenedor de plásticos.";
            color = "#03A9F4"; // celeste
            break;

        case 3:
            tipo = "📦 Papel / Cartón";
            descripcion = "Hojas, cuadernos, cajas, empaques de cartón.";
            recomendacion = "Aplanar y colocar en el contenedor azul de papel.";
            color = "#BBDEFB"; // azul claro
            break;

        case 4:
            tipo = "🍶 Vidrio";
            descripcion = "Botellas, frascos y recipientes de vidrio.";
            recomendacion = "Reciclar en el contenedor verde o punto de vidrio.";
            color = "#4CAF50"; // verde más oscuro
            break;

        default:
            resultado.innerHTML = "Código inválido. Debe ser un valor entre 1 y 4.";
            resultado.style.background = "#ffffff";
            return;
    }

    resultado.style.background = color;
    resultado.innerHTML = `
        <strong>${tipo}</strong><br>
        ${descripcion}<br><br>
        <em>Recomendación:</em> ${recomendacion}
    `;
}