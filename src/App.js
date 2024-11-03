import React, { useState } from "react";
import HogList from "./components/HogList";
import FilterBar from "./components/FilterBar";
import AddHogForm from "./components/AddHogForm";
import hogsData from "./porkers_data";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [hiddenHogs, setHiddenHogs] = useState([]);

  const toggleGreased = () => setGreasedOnly(!greasedOnly);

  const sortedAndFilteredHogs = hogs
    .filter(hog => (greasedOnly ? hog.greased : true))
    .sort((a, b) =>
      sortBy === "name" ? a.name.localeCompare(b.name) : a.weight - b.weight
    )
    .filter(hog => !hiddenHogs.includes(hog.name));

  const addNewHog = (newHog) => setHogs([...hogs, newHog]);

  const hideHog = (hogName) => setHiddenHogs([...hiddenHogs, hogName]);

  return (
    <div className="App bg-dark">
      <h1>Hog Farm</h1>
      <FilterBar 
        greasedOnly={greasedOnly} 
        toggleGreased={toggleGreased} 
        sortBy={sortBy} 
        setSortBy={setSortBy} 
      />
      <AddHogForm addNewHog={addNewHog} />
      <HogList hogs={sortedAndFilteredHogs} hideHog={hideHog} />
    </div>
  );
}

export default App;
