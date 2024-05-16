import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HeroSection2 from "../../components/heroSection2/HeroSection2";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <HeroSection2 />
      <Category />
      <HomePageProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default HomePage;
