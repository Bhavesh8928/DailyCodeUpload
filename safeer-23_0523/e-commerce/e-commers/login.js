let form=document.getElementById("submit")

form.addEventListener("click",async(e)=>{
    e.preventDefault()
    let email=document.getElementById("email").value
   
    let pass=document.getElementById("password").value         
    const response = await fetch("https://movie-api-l3ci.onrender.com/users");
    const users = await response.json();
    console.log(users)
    const user = users.find((user) => user.email === email && user.password === pass);
  
    if(user){
        alert("login sucessfully")
        window.location="index.html"
    }else{
        alert("pleaseSignup")
        window.location="./signup.html"
    }
    
})
