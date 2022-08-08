<script>

   function calc(valor)

   {

      if(valor=='%') valor = '/100';

      if(valor=='=')

      {

         document.calcula.f.value = eval(document.calcula.f.value);

      }

      else

      {

         document.calcula.f.value = document.calcula.f.value + valor;

      }

   }

</script>

 

