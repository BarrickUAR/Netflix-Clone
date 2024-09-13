import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <HeroSection />
        <Faqs />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  return (
    <nav>
      <div className="nav-header">
        <a href="#">
          <img src="  /assets/images/Logo.svg" alt="" />
        </a>

        <div className="language-menu">
          <div className="select-wrapper">
            <div className="select-arrow globe">
              <select className="select">
                <option selected="">English</option>
                <option value="-">-</option>
              </select>
            </div>
          </div>
        </div>

        <button>Sign In</button>
      </div>
      <div className="nav-content">
        <h2>
          Unlimited movies, TV <br /> shows, and more.
        </h2>
        <p>Watch anywhere. Cancel anytime.</p>
        <h5>
          Ready to watch? Enter your email to create or restart your membership.
        </h5>
        <form>
          <input type="text" placeholder="Email Address" />
          <input type="submit" value="Get Started &#8250;" />
        </form>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <div className="heroSection">
      <div className="sectionItem1">
        <div className="sectionText">
          <h2>Enjoy on your TV.</h2>
          <p>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="sectionImage">
          <img src="  /assets/images/sectionImg1.svg"  />
        </div>
      </div>

      <div className="sectionItem2">
        <div className="sectionText">
          <h2>Download your shows to watch offline.</h2>
          <p>Save your favorites easily and always have something to watch..</p>
        </div>
        <div className="sectionImage">
          <img src="  /assets/images/sectionImg2.svg"  />
        </div>
      </div>

      <div className="sectionItem1">
        <div className="sectionText">
          <h2>Watch everywhere.</h2>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV without paying more.
          </p>
        </div>
        <div className="sectionImage">
          <img src="  /assets/images/sectionImg3.svg"  />
        </div>
      </div>

      <div className="sectionItem2">
        <div className="sectionText">
          <h2>Create profiles for kids.</h2>
          <p>
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
        <div className="sectionImage">
          <img src="  /assets/images/sectionImg4.svg"  />
        </div>
      </div>
    </div>
  );
}

function Faqs() {
  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <ul className="accordion">
        <li>
          <input type="radio" name="accordion" id="first" />
          <label htmlFor="first">What is Netflix?</label>
          <div className="content">
            <p>
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more - on
              thousands of internet-connected devices.
              <br />
              <br />
              You can watch as much as you want, whenever you want, without a
              single ad - all for one low monthly price. There's always
              something new to discover, and new TV shows and movies are added
              every week!
            </p>
          </div>
        </li>

        <li>
          <input type="radio" name="accordion" id="second" />
          <label htmlFor="second">How much does Netflix cost?</label>
          <div className="content">
            <p>
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
            </p>
          </div>
        </li>

        <li>
          <input type="radio" name="accordion" id="third" />
          <label htmlFor="third">Where can I watch?</label>
          <div className="content">
            <p>
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players, and game consoles.
              <br />
              <br />
              You can also download your favourite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take Netflix with you
              anywhere.
            </p>
          </div>
        </li>

        <li>
          <input type="radio" name="accordion" id="fourth" />
          <label htmlFor="fourth">How do I cancel?</label>
          <div className="content">
            <p>
              Netflix is flexible. There are no annoying contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees - start or stop your
              account anytime.
            </p>
          </div>
        </li>

        <li>
          <input type="radio" name="accordion" id="fifth" />
          <label htmlFor="fifth">What can I watch on Netflix?</label>
          <div className="content">
            <p>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </p>
          </div>
        </li>

        <li>
          <input type="radio" name="accordion" id="sixth" />
          <label htmlFor="sixth">Is Netflix good for kids?</label>
          <div className="content">
            <p>
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              films in their own space.
              <br />
              <br />
              Kids profiles come with PIN-protected parental controls that let
              you restrict the maturity rating of content kids can watch and
              block specific titles you don't want kids to see.
            </p>
          </div>
        </li>
      </ul>
      <small>
        Ready to watch? Enter your email to create or restart your membership.
      </small>
      <form action="#" className="email-signup">
        <input type="email" placeholder="Email address" required />
        <button type="submit">
          Get Started <i className="fas fa-chevron-right"></i>
        </button>
      </form>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer__row__1">
        <h4>Questions? Call 000-800-040-1843</h4>
      </div>
      <div className="footer__row__2">
        <div className="column__1">
          <a href="/faq">
            <p>FAQ</p>
          </a>
          <a href="/investor-relations">
            <p>Investor Relations</p>
          </a>
          <a href="/privacy">
            <p>Privacy</p>
          </a>
          <a href="/speed-test">
            <p>Speed Test</p>
          </a>
        </div>
        <div className="column__2">
          <a href="/help-centre">
            <p>Help Centre</p>
          </a>
          <a href="/jobs">
            <p>Jobs</p>
          </a>
          <a href="/cookie-preferences">
            <p>Cookie Preferences</p>
          </a>
          <a href="/legal-notices">
            <p>Legal Notices</p>
          </a>
        </div>
        <div className="column__3">
          <a href="/account">
            <p>Account</p>
          </a>
          <a href="/ways-to-watch">
            <p>Ways to Watch</p>
          </a>
          <a href="/corporate-information">
            <p>Corporate Information</p>
          </a>
          <a href="/only-on-netflix">
            <p>Only on Netflix</p>
          </a>
        </div>
        <div className="column__4">
          <a href="/media-centre">
            <p>Media Centre</p>
          </a>
          <a href="/terms-of-use">
            <p>Terms of Use</p>
          </a>
          <a href="/contact-us">
            <p>Contact Us</p>
          </a>
        </div>
      </div>

      <div className="footer__row__3">
        <div className="dropdown__container">
          <i className="fas fa-globe"></i>
          <div className="language-menu">
            <div className="select-wrapper">
              <select className="select">
                <option selected="">English</option>
                <option value="-">-</option>
              </select>
            </div>
          </div>
        </div>
        <div className="footer__row__4">
          <p>Netflix India</p>
        </div>
      </div>
    </footer>
  );
}

export default App;
