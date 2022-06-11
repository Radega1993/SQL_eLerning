import React from 'react';

export const HomeScreen = () => {
  var text = 'SELECT * | {[DISTINCT] column|expression [alias], ...} FROM table;';
  return (
    <div className="container mt-5">
      <h1> Tu camino empieza aquí </h1>

      <h3 className="mt-5"> Recuperación de datos mediante la sentencia select </h3>

      <p className="text-justify">
        <strong>Capacidades de las Sentencias SQL SELECT</strong>
        <br/>
        Una sentencia SELECT recupera información de la base de datos. Con una sentencia SELECT, se puede hacer lo siguiente:
        <br/>
        <strong>Proyección:</strong> seleccione las columnas de una tabla devueltas por una consulta. Seleccione tantas columnas como sea necesario.
        <br/>
        <strong>Selección:</strong> seleccione las filas de una tabla devueltas por una consulta. Se pueden utilizar diferentes criterios para restringir las filas recuperadas.
        <br/>
        <strong>Uniones:</strong> reúna los datos almacenados en diferentes tablas especificando el enlace entre ellas. Las uniones SQL se tratan de forma más detallada en la lección titulada “Visualización de Datos de Varias Tablas mediante Uniones”.
      </p>
      <div className="d-flex justify-content-center">
        <img
          src={process.env.PUBLIC_URL + '/assets/img/learn/capacidad_select.png'}
          alt="capacidad select"
        />
      </div>
      <hr/>
      <p className="text-justify">
      <strong>Sentencia SELECT Básica</strong>
      <br/>
        En su formato más simple, una sentencia SELECT debe incluir lo siguiente:
        <ul>
          <li>Una cláusula SELECT, que especifica las columnas que se van a mostrar.</li>
          <li>Una cláusula FROM, que identifica la tabla que contiene las columnas que se muestran en la cláusula SELECT.</li>
        </ul>
      </p>

      <p>
      <bold> FORMAT: {text} </bold>
      <br/>
        <ul>
          <li>SELECT = es una lista de una o más columnas.</li>
  	      <li>*  		 = selecciona todas las columnas.</li>
  	      <li>DISTINCT = suprime los duplicados.</li>
  	      <li>column|expression =	selecciona la columna o expresión especificada.</li>
          <li>alias =	proporciona diferentes cabeceras de las columnas seleccionadas.</li>
          <li>FROM table = tablas de la base de datos</li>
        </ul>
        <bold> EJEMPLO: SELECT * FROM departments; </bold>
        <br/>
        <bold> EJEMPLO con columnas: SELECT department_id, location_id FROM departments; </bold>
      </p>

      <hr/>

      <p className="text-justify">
      <strong>Caracteristicas SELECT</strong>
      <br/>
        Con estas sencillas reglas y directrices, puede construir sentencias válidas que son fáciles de leer y editar:
        <ul>
          <li>Las sentencias SQL no son sensibles a mayúsculas/minúsculas (a menos que se indique).</li>
          <li>Las sentencias SQL se pueden introducir en una o más líneas. </li>
          <li>Las palabras clave no se pueden dividir entre líneas o abreviar. </li>
          <li>Las cláusulas se suelen colocar en líneas independientes para que resulte más fácil su lectura o edición. </li>
          <li>El sangrado se debe utilizar para que sea más fácil de leer el código. </li>
          <li>Normalmente, las palabras clave se introducen en mayúsculas; el resto de palabras, como nombres de tablas y columnas, se introducen en minúsculas.</li>
        </ul>
      </p>

      <hr/>
      <p className="text-justify">
      <strong>expresiones Aritméticas</strong>
      <br/>
        Crear expresiones con datos de fecha y números mediante operadores aritméticos:
        <table class="table table-responsive-sm">
          <thead>
            <tr>
              <th scope="col">Operador</th>
              <th scope="col">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">+</th>
              <td>Sumar</td>
            </tr>
            <tr>
              <th scope="row">-</th>
              <td>Restar</td>
            </tr>
            <tr>
              <th scope="row">*</th>
              <td>Multiplicar</td>
            </tr>
            <tr>
              <th scope="row">/</th>
              <td>Dividir</td>
            </tr>
          </tbody>
        </table>
        <bold> EJEMPLO: SELECT salary + 100 FROM employees; </bold>
        <br/><br/>
        <h5> Prioridad de operadores </h5>
        Estor 2 ejemplos dan resultados muy diferentes
        <ul>
          <li>SELECT 12*salary+100 FROM employees;</li>
          <li>SELECT 12*(salary+100) FROM employees; </li>
        </ul>
      </p>

      <hr/>

      <p className="text-justify">
        <strong>Definición del Valor Nulo</strong>
        <br/>
        Si una fila carece de un valor de datos para una columna concreta, se dice que dicho valor es nulo o que contiene un valor nulo.
        <br/>
        Un valor nulo es un valor que no está disponible, sin asignar, desconocido o que no es aplicable. Un valor nulo no es lo mismo que un cero o un espacio en blanco. El cero es un número y el espacio en blanco es un carácter.
        <br/>
        Las columnas de cualquier tipo de dato pueden contener valores nulos. Sin embargo, algunas restricciones (NOT NULL y PRIMARY KEY) evitan que se utilicen valores nulos en la columna.
        <br/>
        Si cualquier valor de columna en una expresión aritmética es nulo, el resultado es nulo. Por ejemplo, si intenta realizar una división entre cero, recibirá un error. Sin embargo, si divide un número entre un valor nulo, el resultado será nulo o desconocido.
      </p>

      <hr/>

      <p className="text-justify">
        <strong>Definición de Alias de Columna</strong>
        <br/>
        Al mostrar el resultado de una consulta, SQL Developer normalmente utiliza el nombre de la columna seleccionada como la cabecera de columna. Esta cabecera puede que no sea descriptiva y, por lo tanto, puede resultar difícil de entender. Puede cambiar una cabecera de columna mediante un alias de columna.
        <br/>
        Especifique el alias después de la columna en la lista SELECT con un espacio como separador. Por defecto, las cabeceras de alias aparecen en mayúscula. Si el alias contiene espacios o caracteres especiales (como # o $) o si es sensible a mayúsculas/minúsculas, incluya el alias entre comillas dobles ("").
        <ul>
          <li>Cambia el nombre de una cabecera de culumna</li>
          <li>Es útil para realizar cálculos </li>
          <li>Sigue inmediatamente al nombre de columna (también puede ser la palabra clave opcional <strong> AS </strong> entre el nombre de la columna y el alias)</li>
          <li>Necesita comillas dobles si contiene espacios o caracteres especiales o si es sensible a mayúsculas/minusculas</li>
        </ul>
        <bold> EJEMPLO: SELECT last_name AS apellido, first_name AS nombre FROM employees; </bold>
        <br/>
        <bold> EJEMPLO: SELECT last_name AS "Apellido", first_name AS "Nombre de pila" FROM employees; </bold>
      </p>

      <hr/>

      <p className="text-justify">
        <strong>Operador de Concatenación</strong>
        <br/>
        Puede enlazar columnas a otras columnas, expresiones aritméticas o valores constantes para crear una expresión de carácter con el operador de concatenación (||). Las columnas a ambos lados del operador se combinan para crear una sola columna de salida.
        <br/>
        <bold> EJEMPLO: SELECT first_name || last_name AS "Nombre completo" FROM employees; </bold>
        <br/>
        Los caracteres literales se esciben entre comillas.
      </p>

      <hr/>

      <p className="text-justify">
        <strong>Filas Duplicadas</strong>
        <br/>
        A menos que indique lo contrario, SQL muestra los resultados de una consulta sin eliminar las filas duplicadas. El primer ejemplo de la diapositiva muestra todos los números de departamento de la tabla EMPLOYEES. Observe que los números de departamento se repiten.
        <br/>
        Para eliminar filas duplicadas en el resultado, incluya la palabra clave DISTINCT en la cláusula SELECT inmediatamente después de la palabra clave SELECT. En el segundo ejemplo de la diapositiva, la tabla EMPLOYEES en realidad contiene 20 filas, pero sólo hay siete números de departamento únicos en la tabla.
        <br/>
        Puede especificar varias columnas después del cualificador DISTINCT. El cualificador DISTINCT afecta a todas las columnas seleccionadas y el resultado es cada combinación distinta de columnas.
        <br/>
        <bold> EJEMPLO: SELECT DISTINCT department_id FROM employees; </bold>
      </p>

        <h4 className="mb-5"> ¡Ahora pon a prueba todo lo aprendido en los diferentes juegos! </h4>
    </div>
  )
};
