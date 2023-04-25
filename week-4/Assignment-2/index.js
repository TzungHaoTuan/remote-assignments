function ajax(url) {
    return fetch(url)
        .then(respond => respond.json())
}
function render(data) {
    const products = document.querySelector("#products")
  
            
            for(let i = 0; i < data.length; i++){
                products.innerHTML += 
                    `<p>name: ${data[i].name}</p>
                     <p>price: ${data[i].price}</p>
                     <p>description: ${data[i].description}</p>
                     <br>`        
            }

}
const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products"
ajax(url).then((data) => render(data))



