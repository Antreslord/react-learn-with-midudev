import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Products( {products} ) {

    const {addToCart, removeFromCart, cart} = useCart()

    // checkear if the product is already whitin the cart 
    const checkProductInCart = product => {
        return cart.some(item => item.id == product.id)
    }

    return (
        <main className='products'>
            <ul>
                {
                    products.map(product => {
                        const isProductInCart = checkProductInCart(product)


                        return(
                        <li key={product.id}>
                            <img src={product.thumbnail} alt="product.title" />
                            <div>
                                <p>
                                    <strong>{product.title}</strong> - ${product.price}
                                </p>
                            </div>
                            <div>
                                <button style={ {backgroundColor: isProductInCart ? 'red' : '#09f'} } onClick={()=> isProductInCart 
                                    ? removeFromCart(product)
                                    : addToCart(product)}>
                                    {
                                        checkProductInCart 
                                        ? <RemoveFromCartIcon />
                                        : <AddToCartIcon />
                                    }
                                </button>
                            </div>
                        </li>
                    )})
                }
            </ul>

        </main>
    )
}