<template>
    <div>
        <div class="text-center bg-dark page-title mx-auto  p-2">
                <p class="lead  text-white mb-0 ">MY PROFILE</p>
            </div>

        
            <div class="container p-4">
                <div class="row mt-4">
                    <div class="col-md-6 text-center shadow mt-1 pt-4 pb-4">

                        <label class="profile-title mt-1 mr-auto d-block">ACCOUNT NAME</label>
                        <p class="display-4 font-weight-bold mt-4 full-name">  {{this.userslist[this.userid].firstname +" "+ this.userslist[this.userid].lastname}}</p>
                        <div class="p-dp">
                            <img src='../assets/user-circle.svg' class="user-circle"/>
                        </div>

                    </div>



                    <div class="col-sm-12 col-md-6 mt-3 pl-5 profile-section-2">
                    <v-alert border="left" colored-border class="shadow alert text-dark mx-auto mb-5" color="#9C27B0" elevation="2" >
                        <p class="mb-0 font-weight-bold ml-5 bal">Account Balance: <span class="font-weight-bold amount">{{"₦" + getBal + ":00"}}</span></p></v-alert>
                        <div class="row">
                            <div class="col-md-6 col-sm-12 shadow user-details">
                                <label class="profile-title mt-1 ">ACCOUNT NUMBER</label>
                                <p class="profile-details text-right">{{this.userslist[this.userid].ban}}</p>
                            </div>

                            <div class="ml-4 col-md-5 col-sm-12 shadow user-details">
                                <label class="profile-title mt-1">GENDER</label>
                                <p class="profile-details text-right">{{this.userslist[this.userid].gender}}</p>
                            </div>
                        </div>

                        <div class="row mt-5 profile-section-2-1">
                            <div class="col-md-6 col-sm-12 shadow user-details">
                                <label class="profile-title mt-1 ">EMAIL ADDRESS</label>
                                <p class="profile-details text-right email-width">{{this.userslist[this.userid].email}}</p>
                            </div>

                            <div class="ml-4 col-md-5 col-sm-12 shadow user-details">
                                <label class="profile-title mt-1">PHONE NUMBER</label>
                                <p class="profile-details text-right">{{this.userslist[this.userid].phone}}</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
    </div>
</template>


<script>
export default {
    name:'Profile',

    data() {
        return {
            userslist: JSON.parse(localStorage.getItem("AbegUsers")),
            userid : this.$store.state.logId,
        }
    },


    computed:{
        getBal(){
            return this.userslist[this.userid].balance
        }
    },

}
</script>


<style scoped>
    .bal{
        font-size: 25px;
    }

    .alert{
        width:400px
    }

    .amount{
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 40px;
        color:#9C27B0
    }

    .profileDp{
    font-size: 120px;
}

.profile-title{
    background-color:#9C27B0;
    color: white;
    padding: 12px;
}

.profile-details{
    font-size: 20px;
    font-weight: 580;
}

.email-width{
    font-size: 14px;
}

.user-circle{
    width:200px;
    color:#9C27B0!important;
}



@media (min-width:300px) and (max-width:450px){
     .user-details{
        margin-top: 20px!important;
        margin-left: 0px!important;
    }

    .profile-section-2{
        margin-top: 10px!important;
        padding-left: 18px!important;
        
    }

    .profile-section-2-1{
        margin-top: 10px!important;
    }

    .profile-details{
        font-size: 16px;
    }

    .alert{
        width:280px;
        margin-right: 0px!important;
        margin-top:20px!important;
        margin-bottom: 20px!important;
        margin-left: 0px!important ;
    }

    .amount{
        font-size: 35px;
    }


    .bal{
        font-size: 20px;
    }

    .user-circle{
    width:100px;
    color:#9C27B0!important;
    }

    .full-name{
        font-size: 30px;
    }


}


</style>