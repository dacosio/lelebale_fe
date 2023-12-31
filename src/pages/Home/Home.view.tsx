import React from "react";
import { HomeGeneratedProps } from "./Home.props";
import {
  Container,
  HeaderWrapper,
  Hero,
  HeroHeader,
  HeroSubtitle,
  HeroWrapper,
  Bottom,
  BottomSection,
  Swipe,
} from "./Home.style";
import Header from "components/layout/Header";
import StickyNav from "react-sticky-nav";
import Navbar from "components/layout/Navbar";
import Typography from "../../components/base/Typography";
import SectionCard from "components/module/SectionCard";
import OurStoryImg from "../../images/ourStory.jpg";
import Package1 from "../../images/packages/package1.jpg";
import { LuBedDouble } from "react-icons/lu";
import { FaPersonSwimming } from "react-icons/fa6";

import { TbToolsKitchen } from "react-icons/tb";
import { MdLocalParking } from "react-icons/md";

import Footer from "components/layout/Footer";
import Title from "components/base/Title";
import Carousel from "components/module/Carousel";

const HomeView = (props: HomeGeneratedProps) => {
  return (
    <Container>
      <Header />
      <StickyNav>
        <Navbar />
      </StickyNav>

      <Hero>
        <HeroWrapper>
          <HeroHeader>
            <Typography variant="title1" style={{ color: "white" }}>
              Lele Bale Events Place
            </Typography>
          </HeroHeader>
          <HeroSubtitle>
            <Typography variant="subtitle1" style={{ color: "white" }}>
              Poolside & Patio Party Place
            </Typography>
          </HeroSubtitle>
        </HeroWrapper>
      </Hero>
      <SectionCard
        title="Our Story"
        description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            exercitationem neque hic nobis vitae quas earum ducimus laboriosam
            saepe voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dicta porro placeat voluptatibus doloremque dignissimos
            blanditiis rem, ratione molestias ullam voluptate beatae qui, soluta
            reprehenderit ipsum alias harum ab quis libero?"
        lists={[
          { label: "Common spaces" },
          { label: "Pergola" },
          { label: "Pergola" },
        ]}
        src={OurStoryImg}
      />
      <SectionCard
        title="Packages"
        description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            exercitationem neque hic nobis vitae quas earum ducimus laboriosam
            saepe voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dicta porro placeat voluptatibus doloremque dignissimos
            blanditiis rem, ratione molestias ullam voluptate beatae qui, soluta
            reprehenderit ipsum alias harum ab quis libero?"
        lists={[
          { label: "Fully Furnished", icon: LuBedDouble },
          { label: "Swimming Pool", icon: FaPersonSwimming },
          { label: "Complete Kitchen", icon: TbToolsKitchen },
          { label: "Parking", icon: MdLocalParking },
        ]}
        order
        src={Package1}
        seeMore="click here to see more"
      />
      <SectionCard
        title="Our Location"
        description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
            exercitationem neque hic nobis vitae quas earum ducimus laboriosam
            saepe voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dicta porro placeat voluptatibus doloremque dignissimos
            blanditiis rem, ratione molestias ullam voluptate beatae qui, soluta
            reprehenderit ipsum alias harum ab quis libero?"
        src={Package1}
        seeMore="Lele Bale at Villa Dolores"
        map
      />
      <Bottom>
        <BottomSection>
          <Title title="Gallery" />
        </BottomSection>
        <Swipe>
          <Carousel />
        </Swipe>
      </Bottom>
      <Footer />
    </Container>
  );
};

export default HomeView;
