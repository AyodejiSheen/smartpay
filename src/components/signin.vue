<template >
    <div>
        <p class="mb-4  mt-5 tag"> <b>Enter Credentials to sign-in</b></p>
        <p class="info mt-3">{{infoMsg}}</p>
        <form class="col-11 mx-auto" @submit.prevent="loginUser">
            <input type="email" name="email" placeholder="Enter your Email Address"  v-model="email" class="form-control mb-4"/>
            <input type="password" name="password" placeholder="Enter  your Password" v-model="password" class="form-control mb-4"/>
            <button class="btn-block text-white shadow btn">sign me in </button>
        </form>
    </div>
</template>


<script>
export default {
    name:'Signin',

    data() {
        return {
            userslist: JSON.parse(localStorage.getItem("AbegUsers")),
            email:"",
            infoMsg:"",
            auth:false,
            password:""
        }
    },

    methods:{

         closeDel(){
            this.infoMsg = "";
            this.email="";
            this.password=""
          },



        loginUser(){
            let logId = this.userslist.findIndex((user) => user.email == this.email);
            // let checkpwrd = this.userslist[logId].password == this.password ;
            console.log(logId);
            if (logId >= 0) {
                if(this.userslist[logId].password != this.password){
                    this.infoMsg = "Incorrect Password";
                    document.querySelector('.info').style.color="red";

                }else{                    
                    this.$store.commit({type: "logUser", logId:logId });
                    this.infoMsg = "Match found! preparing your dashboard"
                    document.querySelector('.info').style.color="green";
                    setTimeout(() => {
                        this.$router.push({path:'/loading'})
                    }, 2000)
                    setTimeout(() => {
                    this.closeDel();
                    this.$router.push({path:'/dashboard'});
                    this.auth = true;
                    localStorage.setItem("Checking", JSON.stringify(this.auth));
                }, 7000);
                }
        } else {
            this.infoMsg = "Match not found! please register ";
            document.querySelector('.info').style.color="red";
            setTimeout(() => {
            this.closeDel();
            this.$router.push({path:'/app/signup'})
          }, 2000)
        }
    },

    created() {

    },
}

}

</script>


<style scoped>

    input{
        height: 50px;
        margin-bottom: 20px!important;
    }

    button{
        background-color: #9C27B0;
        border-radius: 100px;
        height: 50px;
        font-size: 18px;
    }

     .info{
      font-size: 13px;
      color: green;
    }


     @media (min-width:300px) and (max-width:450px) {
            input{
                height: 40px;
                border-radius: 20px;
            }

            button{
                height: 40px;
                border-radius: 20px;
                font-size: 16px;
                margin-top: 10px!important;
            }

            .tag{
                margin: 50px 0px 20px 0px!important;
                font-size: 14px;
                font-weight: 300!important ;
            }

            .info{
                font-size: 10px;
            }
    }


</style>