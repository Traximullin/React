import React from 'react'

export default function Electronics({product}){
    return (
      <div>
        <p>
          <b>Electronics</b>
        </p>
        {
            product.map((elem) =>{
                if(elem.category == 'Electronics'){
                    if(elem.stocked == false){
                      return(
                        <tr>
                          <td style={{color:'red'}}>{elem.name}</td>
                          <td>{elem.price}</td>
                        </tr>
                      )
                    }else{
                      return (
                        <tr>
                          <td>{elem.name}</td>
                          <td>{elem.price}</td>
                        </tr>
                      );
                    }
                }
            })
        }
      </div>
    );
}