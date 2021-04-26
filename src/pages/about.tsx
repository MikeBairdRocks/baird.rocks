import React from "react";
import {NextPage} from "next";
import Container from "../components/containers/Container";
import Image from "next/image";
import Page from "../components/containers/Page";
import {EMAIL, SOCIAL_LINKEDIN, SOCIAL_TWITTER, SOCIAL_USERNAME} from "../common/Constants";

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
          <h2>Hello Friends 🖖🏼</h2>
          <p>My name is <span itemProp="name">Michael Baird</span>, and you’ve just found my website. Stick around and
            I'll tell you a little bit about myself, my hobbies and my interests. Don't have time? Here is a TLDR:</p>

          <blockquote>
            <p>I’m an experienced software developer with over two decades focusing on .NET technologies, web development, CI/CD automation, UX, design...among other things and dedicating a lot of time to improving peoples' lives with software.</p>
            <footer>
              <small className="text-sm">–Michael</small>
            </footer>
          </blockquote>

          {/*<h2>Early days of a Software Developer 🐣</h2>*/}

          <h2>Contact Me 📬</h2>
          <p>I'm usually pretty easy to get hold of, here's how I use different channels to communicate with people and how best to contact me.</p>
          <p>I get a huge amount of communications so this page lists the channels I use and how I like to use them. I'll usually respond to all legitimate comms, there's an outline down the bottom of what I probably won't respond to so please read that first.</p>

          <h3>Twitter: <a href={SOCIAL_TWITTER} itemProp="">@{SOCIAL_USERNAME}</a></h3>
          <p>This is my primary means of broadcasting things to the world so please follow me there. I do read my DMs and allow them from people I don't follow, but would prefer email if you're reaching out from the blue about something. I don't see every mention so you may not get a reply via a public tweet.</p>

          <h3>LinkedIn: <a href={SOCIAL_LINKEDIN}>{SOCIAL_USERNAME}</a></h3>
          <p>My background is pretty well covered for the last couple of decades there. I accept connections from people I've met, worked with, spoken with or otherwise had enough interaction to feel that I can call them a professional contact. I don't respond to requests from people I don't know.</p>

          <h3>What I may not respond to</h3>
          <p>I try and respond to technical queries but would prefer you try asking on Stack Overflow first.</p>
          <p>If your message doesn't explicitly look like it needs a response or it's vague or not clear what the purpose is, you may not hear back from me.</p>
        </Container>
      </section>
    </Page>
  );
};

export default About;