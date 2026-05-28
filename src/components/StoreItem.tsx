import { Button, ButtonGroup, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext.tsx";
import {NavLink} from "react-router-dom";



type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
};

export function StoreItem({
     id,
     name,
     price,
     image,
     description,}: StoreItemProps) {
    const {
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        deleteCartItems,
    } = useShoppingCart();

    const quantity = getItemQuantity(id);

    return (


        <Card border="secondary" className="store-card h-100 w-100 shadow-sm">
            <NavLink to={`/clickedItem/${id}`}>
            <Card.Img
                variant="top"
                src={image}
                style={{
                    height: "220px",
                    objectFit: "cover",
                }}
            />
            </NavLink>


            <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-1">{name}</Card.Title>

                <Card.Text className="text-muted mb-2">
                    <span>
  {new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
  }).format(price)}
</span>
                </Card.Text>

                <Card.Text
                    className="text-muted"
                    style={{
                        fontSize: "0.9rem",
                        minHeight: "48px",
                        overflow: "hidden",
                    }}
                >
                    {description}
                </Card.Text>

                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button
                            className="w-100"
                            variant="outline-dark"
                            onClick={() => increaseItemQuantity(id)}
                        >
                            Add to cart
                        </Button>
                    ) : (
                        <div className="d-flex flex-column gap-2">
                            <div className="d-flex w-100 gap-2">
                                <Button
                                    variant="outline-dark"
                                    className="flex-fill"
                                    onClick={() => decreaseItemQuantity(id)}
                                >
                                    −
                                </Button>

                                <Button
                                    variant="light"
                                    className="flex-fill"
                                    disabled
                                >
                                    {quantity}
                                </Button>

                                <Button
                                    variant="outline-dark"
                                    className="flex-fill"
                                    onClick={() => increaseItemQuantity(id)}
                                >
                                    +
                                </Button>
                            </div>

                            <Button
                                variant="outline-danger"
                                className="w-100"
                                onClick={() => deleteCartItems(id)}
                            >
                                Remove
                            </Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>


    );
}