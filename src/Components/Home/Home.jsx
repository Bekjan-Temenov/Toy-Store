import { Container } from "../Container/container";
import BannerStart from "../Products/BannerStart"
import Banners from "./Banners";
import Carousel from "./Carousel"
import List from "./List";
import Filter from "./Filter";
import Products from "./Products";
import Women from "./Women";

function Home() {
  return (
    <Container>
      <List/>
      <Filter/>
      <Products/>
      <Banners/>
      <BannerStart/>
      <Carousel/>
      <Women/>
    </Container>
  );
}
export default Home;