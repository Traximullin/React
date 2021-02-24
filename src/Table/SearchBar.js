import React from 'react'

export default function SearchBar({product}){

  const searchProduct = (e) =>{
    product.map((elem) =>{
      if(elem.name == e.target.value){
        alert('Вы искали ' + elem.name + ' Цена:' + elem.price)
      }
    })
  }

    const styles = {  
        form:{
            padding:'10px'
        }
    }

    return (
      <form style={styles.form}>
        <input type="text" onBlur={searchProduct} placeholder="Search..." />
        <br/>
        <p><input type="checkbox"/>Only show product in stock</p>
      </form>
    );
}