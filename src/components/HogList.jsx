import React from "react";
import HogTile from "./HogTile";
import { Card } from "semantic-ui-react";

function HogList({ hogs, hideHog }) {
  return (
    <Card.Group itemsPerRow={2}>
      {hogs.map((hog) => (
        <HogTile key={hog.name} hog={hog} hideHog={hideHog} />
      ))}
    </Card.Group>
  );
}

export default HogList;
