import React from 'react'
import Head from 'next/head'

import NavigationLinks5 from '../components/navigation-links5'

const LOGN = (props) => {
  return (
    <>
      <div className="logn-container">
        <Head>
          <title>LOGN - exported project</title>
          <meta property="og:title" content="LOGN - exported project" />
        </Head>
        <header data-role="Header" className="logn-header">
          <img
            alt="logo"
            src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
            className="logn-image"
          />
          <div className="logn-nav">
            <NavigationLinks5 rootClassName="rootClassName10"></NavigationLinks5>
          </div>
          <div className="logn-btn-group">
            <button className="logn-login button">Login</button>
            <button className="button">Register</button>
          </div>
          <div data-role="BurgerMenu" className="logn-burger-menu">
            <svg viewBox="0 0 1024 1024" className="logn-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="logn-mobile-menu">
            <div className="logn-nav1">
              <div className="logn-container1">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="logn-image1"
                />
                <div data-role="CloseMobileMenu" className="logn-menu-close">
                  <svg viewBox="0 0 1024 1024" className="logn-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks5 rootClassName="rootClassName11"></NavigationLinks5>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="logn-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="logn-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="logn-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="logn-pricing">
          <div className="logn-container2">
            <div className="logn-pricing-card">
              <span className="logn-text">Free</span>
              <div className="logn-container3">
                <span className="logn-text01">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="logn-text04">0</span>
              </div>
              <div className="logn-container4">
                <span className="logn-text05">
                  <span>✔ Full access to design tool</span>
                </span>
                <span className="logn-text07">
                  <span>✔ Publish with Teleport</span>
                </span>
                <span className="logn-text09">
                  <span>✔ Subdomain publish</span>
                </span>
                <span className="logn-text11">
                  <span>✔ Download code</span>
                </span>
              </div>
              <button className="logn-button button">Learn More</button>
            </div>
            <div className="logn-pricing-card1">
              <span className="logn-text13">basic</span>
              <div className="logn-container5">
                <span className="logn-text14">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="logn-text17">9</span>
                <span className="logn-text18">
                  <span>/ monthly</span>
                </span>
              </div>
              <span className="logn-text20">
                <span>Billed annualy or $12 month-to-month.</span>
                <span></span>
              </span>
              <div className="logn-container6">
                <span className="logn-text23">
                  <span>✔ All features of FREE plan</span>
                </span>
                <span className="logn-text25">
                  <span>✔ Connect to custom domains</span>
                </span>
                <span className="logn-text27">
                  <span>✔ Private projects</span>
                </span>
                <span className="logn-text29">
                  <span>✔ No project limitations</span>
                </span>
                <span className="logn-text31">
                  <span>✔ Unlimited collabotators</span>
                </span>
              </div>
              <button className="logn-button1 button">Learn More</button>
            </div>
            <div className="logn-pricing-card2">
              <span className="logn-text33">Pro</span>
              <div className="logn-container7">
                <span className="logn-text34">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="logn-text37">29</span>
                <span className="logn-text38">
                  <span>/ monthly</span>
                </span>
              </div>
              <span className="logn-text40">
                <span>Billed annualy or $32 month-to-month.</span>
                <span></span>
              </span>
              <div className="logn-container8">
                <span className="logn-text43">
                  <span>✔ All features of BASIC plan</span>
                </span>
                <span className="logn-text45">
                  <span>✔ Priority support</span>
                </span>
                <span className="logn-text47">
                  <span>✔ Premium analytics</span>
                </span>
                <span className="logn-text49">
                  <span>✔ Version history</span>
                </span>
              </div>
              <button className="logn-button2 button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .logn-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .logn-header {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .logn-image {
            height: 2rem;
          }
          .logn-nav {
            display: flex;
          }
          .logn-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .logn-login {
            border-width: 0px;
            margin-right: var(--dl-space-space-twounits);
          }
          .logn-burger-menu {
            display: none;
          }
          .logn-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .logn-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .logn-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .logn-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .logn-image1 {
            height: 2rem;
          }
          .logn-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .logn-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .logn-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .logn-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .logn-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .logn-pricing {
            width: 100%;
            display: flex;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxzd2lzcyUyMGNoZWVzZSUyMHBsYW50fGVufDB8fHx8MTYyNTg0MTU0Mg&ixlib=rb-1.2.1&h=1200');
            background-position: center;
          }
          .logn-container2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            background-size: cover;
            justify-content: center;
          }
          .logn-pricing-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 450px;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .logn-pricing-card:hover {
            transform: scale(1.02);
          }
          .logn-text {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .logn-container3 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .logn-text01 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .logn-text04 {
            font-size: 4rem;
            font-weight: 700;
          }
          .logn-container4 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .logn-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .logn-text07 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .logn-text09 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .logn-text11 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .logn-button {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .logn-pricing-card1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 450px;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .logn-pricing-card1:hover {
            transform: scale(1.02);
          }
          .logn-text13 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .logn-container5 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .logn-text14 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .logn-text17 {
            font-size: 4rem;
            font-weight: 700;
          }
          .logn-text18 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .logn-text20 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .logn-container6 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .logn-text23 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .logn-text25 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .logn-text27 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .logn-text29 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .logn-text31 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .logn-button1 {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .logn-pricing-card2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 450px;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-white);
          }
          .logn-pricing-card2:hover {
            transform: scale(1.02);
          }
          .logn-text33 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .logn-container7 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
          }
          .logn-text34 {
            font-size: 1.15rem;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .logn-text37 {
            font-size: 4rem;
            font-weight: 700;
          }
          .logn-text38 {
            font-size: 1.15rem;
            font-style: normal;
            margin-top: var(--dl-space-space-twounits);
            font-weight: 300;
          }
          .logn-text40 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .logn-container8 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .logn-text43 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .logn-text45 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .logn-text47 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .logn-text49 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .logn-button2 {
            color: var(--dl-color-gray-white);
            margin-top: auto;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          @media (max-width: 991px) {
            .logn-pricing-card {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              max-width: 100%;
              align-items: center;
            }
            .logn-pricing-card1 {
              width: 100%;
              max-width: 100%;
              align-items: center;
            }
            .logn-pricing-card2 {
              width: 100%;
              max-width: 100%;
              align-items: center;
            }
          }
          @media (max-width: 767px) {
            .logn-header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .logn-nav {
              display: none;
            }
            .logn-btn-group {
              display: none;
            }
            .logn-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .logn-container2 {
              flex-flow: column;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .logn-pricing-card {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .logn-pricing-card1 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .logn-pricing-card2 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .logn-header {
              padding: var(--dl-space-space-unit);
            }
            .logn-mobile-menu {
              padding: 16px;
            }
            .logn-container2 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .logn-pricing-card2 {
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default LOGN
