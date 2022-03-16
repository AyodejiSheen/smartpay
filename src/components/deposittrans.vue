<template >
    <div>
              <div class="container #deposit">
      <h2 class="mt-5 font-weight-bold">Deposit</h2>
      <p class="tag">All your deposit transactions are showned below:</p>            
      <table class="table table-hover">
        <thead class="thead-dark" >
          <tr>
            <th>S/N</th>
     
            <th>Account Number</th>
            <th>Transaction Date</th>
            <th>Amount Deposited</th>
          </tr>
        </thead>
        <tbody v-for="(deposit, index) in this.transdepositArr" :key="index">
          <tr>
            <td>{{index + 1}}</td>

            <td>{{deposit.acctBan}}</td>
            <td>{{deposit.transDate}}</td>
            <td>{{"₦"+deposit.amount}}</td>
          </tr>
        </tbody>
      </table>
        </div>
    </div>
</template>
<script>
export default {
    name:'DepositTrans',

        data() {
        return {
            userslist: JSON.parse(localStorage.getItem("AbegUsers")),
            userid : this.$store.state.logId,
            transdepositArr:""
        }
    },

        created() {
        this.transdepositArr = this.userslist[this.userid].transactions.filter((trans) => trans.transType == "Deposit");
    },
}
</script>
<style scoped>
    
</style>