function mapaInicio(){ 
// Declaración de la función.
  // Definimos cordenadas para que guarde el valor y lo reemplace en el formulario
  latitud = -34.595986
  longitud = -58.3724715
  // Se declara c en la variable pre definida conexion
  var c = conexion()
  // Si cordenadas latitud y cordenadas longitud no es igual
  if (c[0][0] && c[0][1] != ""){
    // Se declara las variables y se parsea
    var latitud = parseFloat(c[0][0])
    var longitud = parseFloat(c[0][1])
  }
    // Se declara la variable latitud y longitud  en coord
    var coord = {lat:latitud,lng:longitud}; 
    
    // Accede a la clase google maps, al metodo map y crea el mapa.
    var map = new google.maps.Map(document.getElementById('map'),{
      // Toma un objeto (Cantidad de zoom).
      zoom: 8, 
      center: coord
    });
    // Accede a la clase google maps, al metodo map y genera el marcado en el mapa.
    var marker = new google.maps.Marker({ 
      // Toma un objeto.
      position: coord, 
      map: map
    });
    // Muestra información del market con el metodo InfoWindow
    var InfoWindow = new google.maps.InfoWindow({
      content:'<h1>' + c[1] + '</h1>'
    });
    // Cuando se le da click al marcador se abre el InfoWindow
    marker.addListener('click', function(){
      InfoWindow.open(map, marker);
    });
}

// Se declaran las variables y los ID
var conexion = function() {
  var nombre = document.getElementById("nombre").value;
  var direccion = document.getElementById("direccion").value;
  var telefono = document.getElementById("telefono").value;
  var categoria = document.getElementById("categoria").value;
  var coordenadas = document.getElementById("coordenadas").value;
  // Acá dice que si los elementos están vacios que el focus se mantenga en el campo
  if(nombre == "") {
      document.getElementById("nombre").focus();
  } else if (direccion == "") {
      document.getElementById("direccion").focus();
  } else if (telefono == "") {
    document.getElementById("telefono").focus();
  } else if (categoria == "") {
    document.getElementById("categoria").focus();
  } else if (coordenadas == "") {
    document.getElementById("coordenadas").focus();
  }
      // Acá el formulario hace un refresh, los campos se recargan y vuelve al campo principal (nombre)
      document.getElementById("nombre").value = "";
      document.getElementById("direccion").value = "";
      document.getElementById("telefono").value = "";
      document.getElementById("categoria").value = "";
      document.getElementById("coordenadas").value = "";
      document.getElementById("nombre").focus();

      var cor = coordenadas.split(",");
      // Concatenamos el string con las variables con un br para hacer un espacio
      var str = "Nombre: " + nombre + "<br/>" + "Dirección: " + direccion + "<br/>" + "Telefóno: " + telefono + "<br/>" + "Categoría: " + categoria + "<br/>" + "(X, Y): " + coordenadas + "<br/>"
      // Retorna los valores de cor y str
      return [cor,str]
}
