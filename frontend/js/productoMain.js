const API_URL = 'http://localhost:3000/api/productos';

document.getElementById('formproductos').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombreproductos = document.getElementById('nombreproductos').value;
  const stock = document.getElementById('stock').value;
  const precio = document.getElementById('valor').value;

  try {
    const respuesta = await fetch(API_URL_PROD, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombreproductos, stock, valor })
    });

    const datos_prod = await respuesta_prod.json();

    if (respuesta_prod.ok) {
      alert(datos_prod.mensaje_prod); // Muestra "producto agregado"
      document.getElementById('formproducto').reset();
      cargarproductos();
    } else {
      alert('Error al agregar producto: ' + datos.error);
    }
  } catch (error) {
    alert('Error al conectar con el servidor');
    console.error(error);
  }
});

async function cargarproductos() {
    const res = await fetch(API_URL);
    const datos = await res.json();
    const tabla = document.getElementById('tablaproductos');
    tabla.innerHTML = '';
    datos.forEach(productos => {
        tabla.innerHTML += `
        <tr>
        <td>${productos.id}</td>
        <td>${productos.nombre_prod}</td>
        <td>${productos.stock}</td>
        <td>${productos.valor }</td>
        </tr>
        `;
    });

}
cargarClientes();