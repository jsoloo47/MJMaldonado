import React from 'react';

import twinMain from '../../../../assets/twinMain.png';
import userSearch from '../../../../assets/twin-user-search.png';
import userData from '../../../../assets/twin-user-data.png';
import userPlane from '../../../../assets/twin-user-plane.png';
import userSuzy from '../../../../assets/twin-user-suzie.png';
import customerMap from '../../../../assets/twin-customer-map.png';
import userTask from '../../../../assets/twin-user-task.png';
import userOverview from '../../../../assets/twin-user-overview.png';
import userWireframe from '../../../../assets/twin-wireframe.png';
import userUI from '../../../../assets/twin-ui-snap.png';

import form1 from '../../../../assets/google-form1.png';
import form2 from '../../../../assets/google-form2.png';
import form3 from '../../../../assets/google-form3.png';

import './styles.css';

export default function TwinStarz() {
  return (
    <div className="twin-starz">
      <div className="twin-hero-container">
        <div className="twin-hero-leftCol">
          <div className="twin-hero-left-title">User Research</div>
          <div className="twin-hero-left-title-main">
            TwinStarz E-Commerce Site
          </div>
          <div className="twin-hero-left-text">
            <h2>Overview</h2>
            <br />
            In this project, the re-branding and wbesite design of small
            business, TwinStarz is summarized
            <br />
            <br />
            <span>
              A team of 5 was assembled that consisted of a Product Manager, UX
              Designer, UX Researcher, Developer and Information Architect
            </span>
          </div>
        </div>
        <div className="twin-hero-rightCol">
          <img src={twinMain} alt="Project Preview" />
        </div>
      </div>
      <div className="twin-card-container">
        <div className="twin-card">
          <div className="twin-card-title">CLIENT/TIMELINE</div>
          <div className="twin-card-text">
            TwinStarz, e-commerce site for anime related vendors / 4 weeks
          </div>
          <div className="twin-card-sub">BACKGROUND</div>
          <div className="twin-card-sub-text">
            Twinstarz is a small business that offers Japanese anime-related
            products mostly focused on stickers and car accessories. In the
            past, Twinstarz have sold through local vendors, but now seek to
            adapt through an e-commerce environment.4 weeks
          </div>
        </div>
        <div className="twin-card">
          <div className="twin-card-title">MY ROLE</div>
          <div className="twin-card-text">UX Research, Interaction Design</div>
          <div className="twin-card-sub">CHALLENGE</div>
          <div className="twin-card-sub-text">
            Growth in business has pushed the way Twinstarz chooses to
            distribute their product towards a predictable e-commerce site. To
            ensure smooth transition, they would like to entice customers with a
            platform that's engaging and easy to navigate.
          </div>
        </div>
        <div className="twin-card">
          <div className="twin-card-title">TOOLS USED</div>
          <div className="twin-card-text">
            Figma, MARVEL, Google Forms, CANVA, Excel
          </div>
          <div className="twin-card-sub">GOALS</div>
          <div className="twin-card-sub-text">
            Perform user research to gain an understanding of standards for the
            online shopping experience and Twinstarz customer expectations.
            Allow user research to inform design decisions
          </div>
        </div>
      </div>
      <div className="twin-client-container">
        <h2 className="twin-client-title">About the Client</h2>
        <p className="twin-client-text">
          Before the first-round of research, an interview with the creators of
          Twinstarz Co. was held to get to know their business goals adequately.
          During the meeting, the client mentioned that they recently launched
          the website on Squarespace and therefore,{' '}
          <span className="bold">
            the current structure is quite plain. It was also said that the
            biggest challenge lies in providing a simple, accessible shopping
            experience that can convince people to trust in the products to buy.
          </span>
          <br />
          <br />
          They further explained that there is moderate traffic on the website,
          but the conversion rates are low.
          <br />
          <br />
          Lastly, the whole transaction and delivery process for Twinstarz is
          currently executed through Instagram that then directs them to
          Squarespace.
        </p>
        <div className="twin-client-text-card-container">
          <div className="twin-client-text-card">
            “I would like simple layout with brand consistency for users when
            they land on our site.”
          </div>
          <div className="twin-client-text-card">
            “People seem to have issues with the home page navigation when they
            message me. I am afraid of that causing distrust or frustration for
            them."
          </div>
          <div className="twin-client-text-card">
            “Usually, men are the ones who buy car decals or anime products. But
            I like that [TwinStarz] colors attracts more women in the car
            community with black contrast and an “edgy” look to balance that
            out.”
          </div>
        </div>
      </div>
      <div className="twin-user-container">
        <h2 className="twin-user-title">Understanding the User</h2>
        <h2 className="twin-user-sub-title">Our Approach</h2>
        <div className="twin-user-card-container">
          <div className="twin-card">
            <img src={userSearch} alt="search img" />
            <div className="twin-card-content">
              <div className="twin-user-title-container">
                <h3 className="twin-cards-title">RESEARCH GOALS</h3>
              </div>
              <ol className="twin-user-card1-ol">
                <li>Research user motivations and expectations</li>
                <li>
                  Identify common user behaviors and experiences people face
                  trying to access and buy products
                </li>
                <li>
                  Understand user needs and frustrations as they relate to the
                  product
                </li>
              </ol>
            </div>
          </div>
          <div className="twin-card">
            <img src={userData} alt="search img" />
            <div className="twin-card-content">
              <div className="twin-user-title-container">
                <h3 className="twin-cards-title">METHODS</h3>
              </div>
              <span>
                Collect information and data from resources/analytics such as
                the following:
              </span>
              <ul className="twin-card2-ul">
                <li>Market trends</li>
                <li>User survey</li>
                <li>User interviews</li>
                <li>User Persona</li>
                <li>User flow</li>
              </ul>
            </div>
          </div>
          <div className="twin-card">
            <img src={userPlane} alt="search img" />
            <div className="twin-card-content">
              <div className="twin-user-title-container">
                <h3 className="twin-cards-title">DISCOVER</h3>
              </div>
              <ul className="twin-user-card1-ol">
                <li>Average customer group age + other demographics</li>
                <li>
                  Majority of users discover new shops through social media and
                  Social Networks
                </li>
                <li>
                  A consistent, professional brand look would significantly
                  improve user purchase confidence
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="twin-post-card-info">
        <div className="twin-post-card-content">
          I conducted user interviews with individuals who are familiar with
          online shopping to identify their pain points and needs. Due to the
          wide range of demographics that enjoy online shopping,{' '}
          <span className="bold">
            I narrowed down the target group for the interviews to people
            between the ages of 18-29 years old who keep updated with the anime
            community and online shop through a screening survey.
          </span>{' '}
          <br />
          <br />A total of 15 people with different professions were interviewed
        </div>
      </div>
      <div className="twin-user-google-responses-container">
        <div className="twin-user-google-responses-card">
          <img src={form1} alt="google form image" />
          <div className="twin-user-google-responses-col2">
            <h3>User Survey/results</h3>
            <h2>Post-Screening Survey</h2>
            <span>Google Forms</span>
            <a href="https://forms.gle/LiFkHstDLXYM656X6">READ MORE</a>
          </div>
        </div>
        <div className="twin-user-google-responses-card">
          <img src={form2} alt="google form image" />
          <div className="twin-user-google-responses-col2">
            <h3>User responses</h3>
            <h2>Survey Results Formatted for Interview Selections</h2>
            <span>Microsoft Excel</span>
            <a href="https://docs.google.com/spreadsheets/d/1y4cb-CNn6iNQRmLXWeCW2O7gtiq-C-uK6XpoFPYAncw/edit?usp=sharing">
              READ MORE
            </a>
          </div>
        </div>
        <div className="twin-user-google-responses-card">
          <img src={form3} alt="google form image" />
          <div className="twin-user-google-responses-col2">
            <h3>Recorded Interview</h3>
            <h2>Empathy Exercise with Interviewee</h2>
            <span>Typed Notes - Google Docs</span>
            <a href="https://docs.google.com/document/d/1CgeYy0BPDo2iOZFpAfZKMvRS-eKNwynxbL_lREwrG6U/edit?usp=sharing">
              READ MORE
            </a>
          </div>
        </div>
      </div>
      <div className="twin-define-user-container">
        <h2 className="twin-define-user-title">Defining the User</h2>
        <h2 className="twin-define-user-sub-title">Meet Suzy</h2>
        <section className="twin-define-user-content-container">
          <div className="twin-user-content-intro">
            <div className="twin-user-problem">
              <h3>Problem Statement (based on Persona A)</h3>
              <p>
                Our user is a busy, introverted individual who needs an
                efficient way to place and receive orders from a trustworthy
                site, as they currently lack on products and dislikes in-store
                shopping.
              </p>
            </div>
            <div className="twin-user-hypothesis">
              <h3>Hypothesis Statement</h3>
              <p>
                If the user shops online from Twinstarz, a brand with
                consistency, then she can shop with trust and relax at home.
              </p>
            </div>
            <img src={userSuzy} alt="Suzy Demographics Image" />
          </div>
          <div className="twin-user-customer-journey">
            <div className="twin-user-customer-col1">
              <h3>Customer Journey Map</h3>
              <p>
                To understand the experiences that users may face to buy from
                Twinstarz, a journey map for persona Suzy was created. This also{' '}
                <strong className="bold">
                  gave the team a chance brainstorm other ways to make Twinstarz
                  accessible for users and overall, better the experience
                </strong>
              </p>
            </div>
            <img src={customerMap} alt="Customer Journey Map" />
          </div>
          <div className="twin-user-customer-journey">
            <div className="twin-user-customer-col1">
              <h3>User Task Flow</h3>
              <p>
                Based off the user journey map, a user task flow for Suzy
                (persona A) was created{' '}
                <strong className="bold">
                  to take the user from the homepage to the checkout.
                </strong>
              </p>
            </div>
            <img src={userTask} alt="User Task Flow" />
          </div>
          <div className="twin-user-customer-journey">
            <div className="twin-user-customer-col1">
              <h3>Overview</h3>
              <p>
                Once I had a user persona, journey map and user task flow
                prepared,
                <strong className="bold">
                  the team looked back to the business and user goals for a
                  clear overview. This is the simplified version with only the
                  most important points.
                </strong>
              </p>
            </div>
            <img src={userOverview} alt="Overview Comparison Map" />
          </div>
        </section>
      </div>
      <div className="twin-user-knowledge-container">
        <h2 className="twin-user-knowledge-title">
          User Knowledge Application
        </h2>
        <h3 className="twin-user-knowledge-sub-title">Interactive Design</h3>
        <div className="twin-user-knowledge-wire">
          <div className="twin-user-knowledge-wire-col1">
            <h3>Wireframes</h3>

            <p>
              With market research conducted and user data gathered,
              low-fidelity sketches and wireframes were drawn{' '}
              <strong className="bold">
                {' '}
                focused on information important to the users
              </strong>
            </p>
          </div>
          <img src={userWireframe} alt="Wireframe image" />
        </div>
        <div className="twin-user-knowledge-ui">
          <h2>UI Kit Snapshot</h2>
          <img src={userUI} alt="UI Kit image" />
        </div>
        <div className="twin-reflection">
          <h2>Reflection and</h2>
          <h3 className="twin-reflection-feedback">Feedback</h3>

          <div className="twin-reflection-content">
            <h3>Feedback Received During Testing</h3>
            <ul>
              Most Notable Points:
              <li>
                Participants felt that the website could be more inclusive by
                offering more payment options
              </li>
              <li>
                There is a need to include an icon that allows users to view
                more products at once on the homepage
              </li>
            </ul>
            <p>
              Next steps: Conduct more usability testing to test improved
              revisions and hand over to visual designers for high-fidelity
              screens and prototype
            </p>
          </div>
        </div>
        <div className="cce-contact">
          Interest in hearing more about my behind-the-scenes work? <br />{' '}
          Contact me below for more!
        </div>
      </div>
    </div>
  );
}
