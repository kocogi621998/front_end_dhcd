import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const BauHDQT = (props) => {
  return (
    <>
      <div className="bau-hdqt-container">
        <Head>
          <title>Bau-HDQT - exported project</title>
          <meta property="og:title" content="Bau-HDQT - exported project" />
        </Head>
        <header data-thq="thq-navbar" className="bau-hdqt-navbar-interactive">
          <Image
            alt="logo"
            src="/playground_assets/logo-hsg-200h.png"
            className="bau-hdqt-logo"
            width={105}
            height={105}
          />
          <div
            data-role="Nav"
            data-thq="thq-navbar-nav"
            className="bau-hdqt-desktop-menu"
          >
            <nav
              data-role="Nav"
              data-thq="thq-navbar-nav-links"
              className="bau-hdqt-nav"
            >
              <Link href="/bau-hdqt">
                <a className="bau-hdqt-link">Bầu HĐQT</a>
              </Link>
              <Link href="/bau-bks">
                <a className="bau-hdqt-link01">Bầu BKS</a>
              </Link>
              <Link href="/bieu-quyet">
                <a className="bau-hdqt-link02">Biểu Quyết</a>
              </Link>
              <Link href="/ket-qua">
                <a className="bau-hdqt-link03">Kết Quả</a>
              </Link>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="bau-hdqt-btn-group">
            <Link href="/logn">
              <a className="bau-hdqt-link04 button">Đăng Nhập</a>
            </Link>
          </div>
          <div data-thq="thq-burger-menu" className="bau-hdqt-burger-menu">
            <svg viewBox="0 0 1024 1024" className="bau-hdqt-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="bau-hdqt-mobile-menu">
            <div
              data-role="Nav"
              data-thq="thq-mobile-menu-nav"
              className="bau-hdqt-nav1"
            >
              <div className="bau-hdqt-container01">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="bau-hdqt-image"
                />
                <div data-thq="thq-close-menu" className="bau-hdqt-menu-close">
                  <svg viewBox="0 0 1024 1024" className="bau-hdqt-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-role="Nav"
                data-thq="thq-mobile-menu-nav-links"
                className="bau-hdqt-nav2"
              >
                <span className="bau-hdqt-text">Bầu HĐQT</span>
                <span className="bau-hdqt-text01">Bầu BKS</span>
                <span className="bau-hdqt-text02">Biểu Quyết</span>
                <span className="bau-hdqt-text03">Kết Quả</span>
              </nav>
              <div className="bau-hdqt-container02">
                <button className="bau-hdqt-login1 button">Đăng Nhập</button>
              </div>
            </div>
            <div className="bau-hdqt-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="bau-hdqt-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="bau-hdqt-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="bau-hdqt-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="bau-hdqt-pricing">
          <div className="bau-hdqt-container03">
            <div className="bau-hdqt-pricing-card">
              <span className="bau-hdqt-text04">BẦU BAN KIỂM SOÁT</span>
              <div className="bau-hdqt-container04">
                <div className="bau-hdqt-container05">
                  <input type="checkbox" checked="true" />
                  <label className="bau-hdqt-text05">Chia đều</label>
                  <label className="bau-hdqt-text06">Số cổ phần:</label>
                  <span>0</span>
                </div>
                <div className="bau-hdqt-container06">
                  <form className="bau-hdqt-form">
                    <label>1.</label>
                  </form>
                  <form className="bau-hdqt-form1">
                    <span>ứng cử viên 1</span>
                  </form>
                  <form className="bau-hdqt-form2">
                    <input type="text" className="bau-hdqt-textinput input" />
                  </form>
                </div>
                <div className="bau-hdqt-container07">
                  <form className="bau-hdqt-form3">
                    <label>2.</label>
                  </form>
                  <form className="bau-hdqt-form4">
                    <span>ứng cử viên 1</span>
                  </form>
                  <form className="bau-hdqt-form5">
                    <input type="text" className="bau-hdqt-textinput1 input" />
                  </form>
                </div>
                <div className="bau-hdqt-container08">
                  <form className="bau-hdqt-form6">
                    <label>3.</label>
                  </form>
                  <form className="bau-hdqt-form7">
                    <span>ứng cử viên 1</span>
                  </form>
                  <form className="bau-hdqt-form8">
                    <input type="text" className="bau-hdqt-textinput2 input" />
                  </form>
                </div>
              </div>
              <button type="submit" className="bau-hdqt-button button">
                Bầu cử
              </button>
            </div>
          </div>
        </div>
        <footer className="bau-hdqt-footer">
          <div className="bau-hdqt-container09">
            <div className="bau-hdqt-logo1">
              <Image
                alt="logo"
                src="/playground_assets/logo-hsg-200h.png"
                className="bau-hdqt-image1"
                width={84}
                height={84}
              />
              <span className="bau-hdqt-text14">
                <span>Công ty cổ phần Tập Đoàn Hoa Sen</span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="bau-hdqt-links-container">
              <div className="bau-hdqt-container10">
                <div className="bau-hdqt-product-container">
                  <span className="bau-hdqt-text18">TRANG</span>
                  <Link href="/bau-hdqt">
                    <a className="bau-hdqt-link05">Bầu HĐQT</a>
                  </Link>
                  <Link href="/bau-bks">
                    <a className="bau-hdqt-link06">Bầu BKS</a>
                  </Link>
                  <Link href="/bieu-quyet">
                    <a className="bau-hdqt-link07">Biểu quyết</a>
                  </Link>
                  <Link href="/ket-qua">
                    <a className="bau-hdqt-link08">Kết quả</a>
                  </Link>
                </div>
                <div className="bau-hdqt-company-container">
                  <span className="bau-hdqt-text19">LIÊN KẾT</span>
                  <a
                    href="https://nhuahoasen.vn/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="bau-hdqt-link09"
                  >
                    Nhựa hoa sen
                  </a>
                  <a
                    href="https://hoasenhome.vn/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="bau-hdqt-link10"
                  >
                    Việt Nam Steel
                  </a>
                  <a
                    href="https://hoasenhome.vn/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="bau-hdqt-link11"
                  >
                    Hoa sen Home
                  </a>
                </div>
              </div>
              <div className="bau-hdqt-container11">
                <div className="bau-hdqt-contact">
                  <span className="bau-hdqt-text20">LIÊN HỆ</span>
                  <span className="bau-hdqt-text21">cskh@hoasengroup.vn</span>
                  <span>(028) 39990 111</span>
                </div>
                <div className="bau-hdqt-socials">
                  <span className="bau-hdqt-text23">THEO DÕI</span>
                  <div className="bau-hdqt-icon-group1">
                    <a
                      href="https://www.youtube.com/@CongtyCPTapdoanHoaSen"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="bau-hdqt-link12"
                    >
                      <svg viewBox="0 0 1024 1024" className="bau-hdqt-icon10">
                        <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://zalo.me/2867298229687548991"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="bau-hdqt-link13"
                    >
                      <img
                        alt="image"
                        src="/playground_assets/icons8-zalo-50-200h.png"
                        className="bau-hdqt-image2"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/hoasengroup.vn"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="bau-hdqt-link14"
                    >
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="bau-hdqt-icon12"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.tiktok.com/@hoasenhome.vn"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="bau-hdqt-link15"
                    >
                      <img
                        alt="image"
                        src="/playground_assets/tik-tok-200h.png"
                        className="bau-hdqt-image3"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bau-hdqt-separator"></div>
          <span className="bau-hdqt-text24">
            © 2023 HOA SEN GROUP, All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .bau-hdqt-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .bau-hdqt-navbar-interactive {
            width: 100%;
            display: flex;
            position: relative;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .bau-hdqt-logo {
            width: 105px;
            height: 105px;
          }
          .bau-hdqt-desktop-menu {
            display: flex;
          }
          .bau-hdqt-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .bau-hdqt-link {
            font-size: 20px;
            text-decoration: none;
          }
          .bau-hdqt-link01 {
            font-size: 20px;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .bau-hdqt-link02 {
            font-size: 20px;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .bau-hdqt-link03 {
            font-size: 20px;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .bau-hdqt-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .bau-hdqt-link04 {
            font-size: 20px;
            border-width: 0px;
            text-decoration: none;
          }
          .bau-hdqt-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .bau-hdqt-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .bau-hdqt-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .bau-hdqt-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .bau-hdqt-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .bau-hdqt-image {
            height: 2rem;
          }
          .bau-hdqt-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-hdqt-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .bau-hdqt-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .bau-hdqt-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .bau-hdqt-text01 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .bau-hdqt-text02 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .bau-hdqt-text03 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .bau-hdqt-container02 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .bau-hdqt-login1 {
            margin-right: var(--dl-space-space-twounits);
          }
          .bau-hdqt-icon-group {
            display: flex;
          }
          .bau-hdqt-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .bau-hdqt-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .bau-hdqt-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .bau-hdqt-pricing {
            width: 1398px;
            display: flex;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxzd2lzcyUyMGNoZWVzZSUyMHBsYW50fGVufDB8fHx8MTYyNTg0MTU0Mg&ixlib=rb-1.2.1&w=1500');
            background-position: center;
          }
          .bau-hdqt-container03 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            background-size: cover;
            justify-content: center;
          }
          .bau-hdqt-pricing-card {
            width: 797px;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 100%;
            min-height: 450px;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: 32px;
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
          }
          .bau-hdqt-pricing-card:hover {
            transform: scale(1.02);
          }
          .bau-hdqt-text04 {
            font-size: 1.5rem;
            align-self: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .bau-hdqt-container04 {
            width: 100%;
            height: 343px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .bau-hdqt-container05 {
            width: 100%;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-hdqt-text05 {
            margin-left: var(--dl-space-space-halfunit);
          }
          .bau-hdqt-text06 {
            margin-left: var(--dl-space-space-threeunits);
          }
          .bau-hdqt-container06 {
            width: 100%;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-hdqt-form {
            width: 18px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-hdqt-form1 {
            width: 200px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-hdqt-form2 {
            width: 200px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-hdqt-textinput {
            width: 193px;
          }
          .bau-hdqt-container07 {
            width: 100%;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-hdqt-form3 {
            width: 18px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-hdqt-form4 {
            width: 200px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-hdqt-form5 {
            width: 200px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-hdqt-textinput1 {
            width: 193px;
          }
          .bau-hdqt-container08 {
            width: 100%;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-hdqt-form6 {
            width: 18px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-hdqt-form7 {
            width: 200px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-hdqt-form8 {
            width: 200px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-hdqt-textinput2 {
            width: 193px;
          }
          .bau-hdqt-button {
            align-self: center;
            margin-top: var(--dl-space-space-unit);
          }
          .bau-hdqt-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .bau-hdqt-container09 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .bau-hdqt-logo1 {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .bau-hdqt-image1 {
            width: 84px;
            height: 84px;
          }
          .bau-hdqt-text14 {
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .bau-hdqt-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .bau-hdqt-container10 {
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .bau-hdqt-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: column;
            justify-content: flex-start;
          }
          .bau-hdqt-text18 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .bau-hdqt-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bau-hdqt-link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bau-hdqt-link07 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bau-hdqt-link08 {
            text-decoration: none;
          }
          .bau-hdqt-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .bau-hdqt-text19 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .bau-hdqt-link09 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bau-hdqt-link10 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bau-hdqt-link11 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bau-hdqt-container11 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .bau-hdqt-contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .bau-hdqt-text20 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .bau-hdqt-text21 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .bau-hdqt-socials {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .bau-hdqt-text23 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .bau-hdqt-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .bau-hdqt-link12 {
            display: contents;
          }
          .bau-hdqt-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bau-hdqt-link13 {
            display: contents;
          }
          .bau-hdqt-image2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bau-hdqt-link14 {
            display: contents;
          }
          .bau-hdqt-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bau-hdqt-link15 {
            display: contents;
          }
          .bau-hdqt-image3 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            object-fit: cover;
            text-decoration: none;
          }
          .bau-hdqt-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .bau-hdqt-text24 {
            align-self: center;
          }
          @media (max-width: 1200px) {
            .bau-hdqt-pricing {
              width: 100%;
            }
            .bau-hdqt-pricing-card {
              max-width: 100%;
            }
          }
          @media (max-width: 991px) {
            .bau-hdqt-pricing {
              width: 100%;
            }
            .bau-hdqt-pricing-card {
              width: 100%;
              max-width: 100%;
              align-items: center;
            }
            .bau-hdqt-footer {
              flex-direction: column;
            }
            .bau-hdqt-container10 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .bau-hdqt-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .bau-hdqt-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .bau-hdqt-desktop-menu {
              display: none;
            }
            .bau-hdqt-link01 {
              margin-left: var(--dl-space-space-unit);
            }
            .bau-hdqt-link02 {
              margin-left: var(--dl-space-space-unit);
            }
            .bau-hdqt-link03 {
              margin-left: var(--dl-space-space-unit);
            }
            .bau-hdqt-btn-group {
              display: none;
            }
            .bau-hdqt-burger-menu {
              display: flex;
            }
            .bau-hdqt-pricing {
              width: 100%;
            }
            .bau-hdqt-container03 {
              flex-flow: column;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .bau-hdqt-pricing-card {
              width: 100%;
              max-width: 100%;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .bau-hdqt-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .bau-hdqt-container09 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .bau-hdqt-logo1 {
              align-items: center;
            }
            .bau-hdqt-image1 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .bau-hdqt-text14 {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .bau-hdqt-links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .bau-hdqt-container10 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .bau-hdqt-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .bau-hdqt-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .bau-hdqt-mobile-menu {
              padding: 16px;
            }
            .bau-hdqt-pricing {
              width: 100%;
            }
            .bau-hdqt-container03 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .bau-hdqt-container04 {
              width: 100%;
            }
            .bau-hdqt-footer {
              padding: var(--dl-space-space-unit);
            }
            .bau-hdqt-container09 {
              align-items: center;
              flex-direction: column;
            }
            .bau-hdqt-image1 {
              margin-bottom: 0px;
            }
            .bau-hdqt-text14 {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .bau-hdqt-links-container {
              align-items: center;
              flex-direction: column;
            }
            .bau-hdqt-container10 {
              margin-right: 0px;
            }
            .bau-hdqt-container11 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .bau-hdqt-contact {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-unit);
            }
            .bau-hdqt-text24 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default BauHDQT
