let provincia = "Chaco"
$("#auto").click(function() {
    $.ajax({


            url: "t https://api.liv-ex.com/",
            method: "GET",

            CLIENT_KEY: "94B5CC70-BC3D-49C3-B636-C3C7552E543D",
            SECRET: "merchantpasswd",
            ACCEPT: "application/json",
            TYPE: "application/json",



            /*



                        //url: "./ejemplo.json",            //direccion web o archivo json de mi servidor
                        url: "https://observa.gijon.es/explore/dataset/vinos-y-tapas/api",

                        dataType: "json", //tipo dato
                        type: "GET", //Obtener info*/
        })
        .done(function(resultado) { //caso correcto (callback)
            console.log(resultado)

            /*  for (let i=0; i < resultado.provincias.length;i++){
                  console.log(resultado.provincias[i])
                  console.log("ID: " + resultado.provincias[i].id)
                  console.log("Nombre: " + resultado.provincias[i].nombre)
                  console.log("Latitud: " + resultado.provincias[i].centroide.lat)
                  console.log("Longitud: " + resultado.provincias[i].centroide.lon)

                  $("#mostrar").text(resultado.provincias[i].nombre)


              }
              */

            // for (let i = 0; i < resultado.criptos.length; i++) {
            //     console.log(resultado.criptos[i].nombre)
            // }




        })
        .fail(function(xhr, status, error) { //caso incorrecto (callback)
            console.log(xhr)
            console.log(status)
            console.log(error)
        })
})