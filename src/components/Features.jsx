import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Ease from "../assets/Features/Ease.png";
import Pricing from "../assets/Features/Pricing.png";
import Customer from "../assets/Features/CustomerSupport.png";
import Integrations from "../assets/Features/Integrations.png";

const Features = () => {
  gsap.registerPlugin(ScrollTrigger);
  const featuresRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".features-header", { x: -100, duration: 2 });
      gsap.from(".container", {
        scrollTrigger: {
          trigger: ".features-container",
          // markers: true,
          id: "scroll-test",
          start: "-200px center",
          end: "bottom bottom",
          scrub: 2,
          toggleActions: "restart pause reverse restart",
        },
        stagger: 2,
        ease: "none",
        x: -600,
        duration: 2,
        delay: 2,
        opacity: 0,
      });
    }, featuresRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="features" ref={featuresRef}>
      <div className="features-header">
        <h1>
          HOW EGGO <br />
          STANDS OUT
        </h1>
      </div>

      <div className="features-container">
        <div className="features-container2">
          <div className="container ease-of-use">
            <img src={Ease} />
            <h4 style={{ color: "#61C454" }}>Ease of Use</h4>
            <p>
              Both Eggo and Oxe have user-friendly interfaces, making it easy
              for beginners to get started with their platforms. However, Eggo
              is easier to use than Oxe, especially for those without technical
              backgrounds. This makes it an ideal choice for businesses that
              require a SaaS solution that can be implemented quickly and with
              minimal effort.
            </p>
          </div>
          <div className="pricing_Customer">
            <div className="container pricing">
              <img src={Pricing} />
              <h4 style={{ color: "#EE6A5F" }}>Pricing</h4>
              <p>
                Eggo and Oxe both offer multiple pricing tiers to meet the needs
                of businesses of all sizes. However, at Eggo we offer more
                affordable pricing options than Oxe starting from $0.00. This
                makes it a more cost-effective choice for freelancers and
                startups that need to keep expenses low.
              </p>
            </div>
            <div className="container Customer-support">
              <img src={Customer} />
              <h4 style={{ color: "#53A3ED" }}>Customer Support</h4>
              <p>
                Eggo has a more responsive and efficient support team which
                works 24/7 unlike Oxe. In addition, Eggo offers personalized
                onboarding and training, making it an excellent choice for
                businesses or individuals that need extra help getting started.
              </p>
            </div>
          </div>
        </div>
        <div className="container Integrations">
          <img src={Integrations} />
          <h4 style={{ color: "#F9BB1D" }}>Integrations</h4>
          <p>
            It has become increasingly important for companies to have the
            ability to seamlessly integrate their SaaS solutions with a variety
            of other tools and in this regard, both Eggo and Oxe have stepped up
            to the plate by offering integrations with some of the most popular
            business tools out there, including Salesforce, Slack, and Shopify;
            however, when it comes to the sheer number of integrations on offer,
            Eggo reigns supreme, making it the top choice for businesses that
            require a wider range of options to connect and streamline their
            workflows across different platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
