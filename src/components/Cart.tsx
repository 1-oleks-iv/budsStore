import {Button, Offcanvas } from "react-bootstrap";
import { CartItem } from "./CartItem.tsx";
import { useShoppingCart } from "../context/ShoppingCartContext.tsx";
import storeItems from "../data/items.json";

type CartProps = {
    isCartOpen: boolean;
};

export function Cart({ isCartOpen }: CartProps) {
    const { closeCart, cartItems } = useShoppingCart();

    const totalPrice = cartItems.reduce((total, cartItem) => {
        const item = storeItems.find(i => i.id === cartItem.id);
        return total + (item?.price || 0) * cartItem.quantity;
    }, 0);

    return (
        <Offcanvas show={isCartOpen}
                   onHide={closeCart}
                   placement="end"
                   style={{
                       width: "80%" ,
                       height: "100vh",


        }}
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart items</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
                {cartItems.length === 0 ? (
                    <div>Cart is empty</div>
                ) : (
                    <>
                        {cartItems.map(item => (
                            <CartItem key={item.id} id={item.id} quantity={item.quantity} />
                        ))}

                        <div className="mt-3 fw-bold">Total: ${totalPrice}</div>

                        <Button
                            variant="dark"
                            className="w-100 mt-3"
                        >
                            Proceed to Checkout →
                        </Button>
                    </>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
}