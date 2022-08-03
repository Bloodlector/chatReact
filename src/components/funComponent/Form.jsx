import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import styles from "../../App.css";

export const Form = () => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setMessages([...messages, value]);
    setValue("");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      {visible && (
        <ul className={styles.form}>
          {messages.map((message) => (
            <li>{message}</li>
          ))}
        </ul>
      )}

      <Input change={handleChange} value={value} />
      <Button click={handleClick} />
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Скрыть" : "Показать"}
      </button>
    </>
  );
};
