<template >
    <div>
        <div class="container withdraw">
            <h2 class="mt-5 font-weight-bold">Withdraw</h2>
            <p class="tag">All your withdraw transactions are showned below:</p>
            <div class="view-history">
                <table class="table table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th>S/N</th>

                            <th>Account Number</th>
                            <th>Transaction Date</th>
                            <th>Transaction Note</th>
                            <th>Amount Withdraw</th>
                        </tr>
                    </thead>
                    <tbody v-for="(deposit, index) in this.transwithdrawArr" :key="index">
                        <tr>
                            <td>{{ index + 1 }}</td>

                            <td>{{ deposit.acctBan }}</td>
                            <td>{{ deposit.transDate }}</td>
                            <td>{{ deposit.transnote }}</td>
                            <td>{{ "₦" + deposit.amount }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'Withdrawtrans',

    data() {
        return {
            userslist: JSON.parse(localStorage.getItem("AbegUsers")),
            userid: this.$store.state.logId,
            transwithdrawArr: "",
        }
    },


    created() {
        this.transwithdrawArr = this.userslist[this.userid].transactions.filter((trans) => trans.transType == "withdraw");
    },
}
</script>





<style scoped>
.view-history {
    overflow: scroll;
}
</style>