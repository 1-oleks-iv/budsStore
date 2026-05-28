import { Col, Form, Row, Stack } from "react-bootstrap";
import { useEffect } from "react";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem.tsx";
import { useShoppingCart } from "../context/ShoppingCartContext.tsx";

export function Store() {
    const {
        searchItemText,
        setSearchItemText,
        filteredItems,
        setFilteredItems,
    } = useShoppingCart();

    useEffect(() => {
        const filtered = storeItems.filter(item =>
            item.name.toLowerCase().includes(searchItemText.toLowerCase())
        );

        setFilteredItems(filtered);
    }, [searchItemText, setFilteredItems]);

    return (
        < >
            <div className="section-box">
                <Form className="mb-4">
                    <Form.Control
                        placeholder="Search items"
                        value={searchItemText}
                        onChange={(e) => setSearchItemText(e.target.value)}
                    />
                </Form>

                <Stack gap={4}>
                    <Row xs={1} sm={2} md={3} lg={4}>
                        {filteredItems.map(item => (
                            <Col key={item.id} className="mb-3 d-flex">
                                <StoreItem
                                    {...item} />
                            </Col>
                        ))}
                    </Row>
                </Stack>
            </div>

        </>
    );
}