import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    console.log("랜더 링")

    const [num, setNum] = useState(0);

    const onClickButton = () => {
        setNum(num + 1);
    };

    return (
        <>
            <h1 style={{ color: "red" }}>허다은바보</h1>
            <ColoredMessage color="blue">잘지내시죠?</ColoredMessage>
            <ColoredMessage color="pink">잘지냅니다.</ColoredMessage>
            <button onClick={onClickButton} > 버튼 </button>
            <p>{num}</p>
        </>


    );
};