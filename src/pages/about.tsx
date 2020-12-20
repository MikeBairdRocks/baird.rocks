import React from "react";
import {HeroSplash, Layout} from "../components/containers";
import {NextPage} from "next";
import Meta from "../components/Meta";
import Container from "../components/containers/Container";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <Layout navbarTransparent={true}>
      <Meta title="About" />

      <HeroSplash label="Programmer's Laptop" image="/images/splash.jpg" minHeight="40vh" opacity="opacity-50" divider={{height: 75, color: "text-gray-300 dark:text-gray-900"}}>
        <h1 className="text-white font-semibold text-5xl">About</h1>
      </HeroSplash>

      <section itemScope itemType="http://schema.org/Person" className="pb-20 bg-gray-300 dark:bg-gray-900">
        <div className="items-center justify-center flex relative mb-5">
          <Image
            itemProp="image"
            className="rounded-full justify-center shadow-lg"
            src="/images/michael-baird.jpg"
            width="300"
            height="300"
            loading="eager"
            alt="Michael Baird" />
        </div>

        <Container>
          <p>I'm <span itemProp="name">Michael Baird</span>, a <span itemProp="jobTitle">Software Architect</span>. I
          live with my wife, two cats, dog, five children, and a ton of gadgets. I blog about technology, gadgets,
          code, the web, and things I've researched that aren't well documented, then document my research with a
          public blog post.</p>

          <h2>Location</h2>

          <p>I'm based on the west side of <span itemProp="addressRegion">Tennessee</span> in the United States and can
          be contacted via the <a href="/contact">contact page</a>. I'm happy to be emailed about technical
          queries and certainly any corrections or suggestions for material.</p>
        </Container>
      </section>
    </Layout>
  );
};

export default About;