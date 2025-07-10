import Card from "react-bootstrap/Card";

export default function Model({ glasses }) {
  return (
    <div className="position-relative d-inline-block">
      <img src="/glassesImage/model.jpg" alt="model" width={250} />
      {glasses && (
        <>
          <img
            src={glasses.url}
            alt={glasses.name}
            style={{
              position: "absolute",
              top: 68,
              left: 55,
              width: 140,
              opacity: 0.8,
            }}
          />
          <Card
            className="position-absolute"
            style={{
              left: 0,
              bottom: 0,
              width: 250,
              background: "rgba(255,165,0,0.7)",
              color: "#fff",
            }}
          >
            <Card.Body className="py-2 px-3">
              <Card.Title className="mb-1" style={{ fontSize: 18 }}>
                {glasses.name} <span style={{ color: "#ffd700" }}>${glasses.price}</span>
              </Card.Title>
              <Card.Text style={{ fontSize: 13 }}>{glasses.desc}</Card.Text>
            </Card.Body>
          </Card>
        </>
      )}
    </div>
  );
}