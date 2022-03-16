<template>
    <div>


<div class="container-fluid mt-3">
    <div class="row">
        <div class="col-md-3 in-section position-fixed">
            <v-alert border="left" colored-border class="shadow pl-4  text-dark" color="#9C27B0" elevation="2" >
                <p class="mb-0 greeting ml-5">Welcome Back! <br> <span class="font-weight-bold user-name">{{this.userslist[this.userid].firstname + " " + this.userslist[this.userid].lastname}}</span></p></v-alert>

            <p class="text-center lead font-weight-bold mt-5 mb-0">Your Account Balance: <br>
                <span class="amount">{{"₦" + this.userslist[this.userid].balance + ".00"}}</span>
            </p>

            <div class="conversion text-white mx-auto shadow  rounded">
                <p class="mb-0">EUR: <span>{{"€ " + geteur.toFixed(2)}}</span></p>
                <p class="mb-0">GBP: <span>{{"£ " + getgbp.toFixed(2)}}</span></p>
                <p class="mb-0">USD: <span>{{"$ " + getusd.toFixed(2)}}</span></p>
            </div>

            <div class="updates">
            <p class="text-center font-weight-bold trans-history mt-4 mb-0">notifications</p>
            <div class="notfy shadow p-3 rounded text-center mx-auto" v-for="(notif, index) in this.notyArr.slice().reverse()" :key="index">
                <p class="mb-2">{{notif}}</p>
            </div>
            </div>
        </div>

        <div class="col-md-6  mid-section position-fixed offset-sm-3">

            <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100 carousel-image" src="../assets/smartpay/Iphone.png" alt="First slide">
                  <div class="carousel-caption">
                    <!-- <h2>ABEG-eXTRA</h2> -->
                    <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Vitae aliquet nec ullamcorper sit amet risus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada.</p> -->
                </div>
                </div>

                <div class="carousel-item">
                <img class="d-block w-100 carousel-image" src="../assets/smartpay/image.jpg" alt="Third slide">
                </div>
                <div class="carousel-item">
                <img class="d-block w-100 carousel-image" src="../assets/smartpay/Credit-Card.png" alt="Second slide">
                </div>

                <div class="carousel-item">
                <img class="d-block w-100 carousel-image" src="../assets/smartpay/images (1).jpeg" alt="Third slide">
                </div>
                <div class="carousel-item">
                <img class="d-block w-100 carousel-image" src="../assets/smartpay/images (3).jpeg" alt="Third slide">
                </div>

                <div class="carousel-item">
                <img class="d-block w-100 carousel-image" src="../assets/smartpay/images (2).jpeg" alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>


            <div class="row mx-auto">
                <div class="col-md-6 mx-auto">
                    <p class="tran-details text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at auctor urna nunc id. Commodo sed egestas egestas fringilla. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. </p>
                </div>
            </div>
        </div>




        <div class="col-md-3  out-section offset-sm-9" >
             <div>
                 <p class="text-center font-weight-bold trans-history">Recent Transactions</p>

                 <v-card class="mx-auto mb-2"
                    v-for="(trans, index) in this.transArr.slice().reverse()" :key="index" @click="viewtrans"  :id="trans.transType">
                    <v-card-text class="pl-4 pb-3" :id="trans.transType">
                    <div class="text-muted font-weight-bold text-right" :id="trans.transType">{{trans.transDate}}</div>
                    <p class="mb-0" :id="trans.transType"><span class="text-muted" :id="trans.transType">Transaction type:</span><b class="tran-details pr-5" :id="trans.transType">{{"     " +trans.transType}}</b></p>
                    <p class="mb-0" :id="trans.transType"><span class="text-muted" :id="trans.transType">Amount involved:</span> <b class="tran-details pr-5" :id="trans.transType">{{"#"+trans.amount}}</b></p>
                    <p class="mb-0 font-weight-bold text-success" :id="trans.transType"><span class="text-muted text-success" :id="trans.transType">STATUS:</span>Successful</p>
                    </v-card-text>
            </v-card>
             </div>
        </div>
    </div>
</div>







    </div>
</template>


<script>
export default {
    name:'Dashboard',

    data() {
        return {
            userslist: JSON.parse(localStorage.getItem("AbegUsers")),
            userid : this.$store.state.logId,
            transArr:"",
            response:{},
            usdconv : "",
            btnconv :"",
            eurconv:"",
            notyArr:"",

        }
    },

    methods: {
        viewtrans(event){
            let theid = event.target.id;
            console.log(theid)
            if (theid == "Deposit"){
                this.$router.push({path:'/dashboard/transactions-history'})
            }else if(theid == "withdraw"){
                this.$router.push({path:'/dashboard/transactions-history/withdraw'})
            }else if(theid == "Transfer"){
                this.$router.push({path:'/dashboard/transactions-history/transfer'})
            }
        }
    },


    created() {
        this.transArr = this.userslist[this.userid].transactions;
        this.notyArr = this.userslist[this.userid].notifications;
        console.log(this.transArr);

      
        // window.axios.get("http://data.fixer.io/api/latest?access_key=1f0f65b9ad407dea5e9f8088e3903702&format=1")
        // .then(resp =>{
        // if (resp.status == 200){
        //     this.response = resp.data;
        //     // this.Usersname = this.response.login;
        //     console.log(this.response)
        // }
        // })

        // .catch(error => {
        // console.log(error)
        // })
  
    },


    computed:{
        getusd(){
            return this.userslist[this.userid].balance / 380;
        },

        geteur(){
            return this.userslist[this.userid].balance / 462;
        },

        getgbp(){
            return this.userslist[this.userid].balance / 537;
        },


    },


}
</script>


<style scoped>
    .notfy{
        font-size: 12px;
        color: blueviolet;
        width: 280px;
    }
    .carousel-image{
        height:400px;
    }

    .user-name{
        font-size: 20px;
    }

    .amount{
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 40px;
        color:#9C27B0
    }

    .conversion{
        background-color: #9C27B0;
        width:230px;
        line-height: 22px;
        padding: 20px 60px 20px 60px;
        font-family: Arial, Helvetica, sans-serif;
    }

    .trans-history{
        color:#9C27B0;
        text-decoration: underline;
    }
    .tran-details{
        color:#9C27B0
    }

            .social-btn{
            font-size: 16px;
            padding: 20px;
        }

        .brand-logo{
            width: 250px;

        }


    @media (min-width:300px) and (max-width:450px){
        .out-section{
            display:none
        }

        .mid-section{
            position:static!important
        }

        .in-section{
            position:static!important
        }

        .carousel-image{
        height:200px;
        }

        .carousel-caption{
            font-size: 10px;
        }

        .social-btn{
            font-size: 10px;
            margin-left: 7px;
        }


    }



    
</style>