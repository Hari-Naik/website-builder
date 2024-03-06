import ReleatedDeals from "../components/specific/ReleatedDeals";
import InfoPanel from "../components/specific/InfoPanel";
import BuilderItem from "../components/shared/BuilderItem/BuilderItem";
import { websiteBuilders } from "../components/data/data";
import SignUp from "../components/specific/SignUp";

const Home = () => {
  return (
    <section className="w-full sm:max-w-4xl mx-auto mt-4 px-4 lg:px-0">
      <InfoPanel />
      {websiteBuilders.map(builder => (
        <BuilderItem key={builder.id} builder={builder} />
      ))}
      <ReleatedDeals />
      <SignUp />
    </section>
  );
};

export default Home;
