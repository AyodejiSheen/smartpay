<template>
    <div>
        <div class="text-center bg-dark page-title mx-auto  p-2">
        <p class="lead  text-white mb-0 ">TRANSACTION HISTORY</p>
        </div>


        <div class="container text-center mt-3">
          <div class="row ">
            <div class="col-md-4 border-right">
              <button class=" btn " @click="deposit">Deposit</button>
            </div>

            <div class="col-md-4 border-right" >
              <button class="btn" @click="withdraw">Withdraw</button> 
            </div>

            <div class="col-md-4">
              <button class="btn" @click="transfer">Transfer</button> 
            </div>
          </div>
        </div>

        <router-view></router-view>



    </div>
</template>


<script>
export default {
    name:"Transaction",



    methods: {
          deposit(){
            this.$router.push({path:'/dashboard/transactions-history'})
          },

          transfer(){
            this.$router.push({path:'/dashboard/transactions-history/transfer'})
          },

            withdraw(){
            this.$router.push({path:'/dashboard/transactions-history/withdraw'})
          }
    },


}
</script>


<style scoped>

  .tag{
    color:#9C27B0;
  }

  .btn{
    background-color: #9C27B0;
    color:white;
    width:200px;
    border-radius: 0px;
  }

  .btn:hover{
    background-color: rgb(22, 21, 21);
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }







</style>
