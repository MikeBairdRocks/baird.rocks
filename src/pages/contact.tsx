import React from "react";
import {HeroSplash, Layout} from "../components/containers";
import {
  EMAIL,
  SOCIAL_LINKEDIN,
  SOCIAL_TWITTER,
  SOCIAL_USERNAME
} from "../common/Constants";
import {NextPage} from "next";
import Meta from "../components/Meta";
import Container from "../components/containers/Container";

const Contact: NextPage = () => {
  return (
    <Layout navbarTransparent={true}>
      <Meta title="Contact" />

      <HeroSplash image="/images/splash.jpg" minHeight="40vh" opacity="opacity-50" divider={{height: 75, color: "text-gray-900"}}>
        <h1 className="text-white font-semibold text-5xl">Contact</h1>
      </HeroSplash>

      <section className="pb-20 bg-gray-900">
        <Container itemScope itemType="http://schema.org/Person">
          <div className="justify-center flex mb-5">
            <img itemProp="image" className="rounded-full w-64 shadow-xl" src="/images/michael-baird.jpg" alt="Michael Baird" />
          </div>

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
    </Layout>
  );
};

export default Contact;