import React from "react";
import "./styles.css";
import { evaluate } from "mathjs";

export default function App() {
  const handleClick = function (value) {
    const newExpression = expression.toString() + value;
    setExpression(newExpression);
  };

  const calculate = function () {
    let result;
    try {
      result = evaluate(expression);
      setExpression(result);
    } catch (error) {
      setExpression("");
    }
  };

  const clr = function () {
    setExpression("");
  };
  const [expression, setExpression] = React.useState("");

  return (
    <>
      <div className="scn">{expression}</div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "/", "clr"].map((el) => (
        <button key={el} onClick={() => handleClick(el)}>
          {el}
        </button>
      ))}
      <button onClick={calculate}> = </button>

      <button onClick={clr}> clr </button>
    </>
  );
}
