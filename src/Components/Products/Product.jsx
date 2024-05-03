import { Container } from "../Container/container";
import Carausel from "./Carausel"
import Banners from "./Banners";
import Input from "./Input";
function Product() {
  return (
    <Container>
      <>
        <Carausel />
        <Input />
        <Banners />
      </>
    </Container>
  );
}

export default Product;
