import { useState } from 'react';
import { Header, ProductList } from './components';
import './css/styles.css';
import Products from './products.json';
import { sortByColorFunction, sortByInStockFunction } from './helper-functions';


const App = () => {
  const [sort, setSort] = useState({inStock: false, color: 'ALL'});

  const sortedByColor = sortByColorFunction(sort, Products);
  const sortedProducts = sortByInStockFunction(sort, sortedByColor)

  return (
    <div className='App u_fx-col u_fx-al-cn'>
      <Header
        allProducts={sortedProducts}
        sortBy={sort}
        setFilterInStockFunction={() => setSort({ ...sort, inStock: true})}
        setFilterColorFunction={(e) => setSort({ ...sort, color: e.target.value })}
        clearFilterFunction={() => setSort({ inStock: false, color: 'ALL'})}
      />
      <ProductList products={sortedProducts}/>
    </div>
  );
}

export default App;