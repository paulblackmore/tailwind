import Banner from "./componenents/Banner";
import Card from "./componenents/Card";

const Home = () => (
  <>
    <Banner />
    <div className="grid grid-cols-4 gap-4 w-full p-10">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </>
);

export default Home;
