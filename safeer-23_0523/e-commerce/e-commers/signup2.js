let form=document.getElementById("submit")
form.addEventListener(click,async(e)=>{
    e.preventDefault()
    let email=document.getElementById("email").value
    let name=document.getElementById("name").value
    let pass=document.getElementById("password").value
    let no=document.getElementById("number").value

    let obj={
        name:name,
        email:email,
        password:pass,
        number:no
    }
    await fetch("https://movie-api-l3ci.onrender.com/users"
})