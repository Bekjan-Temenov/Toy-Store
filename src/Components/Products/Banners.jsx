import { Container } from "../Container/container"
import BannerStart from "./BannerStart"
import BannerCenter from "./BannerCenter";
import BannerEnd from "./BannerEnd"


function Banners() {
  return (
    <Container>
      <>
        <BannerStart />
        <BannerCenter />
        <BannerEnd />
      </>
    </Container>
  );
}
export default Banners;
