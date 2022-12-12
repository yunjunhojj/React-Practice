import { useContext, useState } from "react";
import { Card } from "./components/Card";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

const App = () => {
  // 관리자 플래그
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);
  // 전환 클릭시 실행
  const onClickSwitch = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div>
      {isAdmin ? <span> 관리자 입니다. </span> : <span> 관리자 아닙니다.</span>}
      <button onClick={onClickSwitch}> 전환 </button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};

export default App;
