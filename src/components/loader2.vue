<template>
   
    <div class="container">
        <div class="loader shadow"></div>
        <p class="text-center mt-5 font-weight-bold">Loading Transactions...</p>
    </div>

</template>



<script>
export default {
    name:'Loader2',
}
</script>


<style scoped>
    .loader {

      width: 100%;
      animation: loading 5s linear infinite;
      border-radius: 20px;
      height: 20px;
      background-color: #9C27B0;
      margin-top: 200px;

  }


      @keyframes loading {
      0%{
        width: 0%;  
      }

      100%{
        width:100%;
        
      }



    }
</style>