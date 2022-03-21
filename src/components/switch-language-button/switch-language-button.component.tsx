import React, { useContext } from "react";
import { Select } from "antd";
import { LanguageContext } from "../../context/multilingual.context";
import styles from "./switch-language-button.module.scss";
const { Option } = Select;

const SwitchLanguageButton: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleChange = (value: string) => {
    setLanguage(value);
  };
  return (
    <Select onChange={handleChange} value={language} className={styles.select}>
      <Option value="english">English</Option>
      <Option value="french">Français</Option>
    </Select>
  );
};

export default SwitchLanguageButton;
