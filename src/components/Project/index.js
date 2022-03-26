import React, { useState } from "react";
import Card from "react-bootstrap/card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Project(props) {
  const currentProject = useState(props)[0].projects;

  const name = currentProject.name;
  const description = currentProject.description;
  const image = currentProject.image;
  const tech = currentProject.technologies;
  const appLink = currentProject.deployed;
  const gitLink = currentProject.github;

  function getTech(techArray) {
    let techList = "";

    for (var i = 0; i < techArray.length; i++) {
      if (i === techArray.length - 1) {
        techList += techArray[i];
      } else {
        techList += techArray[i] + ", ";
      }
    }
    return techList;
  }
  return (
    <Row xs={1} md={2} className="g-4">
      {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={require(`../../assets/img/images/${image}`)}
              className="card-image"
            />
            <div className="center">
              <Card.Body style={{ width: "18rem" }}>
                <Card.Title className="card-title">{name}</Card.Title>
                <Card.Text className="card-text">{description}</Card.Text>
                <Card.Subtitle className="card-subtitle">
                  Techs Used
                </Card.Subtitle>
                <Card.Text className="card-tech">{getTech(tech)}</Card.Text>
                <Card.Link href={appLink} target="_blank" className="card-link">
                  {name} App
                </Card.Link>
                <br></br>
                <Card.Link href={gitLink} target="_blank" className="card-link">
                  {name} Github
                </Card.Link>
              </Card.Body>
            </div>
          </Card>
        </Col>
      {/* ))} */}
    </Row>
  );
}

export default Project;
