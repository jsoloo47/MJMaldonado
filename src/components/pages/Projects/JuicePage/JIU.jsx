import React from 'react';

import JUIHeroBG from '../../../../assets/JUI-hero-bg.png';
import JUIIdentify from '../../../../assets/JUIIdentify.png';
import JIUuserBased from '../../../../assets/JIU-user-based.png';
import JUIDefine from '../../../../assets/JUIDefine.png';
import JUIRedesign1 from '../../../../assets/JUIRedesign1.png';
import JUIRedesign2 from '../../../../assets/JUIRedesign2.png';
import JUIRedesign3 from '../../../../assets/JUIRedesign3.png';
import JUIRedesign4 from '../../../../assets/JUIRedesign4.png';
import JUIRedesign5 from '../../../../assets/JUIRedesign5.png';
import JUIreflection from '../../../../assets/JUI-reflection.png';

import './styles.css';
export default function JIU() {
  return (
    <div className="JUI-page">
      <div className="JUI-Hero ">
        <img src={JUIHeroBG} alt="" />
        <div className="JUI-Hero-title">Juice It Up Mobile App: Redesign</div>
        <div className="JUI-Hero-subtitle">Background</div>
        <div className="JUI-Hero-text">
          My hands-on experience as a Shift Lead and Manager at the Juice It Up
          Ontario location has allowed me to observe the top current issues
          customers experience with the app.
          <br />
          <br />I took this as an opportunity to redesign the app so that
          customers may have a better experience.
        </div>
      </div>
      <div className="JUI-objectives">
        <div className="JUI-objectives-title">Objectives</div>
        <div className="JUI-objectives-list">
          <div className="JUI-objectives-list-item">
            1. Facilitate a better user experience for Juice It Up's app by
            improving its UI
          </div>
          <div className="JUI-objectives-list-item JUI-last-item">
            2. Take full ownership of roles involved in desiging a product. User
            research, UX design , Product Design
          </div>
        </div>
      </div>
      <div className="JUI-user-based margin-top-10">
        <div className="JUI-user-based-title">User-based Process</div>
        <div className="JUI-user-based-content">
          <img src={JIUuserBased} alt="" />
          <div className="JUI-user-based-content-text">
            <p>
              Gain Insight into user motivations/expectations to identify common
              user experiences and behaviors customers face when trying to scan
              for rewards or find their available rewards.
            </p>
            <p>
              Screen customers and interview users based at the Ontario
              location. This allows me to qualify users based on regular
              visitors. Allows me to create a general persona based on the
              qualified interviewed user.
            </p>
            <p>
              Apply what I've learned to a sitemap as a basis for the
              architecture of the Juice It Up Rewards mobile app. Further,
              develop wireframes (both low and high fidelity) that the franchise
              and its developers can find useful for insight.
            </p>
          </div>
        </div>
      </div>
      <div className="JUI-interviews margin-top-10">
        <div className="JUI-interviews-title">User Interviews</div>
        <div className="JUI-interviews-content">
          <div className="JUI-interviews-content-text">
            The 10 individuals that were selected are regulars at the Juice It
            Up Ontario location and had to qualify by visiting a Juice It Up
            store at least twice a week. Further, the subjects that qualified
            needed to spend at least one hour per day on their mobile device and
            have the Juice it Up Rewards app. In the interview I asked a series
            of 12 questions and summarized its insights below.
          </div>
          <div className="JUI-interviews-content-list">
            <ol>
              <li>1. How often do you drink smoothies or juices?</li>
              <li>
                2. If you do consume those drinks, what makes you want them and
                where do you typically get your fix?
              </li>
              <li>
                3. Do you currently receive any notifications from Juice It Up
                or are signed up to receive notifications?
              </li>
              <li>
                4. Do you check on your rewards often? If so, describe your
                experience? <br />
                (Follow-Up): Describe your thoughts/feelings when see that
                you've receive a reward or not?
              </li>
              <li>
                5. Have you rated your experience or written reviews about
                drinks you've received in the past?
              </li>
              <li>
                6. Do you make purchases through the mobile app? If so, how
                often and how is your experience?
              </li>
              <li>
                7. What features of the Juice It Up app do you typically use?
              </li>
              <li>
                8. Do you always remember to scan for rewards? If not, how were
                you able to get them after?
              </li>
              <li>9. What is your experience with scanning for rewards?</li>
              <li>
                10. Do you have a card linked to the app? if so, do you usually
                the scan and pay option or still pay separately?
              </li>
              <li>
                11. Tell me about your experience with linking your card and
                using scan & pay?
              </li>
              <li>
                12. Is there anything else that you would like to add/share with
                me that maybe one of my questions didn't address?
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="JUI-testing margin-top-10">
        <div className="JUI-testing-title">Usability Testing</div>
        <div className="JUI-testing-content-text">
          <p>
            To test the app's user experience, tasks within the app were given
            to 12 visitors who use the current app for at least one Juice It Up
            location.
            <br />
            <br />
            <strong className="bold">
              I recorded the top three desired tasks and their pain points
              below.
            </strong>
          </p>
          <br />
          <ol>
            <li>1. Identify your available rewards</li>
            <li>2. Find the barcode to scan for rewards AND pay</li>
            <li>3. What do you expect to see when opening the app?</li>
          </ol>
        </div>

        <div className="JUI-testing-recorded">
          <div className="JUI-testing-recorded-text">
            Recorded Phrases
            <br />
            <br />
            <span className="italic">
              “I don't know where that'd be” <br />
              “It would be here ... right?”
              <br />
              “How do I scan and pay?” <br />
              “I think it'd be better if my rewards was shown once I open the
              app.”
            </span>
          </div>
        </div>
      </div>
      <div className="JUI-identifying margin-top-10">
        <div className="JUI-identifying-title">Identifying the Problem</div>
        <div className="JUI-identifying-content">
          <div className="JUI-identifying-content-col1">
            <span>TWO MAIN CONCERNS</span>
            <p>
              3/6 users found their Available Rewards with little to no
              confusion
            </p>
            <p>
              3/6 users found the "Scan for Rewards and to Pay" QR code with
              little to no confusion
            </p>
          </div>
          <div className="JUI-identifying-content-col2">
            <img src={JUIIdentify} alt="" />
            <img src={JUIIdentify} alt="" />
          </div>
        </div>
      </div>
      <div className="JUI-defining-user margin-top-10 ">
        <div className="JUI-defining-user-title">Defining the User</div>
        <div className="JUI-defining-user-content">
          <p>
            I created a user persona named Amy to better visualize the
            motivations and behavior of the user. This persona is loosely based
            on the 12 regular customers interviewed at the Juice It Up Ontario
            location.
          </p>
          <div className="JUI-defining-user-content-img">
            <h3 className="JUI-img-title">Meet Amy</h3>
            <img src={JUIDefine} alt="Meet Amy Demographics" />
          </div>
        </div>
      </div>
      <div className="JUI-redesign margin-top-10">
        <div className="JUI-redesign-title">Redesigning the App</div>
        <div className="JUI-redesign-content">
          <div className="JUI-redesign-experience">
            <div className="JUI-redesign-experience-col1">
              <h3>Experience #1: The Homepage</h3>
              <p>
                The Juice It Up app currently has a “dashboard” layout that
                allows users to navigate through screens. However, because of
                the confusion on the location of available rewards and of the
                rewards QR code, I decided to alter:
                <br />
                1. “tabbed” view instead of dashboard
                <br />
                2. clearer icons that matched preferred tasks
                <br />
                <br />
                <u className="bold underline">
                  This redesign allows for an accessible view with predictable
                  navigation for users.
                </u>
              </p>
            </div>
            <div className="JUI-redesign-experience-col2">
              <img src={JUIRedesign1} alt="Redesign #1" />
            </div>
          </div>
          <div className="JUI-redesign-experience">
            <div className="JUI-redesign-experience-col1">
              <h3>Experience #2: Available Rewards</h3>
              <p>
                Changed the entire look of the Rewards tab. Users found it
                tedious to find their available rewards. I decided to shorten
                the task time by making it available through one click on "more
                rewards" on the homepage.
                <br />
                <br />
                <u className="bold underline">
                  Users are able to find available rewards more easily
                </u>
              </p>
            </div>
            <div className="JUI-redesign-experience-col2">
              <img src={JUIRedesign2} alt="Redesign #2" />
            </div>
          </div>
          <div className="JUI-redesign-experience">
            <div className="JUI-redesign-experience-col1">
              <h3>Experience #3: Status Details</h3>
              <p>
                Status details was not priority usage for many users. That is
                why an available sub-page ("status details") was implemented to
                those who would like to know more about their status.
                <br />
                <br />
                <u className="bold underline">
                  This gives more space for Status visuals on the homepage
                </u>
              </p>
            </div>
            <div className="JUI-redesign-experience-col2">
              <img src={JUIRedesign3} alt="Redesign #3" />
            </div>
          </div>
          <div className="JUI-redesign-experience">
            <div className="JUI-redesign-experience-col1">
              <h3>Experience #4: Scan for Rewards</h3>
              <p>
                I replaced the icons with some of my own design (not including
                scan). This focused the navigation on being visually significant
                without losing the categories in the original app.
                <br />
                <br />
                “Scan to pay” to just “scan” prevents confusion when it comes to
                rewards only vs. rewards and payment
                <br />
                <br />
                <u className="bold underline">
                  Added precise, visible wording
                </u>{' '}
                so that customers can see which QR code they have clearly stated
                at the top. (alongside the option to swipe at the bottom)
              </p>
            </div>
            <div className="JUI-redesign-experience-col2">
              <img src={JUIRedesign4} alt="Redesign #4" />
            </div>
          </div>
          <div className="JUI-redesign-experience">
            <div className="JUI-redesign-experience-col1">
              <h3>Experience #5: Side Navigation</h3>
              <p>
                During testing, users grouped related tasks together grouped in
                order to minimize the options so that it is less likely they be
                overwhelmed with options.
                <br />
                <br />
                <u className="bold underline">
                  With this knowledge, I attempted to make the navigation more
                  predictable
                </u>
                <br />
                • Added social icons
                <br />• Separated “Add Missed Points & FAQ’s” to just Add Missed
                Points
              </p>
            </div>
            <div className="JUI-redesign-experience-col2">
              <img src={JUIRedesign5} alt="Redesign #5" />
            </div>
          </div>
        </div>
      </div>
      <div className="JUI-reflection">
        <div className="JUI-reflection-title">Reflection</div>
        <div className="JUI-reflection-content">
          As a designer, the mindset of "I know what is best for the customer"
          can be tricky. That is why looking back, I see that the most
          beneficial aspect to this process was including the user themselves in
          usability testing to this learning experience. Further, as a
          user-focused designer and manager at a Juice It Up location, I hope to
          create a better end product and a more positive user experience.
          Within this app, I would like to further focus on refining the status
          details, improving the app's UI appearance and gaining more insight on
          how regular users utilize their app.
        </div>
      </div>
      <div className="cce-contact">
        Interest in hearing more about my behind-the-scenes work? <br /> Contact
        me below for more!
      </div>
    </div>
  );
}
