import {check} from "express-validator"
import ProductManager from "../../src/controllers/productManager"

const uniqueCode = async (value) => {
    const productManager = new ProductManager()
    const products = await productManager.getProducts()
    const uniqueProductCode = products.some((item) => item.code === code)
    
}