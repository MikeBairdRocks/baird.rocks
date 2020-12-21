import React from "react";
import {Page} from "../components/containers";
import {
  EMAIL,
  SOCIAL_LINKEDIN,
  SOCIAL_TWITTER,
  SOCIAL_USERNAME
} from "../common/Constants";
import {NextPage} from "next";
import Container from "../components/containers/Container";
import Image from "next/image";

const Contact: NextPage = () => {
  return (
    <Page title="Contact" splash={{label: "Programmer's Laptop", image: "/images/splash.jpg", minHeight: "40vh"}}>
      <section itemScope itemType="http://schema.org/Person">
        <div className="items-center justify-center flex relative mb-5">
          <Image
            itemProp="image"
            className="rounded-full justify-center shadow-lg"
            src="/images/michael-baird2.jpg"
            width="300"
            height="300"
            loading="eager"
            alt="Michael Baird" />
        </div>
        <Container>
          <p>I'm usually pretty easy to get hold of, here's how I use different channels to communicate with people and how best to contact me.</p>
          <p>I get a huge amount of communications so this page lists the channels I use and how I like to use them. I'll usually respond to all legitimate comms, there's an outline down the bottom of what I probably won't respond to so please read that first.</p>

          <h2>Email: {EMAIL}</h2>
          <p>This is the easiest way if you want to reach out and I can usually respond pretty promptly.</p>

          <h2>Twitter: <a href={SOCIAL_TWITTER} itemProp="">@{SOCIAL_USERNAME}</a></h2>
          <p>This is my primary means of broadcasting things to the world so please follow me there. I do read my DMs and allow them from people I don't follow, but would prefer email if you're reaching out from the blue about something. I don't see every mention so you may not get a reply via a public tweet.</p>

          <h2>LinkedIn: <a href={SOCIAL_LINKEDIN}>{SOCIAL_USERNAME}</a></h2>
          <p>My background is pretty well covered for the last couple of decades there. I accept connections from people I've met, worked with, spoken with or otherwise had enough interaction to feel that I can call them a professional contact. I don't respond to requests from people I don't know.</p>

          <h2>What I may not respond to</h2>
          <p>I try and respond to technical queries but would prefer you try asking on Stack Overflow first.</p>
          <p>If your message doesn't explicitly look like it needs a response or it's vague or not clear what the purpose is, you may not hear back from me.</p>
        </Container>
      </section>
    </Page>
  );
};

export default Contact;