import { memo } from "react";
const style = {
  height: "200px",
  backgroundColor: "wheat",
  padding: "8px",
};

export const Child4 = memo(() => {
  console.log("child4 렌더링");

  return (
    <div style={style}>
      <p>child4</p>
    </div>
  );
});
