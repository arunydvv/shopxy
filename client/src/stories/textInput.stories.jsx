import React, { useState } from "react";
import TextInput from "./TextInput";

export default {
  title: "UI/TextInput",
  component: TextInput,
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "text" },
    onChange: { action: "changed" }, // logs changes
  },
};

const Template = (args) => {
  const [value, setValue] = useState("");
  return (
    <TextInput
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        args.onChange(e);
      }}
    />
  );
};

// Default story
export const Default = Template.bind({});
Default.args = {
  label: "Name",
  placeholder: "Enter your name",
  error: "",
};

// With error
export const WithError = Template.bind({});
WithError.args = {
  label: "Email",
  placeholder: "Enter your email",
  error: "Invalid email address",
};
