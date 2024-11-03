import React, { useState } from "react";
import { Card, Button, Image } from "semantic-ui-react";

function HogTile({ hog, hideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card>
      <Image src={hog.image} alt={hog.name} />
      <Card.Content>
        <Card.Header>{hog.name}</Card.Header>
        <Button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide Details" : "Show Details"}
        </Button>
        <Button onClick={() => hideHog(hog.name)}>Hide Hog</Button>
        {showDetails && (
          <Card.Description>
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight} lbs</p>
            <p>Greased: {hog.greased ? "Yes" : "No"}</p>
            <p>Highest Medal: {hog.highestMedal}</p>
          </Card.Description>
        )}
      </Card.Content>
    </Card>
  );
}

export default HogTile;
