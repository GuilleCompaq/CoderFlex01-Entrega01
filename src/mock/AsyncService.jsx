const products = [
    {
        id: '01',
        name: 'Notebook React 01V',
        descripcion: 'tu color preferido para programar',
        stock: 25,
        price: 25000,
        img: '../img/notebook_violeta_logo_led.png',
        category: 'nuevos',


    },
    {
        id: '02',
        name: 'Notebook React 02G',
        descripcion: 'tu color preferido para programar',
        stock: 10,
        price: 10000,
        img: '../img/notebook_gris_logo_led.png',
        category: 'usados'
    },
    {
        id: '03',
        name: 'Notebook React 03N',
        descripcion: 'tu color preferido para programar',
        stock: 5,
        price: 5000,
        img: '../img/notebook_negro_logo_led.png',
        category: 'mas_vendidos'
    },
    {
        id: '04',
        name: 'Notebook React 04A',
        descripcion: 'tu color preferido para programar',
        stock: 7,
        price: 7000,
        img: '../img/notebook_azul_logo_led.png',
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















