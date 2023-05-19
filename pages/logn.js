import React from 'react'
import Head from 'next/head'

const LOGN = (props) => {
  return (
    <>
      <div className="logn-container">
        <Head>
          <title>LOGN - exported project</title>
          <meta property="og:title" content="LOGN - exported project" />
        </Head>
        <div className="logn-pricing">
          <div className="logn-container1">
            <div className="logn-pricing-card">
              <span className="logn-text">Free</span>
              <div className="logn-container2">
                <span className="logn-text01">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="logn-text04">0</span>
              </div>
              <div className="logn-container3">
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
              <div className="logn-container4">
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
              <div className="logn-container5">
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
              <div className="logn-container6">
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
              <div className="logn-container7">
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
          .logn-pricing {
            width: 100%;
            display: flex;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxzd2lzcyUyMGNoZWVzZSUyMHBsYW50fGVufDB8fHx8MTYyNTg0MTU0Mg&ixlib=rb-1.2.1&h=1200');
            background-position: center;
          }
          .logn-container1 {
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
          .logn-container2 {
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
          .logn-container3 {
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
          .logn-container4 {
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
          .logn-container5 {
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
          .logn-container6 {
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
          .logn-container7 {
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
            .logn-container1 {
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
            .logn-container1 {
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
