document.getElementById('btn').addEventListener('click',function(){
    const email =document.getElementById('email')
    const emailvalue=email.value
    
    const pass=document.getElementById('pass')
    const passvalue = pass.value
    
    if (emailvalue=='sadikul@gmail.com' && passvalue=='sadikul') {
        window.location='bank.html'
    }else{
        alert('invalid user')
    }
})



