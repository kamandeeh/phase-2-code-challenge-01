import React from "react";
import { Form, Checkbox, Dropdown } from "semantic-ui-react";

function FilterBar({ greasedOnly, toggleGreased, sortBy, setSortBy }) {
  const sortOptions = [
    { key: "name", text: "Name", value: "name" },
    { key: "weight", text: "Weight", value: "weight" },
  ];

  return (
    <Form>
      <Form.Field>
        <Checkbox 
          label="Show Greased Only" 
          checked={greasedOnly} 
          onChange={toggleGreased} 
        />
      </Form.Field>
      <Form.Field>
        <label>Sort By:</label>
        <Dropdown 
          selection 
          options={sortOptions} 
          value={sortBy} 
          onChange={(e, { value }) => setSortBy(value)} 
        />
      </Form.Field>
    </Form>
  );
}

export default FilterBar;
