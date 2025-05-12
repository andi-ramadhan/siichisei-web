import DiscordInsight from "../components/DiscordInsight";
import Footer from "../components/Footer";
import Insight from "../components/Insight";
import ServicesInsight from "../components/ServicesInsight";
import ToTopBtn from "../components/ToTopBtn";
import Welcome from "../components/Welcome";

const HomePage = () => {
  return(
    <main className='w-full'>
      <ToTopBtn />
      <Welcome />
      <Insight />
      <DiscordInsight />
      <ServicesInsight />
      <Footer />
    </main>
  );
}

export default HomePage;