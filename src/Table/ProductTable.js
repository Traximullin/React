import React from 'react'
import SportingGoods from './TableCategory/SportingGoods'
import Electronics from './TableCategory/Electronics'

export default function ProductTable({product}){
    const styles = {
      table: {
        padding: '10px',
      }
    };
    return (
      <table style={styles.table}>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
        <SportingGoods product={product}/>
        <Electronics product={product}/>
      </table>
    );
}