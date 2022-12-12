import { memo } from "react";
import { Child2 } from "./Child2";
import { Child3 } from "./Child3";

const style = {
  height: "200px",
  backgroundColor: "lightblue",
  padding: "8px",
};

export const Child1 = memo((props) => {
  console.log("child1 렌더링");

  const { onClickReset } = props;

  return (
    <div style={style}>
      <p>child1</p>
      <button onClick={onClickReset}> 리셋</button>
      <Child2 />
      <Child3 />
    </div>
  );
});
