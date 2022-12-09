import { Emotion } from "./components/Emotion";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";

export default function App() {
  return (
    <div>
      <h1> 안녕 css 시작해보자 </h1>
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
