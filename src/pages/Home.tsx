import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import storeItems from "../data/items.json";

export function Home() {
    const featuredItems = storeItems.slice(0, 4);

    return (
        <Container className="py-4">
            <Row className="align-items-center my-5">
                <Col md={6}>
                    <h1 className="fw-bold mb-3">Discover Samsung Audio</h1>
                    <p className="text-muted mb-4">

                        Explore premium Galaxy Buds with immersive sound, modern design,
                        and seamless Samsung ecosystem integration.

                    </p>
                    <Button as={NavLink} to="/store" variant="dark" size="lg">
                        Shop now
                    </Button>
                </Col>
                <Col md={6} className="text-center">
                    <img
                        src="/images/logo.png"
                        alt="Samsung Mega Super Mega Audio"
                        style={{maxWidth: "100%", borderRadius: "20px",
                        }}
                    />
                </Col>
            </Row>



            <section className="my-5">
                <h2 className="fw-bold mb-4 text-center">Why Choose Us</h2>
                <Row>
                    <Col md={4} className="mb-3">
                        <Card className="h-100 shadow-sm text-center">
                            <Card.Body>
                                <h4>Premium Sound</h4>
                                <p className="text-muted">
                                    Enjoy immersive audio with deep bass and crystal clear sound.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="mb-3">
                        <Card className="h-100 shadow-sm text-center">
                            <Card.Body>
                                <h4>Fast Delivery</h4>
                                <p className="text-muted">
                                    Get your favorite Samsung products quickly and safely.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="mb-3">
                        <Card className="h-100 shadow-sm text-center">
                            <Card.Body>
                                <h4>Samsung Ecosystem</h4>
                                <p className="text-muted">
                                    Perfect connection with your Galaxy phone, tablet, and watch.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </section>

            <section className="my-5 text-center">
                <h2 className="fw-bold mb-3">Ready to upgrade your audio?</h2>
                <p className="text-muted mb-4">
                    Browse the latest Samsung Galaxy Buds and choose your perfect pair.
                </p>
                <Button as={NavLink} to="/store" variant="dark" size="lg">
                    Explore Store
                </Button>
            </section>
        </Container>
    );
}