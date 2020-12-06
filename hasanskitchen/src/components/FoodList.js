import React from "react";
import { Container, CardWrapper, CardTitleStyled } from "../styles";
import { Button, Card } from "react-bootstrap";
export const FoodList = () => {
  return (
    <>
      <Container>
        <CardTitleStyled>Categories</CardTitleStyled>
        <CardWrapper className="row">
          <Card style={{ width: "18rem" }} className="col">
            <Card.Img
              variant="top"
              src="https://www.health.harvard.edu/media/content/images/WholeGrains_W1607_ts481882305.jpg"
            />
            <Card.Body>
              <Card.Title>Grain</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="col">
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg"
            />
            <Card.Body>
              <Card.Title>Fruits</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="col">
            <Card.Img
              variant="top"
              src="data:image/jpeg;base64,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"
            />
            <Card.Body>
              <Card.Title>Vegetables</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </CardWrapper>
      </Container>
      {/* Fa9eel */}
      {/* Fa9eel */}
      {/* Fa9eel */}
      {/* Fa9eel */}
      {/* Fa9eel */}
      {/* Fa9eel */}
      <Container>
        <CardTitleStyled>Recipes</CardTitleStyled>
        <CardWrapper className="row">
          <Card style={{ width: "18rem" }} className="col">
            <Card.Img
              variant="top"
              src="https://wholefoodrepublic.com/wp-content/uploads/2017/03/Salmon-Pea-Pasta-Main.jpg"
            />
            <Card.Body>
              <Card.Title>Creamy Pasta</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="col">
            <Card.Img
              variant="top"
              src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1537973085542.jpeg"
            />
            <Card.Body>
              <Card.Title>Tuscan Chicken Skillet</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }} className="col">
            <Card.Img
              variant="top"
              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/meatball-lasagne-e64e936.jpg?quality=90&resize=500%2C454"
            />
            <Card.Body>
              <Card.Title>Meet Ball Pizza (Don't ask)</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </CardWrapper>
      </Container>
    </>
  );
};

export default FoodList;
