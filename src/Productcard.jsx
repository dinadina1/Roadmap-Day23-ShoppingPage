import Rating from 'react-rating-stars-component';
import "./productcard.css"
function Productcard({ cardInfo, handleClick, handleClickLess }) {


    return (
        <div className="col-md-4 col-lg-3">
            <div className="card">
                {/* Card Header */}
                <div className="card-header">
                    <img className='card-img' src={cardInfo.product_img} alt="" />
                    {cardInfo.sale ? (<span className='sale_text'>Sale</span>) : ""}
                </div>

                {/* Card body */}
                <div className="card-body">
                    <h5>{cardInfo.product_name}</h5>

                    {/* Card Ratings */}
                    <span >
                        <Rating
                            count={5}
                            size={24}
                            activeColor="rgb(243 195 25)"
                            value={cardInfo.product_ratings}
                        />
                    </span>
                    {
                        cardInfo.product_oldprice ? (
                            <p>&#8377;<span className='card_oldprice'>{`${cardInfo.product_oldprice}`}</span><span className='product_price'>&#8377;{cardInfo.product_price}</span></p>
                        ) : (
                            <p className='product_price'>&#8377;{cardInfo.product_price}</p>
                        )
                    }

                    {/* Card Button */}
                    {cardInfo.button ?
                        (<button className='addCart_button' onClick={() => handleClick(`${cardInfo.id}`)}>Add to Cart</button>)
                        : (
                            <button className='removeCart_button' onClick={() => handleClickLess(`${cardInfo.id}`)}>Remove from Cart</button>
                        )}

                </div>
            </div>
        </div>

    )
}

export default Productcard