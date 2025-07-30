import { useContext } from "react"
import { CarContext } from "../context/Cart"


export const useCart = () => {
    const cart = useContext(CarContext)

    if (cart === undefined){
        throw new Error('useCart must be used within a CartProvider')
    }

    return cart
}