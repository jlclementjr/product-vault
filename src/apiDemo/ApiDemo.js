import products from './Products';

class ApiDemo
{
    GetAllProducts() 
    {
        return products;
    }

    GetProduct(id)
    {
        return products.find(product => product.id === id);
    }
}

export default ApiDemo;