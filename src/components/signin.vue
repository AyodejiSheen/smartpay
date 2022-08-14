<template >
    <div>
        <p class="mb-4  mt-5 text-center"> <b>Enter Credentials to sign-in</b></p>
        <p class="info mt-3 text-center">{{infoMsg}}</p>
        <form class="col-11 mx-auto" @submit.prevent="loginUser">
            <input type="email" name="email" placeholder="Enter your Email Address"  v-model="email" class="form-control mb-4"/>
            <input type="password" name="password" placeholder="Enter  your Password" v-model="password" class="form-control mb-4"/>
            <button class="btn-block text-white shadow btn sign-in">sign me in </button>
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

.btn, .form-control{
  outline: none;
  box-shadow: none;
}
.sign-in{
    background-color: #9C27B0;
}

.info{
    font-size: 12px;
}

input{
    height: 40px;
    font-size: 13px;
}




</style>