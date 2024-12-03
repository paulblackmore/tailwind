import { Banner } from "./componenents/Banner";
import { CardSection } from "./componenents/CardSection";
import { Subscribe } from "./componenents/Subscribe";

const Home = () => (
  <>
    <Banner />
    <CardSection />
    <Subscribe />
    <div className="p-14">
      <p className="text-slate-700 text-center">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede mollis pretium.
      </p>
    </div>
  </>
);

export default Home;
