import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import glassesData from "./glassesData";
import Model from "./Model";
import GlassesList from "./GlassesList";

function App() {
  const [selected, setSelected] = useState(glassesData[0]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `url("/glassesImage/background.jpg") center/cover no-repeat`,
      }}
    >
      <Container className="py-4">
        <h2
          className="text-center text-white mb-4"
          style={{ letterSpacing: 2 }}
        >
          TRY GLASSES APP ONLINE
        </h2>
        <Row className="justify-content-center mb-4">
          <Col xs="auto">
            <Model glasses={selected} />
          </Col>
          <Col xs="auto">
            <img src="/glassesImage/model.jpg" alt="model" width={250} />
          </Col>
        </Row>
        <GlassesList glassesList={glassesData} onSelect={setSelected} />
      </Container>
    </div>
  );
}

export default App;
