import { useParams } from "react-router-dom";
import storeItems from "../data/items.json";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

export function ClickedItemPage() {
    const { id } = useParams();

    const clickedItem = storeItems.find((item) => item.id === Number(id));

    if (!clickedItem) {
        return <div>Item not found</div>;
    }

    return (
        <Container className="mt-4">
            <Row className="align-items-center">

                {/*Левая часть изображение*/}
                <Col md={6}>
                    <Card className="shadow-sm">
                        <Card.Img
                            variant="top"
                            src={clickedItem.image}
                            style={{
                                height: "420px",
                                objectFit: "cover",
                            }}
                        />
                    </Card>
                </Col>

                {/*Правая часть информация*/}
                <Col md={6}>
                    <h2 className="fw-bold mb-3">{clickedItem.name}</h2>

                    <span>
  {new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
  }).format(clickedItem.price)}
</span>

                    <p className="text-muted">
                        {clickedItem.description}
                    </p>

                    <Button variant="dark" size="lg">
                        Add to cart
                    </Button>
                </Col>

            </Row>
        </Container>
    );
}