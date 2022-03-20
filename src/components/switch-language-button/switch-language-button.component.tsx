import React, { useContext } from "react";
import { Select } from "antd";
import { LanguageContext } from "../../context/multilingual.context";

const { Option } = Select;

const SwitchLanguageButton: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleChange = (value: string) => {
    setLanguage(value);
  };
  return (
    <Select onChange={handleChange} defaultValue="english">
      <Option value="english">English</Option>
      <Option value="french">Français</Option>
    </Select>
  );
};

export default SwitchLanguageButton;
