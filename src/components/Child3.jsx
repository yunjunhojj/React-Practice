import { memo } from "react";
const style = {
  height: "50px",
  backgroundColor: "lightgray",
};

export const Child3 = memo(() => {
  console.log("child3 렌더링");

  return (
    <div style={style}>
      <p>child3</p>
    </div>
  );
});
