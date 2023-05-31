import React from "react";
import Vector1 from "../assets/Vector.png";

const Features = () => {
  return (
    <div className="features">
      <div className="features-header">
        <h1>
          HOW EGGO <br />
          STANDS OUT
        </h1>
      </div>

      <div className="features-container">
        <div className="features-container2">
          <div className="container ease-of-use">
            <img src={Vector1} />
            <h4>Ease of Use</h4>
            <p>
              Both Eggo and Oxe have user-friendly interfaces, making it easy
              for beginners to get started with their platforms. However, Eggo
              is easier to use than Oxe, especially for those without technical
              backgrounds. This makes it an ideal choice for businesses that
              require a SaaS solution that can be implemented quickly and with
              minimal effort.
            </p>
          </div>
          <div>
            <div className="container pricing">
              <img src={Vector1} />
              <h4>Pricing</h4>
              <p>
                Eggo and Oxe both offer multiple pricing tiers to meet the needs
                of businesses of all sizes. However, at Eggo we offer more
                affordable pricing options than Oxe starting from $0.00. This
                makes it a more cost-effective choice for freelancers and
                startups that need to keep expenses low.
              </p>
            </div>
            <div className="container Customer-support">
              <img src={Vector1} />
              <h4>Customer Support</h4>
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
          <img src={Vector1} />
          <h4>Integrations</h4>
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
