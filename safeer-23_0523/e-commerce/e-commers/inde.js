let page=1
let fil=""
let sort=""

let token=localStorage.getItem("token") 
console.log(token)
const fetchData= async(page,fil,sort)=>{
 if(fil=="" && page==1){
   await fetch(`https://fakestoreapi.com/products`).then((res)=>res.json()).then((res)=>getData(res)).catch((err)=>console.log(err))
 }else if(fil!=""){
   await fetch(`https://fakestoreapi.com/products/category/${fil}?sort=${sort}`).then((res)=>res.json()).then((res)=>getData(res)).catch((err)=>console.log(err))
 }
}
let container=document.querySelector("#container")

const getData=(res)=>{
  container.innerHTML=""
    res.map((el)=>{
        // console.log(el)
        let div=document.createElement("div")
        div.id="vv"
        let img=document.createElement("img")
        img.src=el.image
        
     let hea=document.createElement("h1")
     hea.innerText=`Title:-${el.title}`
     let cat=document.createElement("p")
     cat.innerText=`Category:-${el.category}`
     let p=document.createElement("h3")
     p.innerText=`Price:-${el.price}`
     let btn=document.createElement("button")
     btn.innerText="Add TO Cart"
     
     btn.addEventListener("click",()=>{
      if (token !== null) {
        addtoCart(el);
      } else {
        alert("Please login or provide a valid token to add items to cart.");
      }
      
     })

   container.append(img,hea,cat,p,btn)


})
    
}


const addtoCart=async(el)=>{
  try {


    await fetch("https://movie-api-l3ci.onrender.com/card",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(el)
  
 })
 alert("Product Added To Cart")
    
  } catch (error) {
    alert(error)
  }
 
}


let nxtbtn=document.getElementById("nxt")
nxtbtn.addEventListener("click",()=>{
 page++
 fetchData(page,fil,sort)
})


document.getElementById("filter").addEventListener("change",()=>{
  let filter=document.getElementById("filter").value
  let val=filter
  if(val!=""){
    fil=val
   fetchData(page,fil,sort)
  }

})

document.getElementById("sorting").addEventListener("change",()=>{
  let so=document.getElementById("sorting").value
let v=so
  if(v!=""){
    sort=v
    fetchData(page,fil,sort)
  }
  
})


fetchData(page,fil,sort)
