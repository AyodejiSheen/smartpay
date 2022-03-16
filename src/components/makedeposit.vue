<template>
    <div id="makedeposit">
        <div class="container-fluid">
            <div class="row">
            <div class="col-md-4">
                <v-alert border="left" colored-border class="shadow alert pl-4  mt-5 text-dark" color="#9C27B0" elevation="2" >
                <p class="mb-0 font-weight-bold ml-5">Account Balance: <br> <span class="font-weight-bold amount">{{"₦" + getBal + ":00"}}</span></p></v-alert>
            </div>

            <div class="col-md-8 shadow form-section mx-auto pt-4">
                <p class="info text-center pt-4">{{infoMsg}}</p>
                <p class="display-4 mb-0 text-center mt-3 mb-3 ">MAKE DEPOSIT</p>
                <form class="form-class mx-auto shadow p-5" @submit.prevent="makeDeposit">
                    <p class="text-center tag">Deposit Money into your Account Balance</p>
                    <input type="number" name="ban" v-model="input.acctBan" placeholder="Your BAN" class="form-control mb-3" required/>
                    <input type="number" name="amount" v-model="input.amount" placeholder="Enter  Amount e.g 1000, 5000, 10000..." class="form-control mb-3" required/>
                    <select class="form-control mb-3" v-model="input.transType" name="transactiontype" required>
                        <option selected disabled>Transaction Type</option>
                        <option value="Deposit">Deposit</option>
                    </select>
                    <!-- <textarea type="text" rows="3" name="note" placeholder="Add short note" class="form-control mb-3"/> -->
                    <button class="btn shadow text-center btn-block btn-submit">SUBMIT</button>
                </form>
            </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:'MakeDeposit',

    data() {
        return {
            input:this.$store.state.transdetails,

            userslist: JSON.parse(localStorage.getItem("AbegUsers")),
            userid : this.$store.state.logId,

            infoMsg:""

        }
    },

    methods: {

        closeDel(){
                this.infoMsg = "";
                this.input.acctBan =""
                this.input.amount=""
                this.input.transnote=""
          },

        makeDeposit(){
            if (this.input.acctBan != this.userslist[this.userid].ban){
                this.infoMsg = "Please enter a valid Account Number!"
                document.querySelector('.info').style.color="red";
                setTimeout(() => {
                this.closeDel();
                }, 2000);
            }else{
                this.$store.commit({type: "Makedeposit", input:this.input});
                this.infoMsg = "Transaction successful!  ₦" + this.input.amount + " has been deposited";
                document.querySelector('.info').style.color="green";
            setTimeout(() => {
            this.closeDel();
            }, 2000);
            }
        }
    },

    computed:{
        getBal(){
            return this.userslist[this.userid].balance
        }
    },


    created() {
        console.log(this.$store.state.logId);
    },




}
</script>


<style scoped>
    .alert{
        width:400px
    }

    .amount, .display-4{
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 40px;
        color:#9C27B0
    }

    .form-class{
        width: 500px;
        margin-top: 10px;
        margin-bottom: 135px;
    }

    .btn-submit{
        color: white;
        background-color: #9C27B0;
        border-radius: 20px;
    }

    .btn-submit:hover{
        background-color: black;
    }

    .tag{
        color:#9C27B0;
        font-size: 14px;
    }

    .info{
        font-size: 13px;
    }

    @media (min-width:300px) and (max-width:450px){
        .alert{
            width: 280px;
        }

        .amount, .display-4{
            font-size: 30px;
        }

        .display-4{
            margin-top: 0px!important;
        }

        .form-section{
            padding-top: 0px!important;
        }

        .form-class{
            width: 280px;
            margin-bottom: 15px;
        }

        input{
            font-size: 12px;
        }
    }


</style>
