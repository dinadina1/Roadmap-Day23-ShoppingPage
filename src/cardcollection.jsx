import React from 'react'
import Productcard from './Productcard'


function Cardcollection({cardInfo,handleClick,handleClickLess}) {
    return (
        <div className='container'>
            <div className="row" style={{padding:"30px",rowGap:"20px"}}>
        
            {/* Map function to hiterate cards */}
            {cardInfo.map((cardInfo,index)=>{
                return <Productcard key={index} id={cardInfo.id} cardInfo={cardInfo} handleClick={handleClick} handleClickLess={handleClickLess}/>
            })}
            </div>
        </div>
    )
}

export default Cardcollection