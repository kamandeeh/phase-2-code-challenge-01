import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

function AddHogForm({ addNewHog }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    specialty: "",
    weight: "",
    greased: false,
    highestMedal: "bronze",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewHog(formData);
    setFormData({
      name: "",
      image: "",
      specialty: "",
      weight: "",
      greased: false,
      highestMedal: "bronze",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <Form.Input
        label="Image URL"
        name="image"
        value={formData.image}
        onChange={handleChange}
      />
      <Form.Input
        label="Specialty"
        name="specialty"
        value={formData.specialty}
        onChange={handleChange}
      />
      <Form.Input
        label="Weight"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        type="number"
      />
      <Form.Checkbox
        label="Greased"
        name="greased"
        checked={formData.greased}
        onChange={handleChange}
      />
      <Form.Select
        label="Highest Medal"
        name="highestMedal"
        value={formData.highestMedal}
        options={[
          { key: "bronze", text: "Bronze", value: "bronze" },
          { key: "silver", text: "Silver", value: "silver" },
          { key: "gold", text: "Gold", value: "gold" },
        ]}
        onChange={(e, { value }) =>
          setFormData({ ...formData, highestMedal: value })
        }
      />
      <Button type="submit">Add Hog</Button>
    </Form>
  );
}

export default AddHogForm;
