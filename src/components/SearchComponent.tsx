import { Offcanvas, Form, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext.tsx";
import storeItems from "../data/items.json";
import { useState } from "react";

type SearchProps = {
    isSearchOpen: boolean;
};

export function Search({ isSearchOpen }: SearchProps) {
    const { closeSearchComponent } = useShoppingCart();
    const [search, setSearch] = useState("");

    const filteredItems = storeItems.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Offcanvas
            show={isSearchOpen}
            onHide={closeSearchComponent}
            placement="end"
            style={{
                width: "80%",
                height: "100vh",
            }}
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search products</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>

                {/* поле поиска */}
                <Form className="mb-4">
                    <Form.Control
                        type="text"
                        placeholder="Search item..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Form>

                {/* результаты */}
                {filteredItems.length === 0 ? (
                    <div>No items found</div>
                ) : (
                    filteredItems.map((item) => (
                        <Card key={item.id} className="mb-3">
                            <Card.Body className="d-flex align-items-center gap-3">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{
                                        width: "70px",
                                        height: "70px",
                                        objectFit: "cover",
                                    }}
                                />

                                <div className="flex-grow-1">
                                    <div>{item.name}</div>
                                    <div className="text-muted">${item.price}</div>
                                </div>

                            </Card.Body>
                        </Card>
                    ))
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
}