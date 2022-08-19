
function getvalue(input){
    const inputfield=document.getElementById(input)
    const inputvalue=inputfield.value
    const inputvalueint=parseFloat(inputvalue)
    inputfield.value=''
    return inputvalueint
}
function getinnertxt(input){
    const inputtxt=document.getElementById(input)
    const inputinnertxt=inputtxt.innerText
    const inputinnertxtint=parseFloat(inputinnertxt)
    return inputinnertxtint
}
function setvalue(input,value){
    const inputvalue =document.getElementById(input)
    inputvalue.innerText=value



}


document.getElementById('dipo-btn').addEventListener('click',function(){
    const dipofieldvalue=getvalue('dipo-field')

    const dipototal=getinnertxt('diposit')
    
    const calculatedipo= dipofieldvalue+dipototal
    setvalue('diposit',calculatedipo)

    const balancetotal=getinnertxt('balance')
    const calculatebalance=balancetotal+dipofieldvalue
    setvalue('balance',calculatebalance)

    



    

})








document.getElementById('with-btn').addEventListener('click',function(){
    const withdrawfieldvalue=getvalue('with-field')
    const withdrawtxt=getinnertxt('withdraw')
    const calwithvalue=withdrawfieldvalue+withdrawtxt
    setvalue('withdraw',calwithvalue)

    const balanceforwith=getinnertxt('balance')
    const calbalance=balanceforwith-withdrawfieldvalue
    setvalue('balance',calbalance)
    
    
    
})