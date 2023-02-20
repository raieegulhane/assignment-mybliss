import './header.css';

export const Header = ({ sortBy, allProducts, setFilterColorFunction, setFilterInStockFunction, clearFilterFunction }) => {
    return(
        <header className='header-wr u_fx-row'>
            <section className='header-txt u_fx-col'>
                <h1>10mm Glass Beads</h1>
                <p>Explore our 10mm Glass Beads collection</p>
                <p>Use these beads for jewellery making, embroidery, accessories, dreamcatchers, home decore, macarme and other art and craft projects.</p>
            </section>

            <section className='header-filters u_fx-col'>
                <div className='u_fx-row'>
                    <h3>SORT BY:</h3>
                    <div className='u_fx-row'>
                        <h4>Shades:</h4>
                        <label htmlFor='beads-shades'>
                            <select name='beads-shades' onChange={setFilterColorFunction}>
                                <option value='ALL'>All</option>
                                <option value='BLUE'>Blue</option>
                                <option value='PINK'>Pink</option>
                                <option value='PURPLE'>Purple</option>
                                <option value='ORANGE'>Orange</option>
                                <option value='GREEN'>Green</option>
                                <option value='YELLOW'>Yellow</option>
                                <option value='WHITE'>White</option>
                                <option value='OTHER'>Other</option>
                            </select>
                        </label>
                    </div>
                    <button className='u_pop' onClick={setFilterInStockFunction}>In Stock</button>
                    <button className='u_pop' onClick={clearFilterFunction}>Clear filters</button>    
                </div>
                <p className='u_txt-grey'>Nuber of products: {allProducts.length}</p>
                <p className='u_txt-grey'>Sorted by: {sortBy.inStock && "In stock,"} {sortBy.color !== "ALL" && `Shade - ${sortBy.color}`}</p>
            </section>
        </header>
    );
}