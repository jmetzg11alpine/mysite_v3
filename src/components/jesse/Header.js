import { Button, Form, Row, Col } from "react-bootstrap";
import { sectorNames } from "./helpers";

const Header = ({
  dataTypeSelected,
  setDataTypeSelected,
  descriptionOfHover,
  count,
  setCount,
  width,
}) => {
  const handleSelectSector = (event) => {
    setDataTypeSelected(event.target.value);
    setCount(false);
  };
  const handleDivClick = () => {
    setDataTypeSelected(descriptionOfHover.name);
  };
  return (
    <>
      <div className="ps-5" style={{ fontSize: ".9rem" }}>
        Hover over bar or pie slice for more information
      </div>
      <div style={{ display: "flex", alignItems: "center", margin: "10px" }}>
        <Form.Group
          className="d-flex align-items-center"
          style={{ flexGrow: 1 }}
        >
          <Form.Select
            className="flex-grow-1"
            value={
              dataTypeSelected === "overview" ? "Choose..." : dataTypeSelected
            }
            onChange={handleSelectSector}
            style={{ maxWidth: "230px" }}
          >
            <option value="">Choose a sector</option>
            {sectorNames.map((sector) => (
              <option key={sector} value={sector}>
                {sector}
              </option>
            ))}
          </Form.Select>
          {dataTypeSelected === "overview" && (
            <div className="jesse-info-div" onClick={handleDivClick}>
              <Row>
                <Col className="jesse-name-column" xs={6}>
                  {descriptionOfHover.name}
                  {": "}
                </Col>
                <Col xs={3}>
                  {descriptionOfHover.count}
                  {" stocks"}
                </Col>
                <Col xs={3}>${descriptionOfHover.value}</Col>
              </Row>
            </div>
          )}
        </Form.Group>

        {dataTypeSelected === "overview" ? (
          <Button
            className="jesse-valuecount-button"
            onClick={() => setCount(!count)}
          >
            {count ? "Count" : "Value"}
          </Button>
        ) : (
          <Button
            style={{
              marginRight: "10px",
              backgroundColor: "green",
              color: "white",
              fontWeight: "bold",
              borderRadius: "5px",
              padding: "8px 12px",
            }}
            onClick={() => setDataTypeSelected("overview")}
          >
            Go to general overview
          </Button>
        )}
      </div>
    </>
  );
};

export default Header;
