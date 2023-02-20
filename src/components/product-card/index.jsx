import './product-card.css';

export const ProductCard = ({ product }) => {
    const { image: { src }, title, variants} = product;
    const { price, compare_at_price, inventory_quantity} = variants[0];
    
    return(
        <div className='pc-wr u_fx-col'>
            <div className='pc-img-cn'>
                <img className='pc-img' src={src} alt={`product - ${title}`}/>
                {
                    inventory_quantity === 0 &&
                    <div className='pc-overlay u_fx-col u_fx-js-cn u_fx-al-cn'><p>Out Of Stock</p></div>
                }
            </div>
            <h3 className='pc-title'>{title}</h3>
            <p className='u_txt-grey u_txt-sm'><s>INR {compare_at_price}</s> INR {price}</p>
        </div>
    );
}