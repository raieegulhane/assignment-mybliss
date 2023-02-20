import './product-card.css';

export const ProductCard = ({ product }) => {
    const { image: { src }, title, variants} = product;
    const { price, compare_at_price} = variants[0];
    
    return(
        <div className='pc-wr u_fx-col u_pop'>
            <img className='pc-img' src={src} alt={`product - ${title}`}/>
            <h3 className='pc-title'>{title}</h3>
            <p className='u_txt-grey u_txt-sm'><s>INR {compare_at_price}</s> INR {price}</p>
        </div>
    );
}