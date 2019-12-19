 (function() {
     var actualizarHora = function() {
         var fecha = new Date(),
             horas = fecha.getHours(),
             minutos = fecha.getMinutes(),
             segundos = fecha.getSeconds(),
             ampm,
             diaSemana = fecha.getDay(),
             dia = fecha.getDate(),
             mes = fecha.getMonth(),
             año = fecha.getFullYear();

         //Accediendo al DOM

         var phoras = document.getElementById("horas");
         var pminutos = document.getElementById("minutos");
         var psegundos = document.getElementById("segundos");
         var pampm = document.getElementById("ampm");
         var pdiaSemana = document.getElementById("diaSemana");
         var pdia = document.getElementById("dia");
         var pmes = document.getElementById("mes");
         var paño = document.getElementById("year");

         //definiendo el array de las semana
         var semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
         pdiaSemana.textContent = semana[diaSemana];
         pdia.textContent = dia;

         var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
         pmes.textContent = meses[mes];

         paño.textContent = año;

         //CONCICIONANDO PARA QUE EL RELOJ SEA DE 12 HRS
         if (horas >= 12) {
             horas = horas - 12;
             ampm = "PM";
         } else {
             ampm = "AM";
         }
         if (horas == 0) {
             horas = 12;
         }


         phoras.textContent = horas;
         pampm.textContent = ampm;

         if (minutos < 10) {
             minutos = "0" + minutos;
         }
         if (segundos < 10) {
             segundos = "0" + segundos;
         }

         pminutos.textContent = minutos;
         psegundos.textContent = segundos;

     };

     actualizarHora();

     //haciendo la actualizacion de hora constantemente
     var intervalo = setInterval(actualizarHora, 1000);

 }());