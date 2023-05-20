const api = "https://fakestoreapi.com/products"


const fetchData = async () => {
    await fetch(api).then((res) => res.json()).then((res) => getData(res)).catch((err) => console.log(err))
}

fetchData()
let container = document.querySelector("#container")

const getData = (res) => {
    res.map((el) => {
        console.log(el);
        let div = document.createElement("div")
        div.id = "vv"
        let img = document.createElement("img")
        img.src = el.image

        let hea = document.createElement("h1")
        hea.innerText = `Title:-${el.title}`
        let p = document.createElement("h2")
        p.innerText = `Price:-${el.price}`
        let btn = document.createElement("button")
        btn.innerText = "add to Cart"
        btn.addEventListener("click",()=>{
            addtoCart(el)
        })

        div.append(img, hea, p, btn)
        container.append(div)
    })

}

const addtoCart = async (el) => {
    try {
        await fetch("https://movie-api-l3ci.onrender.com/card", {
            method: "POST", headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(el)
        }); alert("product added to cart") 
    }

    catch (error) {
        alert(error)

    }
   
}
fetchData()