import { Container } from "../Container/container";
import Bg from "./Bg/Bg";
import Buttons from "./Buttons/Buttons";
import Sale from "./Sale/Sale";
import Seedra from "./Seedra/Seedra";

function HomePage() {
  return (
    <Container>
      <div className="bg-gray-200 h-[455px] rounded-xl ">
        <div>
          
      <Bg/>
      <Sale/>
      <Buttons/>
        </div>
      <Seedra/>
      </div>
    </Container>
  );
}

export default HomePage;
