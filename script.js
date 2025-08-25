// login button functionality
document.getElementById("loginButton")
.addEventListener("click",function (e){
    e.preventDefault()
    const mobileNumber = 12345678910
    const pinNumber = 1234
    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumbervalue = document.getElementById("pin-number").value
    const pinNumbervalueConverted = parseInt(pinNumbervalue)
    console.log(mobileNumberValueConverted,pinNumbervalueConverted)

    if(mobileNumberValueConverted === mobileNumber && pinNumbervalueConverted === pinNumber){
        window.location.href="./home.html"
    } 
    else{
        alert("invalid credentials")
    }
})



