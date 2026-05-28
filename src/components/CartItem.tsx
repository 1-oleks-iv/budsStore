import { Button, Stack } from "react-bootstrap";
import storeItems from "../data/items.json";
import { useShoppingCart } from "../context/ShoppingCartContext.tsx";

type CartItemProps = {
    id: number;
    quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
    const {
        deleteCartItems,
        increaseItemQuantity,
        decreaseItemQuantity,
    } = useShoppingCart();

    const item = storeItems.find((i) => i.id === id);

    if (item == null) return null;

    return (
        <Stack direction="horizontal" gap={3} className="mb-3 align-items-center">
            <img
                src={item.image}
                alt={item.name}
                style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />

            <div className="me-auto">
                <div>
                    {item.name}{" "}
                    {quantity > 1 && <span className="text-muted">x{quantity}</span>}
                </div>

                <div className="text-muted">
                    {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                    }).format(item.price)}
                </div>

                <div className="d-flex align-items-center gap-2 mt-2">
                    <Button
                        variant="outline-dark"
                        size="sm"
                        onClick={() => decreaseItemQuantity(id)}
                    >
                        -
                    </Button>

                    <span className="fw-bold">{quantity}</span>

                    <Button
                        variant="outline-dark"
                        size="sm"
                        onClick={() => increaseItemQuantity(id)}
                    >
                        +
                    </Button>
                </div>
            </div>

            <div>
                {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                }).format(item.price * quantity)}
            </div>

            <Button
                variant="outline-danger"
                size="sm"
                onClick={() => deleteCartItems(id)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
            </Button>
        </Stack>
    );
}