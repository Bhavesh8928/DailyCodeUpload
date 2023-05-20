let Page=1


const fetchData=async()=>{
    await fetch(`https://movie-api-l3ci.onrender.com/card?_Page=${Page}&_limit=1`).then((res)=>res.json()).then((res)=>getDat a(res)).catch((err)=>console.log (err))
}


let container=document.querySelector("#container")

const getData=(res)=>{
    res.map((el)=>{
        console.log(el);
        let div=document.createElement("div")
        div.id="vv"
        let img=document.createElement("img")
        img.src=el.image
       
        let hea=document.createElement("h1")
        hea.innerText=`Title:-${el.title}`
        let p=document.createElement("h2")
        p.innerText=`Price:-${el.price}`
        let btn=document.createElement("button")
     btn.innerText="Delete"
     btn.addEventListener("click" ,()=>{
      deleteCart(el.id)
     })

        div.append(img,hea,p,btn)
        container.append(div)
       
    })
  
}
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
fetchData()
