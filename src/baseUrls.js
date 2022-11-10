const dominios = [
    {
      entorno: 'Desarrollo',
      dominio: 'http://localhost:5173',
      api    : 'https://prueba-afex-d5316-default-rtdb.firebaseio.com'
    },
    {
      entorno: 'Desarrollo',
      dominio: 'http://127.0.0.1:5173',
      api    : 'https://prueba-afex-d5316-default-rtdb.firebaseio.com'
    }
   
  ];
  
  
  /**
   * Obtener el dominio del API principal
   *
   * @returns {string|*}
   */
  export function obtenerDominio() {
    const dominio_actual = document.location.origin;
  
    const dominio = dominios.find(d => d.dominio === dominio_actual);
  
    if (dominio) {
      return dominio.api;
    }
  
    return '';
  }