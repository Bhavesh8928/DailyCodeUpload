


let page=1


const fetchData= async(page)=>{
  await fetch(`https://movie-api-l3ci.onrender.com/card?_page=${page}&_limit=1`).then((res)=>res.json()).then((res)=>getData(res)).catch((err)=>console.log(err))
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
     btn.innerText="Delete"
     btn.addEventListener("click",()=>{
      deleteCart(el.id)
     })

   container.append(img,hea,cat,p,btn)


})
    
}
// how to delete from cart
const deleteCart=async(el)=>{
  try {
    await fetch(`https://movie-api-l3ci.onrender.com/card/${el}`,{
        method:"DELETE"
    })
    fetchData()
    alert("deleted Sucessfull")
    
  } catch (error) {
    alert(error)
  }
}

let nxtBtn=document.getElementById("nxt")
nxtBtn.addEventListener("click",()=>{
  page++
  fetchData(page)
})

fetchData()