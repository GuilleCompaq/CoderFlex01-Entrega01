const products = [
    {
        id: '01',
        name: 'item1',
        descripcion: 'algo del producto',
        stock: 25,
        price: 25000,
        img: 'https://picsum.photos/200',
        category: 'nuevos',


    },
    {
        id: '02',
        name: 'item2',
        descripcion: 'algo del producto',
        stock: 10,
        price: 10000,
        img: 'https://picsum.photos/201',
        category: 'usados'
    },
    {
        id: '03',
        name: 'item3',
        descripcion: 'algo del producto',
        stock: 5,
        price: 5000,
        img: 'https://picsum.photos/203',
        category: 'mas_vendidos'
    },
    {
        id: '04',
        name: 'item4',
        descripcion: 'lorem ipsum',
        stock: 7,
        price: 7000,
        img: 'https://picsum.photos/204',
        category: 'usados'
    }

]

export const getProducts = ()=>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Intente mas tarde')// error de comunicac
            }else{
                resolve(products)//resuelve la promesa ok, y pasa el array
            }
        }, 2000)
    })
}

export const getOneProduct = (id)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            let prod= products.find((products)=> products.id === id)
            resolve(prod)

        },2000)
    })
}















