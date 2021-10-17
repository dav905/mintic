
      google.charts.load('current', {'packages':['corechart']});

      google.charts.setOnLoadCallback(platoPrincipal);

      
      
        function datos(){
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Colores');
        data.addColumn('number', 'votos');
        data.addRows([
          ['Bagre frito', 20],
          ['Carne asada', 50],
          ['Costillas de cerdo', 40],
          ]);
        return data;
    }
        
        function platoPrincipal() {
        // Set chart options
        let data = datos();
        var options = {titleTextStyle:{fontSize: 18},
                      'title':'Platos principales vendidos',                        
                        is3D: true,
                       'width':400,
                       'height':300,
                       slices: {  1: {offset: 0.2}},
                      };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('principal'));
        chart.draw(data, options);
      }


//---------------------------------------------

google.charts.load('current', {'packages':['corechart']});

     
      google.charts.setOnLoadCallback(entradas);

  
      
        function datos2(){
        
        var data2 = new google.visualization.DataTable();
        data2.addColumn('string', 'Colores');
        data2.addColumn('number', 'votos');
        data2.addRows([
          ['Longaniza', 15],
          ['Chorizo', 25],
          ['Chicharrón', 40],
          ]);
        return data2;
    }
        
        function entradas() {
        // Set chart options
        let data2 = datos2();
        var options = {titleTextStyle:{fontSize: 18},
                      'title':'Entradas vendidas',
                        is3D: true,
                       'width':400,
                       'height':300,
                       slices: {  2: {offset: 0.2}}
                        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('entradas'));
        chart.draw(data2, options);
      }

//------------------------------------------------------------------------

google.charts.load('current', {'packages':['corechart']});

     
      google.charts.setOnLoadCallback(bebidas);

  
      
        function datos3(){
        
        var data3 = new google.visualization.DataTable();
        data3.addColumn('string', 'Colores');
        data3.addColumn('number', 'votos');
        data3.addRows([
          ['Botella de agua', 25],
          ['Gaseosa', 50],
          ['Jugo natural', 30],
          ]);
        return data3;
    }
        
        function bebidas() {
        // Set chart options
        let data3 = datos3();
        var options = {titleTextStyle:{fontSize: 18},
                      'title':'Jugos vendidas',
                        is3D: true,
                       'width':400,
                       'height':300,
                       slices: {  1: {offset: 0.2}}
                        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('bebidas'));
        chart.draw(data3, options);
      }





      //--------------------barras


      google.charts.load('current', {packages: ['corechart', 'bar']});
      google.charts.setOnLoadCallback(ventaDias);

      function datosDeVentas(){
        
        var datosVentas = new google.visualization.DataTable();
        datosVentas.addColumn('string', 'Dias');
        datosVentas.addColumn('number', 'Ventas');
        datosVentas.addColumn({ role: 'style' });
        datosVentas.addRows([
          ['Lunes', 500000,"green"],
          ['Martes', 650000,"yellow"],
          ['Miercoles', 690000,"blue"],
          ['Jueves', 720000,"red"],
          ['Viernes', 935000,"#703593"]
          ]);
        return datosVentas;
    }

    function ventaDias() {
        // Set chart options
        let datosVentas = datosDeVentas();
        var options = {titleTextStyle:{fontSize: 18},
                        legend: "none",
                      'title':'Ventas de Lunes a Viernes',                        
                      //  'width':700,
                       'height':300, 
                       vAxis: {
                        title: 'Ventas en pesos por dias'
                      } ,  
                      // legend:{position: 'top', textStyle: {color: 'blue', fontSize: 16}}  
                      
                                     
                        };


        var chart = new google.visualization.ColumnChart(document.getElementById('ventas'));
    
          chart.draw(datosVentas, options);
      }