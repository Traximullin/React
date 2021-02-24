import React from 'react'

export default function SportingGoods({ product }){
    return (
      <div>
        <p>
          <b>Sporting Goods</b>
        </p>
        {product.map((elem) => {
          if (elem.category == 'Sporting Goods') {
             if (elem.stocked == false) {
               return (
                 <tr>
                   <td style={{ color: 'red' }}>{elem.name}</td>
                   <td>{elem.price}</td>
                 </tr>
               );
             } else {
               return (
                 <tr>
                   <td>{elem.name}</td>
                   <td>{elem.price}</td>
                 </tr>
               );
             }
          }
        })}
      </div>
    );
}