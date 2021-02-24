import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import AddBar from './AddBar'


export default function FilterableProductTable({ product, addNewProduct }) {
  const styles = {
    wrapper: {
      border: '1px solid black',
      width: '20%',
      height: '20%',
      margin: '0 auto',
      marginTop: '5em',
    },
  };
  return (
    <div style={styles.wrapper}>
      <SearchBar product={product} />
      <AddBar addNewProduct={addNewProduct} />
      <ProductTable product={product} />
    </div>
  );
}