import Products from '../../products.json';
import { ProductCard } from '../product-card';

export const ProductList = () => {
    return(
        <main className='u_fx-row u_fx-al-cn u_fx-js-cn'>
        {
            Products.map((product) => <ProductCard key={product
            .id} product={product}/>)
        }
        </main>
    );
}