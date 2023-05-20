import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>exported project</title>
          <meta property="og:title" content="exported project" />
        </Head>
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <Image
            alt="logo"
            src="/playground_assets/logo-hsg-200h.png"
            className="home-logo"
            width={105}
            height={105}
          />
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <Link href="/bau-hdqt">
                <a className="home-link">Bầu HĐQT</a>
              </Link>
              <Link href="/bau-bks">
                <a className="home-link01">Bầu BKS</a>
              </Link>
              <Link href="/bieu-quyet">
                <a className="home-link02">Biểu Quyết</a>
              </Link>
              <Link href="/ket-qua">
                <a className="home-link03">Kết Quả</a>
              </Link>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-btn-group">
            <Link href="/logn">
              <a className="home-link04 button">Đăng Nhập</a>
            </Link>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-container1">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-image"
                />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav2"
              >
                <Link href="/bau-hdqt">
                  <a className="home-link05">Bầu HĐQT</a>
                </Link>
                <Link href="/bau-bks">
                  <a className="home-link06">Bầu BKS</a>
                </Link>
                <Link href="/bieu-quyet">
                  <a className="home-link07">Biểu Quyết</a>
                </Link>
                <Link href="/ket-qua">
                  <a className="home-link08">Kết Quả</a>
                </Link>
              </nav>
              <div className="home-container2">
                <Link href="/logn">
                  <a className="home-link09 button">Đăng Nhập</a>
                </Link>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-hero">
          <div className="home-container3">
            <h1 className="home-text">BẦU CỬ NGAY</h1>
            <span className="home-text01">
              Việc bầu cử sẽ diễn ra nhanh chóng và thuận tiện nhất
            </span>
            <div className="home-btn-group1">
              <Link href="/logn">
                <a className="home-link10 button">Bầu cử</a>
              </Link>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/hoa-sen-6639-1611208219-1924-1500h.jpg"
            className="home-image1"
          />
        </div>
        <footer className="home-footer">
          <div className="home-container4">
            <div className="home-logo1">
              <Image
                alt="logo"
                src="/playground_assets/logo-hsg-200h.png"
                className="home-image2"
                width={121}
                height={121}
              />
              <span className="home-text02">
                Công ty cổ phần Tập đoàn Hoa Sen
              </span>
            </div>
            <div className="home-links-container">
              <div className="home-container5">
                <div className="home-product-container">
                  <span className="home-text03">TRANG</span>
                  <Link href="/bau-hdqt">
                    <a className="home-link11">Bầu HĐQT</a>
                  </Link>
                  <Link href="/bau-bks">
                    <a className="home-link12">Bầu BKS</a>
                  </Link>
                  <Link href="/bieu-quyet">
                    <a className="home-link13">Biểu quyết</a>
                  </Link>
                  <Link href="/ket-qua">
                    <a className="home-link14">Kết quả</a>
                  </Link>
                </div>
                <div className="home-company-container">
                  <span className="home-text04">LIÊN KẾT</span>
                  <span className="home-text05">Nhựa Hoa Sen</span>
                  <span className="home-text06">Việt Nam Steel</span>
                  <span className="home-text07">Hoa Sen Home</span>
                </div>
              </div>
              <div className="home-container6">
                <div className="home-contact">
                  <span className="home-text08">LIÊN HỆ</span>
                  <span className="home-text09">cskh@hoasengroup.vn</span>
                  <span className="home-text10">(028) 39990 111</span>
                </div>
                <div className="home-socials">
                  <span className="home-text11">THEO DÕI</span>
                  <div className="home-icon-group1">
                    <a
                      href="https://www.facebook.com/hoasengroup.vn"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link15"
                    >
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="home-icon10"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.tiktok.com/@hoasenhome.vn"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link16"
                    >
                      <img
                        alt="image"
                        src="/playground_assets/tik-tok-200h.png"
                        className="home-image3"
                      />
                    </a>
                    <a
                      href="https://zalo.me/2867298229687548991"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link17"
                    >
                      <img
                        alt="image"
                        src="/playground_assets/icons8-zalo-50-200h.png"
                        className="home-image4"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/@CongtyCPTapdoanHoaSen"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link18"
                    >
                      <svg viewBox="0 0 1024 1024" className="home-icon12">
                        <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-separator"></div>
          <span className="home-text12">
            © 2023 HOA SEN GROUP, All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-navbar-interactive {
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
          .home-logo {
            width: 105px;
            height: 105px;
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link {
            font-size: 20px;
            text-decoration: none;
          }
          .home-link01 {
            font-size: 20px;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link02 {
            font-size: 20px;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link03 {
            font-size: 20px;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link04 {
            font-size: 20px;
            border-width: 0px;
            text-decoration: none;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
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
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-image {
            height: 2rem;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link07 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link08 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-link09 {
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-icon-group {
            display: flex;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container3 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .home-text {
            font-size: 3rem;
            max-width: 450px;
            align-self: center;
          }
          .home-text01 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-btn-group1 {
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
          }
          .home-link10 {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link10:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-black);
          }
          .home-image1 {
            width: 400px;
            box-shadow: 5px 5px 10px 0px #9d9292;
            object-fit: cover;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-container4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-logo1 {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-image2 {
            width: 121px;
            height: 121px;
          }
          .home-text02 {
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-container5 {
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text03 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-link11 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link12 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link13 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link14 {
            font-size: 14px;
            text-decoration: none;
          }
          .home-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text04 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text05 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text06 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text07 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container6 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text08 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-text09 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text10 {
            font-size: 14px;
          }
          .home-socials {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text11 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link15 {
            display: contents;
          }
          .home-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link16 {
            display: contents;
          }
          .home-image3 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link17 {
            display: contents;
          }
          .home-image4 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .home-link18 {
            display: contents;
          }
          .home-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          .home-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .home-text12 {
            align-self: center;
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column;
            }
            .home-container3 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .home-text {
              text-align: center;
            }
            .home-text01 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-footer {
              flex-direction: column;
            }
            .home-container5 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-desktop-menu {
              display: none;
            }
            .home-link01 {
              margin-left: var(--dl-space-space-unit);
            }
            .home-link02 {
              margin-left: var(--dl-space-space-unit);
            }
            .home-link03 {
              margin-left: var(--dl-space-space-unit);
            }
            .home-btn-group {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text01 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-image1 {
              width: 80%;
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container4 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .home-logo1 {
              align-items: center;
            }
            .home-image2 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-text02 {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .home-container5 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container3 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-btn-group1 {
              flex-direction: column;
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
            }
            .home-container4 {
              align-items: center;
              flex-direction: column;
            }
            .home-image2 {
              margin-bottom: 0px;
            }
            .home-text02 {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-links-container {
              align-items: center;
              flex-direction: column;
            }
            .home-container5 {
              margin-right: 0px;
            }
            .home-container6 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .home-contact {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text12 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
