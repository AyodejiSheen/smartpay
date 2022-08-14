<template>
  <div>
    <div class="container transfer">
      <h2 class="mt-5 font-weight-bold">Transfer</h2>
      <p class="tag">All your transfer transactions are showned below:</p>
      <div class="view-history">
        <table class="table table-hover">
          <thead class="thead-dark">
            <tr>
              <th>S/N</th>
              <th>Reciever's Account Name</th>
              <th>Reciever's Account Number</th>
              <th>Transaction Date</th>
              <th>Sender's BAN</th>
              <th>Amount Transfered</th>
            </tr>
          </thead>
          <tbody v-for="(transfer, index) in this.transtransferArr" :key="index">
            <tr>
              <td>{{ index + 1 }}</td>
              <td>{{ transfer.acctName }}</td>
              <td>{{ transfer.RecAcctBan }}</td>
              <td>{{ transfer.transDate }}</td>
              <td>{{ transfer.sender }}</td>
              <td>{{ "₦" + transfer.amount }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Transfertrans',

  data() {
    return {
      userslist: JSON.parse(localStorage.getItem("AbegUsers")),
      userid: this.$store.state.logId,
      transtransferArr: "",

    }
  },


  created() {
    this.transtransferArr = this.userslist[this.userid].transactions.filter((trans) => trans.transType == "Transfer");
  },
}
</script>


<style scoped>
.view-history {
  overflow: scroll;
}
</style>