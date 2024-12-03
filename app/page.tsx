import { Banner } from "./componenents/Banner";
import { ProductInfo } from "./componenents/ProductInfo";
import { ProductLayout } from "./componenents/ProductLayout";
import { Subscribe } from "./componenents/Subscribe";

const Home = () => (
  <>
    <Banner />
    <ProductLayout />
    <Subscribe />
    <ProductInfo />
  </>
);

export default Home;
