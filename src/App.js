import { useState } from 'react';
import { Header, ProductList } from './components';
import './css/styles.css';

const App = () => {
  const [filter, setFilter] = useState('');
  const [filterColor, setFilterColor] = useState('ALL');

  const setFilterFunction = (filter) => {
    setFilter(filter);
  }

  const setFilterColorFunction = (event) => {
    setFilterColor(event.target.value)
  }

  return (
    <div className='App u_fx-col u_fx-al-cn'>
      <Header
        setFilterFunction={setFilterFunction}
        setFilterColorFunction={setFilterColorFunction}
      />
      <ProductList />
    </div>
  );
}

export default App;