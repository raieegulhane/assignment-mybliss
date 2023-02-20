import './product-list.css';
import Products from '../../products.json';
import { ProductCard } from '../product-card';

export const ProductList = () => {
    return(
        <div className='pl-wr u_fx-row u_fx-al-cn u_fx-js-cn'>
        {
            Products.map((product) => <ProductCard key={product
            .id} product={product}/>)
        }
        </div>
    );
}