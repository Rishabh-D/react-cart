import React, { useEffect, useState, useContext } from "react";
import DisplayBox from "./DisplayBox";
import Button from "./Button";
import { ItemContext } from "../context/ItemContext";

const Item = (props) => {
  const [value, setValue] = useState(0);
  const { itemCount, setItemCount } = useContext(ItemContext);

  useEffect(() => {
    // if (value - 1 === 0) setItemCount((prev) => prev + 1);
    // if (value + 1 === 1) setItemCount((prev) => (prev < 0 ? 0 : prev - 1));

    if (value > 0) {
      const id = props.id;

      setItemCount((prevState) => ({
        ...prevState,
        [id]: 1,
      }));
    } else {
      const id = props.id;
      setItemCount((prevState) => ({
        ...prevState,
        [id]: 0,
      }));
    }
  }, [value, props.id, setItemCount]);

  const deleteItem = (e) => {
    if (e.target.name === "delete") {
      e.target.parentElement.remove();
      delete itemCount[props.id];
      setItemCount((prevState) => ({ ...prevState }));

      // console.log(itemCount);
    } else if (e.target.className === "trash icon") {
      e.target.parentElement.parentElement.remove();
      delete itemCount[props.id];
      setItemCount((prevState) => ({ ...prevState }));
    }
  };

  return (
    <div className={props.className} onClick={deleteItem} id={props.id}>
      <span>{props.children}</span>
      <Button name="add" onClick={() => setValue(value + 1)}>
        +
      </Button>
      <DisplayBox>{value}</DisplayBox>
      <Button
        name="subtract"
        onClick={() => (value === 0 ? null : setValue(value - 1))}
      >
        -
      </Button>
      <Button name="delete">
        <i className="trash icon"></i>
      </Button>
    </div>
  );
};

export default Item;
