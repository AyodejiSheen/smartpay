

const mutations = {

  regUser(state, payload){

    let accountno = Math.floor((Math.random() * 8999999999)+1);

    let newUser = {firstname: payload.input.firstname,
                   lastname: payload.input.lastname,
                   email: payload.input.email,
                   phone: payload.input.phone,
                   gender: payload.input.gender,
                   password: payload.input.password,
                   ban: accountno,
                   user_id : payload.input.id,
                   balance: 0,
                   transactions : [],
                   notifications : [],
                  }
    state.users.push(newUser);
    state.userid = payload.input.id;
    localStorage.setItem("AbegUsers", JSON.stringify(state.users));
    console.log(state.users);
    // console.log(state.users[newUser.user_id].firstname)
  },

  logUser(state, payload){
      state.logId = payload.logId;
      console.log(state.logId);
  },


  Makedeposit(state, payload){
    let newTrans = {
        transType:payload.input.transType,
        transnote:payload.input.transnote,
        amount:payload.input.amount,
        acctBan:payload.input.acctBan,
        RecAcctBan:payload.input.RecAcctBan,
        transDate:new Date()
     }

    let userslist = JSON.parse(localStorage.getItem("AbegUsers"));
    userslist[state.logId].balance = userslist[state.logId].balance + parseInt(newTrans.amount);
    userslist[state.logId].transactions.push(newTrans);
    console.log(userslist[state.logId].transactions);
    localStorage.setItem("AbegUsers", JSON.stringify(userslist));
  },

  Makewithdraw(state,payload){
    let newTrans = {
      transType:payload.input.transType,
      transnote:payload.input.transnote,
      amount:payload.input.amount,
      acctBan:payload.input.acctBan,
      RecAcctBan:payload.input.RecAcctBan,
      transDate:new Date().toUTCString()
   }

    let userslist = JSON.parse(localStorage.getItem("AbegUsers"));
      userslist[state.logId].balance = userslist[state.logId].balance - parseInt(newTrans.amount);
      userslist[state.logId].transactions.push(newTrans);
      console.log(userslist[state.logId].transactions);
      localStorage.setItem("AbegUsers", JSON.stringify(userslist));
    },


  MakeTransfer(state, {transfer}){
    let newTrans = {
        transType:transfer.input.transType,
        transnote:transfer.input.transnote,
        amount:transfer.input.amount,
        acctName:transfer.input.acctName,
        acctBan:transfer.input.acctBan,
        RecAcctBan:transfer.input.RecAcctBan,
        transDate:new Date(),
        sender:transfer.input.sender,
     }

    let userslist = JSON.parse(localStorage.getItem("AbegUsers"));
    userslist[transfer.RecvBanIndex].balance = userslist[transfer.RecvBanIndex].balance + parseInt(newTrans.amount);
    let revnote = "Your Account has been Credited with " + "₦"+newTrans.amount + ". Sent from " + userslist[state.logId].ban;
    userslist[transfer.RecvBanIndex].notifications.push(revnote);
    userslist[state.logId].balance = userslist[state.logId].balance - parseInt(newTrans.amount);
    userslist[state.logId].transactions.push(newTrans);
    userslist[transfer.RecvBanIndex].transactions.push(newTrans);
    console.log(userslist[state.logId].transactions);
    localStorage.setItem("AbegUsers", JSON.stringify(userslist));
  },






  
}
export default mutations;

