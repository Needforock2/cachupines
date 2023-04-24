export const productos = [
    {
        "id": 1,
        "title": "Wireless Earbuds",
        "description": "Enjoy your music on the go with these high-quality wireless earbuds.",
        "price": 49.99,
        "pictureUrl": "https://m.media-amazon.com/images/I/61dDIKxp6sL._AC_SL1500_.jpg",
        "stock": 1
    },
    {
        "id": 2,
        "title": "Smart Watch",
        "description": "Stay connected and track your fitness with this stylish and functional smart watch.",
        "price": 129.99,
        "pictureUrl": "https://m.media-amazon.com/images/I/614t+H5srJL._AC_SL1500_.jpg",
        "stock": 2
    },
    {
        "id": 3,
        "title": "Gaming Mouse",
        "description": "Get the precision and control you need to dominate your favorite games with this advanced gaming mouse.",
        "price": 79.99,
        "pictureUrl": "https://m.media-amazon.com/images/I/8189uwDnMkL._AC_SL1500_.jpg",
        "stock": 3
    },
    {
        "id": 4,
        "title": "High-End Laptop",
        "description": "Experience the ultimate in computing power and performance with this cutting-edge high-end laptop.",
        "price": 1999.99,
        "pictureUrl": "https://m.media-amazon.com/images/I/71mIkTVDwKL._AC_SL1500_.jpg",
        "stock": 4
    }
]

export const getProducts = ()=>{
    //traer productos desde constante
/* return new Promise ((resolve, reject) =>{
    setTimeout(()=>{
      resolve(productos)
    },2000)
  }) */

// traer productos desde API
 /* solcitud por fetch a API con JSON de productos */  
return   fetch(`https://api.jsonstorage.net/v1/json/0f90dac9-985f-4b19-8bc9-58aeab14a126/4b1e29b6-74c5-4de4-a5e4-2c7b75cd279b`).then(res =>res.json())

}



export const getProductById= (id) =>{ 
    return new Promise((resolve, reject) =>{
        fetch(`https://api.jsonstorage.net/v1/json/0f90dac9-985f-4b19-8bc9-58aeab14a126/4b1e29b6-74c5-4de4-a5e4-2c7b75cd279b`)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    });

     
    //traer producto por ID desde constante
  /*   return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
          resolve(productos.find(producto => producto.id === id))
        },2000)
      }) */
      // traer productos desde API
 /* solcitud por fetch a API con JSON de productos */  

//return  getProducts().then(productos => findProduct(id,productos))

}
