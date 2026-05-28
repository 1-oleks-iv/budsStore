
import './App.css'
import {Navbar} from "./components/Navbar.tsx";
import {Container} from "react-bootstrap";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {Gallery} from "./pages/Gallery.tsx";
import {Store} from "./pages/Store.tsx";
import {ClickedItemPage} from "./components/ClickedItemPage.tsx";


function App() {

  return (
      // провайдер контекста
    <>

        <Navbar />

        <Container className="pt-5 mt-5">

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/clickedItem/:id" element={<ClickedItemPage />} />

            </Routes>

        </Container>

    </>
  )
}

export default App
