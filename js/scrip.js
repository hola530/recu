// Array de datos curiosos sobre Laurie Anderson
const datosCuriosos = [
    "Laurie Anderson fue una de las primeras artistas en combinar performance, música experimental y tecnología en la escena del arte contemporáneo",
    "Su tema O Superman se convirtió en un éxito inesperado en 1981 y llegó al segundo puesto en los rankings del Reino Unido",
    "Diseñó su propio violín eléctrico que le permitía tocar sonidos digitales y activar efectos con sensores",
    "Ha colaborado con artistas como Lou Reed, con quien estuvo casada hasta su fallecimiento en 2013",
    "En 2002 fue nombrada la primera artista residente de la NASA, desarrollando obras inspiradas en la exploración espacial",
    "Su instalación de realidad virtual Chalkroom recibió el premio a mejor experiencia inmersiva en el Festival de Cine de Venecia en 2017",
    "Utiliza su propia voz alterada digitalmente como herramienta narrativa y estética en muchas de sus obras",
    "Ha creado instalaciones multimedia que combinan texto, imagen y sonido en entornos sensoriales de gran escala",
    "Su obra cruza permanentemente los límites entre arte, ciencia, política y poesía",
    "Sigue siendo una figura activa e influyente en el arte digital y ha experimentado con inteligencia artificial en proyectos recientes",
];

let indiceActual = 0;

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    const botonDato = document.getElementById('botonDato');
    const botonDiseno = document.getElementById('botonDiseno');
    const textoDato = document.getElementById('textoDato');
    const textoDiseno = document.getElementById('textoDiseno');

    // Evento para el botón de datos curiosos
    if (botonDato) {
        botonDato.addEventListener('click', function() {
            textoDato.textContent = datosCuriosos[indiceActual];
            indiceActual = (indiceActual + 1) % datosCuriosos.length;
        });
    }

    // Evento para el botón de diseño
    if (botonDiseno) {
        botonDiseno.addEventListener('click', function() {
            document.body.classList.toggle('galeria-alt');
            
            // Cambiar el texto del botón según el estado
            if (document.body.classList.contains('galeria-alt')) {
                textoDiseno.textContent = 'Diseño alternativo activado. Haz clic para volver al diseño normal.';
            } else {
                textoDiseno.textContent = 'Si se le hace incómodo, haga click.';
            }
        });
    }
});
