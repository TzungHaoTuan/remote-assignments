function ajax(url) {
// your code here
    return new Promise(()=> {
        fetch(url)
        .then(respond => respond.json())
        .then(result => {
            JSON.stringify(result)

            const products = document.querySelector("#products")
            
            for(let i = 0; i < result.length; i++){
                products.innerHTML += 
                    `<p>name: ${result[i].name}</p>
                     <p>price: ${result[i].price}</p>
                     <p>description: ${result[i].description}</p>
                     <br>`        
            }
        })  
    })
}
function render(data) {
// your code here
     
            // data => { 
            //     console.log(data)
            // JSON.stringify(data)

            // const products = document.querySelector("#products")
            
            // for(let i = 0; i < data.length; i++){
            //     products.innerHTML += 
            //         `<p>name: ${data[i].name}</p>
            //          <p>price: ${data[i].price}</p>
            //          <p>description: ${data[i].description}</p>
            //          <br>`        
            // }
            // }

}
const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products"
ajax(url).then((data) => render(data))


        
        
