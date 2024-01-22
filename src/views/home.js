import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import MeedoenCard from '../components/meedoen-card'
import TimetableRow1 from '../components/timetable-row1'
import TimetableRow0 from '../components/timetable-row0'
import TimetableRow4 from '../components/timetable-row4'
import TimetableClinic3 from '../components/timetable-clinic3'
import TimetableClinic4 from '../components/timetable-clinic4'
import TimetableClinic2 from '../components/timetable-clinic2'
import TimetableClinic5 from '../components/timetable-clinic5'
import MeetGreetCard from '../components/meet-greet-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Rotterdam Festival for Athletics</title>
        <meta
          name="description"
          content="Kom naar het Rotterdam Festival for Athletics en beleef atletiek zoals nooit tevoren!"
        />
        <meta property="og:title" content="Rotterdam Festival for Athletics" />
        <meta
          property="og:description"
          content="Kom naar het Rotterdam Festival for Athletics en beleef atletiek zoals nooit tevoren!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/dcef92aa-7134-4951-80f1-5e65d414d66b/f34e9a89-f8fc-4d78-a54a-c2451cf80675?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div>
        <div className="home-container02">
          <Script
            html={`<style>
    .section-title:before {
        position: absolute;
        content: '';
        left: 15px;
        bottom: 12px;
        width: 64px;
        height: 2px;
        background-color: var(--dl-color-primary-700);
    }

    .section-title:after {
        position: absolute;
        content: '';
        left: 0px;
        bottom: 2px;
        width: 64px;
        height: 2px;
        background-color: var(--dl-color-primary-700);
    }

    .section-title:before,
    .section-title:after {
        left: 50%;
        margin-left: -50px;
    }

    .section-title:after {
        margin-left: -30px;
    }

    .bg-blue .section-title:before,
    .bg-blue .section-title:after {
        background-color: var(--dl-color-gray-white);
    }

    .bg-green .section-title {
        color: var(--dl-color-primary-700);
        font-weight: 700;
    }
</style>`}
          ></Script>
        </div>
      </div>
      <section id="top" className="home-video">
        <video
          src="https://rffa.nl/assets/vid/RFFA-2023-Website-Background.mp4"
          loop
          muted
          poster="https://rffa.nl/assets/vid/RFFA-2023-Website-Background.webp"
          preload="auto"
          autoPlay
          playsInline
          className="home-video1"
        ></video>
        <div>
          <div className="home-container04">
            <Script
              html={`<style>
  .navbar-container .button {
    padding: 2px;
  }
</style>
`}
            ></Script>
          </div>
        </div>
        <div id="navbar-container" className="home-container05">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <Link to="/" className="home-navlink">
              <img
                alt="image"
                src="/rffa_logo_website.svg"
                className="home-branding"
              />
            </Link>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <a href="#festival" className="home-link navbar-button">
                  Festival
                </a>
                <a href="#meedoen" className="home-link01 navbar-button">
                  Meedoen
                </a>
                <a href="#tijdschema" className="home-link02 navbar-button">
                  Tijdschema
                </a>
                <a href="#meet-greet" className="home-link03 navbar-button">
                  Meet &amp; Greet
                </a>
                <a href="#meehelpen" className="home-link04 navbar-button">
                  Meehelpen
                </a>
              </nav>
              <div className="home-buttons">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-nav">
                <div className="home-top">
                  <img
                    alt="image"
                    src="/rffa_logo_website.svg"
                    className="home-logo"
                  />
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links1">
                  <a href="#festival" className="home-link05">
                    Festival
                  </a>
                  <a href="#meedoen" className="home-link06">
                    Meedoen
                  </a>
                  <a href="#tijdschema" className="home-link07">
                    Tijdschema
                  </a>
                  <a href="#meet-greet" className="home-link08">
                    Meet &amp; Greet
                  </a>
                  <a href="#meehelpen" className="home-link09">
                    Meehelpen
                  </a>
                </nav>
              </div>
              <div className="home-icon-group">
                <a
                  href="https://www.instagram.com/rffa_rotterdam/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon04"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/rffarotterdam/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="home-icon06"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </header>
        </div>
        <div>
          <div className="home-container07">
            <Script
              html={`<!-- Style for sticky navbar -->
<style>
  .navbar-scrolled {
    position: -webkit-fixed;
    position: fixed !important;
    animation: navbar-slide-down 1s both;
    background-color: var(--dl-color-primary-300);
  }
  .navbar-scrolled .home-branding {
    width: var(--dl-size-size-xlarge);
  }
  @media (max-width: 479px) {
    .navbar-scrolled .home-branding {
      width: var(--dl-size-size-large);
    }
  }

  @keyframes navbar-slide-down {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
      visibility: visible;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
</style>

<script>
  const nav = document.getElementById("navbar-container");
  const header = document.getElementById("top");
  const navHeight = nav.getBoundingClientRect().height;

  function updateNavColor(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      nav.classList.add("navbar-scrolled");
      nav.classList.remove("navbar-top");
    } else {
      nav.classList.add("navbar-top");
      nav.classList.remove("navbar-scrolled");
    }
  }

  const headerObserver = new IntersectionObserver(updateNavColor, {
    root: null,
    threshold: 0,
    rootMargin: \`-\${navHeight}px\`,
  });

  headerObserver.observe(header);
</script>
`}
            ></Script>
          </div>
        </div>
        <header data-thq="thq-navbar" className="home-navbar">
          <div data-thq="thq-burger-menu" className="home-burger-menu1">
            <div className="home-hamburger">
              <img alt="image" src="/hamburger.svg" className="home-icon08" />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu1">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-container08">
                <img
                  alt="image"
                  src="/rffa_logo_website.svg"
                  className="home-image"
                />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon09">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav2"
              >
                <span className="home-text">About</span>
                <span className="home-text01">Features</span>
                <span className="home-text02">Pricing</span>
                <span className="home-text03">Team</span>
                <span className="home-text04">Blog</span>
              </nav>
              <div className="home-container09">
                <button className="home-login1 button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home-icon-group1">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon11">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon13">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon15">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-hero-content">
          <div className="home-header-container">
            <div className="home-header">
              <h1 className="home-heading">
                <span className="home-text05">Beleef atletiek</span>
                <span className="home-text06">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text07">op het</span>
                <br className="home-text08"></br>
                <span className="home-text09">
                  Rotterdam Festival for Athletics
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div id="festival" className="home-festival bg-blue section">
        <div className="section-container">
          <section className="home-note">
            <h1 className="home-text10 section-title">
              <span>RFFA Staat weer in de startblokken</span>
              <br></br>
            </h1>
            <img alt="image" src="/foto2-600w.jpg" className="home-image1" />
            <p className="home-text13">
              <span className="home-text14">
                Atletiek, de moeder aller sporten, is in Rotterdam sterk
                vertegenwoordigd en dus een jaarlijks festival meer dan waard.
                Daarom willen de Rotterdamse atletiekverenigingen PAC en
                Rotterdam Atletiek (RA) in het Olympisch Jaar 2024 opnieuw het
                Rotterdam Festival for Athletics organiseren. De voorbereidingen
                voor deze unieke ontmoeting tussen top- en breedtesport zijn van
                start gegaan.
              </span>
              <br></br>
              <br></br>
              <span>
                Het is alweer de derde editie van het Rotterdam Festival for
                Athletics (RFFA), dat we in 2021 samen met de gemeente voor het
                eerst organiseerden. Onze ambitie? De atletieksport in
                Nederland, en dan vooral in Rotterdam, sterk op de kaart zetten.
                Want Rotterdam is een stad van sport en mobiliteit – iedereen
                moet in beweging komen en blijven. De atletiekverenigingen PAC
                en RA brengen wekelijks duizenden Rotterdammers in beweging.
                Atletiek is dan ook een sport voor iedereen en de basis voor
                vele andere sporten. Het aanbod is divers; je kunt rennen,
                springen en werpen, maar ook gezellig met anderen een stevige
                wandeling maken. Plezier en gezonde beweging voor alle
                Rotterdammers, ongeacht hun leeftijd of fysieke mogelijkheden,
                PAC en RA maken het mede mogelijk.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span className="Heading-Text">Rotterdams toptalent</span>
              <br></br>
              <span>
                De Rotterdamse atletiekverenigingen zijn sociaal en ambitieus.
                Nabij het Kralingse Bos ligt sinds vorig jaar een 8-baans
                atletiekbaan van internationale allure. Mede door de tomeloze
                inzet van veel trainers, onder wie voormalig olympisch atleten,
                zijn PAC en RA een kweekvijver voor toptalent. Ramsey Angela,
                Liemarvin Bonevacia, Churandy Martina en tal van andere
                topatleten hebben hun eerste atletiekstapjes in Rotterdam gezet.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span className="Heading-Text">Internationale sportstad…</span>
              <br></br>
              <span>
                De ambitie is het RFFA te laten uitgroeien tot een
                internationale wedstrijd waar Nederlandse topatleten zich kunnen
                meten met hun buitenlandse ‘collega’s’ op hoog niveau. Als datum
                voor de editie van 2024 mikken we op eind augustus/begin
                september. De exacte datum maken we zo snel mogelijk bekend. We
                gaan hierover nog in overleg met de Atletiekunie omdat het
                belangrijk is dat de datum past in de agenda van de Nederlandse
                topatleten. Na de Olympische Spelen willen we de afterparty van
                het atletiekseizoen zijn!
              </span>
              <br></br>
              <br></br>
            </p>
            <img alt="image" src="/foto1-600w.jpg" className="home-image2" />
            <p className="home-text30">
              <span className="Heading-Text">… voor iedereen!</span>
              <br></br>
              <span>
                Van deze party zal niet alleen de Nederlandse atletiektop
                genieten. Net als de vorige jaren gaan we een boeiend programma
                bieden voor iedereen die houdt van of nieuwsgierig is naar de
                atletieksport. Beginnende atleten kunnen ook ditmaal deelnemen
                aan een wedstrijd en/of een clinic met een toptrainer of
                topatleet. Hun ouders, overige familieleden en vrienden zijn van
                harte uitgenodigd om dit spektakel van dichtbij mee te maken.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span className="Heading-Text">Help je mee?</span>
              <br></br>
              <span>
                Er ligt kortom een prachtige atletiekdag in het verschiet, maar
                als Rotterdamse atletiekverenigingen kunnen we deze niet alleen
                organiseren. We zijn aangewezen op ondersteuning van externe
                partijen. Misschien wil je bij de voorbereiding en/of op de dag
                zelf een handje komen helpen? We zijn blij met iedereen die het
                organisatieteam komt versterken.
              </span>
              <br></br>
              <br></br>
              <span className="Heading-Text">Financiële ondersteuning</span>
              <br></br>
              <span>
                Ben je werkzaam voor of eigenaar van een bedrijf dat zijn naam
                graag met de atletieksport wil verbinden? Alle financiële steun
                is welkom. We bieden voor al onze sponsoren een VIP-pakket,
                inclusief training van medewerkers door topatleten aan. Ben je
                meer van de materiële ondersteuning of heb je een ander idee hoe
                je ons kunt helpen het Rotterdam Festival for Athletics te
                organiseren? Neem dan contact op met
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a href="mailto:hello@rffa.nl?subject=" className="home-link12">
                hello@rffa.nl
              </a>
              <br></br>
              <br></br>
            </p>
          </section>
        </div>
      </div>
      <div id="festival" className="home-festival1 bg-blue section">
        <div className="section-container">
          <section>
            <h1 className="home-text46 section-title">
              <span className="home-text47">9 september 2023</span>
              <br></br>
              <span className="home-text49">13:00 - 17:30</span>
              <br></br>
              <span>Sportcomplex Nenijto</span>
              <br></br>
            </h1>
            <p className="head-content">
              <span>
                Hét atletiekfeest van Rotterdam waarbij atletiek en de sfeer van
                een festival ultiem samenkomen.
              </span>
              <br></br>
              <br></br>
              <span>
                Doe zelf mee, kijk naar nationale topatleten en leer de fijne
                kneepjes van de beste trainers van het land!
              </span>
            </p>
          </section>
          <section className="home-statistics">
            <div className="home-content">
              <div className="home-stat">
                <h3 className="home-header1">Beleef</h3>
                <span className="home-caption">
                  <span>Strijd om een Cup, volg een clinic!</span>
                  <br></br>
                </span>
              </div>
              <div className="home-stat1">
                <h3 className="home-header2">Kijk</h3>
                <span className="home-caption1">
                  Nationale top, foto&apos;s en handtekening!
                </span>
              </div>
              <div className="home-stat2">
                <h3 className="home-header3">Geniet</h3>
                <span className="home-caption2">
                  Hapjes en drankjes op het middenveld!
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div id="meedoen" className="home-meedoen bg-green section">
        <div className="section-container">
          <h1 className="home-text60 section-title">ZELF MEEDOEN</h1>
          <div className="home-gallery">
            <MeedoenCard
              title="Strijd mee"
              imageAlt="sprint"
              imageSrc="/sprintcup.webp"
              description="Doe mee met de sprintCUP, runCUP, jumpCUP of throwCUP. Ontdek wie van jouw vrienden het beste is met 60 meter sprint, verspringen, 600 meter of kogelstoten."
              rootClassName="rootClassName"
            ></MeedoenCard>
            <MeedoenCard
              title="Atletiekclinics"
              imageAlt="clinic steeple"
              imageSrc="/clinic_4.webp"
              description="Krijg nieuwe technieken aangeleerd van toptrainers en talenten uit de atletiek. Er zijn 8 verschillende clinics verspreid over 4 blokken van 30 minuten."
              rootClassName="rootClassName1"
            ></MeedoenCard>
            <MeedoenCard
              title="Estafette"
              imageAlt="4x800m estafette"
              imageSrc="/estafette.webp"
              description="Schrijf je als team in voor de 4x800m estafette. Welk team komt na 8 rondes als eerst over de finishlijn?"
              rootClassName="rootClassName2"
            ></MeedoenCard>
          </div>
        </div>
      </div>
      <div id="tijdschema" className="home-tijdschema bg-blue section">
        <div className="section-container">
          <h2 className="section-title">TIJDSCHEMA (ONDER VOORBEHOUD)</h2>
          <div>
            <div className="home-container15">
              <Script
                html={`<style>
  .timetable-menu-button.active {
    color: var(--dl-color-primary-500);
    background-color: var(--dl-color-primary-300);
  }
</style>

<script>
  const buttons = document.querySelectorAll(".timetable-menu-button");
  const elements = document.querySelectorAll(".timetable");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to the clicked button
      button.classList.add("active");

      // Hide all elements
      elements.forEach((el) => {
        el.style.opacity = 0;
        setTimeout(() => {
          el.style.display = "none";
        }, 150);
      });

      // Show the clicked element with a delay
      setTimeout(() => {
        elements[index].style.opacity = 1;
        elements[index].style.display = "block";
      }, 150); // 150 milliseconds, matching the fade duration
    });
  });

  // Initialize by showing the first element on load
  elements[0].style.display = "block";
  elements[0].style.opacity = 1;
</script>
`}
              ></Script>
            </div>
          </div>
          <div className="home-container16">
            <div className="home-timetable-menu">
              <div className="home-container17">
                <div className="home-knop-1 timetable-menu-button active">
                  <h1 className="timetable-menu-title">Hoofdprogramma</h1>
                  <span className="timetable-menu-subtitle">
                    Met nationale topatleten
                  </span>
                </div>
                <div className="home-knop-2 timetable-menu-button">
                  <h1 className="timetable-menu-title">RFFA Cups</h1>
                  <span className="timetable-menu-subtitle">
                    Wedstrijden voor iedereen
                  </span>
                </div>
              </div>
              <div className="home-container18">
                <div className="home-knop-3 timetable-menu-button">
                  <h1 className="timetable-menu-title">RFFA Clinics</h1>
                  <span className="timetable-menu-subtitle">
                    Leer van topatleten
                  </span>
                </div>
                <div className="home-knop-4 timetable-menu-button">
                  <h1 className="timetable-menu-title">
                    Estafette &amp; Run2Day
                  </h1>
                  <span className="timetable-menu-subtitle">
                    4x800m &amp; 5000m
                  </span>
                </div>
              </div>
            </div>
            <div className="home-timetables">
              <div id="timetable-1" className="timetable">
                <TimetableRow1
                  time="13:15"
                  title="Hoogspringen"
                  linkUrl="https://www.atletiek.nu/wedstrijd/startlijst/653876/13/"
                  linkText="Mixed"
                  imageSrc="/events/hoog.svg"
                ></TimetableRow1>
                <TimetableRow1
                  time="13:45"
                  title="100 Meter Horden"
                  linkUrl="https://www.atletiek.nu/wedstrijd/startlijst/653879/50/"
                  linkText="Vrouwen"
                  imageSrc="/events/horden.svg"
                ></TimetableRow1>
                <TimetableRow1
                  time="14:00"
                  title="110 Meter Horden"
                  linkUrl="https://www.atletiek.nu/wedstrijd/startlijst/653873/51/"
                  linkText="Mannen"
                  imageSrc="/events/horden.svg"
                ></TimetableRow1>
                <TimetableRow1
                  time="14:15"
                  title="100 Meter"
                  linkUrl="https://www.atletiek.nu/wedstrijd/startlijst/653872/12/"
                  linkText="Mannen"
                ></TimetableRow1>
                <TimetableRow1
                  time="14:25"
                  title="Kogelstoten"
                  linkUrl="https://www.atletiek.nu/wedstrijd/startlijst/653881/2/"
                  linkText="Mixed"
                  imageSrc="/events/kogel.svg"
                ></TimetableRow1>
                <TimetableRow1
                  time="14:35"
                  title="100 Meter"
                  linkUrl="https://www.atletiek.nu/wedstrijd/startlijst/653878/12/"
                  linkText="Vrouwen"
                ></TimetableRow1>
                <TimetableRow1
                  time="14:40"
                  title="Polsstokhoogspringen"
                  linkUrl="https://www.atletiek.nu/wedstrijd/startlijst/653877/49/"
                  linkText="Mixed"
                  imageSrc="/events/pols.svg"
                ></TimetableRow1>
                <TimetableRow1
                  time="15:15"
                  title="300 Meter"
                  linkUrl="https://www.atletiek.nu/wedstrijd/startlijst/848975/67/"
                  linkText="Mixed"
                ></TimetableRow1>
                <TimetableRow1
                  time="16:10"
                  title="Zweedse Estafette"
                  linkUrl="https://www.atletiek.nu/wedstrijd/startlijst/653875/77/"
                  linkText="Mixed"
                  imageSrc="/events/estafette.svg"
                ></TimetableRow1>
                <TimetableRow0
                  time="16:30"
                  title="Prijsuitreiking"
                  imageSrc="/events/rffa_cup.svg"
                  rootClassName="timetable-row0-root-class-name"
                ></TimetableRow0>
              </div>
              <div id="timetable-2" className="timetable">
                <TimetableRow1
                  time="13:00"
                  title="RFFA sprintCUP (60m)"
                  linkUrl="https://www.atletiek.nu/wedstrijd/startlijst/848981/4169/"
                  linkText="Series"
                  imageSrc="/events/sprint.svg"
                  rootClassName="timetable-row1-root-class-name2"
                ></TimetableRow1>
                <TimetableRow1
                  time="13:10"
                  title="RFFA throwCUP (Kogel)"
                  linkUrl="https://www.atletiek.nu/wedstrijd/startlijst/848990/4171/"
                  linkText="Group A"
                  imageSrc="/events/kogel.svg"
                  rootClassName="timetable-row1-root-class-name5"
                ></TimetableRow1>
                <TimetableRow1
                  time="14:10"
                  title="RFFA jumpCUP (Ver)"
                  linkUrl="https://www.atletiek.nu/wedstrijd/startlijst/848988/4170/"
                  linkText="Group A"
                  imageSrc="/events/ver.svg"
                  rootClassName="timetable-row1-root-class-name"
                ></TimetableRow1>
                <TimetableRow1
                  time="14:45"
                  title="RFFA runCUP (600m)"
                  linkUrl="https://www.atletiek.nu/wedstrijd/startlijst/856417/4256/"
                  linkText="Group A"
                  imageSrc="/events/hardlopen.svg"
                  rootClassName="timetable-row1-root-class-name4"
                ></TimetableRow1>
                <TimetableRow4
                  time="15:25"
                  title="RFFA sprintCUP Finales (60m)"
                  imageSrc="/events/sprint.svg"
                  linkUrl1="https://www.atletiek.nu/wedstrijd/startlijst/848982/4172/"
                  linkUrl2="https://www.atletiek.nu/wedstrijd/startlijst/848983/4172/"
                  linkUrl3="https://www.atletiek.nu/wedstrijd/startlijst/848985/4172/"
                  linkUrl4="https://www.atletiek.nu/wedstrijd/startlijst/848986/4172/"
                  linkText1="Pupillen"
                  linkText2="U14/U16"
                  linkText3="U18/U20/SEN"
                  linkText4="Masters"
                  rootClassName="timetable-row4-root-class-name"
                ></TimetableRow4>
                <TimetableRow1
                  time="15:40"
                  title="RFFA jumpCUP (Ver)"
                  linkUrl="https://www.atletiek.nu/wedstrijd/startlijst/848984/4170/"
                  linkText="Group B"
                  imageSrc="/events/ver.svg"
                  rootClassName="timetable-row1-root-class-name1"
                ></TimetableRow1>
                <TimetableRow1
                  time="16:05"
                  title="RFFA throwCUP (Kogel)"
                  linkUrl="https://www.atletiek.nu/wedstrijd/startlijst/848991/4171/"
                  linkText="Group B"
                  imageSrc="/events/kogel.svg"
                  rootClassName="timetable-row1-root-class-name7"
                ></TimetableRow1>
                <TimetableRow1
                  time="16:20"
                  title="RFFA runCUP (600m)"
                  linkUrl="https://www.atletiek.nu/wedstrijd/startlijst/856418/4256/"
                  linkText="Group B"
                  imageSrc="/events/hardlopen.svg"
                  rootClassName="timetable-row1-root-class-name6"
                ></TimetableRow1>
                <TimetableRow0
                  time="16:30"
                  title="Prijsuitreiking"
                  imageSrc="/events/rffa_cup.svg"
                  rootClassName="timetable-row0-root-class-name1"
                ></TimetableRow0>
              </div>
              <div id="timetable-3" className="timetable">
                <TimetableClinic3
                  time="13:05"
                  by1="Nargelis Statia &amp; Gioganny Gaarie"
                  by2="Joris van Gool &amp; Maurice Afognon"
                  by3="Morgann de Jong &amp; Valéria Montijn"
                  by4=" "
                  title="RFFA Clinics ronde #1"
                  url1="https://www.atletiek.nu/wedstrijd/startgroep/856405/"
                  url2="https://www.atletiek.nu/wedstrijd/startgroep/860876/"
                  url3="https://www.atletiek.nu/wedstrijd/startgroep/860877/"
                  url4=" "
                  name1="Bootcamp"
                  name2="Estafette"
                  name3="Hurdles"
                  name4=" "
                  imageAlt="Clinic"
                  imageSrc="/events/rffa_clinic.svg"
                  rootClassName="timetable-clinic3-root-class-name"
                ></TimetableClinic3>
                <TimetableClinic4
                  time="14:05"
                  by1="Wuill Vrolijk &amp; Marijn de Wit"
                  by2="Zoë Sedney"
                  by3="Valéria Montijn"
                  by4="Luna Pedemonte"
                  title="RFFA Clinics ronde #2"
                  url1="https://www.atletiek.nu/wedstrijd/startgroep/856403/"
                  url2="https://www.atletiek.nu/wedstrijd/startgroep/856409/"
                  url3="https://www.atletiek.nu/wedstrijd/startgroep/856407/"
                  url4="https://www.atletiek.nu/wedstrijd/startgroep/856411/"
                  name1="High Jump"
                  name2="Hurdles"
                  name3="Sprint"
                  name4="Throw (13:40)"
                  imageAlt="Clinic"
                  imageSrc="/events/rffa_clinic.svg"
                  rootClassName="timetable-clinic4-root-class-name"
                ></TimetableClinic4>
                <TimetableClinic2
                  time="15:05"
                  by1="Damian Felter"
                  by2="Jacqueline Goormachtigh"
                  title="RFFA Clinics ronde #3"
                  url1="https://www.atletiek.nu/wedstrijd/startgroep/856402/"
                  url2="https://www.atletiek.nu/wedstrijd/startgroep/856412/"
                  name1="Long Jump"
                  name2="Throw"
                  imageAlt="Clinic"
                  imageSrc="/events/rffa_clinic.svg"
                  rootClassName="timetable-clinic2-root-class-name"
                ></TimetableClinic2>
                <TimetableClinic5
                  time="16:05"
                  by1="Zoë Sedney"
                  by2="Ridzerd Punt"
                  by3="Dudley Boeldak"
                  by4="Britt de Blaauw"
                  by5="Carla Ophorst"
                  title="RFFA Clinics ronde #4"
                  url1="https://www.atletiek.nu/wedstrijd/startgroep/856414/"
                  url2="https://www.atletiek.nu/wedstrijd/startgroep/856404/"
                  url3="https://www.atletiek.nu/wedstrijd/startgroep/856401/"
                  url4="https://www.atletiek.nu/wedstrijd/startgroep/856408/"
                  url5="https://www.atletiek.nu/wedstrijd/startgroep/856416/"
                  name1="Estafette"
                  name2="High Jump"
                  name3="Long Jump"
                  name4="Sprint"
                  name5="Run"
                  imageAlt="Clinic"
                  imageSrc="/events/rffa_clinic.svg"
                  rootClassName="timetable-clinic5-root-class-name"
                ></TimetableClinic5>
              </div>
              <div id="timetable-4" className="timetable">
                <TimetableRow1
                  time="16:40"
                  title="4 x 800m"
                  linkUrl="https://www.atletiek.nu/wedstrijd/startlijst/858446/128/"
                  linkText="Teams"
                  imageSrc="/events/estafette.svg"
                  rootClassName="timetable-row1-root-class-name8"
                ></TimetableRow1>
                <TimetableRow1
                  time="17:00"
                  title="5000m Finale Run2Day Baancircuit 2023"
                  linkUrl="https://www.atletiek.nu/wedstrijd/startlijst/848980/4216/"
                  linkText="Mixed"
                  imageSrc="/events/hardlopen.svg"
                  rootClassName="timetable-row1-root-class-name9"
                ></TimetableRow1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="meet-greet" className="home-meet-greet bg-green section">
        <div className="section-container">
          <h1 className="home-text70 section-title">Meet &amp; Greet</h1>
          <div className="home-gallery1">
            <MeetGreetCard
              title="Liemarvin Bonevacia"
              imageAlt="Liemarvin Bonevacia"
              imageSrc="/athletes/bonevacia1-1500w.jpg"
              description="400m"
              rootClassName="meet-greet-card-root-class-name15"
            ></MeetGreetCard>
            <MeetGreetCard
              title="Ramsey Angela"
              imageAlt="Ramsey Angela"
              imageSrc="/athletes/angela-1500w.jpg"
              description="400m horden, 400m"
              rootClassName="meet-greet-card-root-class-name16"
            ></MeetGreetCard>
            <MeetGreetCard
              title="Isayah Boers"
              imageAlt="Isayah Boers"
              imageSrc="/athletes/boers-1500w.jpg"
              description="400m"
              rootClassName="meet-greet-card-root-class-name6"
            ></MeetGreetCard>
            <MeetGreetCard
              title="Churandy Martina"
              imageAlt="Churandy Martina"
              imageSrc="/athletes/martina-1500w.jpg"
              description="100m, 200m"
              rootClassName="meet-greet-card-root-class-name5"
            ></MeetGreetCard>
            <MeetGreetCard
              title="Lisanne de Witte"
              imageAlt="Lisanne de Witte"
              imageSrc="/athletes/dewitte-1500w.jpg"
              description="400m"
              rootClassName="meet-greet-card-root-class-name17"
            ></MeetGreetCard>
            <MeetGreetCard
              title="Isaya Klein Ikkink"
              imageAlt="Isaya Klein Ikkink"
              imageSrc="/athletes/kleinikkink-1500w.jpg"
              description="110m horden, 400m"
              rootClassName="meet-greet-card-root-class-name8"
            ></MeetGreetCard>
            <MeetGreetCard
              title="Sven Poelmann"
              imageAlt="Sven Poelmann"
              imageSrc="/athletes/poelmann-1500w.jpg"
              description="Kogelstoten"
              rootClassName="meet-greet-card-root-class-name7"
            ></MeetGreetCard>
            <MeetGreetCard
              title="Zoë Sedney"
              imageAlt="Zoë Sedney"
              imageSrc="/athletes/sedney-1500w.jpg"
              description="100m, 100m horden, 400m"
              rootClassName="meet-greet-card-root-class-name9"
            ></MeetGreetCard>
            <MeetGreetCard
              title="Taymir Burnet"
              imageAlt="Taymir Burnet"
              imageSrc="/athletes/burnet-1500w.jpg"
              description="100m, 200m"
              rootClassName="meet-greet-card-root-class-name4"
            ></MeetGreetCard>
            <MeetGreetCard
              title="Hensley Paulina"
              imageAlt="Hensley Paulina"
              imageSrc="/athletes/paulina-1500w.jpg"
              description="100m, 200m"
              rootClassName="meet-greet-card-root-class-name3"
            ></MeetGreetCard>
            <MeetGreetCard
              title="Ridzerd Punt"
              imageAlt="Ridzerd Punt"
              imageSrc="/athletes/punt-1500w.jpg"
              description="Hoogspringen"
              rootClassName="meet-greet-card-root-class-name10"
            ></MeetGreetCard>
            <MeetGreetCard
              title="Britt De Blaauw"
              imageAlt="Britt De Blaauw"
              imageSrc="/athletes/deblaauw-1500w.jpg"
              description="400m"
              rootClassName="meet-greet-card-root-class-name11"
            ></MeetGreetCard>
            <MeetGreetCard
              title="Sam Kranse"
              imageAlt="Sam Kranse"
              imageSrc="/athletes/kranse-1500w.jpg"
              description="Polsstokhoogspringen"
              rootClassName="meet-greet-card-root-class-name12"
            ></MeetGreetCard>
            <MeetGreetCard
              title="Koen van der Wijst"
              imageAlt="Koen van der Wijst"
              imageSrc="/athletes/vanderwijst-1500w.jpg"
              description="Polsstokhoogspringen"
              rootClassName="meet-greet-card-root-class-name13"
            ></MeetGreetCard>
            <MeetGreetCard
              title="Jozuah Revierre"
              imageAlt="Jozuah Revierre"
              imageSrc="/athletes/revierre-1500w.jpg"
              description="100m, 200m"
              rootClassName="meet-greet-card-root-class-name14"
            ></MeetGreetCard>
            <MeetGreetCard
              title="Daan Hoomoedt"
              imageAlt="Daan Hoomoedt"
              imageSrc="/athletes/hoomoedt-1500w.jpg"
              description="Hink-stapspringen"
              rootClassName="meet-greet-card-root-class-name"
            ></MeetGreetCard>
            <MeetGreetCard
              title="Joris van Gool"
              imageAlt="Joris van Gool"
              imageSrc="/athletes/vangool-1500w.jpg"
              description="100m, 200m"
              rootClassName="meet-greet-card-root-class-name2"
            ></MeetGreetCard>
            <MeetGreetCard
              title="Maurice Afognon"
              imageAlt="Maurice Afognon"
              imageSrc="/athletes/afognon-1500w.jpg"
              description="100m, 200m"
              rootClassName="meet-greet-card-root-class-name1"
            ></MeetGreetCard>
          </div>
        </div>
      </div>
      <section
        id="meehelpen"
        className="home-vrijwilligersformulier bg-blue section"
      >
        <div className="section-container">
          <h2 className="home-heading1 section-title">Meehelpen</h2>
          <img
            alt="image"
            src="/jury.webp"
            loading="lazy"
            className="home-image3"
          />
          <div className="home-container21">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdnJjYTOCFjt-RaE2ZVklgpf5a1C7eCsnynX_MOnzpN-ib48A/viewform?embedded=true"
              frameborder="0"
              marginwidth="0"
              marginheight="0"
              className="home-iframe"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="home-faq bg-green section">
        <div className="section-container">
          <div className="home-header4">
            <h2 className="home-heading2 section-title">
              Veel gestelde vragen
            </h2>
          </div>
          <div className="home-content1">
            <div className="home-column">
              <div className="home-element">
                <h3 className="home-header5">Kan ik me al inschrijven?</h3>
                <p className="home-content2">
                  <span>
                    Stay tuned! Binnenkort komt op deze website meer informatie.
                    Volg ons ook op
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://www.instagram.com/rffa_rotterdam/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link13"
                  >
                    Instagram
                  </a>
                  <span>
                    , en
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://www.facebook.com/rffarotterdam/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link14"
                  >
                    Facebook
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </a>
                  <span>om niks te missen!</span>
                </p>
              </div>
              <div className="home-element1">
                <h3 className="home-header6">
                  Welke topsporters komen er naar het RFFA?
                </h3>
                <p className="home-content3">
                  <span>
                    Dat is nog een verrassing! Hou onze
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://www.instagram.com/rffa_rotterdam/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link15"
                  >
                    Instagram
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </a>
                  <span>in de gaten om als eerste op de hoogte te zijn.</span>
                </p>
              </div>
              <div className="home-element2">
                <h3 className="home-header7">Welke onderdelen kan ik doen?</h3>
                <p className="home-content4">
                  We zijn druk aan het plannen hoe we zo veel mogelijk aan
                  kunnen bieden aan zoveel mogelijk deelnemers. Sowieso zal je
                  kunnen strijden in de Sprintcup (sprint), Werpcup
                  (kogelstoten) of Springcup (verspringen).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div>
          <div className="home-container24">
            <Script
              html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
            ></Script>
          </div>
        </div>
        <footer className="home-footer1">
          <div className="home-container25">
            <img
              alt="image"
              src="/rffa_logo_website.svg"
              className="home-image4"
            />
            <span className="home-text76">
              Het Rotterdam Festival for Athletics is een initiatief voor een
              jaarlijks atletiekfeest van PAC Rotterdam en Rotterdam Atletiek.
            </span>
          </div>
          <div className="home-column1">
            <span className="home-header8">Contact</span>
            <div className="home-list">
              <a
                href="mailto:organisation@rffa.nl?subject=Vraag RFFA 2023"
                className="home-link16"
              >
                <div className="home-container26">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="home-icon17 footer-icon"
                  >
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <span className="home-text77">organisation@rffa.nl</span>
                </div>
              </a>
              <a
                href="https://www.instagram.com/rffa_rotterdam/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link17"
              >
                <div className="home-container27">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon19 footer-icon"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <span className="home-text78">Instagram</span>
                </div>
              </a>
              <a
                href="https://www.facebook.com/rffarotterdam/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link18"
              >
                <div className="home-container28">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon21 footer-icon"
                  >
                    <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                  </svg>
                  <span className="home-text79">Facebook</span>
                </div>
              </a>
            </div>
          </div>
          <a href="#top" data-role="scroll-top" className="home-link19 button">
            <img alt="image" src="/arrow.svg" className="home-image5" />
          </a>
        </footer>
        <span className="home-text80">
          © 2023 Rotterdam Festival for Athletics - All rights reserved
        </span>
      </div>
    </div>
  )
}

export default Home
