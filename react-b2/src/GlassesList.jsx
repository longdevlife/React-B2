import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const GlassesList = ({ glassesList, onSelect }) => {
  return (
    <Card className="p-4 mt-4" style={{ maxWidth: 700, margin: "0 auto" }}>
      <Row xs={4} md={4} className="g-3 justify-content-cent">
        {glassesList.map((item) => (
          <Col key={item.id} className="d-flex justify-content-center">
            <img
              src={item.url}
              alt={item.name}
              style={{
                width: 80,
                cursor: "pointer",
                border: "2px solid transparent",
                borderRadius: 8,
                transition: "border 0.2s",
              }}
              onClick={() => onSelect(item)}
              onMouseOver={(e) =>
                (e.currentTarget.style.border = "2px solid #0d6efd")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.border = "2px solid transparent")
              }
            />
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default GlassesList;
