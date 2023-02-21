import { useEffect, useState } from 'react';
import { Header, ProductList } from './components';
import { sortByColorFunction, sortByInStockFunction, refresherFunction } from './helper-functions';
import Products from './products.json';
import './css/styles.css';

const App = () => {
  const [productList, setProductList] = useState(Products);
  const [sort, setSort] = useState({color: 'ALL', inStock: false });

  const sortedByColor = sortByColorFunction(sort.color, productList);
  const sortedProducts = sortByInStockFunction(sort.inStock, sortedByColor);

  useEffect(() => {
    if (window.performance.getEntriesByType("navigation")[0].type === "reload") {
      let refreshedProductList = refresherFunction(productList);
      setProductList(refreshedProductList);
    }
  }, [])

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