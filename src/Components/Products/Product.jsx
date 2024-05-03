import { Container } from "../../Container/Container";
import Carausel from "../Products/Carausel"
import Banners from "./Banners";
import Input from "./Input";
function Product() {
  return (
    <Container>
      <Carausel />
      <Input />
      <Banners/>
    </Container>
  );
}

export default Product;
