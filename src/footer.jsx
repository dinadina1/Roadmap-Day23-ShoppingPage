import React from 'react'

function Footer() {
  // Data object
    let year = new Date();
  return (
    <footer style={{padding:"30px",backgroundColor:'black',color:"white"}}>
        <p className='text-center'>Copyright &#169; Your Website {year.getFullYear()}</p>
    </footer>
  )
}

export default Footer