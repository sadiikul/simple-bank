document.getElementById('dipo-btn').addEventListener('click',function(){
    const dipofiled=document.getElementById('dipo-field')
    const dipovalue=dipofiled.value
    const dipovalueint=parseFloat(dipovalue)

    const diposit=document.getElementById('diposit')
    const dipototal=diposit.innerText
    const dipototolint=parseFloat(dipototal)
    
    diposit.innerText= dipototolint+dipovalueint


    const balance=document.getElementById('balance')
    const balancetxt=balance.innerText
    const balanceint=parseFloat(balancetxt)
    balance.innerText=balanceint+dipovalueint



    dipofiled.value=''

})








document.getElementById('with-btn').addEventListener('click',function(){
    const withdraw=document.getElementById('with-field')
    const withdrawfield=withdraw.value
    const withdrawint=parseFloat(withdrawfield)
    
    const withdrawtxt=document.getElementById('withdraw')
    const innerwith=withdrawtxt.innerText
    const innerwithint=parseFloat(innerwith)
    withdrawtxt.innerText=innerwithint+withdrawint

    const balance=document.getElementById('balance')
    const balancetxt=balance.innerText
    const balanceint=parseFloat(balancetxt)
    balance.innerText=balanceint-withdrawint
    
    
})