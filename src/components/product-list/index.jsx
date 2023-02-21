import { ProductCard } from '../product-card';

export const ProductList = ({ products }) => {
    return(
        <main className='u_fx-row u_fx-al-cn u_fx-js-cn'>
        {
            products.map((item) => <ProductCard key={item.id} product={item}/>)
        }
        </main>
    );
}