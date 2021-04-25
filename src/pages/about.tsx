import React from "react";
import {NextPage} from "next";
import Container from "../components/containers/Container";
import Image from "next/image";
import Page from "../components/containers/Page";

const About: NextPage = () => {
  return (
    <Page title="About" splash={{label: "Programmer's Laptop", image: "/images/splash.jpg", minHeight: "40vh"}}>
      <section itemScope itemType="https://schema.org/Person">
        <div className="items-center justify-center flex relative mb-5">
          <Image
            itemProp="image"
            className="rounded-full justify-center shadow-lg"
            src="/images/michael-baird2.jpg"
            width="250"
            height="250"
            layout="fixed"
            alt="Michael Baird" />
        </div>

        <Container>
          <p>I'm <span itemProp="name">Michael Baird</span>, a <span itemProp="jobTitle">Software Architect</span>. I
            live with my wife, one cat, dog, five children, and a ton of gadgets. I blog about technology, gadgets,
            code, the web, and things I've researched that aren't well documented, then document my research with a
            public blog post.</p>

          <h2>Location</h2>

          <p>I'm based on the west side of <span itemProp="addressRegion">Tennessee</span> in the United States and can
            be contacted via the <a href="/contact">contact page</a>. I'm happy to be emailed about technical
            queries and certainly any corrections or suggestions for material.</p>
        </Container>
      </section>
    </Page>
  );
};

export default About;