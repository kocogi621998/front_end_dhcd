import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const BauBKS = (props) => {
  return (
    <>
      <div className="bau-bks-container">
        <Head>
          <title>Bau-BKS - exported project</title>
          <meta property="og:title" content="Bau-BKS - exported project" />
        </Head>
        <header data-thq="thq-navbar" className="bau-bks-navbar-interactive">
          <Image
            alt="logo"
            src="/playground_assets/logo-hsg-200h.png"
            className="bau-bks-logo"
            width={105}
            height={105}
          />
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="bau-bks-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="bau-bks-nav"
            >
              <Link href="/bau-hdqt">
                <a className="bau-bks-link">Bầu HĐQT</a>
              </Link>
              <Link href="/bau-bks">
                <a className="bau-bks-link01">Bầu BKS</a>
              </Link>
              <Link href="/bieu-quyet">
                <a className="bau-bks-link02">Biểu Quyết</a>
              </Link>
              <Link href="/ket-qua">
                <a className="bau-bks-link03">Kết Quả</a>
              </Link>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="bau-bks-btn-group">
            <Link href="/logn">
              <a className="bau-bks-link04 button">Đăng Nhập</a>
            </Link>
          </div>
          <div data-thq="thq-burger-menu" className="bau-bks-burger-menu">
            <svg viewBox="0 0 1024 1024" className="bau-bks-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="bau-bks-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="bau-bks-nav1"
            >
              <div className="bau-bks-container01">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="bau-bks-image"
                />
                <div data-thq="thq-close-menu" className="bau-bks-menu-close">
                  <svg viewBox="0 0 1024 1024" className="bau-bks-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="bau-bks-nav2"
              >
                <Link href="/bau-hdqt">
                  <a className="bau-bks-link05">Bầu HĐQT</a>
                </Link>
                <Link href="/bau-bks">
                  <a className="bau-bks-link06">Bầu BKS</a>
                </Link>
                <Link href="/bieu-quyet">
                  <a className="bau-bks-link07">Biểu Quyết</a>
                </Link>
                <Link href="/ket-qua">
                  <a className="bau-bks-link08">Kết Quả</a>
                </Link>
              </nav>
              <div className="bau-bks-container02">
                <Link href="/logn">
                  <a className="bau-bks-link09 button">Đăng Nhập</a>
                </Link>
              </div>
            </div>
            <div className="bau-bks-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="bau-bks-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="bau-bks-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="bau-bks-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="bau-bks-pricing">
          <div className="bau-bks-container03">
            <div className="bau-bks-pricing-card">
              <span className="bau-bks-text">BẦU HỘI ĐỒNG QUẢN TRỊ</span>
              <div className="bau-bks-container04">
                <div className="bau-bks-container05">
                  <input type="checkbox" checked="true" />
                  <label className="bau-bks-text01">Chia đều</label>
                  <label className="bau-bks-text02">Số cổ phần:</label>
                  <span className="bau-bks-text03">0</span>
                </div>
                <div className="bau-bks-container06">
                  <form className="bau-bks-form">
                    <label className="bau-bks-text04">1.</label>
                  </form>
                  <form className="bau-bks-form01">
                    <span className="bau-bks-text05">ứng cử viên 1</span>
                  </form>
                  <form className="bau-bks-form02">
                    <input type="text" className="bau-bks-textinput input" />
                  </form>
                </div>
                <div className="bau-bks-container07">
                  <form className="bau-bks-form03">
                    <label className="bau-bks-text06">2.</label>
                  </form>
                  <form className="bau-bks-form04">
                    <span className="bau-bks-text07">ứng cử viên 1</span>
                  </form>
                  <form className="bau-bks-form05">
                    <input type="text" className="bau-bks-textinput1 input" />
                  </form>
                </div>
                <div className="bau-bks-container08">
                  <form className="bau-bks-form06">
                    <label className="bau-bks-text08">3.</label>
                  </form>
                  <form className="bau-bks-form07">
                    <span className="bau-bks-text09">ứng cử viên 1</span>
                  </form>
                  <form className="bau-bks-form08">
                    <input type="text" className="bau-bks-textinput2 input" />
                  </form>
                </div>
                <div className="bau-bks-container09">
                  <form className="bau-bks-form09">
                    <label className="bau-bks-text10">4.</label>
                  </form>
                  <form className="bau-bks-form10">
                    <span className="bau-bks-text11">ứng cử viên 1</span>
                  </form>
                  <form className="bau-bks-form11">
                    <input type="text" className="bau-bks-textinput3 input" />
                  </form>
                </div>
                <div className="bau-bks-container10">
                  <form className="bau-bks-form12">
                    <label className="bau-bks-text12">5.</label>
                  </form>
                  <form className="bau-bks-form13">
                    <span className="bau-bks-text13">ứng cử viên 1</span>
                  </form>
                  <form className="bau-bks-form14">
                    <input type="text" className="bau-bks-textinput4 input" />
                  </form>
                </div>
                <div className="bau-bks-container11">
                  <form className="bau-bks-form15">
                    <label className="bau-bks-text14">6.</label>
                  </form>
                  <form className="bau-bks-form16">
                    <span className="bau-bks-text15">ứng cử viên 1</span>
                  </form>
                  <form className="bau-bks-form17">
                    <input type="text" className="bau-bks-textinput5 input" />
                  </form>
                </div>
              </div>
              <button type="submit" className="bau-bks-button button">
                Bầu cử
              </button>
            </div>
          </div>
        </div>
        <footer className="bau-bks-footer">
          <div className="bau-bks-container12">
            <div className="bau-bks-logo1">
              <Image
                alt="logo"
                src="/playground_assets/logo-hsg-200h.png"
                className="bau-bks-image1"
                width={121}
                height={121}
              />
              <span className="bau-bks-text16">
                Công ty cổ phần Tập đoàn Hoa Sen
              </span>
            </div>
            <div className="bau-bks-links-container">
              <div className="bau-bks-container13">
                <div className="bau-bks-product-container">
                  <span className="bau-bks-text17">TRANG</span>
                  <Link href="/bau-hdqt">
                    <a className="bau-bks-link10">Bầu HĐQT</a>
                  </Link>
                  <Link href="/bau-bks">
                    <a className="bau-bks-link11">Bầu BKS</a>
                  </Link>
                  <Link href="/bieu-quyet">
                    <a className="bau-bks-link12">Biểu quyết</a>
                  </Link>
                  <Link href="/ket-qua">
                    <a className="bau-bks-link13">Kết quả</a>
                  </Link>
                </div>
                <div className="bau-bks-company-container">
                  <span className="bau-bks-text18">LIÊN KẾT</span>
                  <span className="bau-bks-text19">Nhựa Hoa Sen</span>
                  <span className="bau-bks-text20">Việt Nam Steel</span>
                  <span className="bau-bks-text21">Hoa Sen Home</span>
                </div>
              </div>
              <div className="bau-bks-container14">
                <div className="bau-bks-contact">
                  <span className="bau-bks-text22">LIÊN HỆ</span>
                  <span className="bau-bks-text23">cskh@hoasengroup.vn</span>
                  <span className="bau-bks-text24">(028) 39990 111</span>
                </div>
                <div className="bau-bks-socials">
                  <span className="bau-bks-text25">THEO DÕI</span>
                  <div className="bau-bks-icon-group1">
                    <a
                      href="https://www.facebook.com/hoasengroup.vn"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="bau-bks-link14"
                    >
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="bau-bks-icon10"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.tiktok.com/@hoasenhome.vn"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="bau-bks-link15"
                    >
                      <img
                        alt="image"
                        src="/playground_assets/tik-tok-200h.png"
                        className="bau-bks-image2"
                      />
                    </a>
                    <a
                      href="https://zalo.me/2867298229687548991"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="bau-bks-link16"
                    >
                      <img
                        alt="image"
                        src="/playground_assets/icons8-zalo-50-200h.png"
                        className="bau-bks-image3"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/@CongtyCPTapdoanHoaSen"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="bau-bks-link17"
                    >
                      <svg viewBox="0 0 1024 1024" className="bau-bks-icon12">
                        <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bau-bks-separator"></div>
          <span className="bau-bks-text26">
            © 2023 HOA SEN GROUP, All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .bau-bks-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .bau-bks-navbar-interactive {
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
          .bau-bks-logo {
            width: 105px;
            height: 105px;
          }
          .bau-bks-desktop-menu {
            display: flex;
          }
          .bau-bks-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .bau-bks-link {
            font-size: 20px;
            text-decoration: none;
          }
          .bau-bks-link01 {
            font-size: 20px;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .bau-bks-link02 {
            font-size: 20px;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .bau-bks-link03 {
            font-size: 20px;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .bau-bks-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .bau-bks-link04 {
            font-size: 20px;
            border-width: 0px;
            text-decoration: none;
          }
          .bau-bks-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .bau-bks-mobile-menu {
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
          .bau-bks-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .bau-bks-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .bau-bks-image {
            height: 2rem;
          }
          .bau-bks-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .bau-bks-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .bau-bks-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bau-bks-link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bau-bks-link07 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bau-bks-link08 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bau-bks-container02 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .bau-bks-link09 {
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .bau-bks-icon-group {
            display: flex;
          }
          .bau-bks-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .bau-bks-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .bau-bks-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .bau-bks-pricing {
            width: 1398px;
            display: flex;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/home-banner-1500w.jpg');
            background-position: center;
          }
          .bau-bks-container03 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            background-size: cover;
            justify-content: center;
          }
          .bau-bks-pricing-card {
            width: 100%;
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
          .bau-bks-pricing-card:hover {
            transform: scale(1.02);
          }
          .bau-bks-text {
            font-size: 1.5rem;
            align-self: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .bau-bks-container04 {
            width: 100%;
            height: 343px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .bau-bks-container05 {
            width: 100%;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-text01 {
            font-size: 14px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .bau-bks-text02 {
            font-size: 14px;
            margin-left: var(--dl-space-space-threeunits);
          }
          .bau-bks-text03 {
            font-size: 14px;
            margin-left: var(--dl-space-space-halfunit);
          }
          .bau-bks-container06 {
            width: 100%;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-form {
            width: 18px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-text04 {
            font-size: 14px;
          }
          .bau-bks-form01 {
            width: 200px;
            height: 100%;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .bau-bks-text05 {
            font-size: 14px;
          }
          .bau-bks-form02 {
            width: 139px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-textinput {
            width: 129px;
            height: 30px;
            padding-top: 0px;
            padding-left: 0rem;
            padding-right: 0rem;
            padding-bottom: 0px;
          }
          .bau-bks-container07 {
            width: 100%;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-form03 {
            width: 18px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-text06 {
            font-size: 14px;
          }
          .bau-bks-form04 {
            width: 200px;
            height: 100%;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .bau-bks-text07 {
            font-size: 14px;
          }
          .bau-bks-form05 {
            width: 139px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-textinput1 {
            width: 129px;
            height: 30px;
            padding-top: 0px;
            padding-left: 0rem;
            padding-right: 0rem;
            padding-bottom: 0px;
          }
          .bau-bks-container08 {
            width: 100%;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-form06 {
            width: 18px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-text08 {
            font-size: 14px;
          }
          .bau-bks-form07 {
            width: 200px;
            height: 100%;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .bau-bks-text09 {
            font-size: 14px;
          }
          .bau-bks-form08 {
            width: 139px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-textinput2 {
            width: 129px;
            height: 30px;
            padding-top: 0px;
            padding-left: 0rem;
            padding-right: 0rem;
            padding-bottom: 0px;
          }
          .bau-bks-container09 {
            width: 100%;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-form09 {
            width: 18px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-text10 {
            font-size: 14px;
          }
          .bau-bks-form10 {
            width: 200px;
            height: 100%;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .bau-bks-text11 {
            font-size: 14px;
          }
          .bau-bks-form11 {
            width: 139px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-textinput3 {
            width: 129px;
            padding-top: 0px;
            padding-left: 0rem;
            padding-right: 0rem;
            padding-bottom: 0px;
          }
          .bau-bks-container10 {
            width: 100%;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-form12 {
            width: 18px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-text12 {
            font-size: 14px;
          }
          .bau-bks-form13 {
            width: 200px;
            height: 100%;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .bau-bks-text13 {
            font-size: 14px;
          }
          .bau-bks-form14 {
            width: 139px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-textinput4 {
            width: 129px;
            height: 30px;
            padding-top: 0px;
            padding-left: 0rem;
            padding-right: 0rem;
            padding-bottom: 0px;
          }
          .bau-bks-container11 {
            width: 100%;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-form15 {
            width: 18px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-text14 {
            font-size: 14px;
          }
          .bau-bks-form16 {
            width: 200px;
            height: 100%;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .bau-bks-text15 {
            font-size: 14px;
          }
          .bau-bks-form17 {
            width: 139px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bau-bks-textinput5 {
            width: 129px;
            height: 30px;
            padding-top: 0px;
            padding-left: 0rem;
            padding-right: 0rem;
            padding-bottom: 0px;
          }
          .bau-bks-button {
            align-self: center;
            margin-top: var(--dl-space-space-unit);
          }
          .bau-bks-footer {
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
          .bau-bks-container12 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .bau-bks-logo1 {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .bau-bks-image1 {
            width: 121px;
            height: 121px;
          }
          .bau-bks-text16 {
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .bau-bks-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .bau-bks-container13 {
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .bau-bks-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: column;
            justify-content: flex-start;
          }
          .bau-bks-text17 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .bau-bks-link10 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bau-bks-link11 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bau-bks-link12 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bau-bks-link13 {
            font-size: 14px;
            text-decoration: none;
          }
          .bau-bks-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .bau-bks-text18 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .bau-bks-text19 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .bau-bks-text20 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .bau-bks-text21 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .bau-bks-container14 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .bau-bks-contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .bau-bks-text22 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .bau-bks-text23 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .bau-bks-text24 {
            font-size: 14px;
          }
          .bau-bks-socials {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .bau-bks-text25 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .bau-bks-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .bau-bks-link14 {
            display: contents;
          }
          .bau-bks-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bau-bks-link15 {
            display: contents;
          }
          .bau-bks-image2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bau-bks-link16 {
            display: contents;
          }
          .bau-bks-image3 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bau-bks-link17 {
            display: contents;
          }
          .bau-bks-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          .bau-bks-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .bau-bks-text26 {
            align-self: center;
          }
          @media (max-width: 1200px) {
            .bau-bks-pricing {
              width: 100%;
            }
            .bau-bks-pricing-card {
              max-width: 100%;
            }
            .bau-bks-container04 {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .bau-bks-pricing {
              width: 100%;
            }
            .bau-bks-pricing-card {
              width: 100%;
              max-width: 100%;
              align-items: center;
            }
            .bau-bks-container04 {
              width: 100%;
            }
            .bau-bks-footer {
              flex-direction: column;
            }
            .bau-bks-container13 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .bau-bks-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .bau-bks-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .bau-bks-desktop-menu {
              display: none;
            }
            .bau-bks-link01 {
              margin-left: var(--dl-space-space-unit);
            }
            .bau-bks-link02 {
              margin-left: var(--dl-space-space-unit);
            }
            .bau-bks-link03 {
              margin-left: var(--dl-space-space-unit);
            }
            .bau-bks-btn-group {
              display: none;
            }
            .bau-bks-burger-menu {
              display: flex;
            }
            .bau-bks-pricing {
              width: 100%;
            }
            .bau-bks-container03 {
              flex-flow: column;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .bau-bks-pricing-card {
              width: 100%;
              max-width: 100%;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .bau-bks-container04 {
              width: 100%;
            }
            .bau-bks-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .bau-bks-container12 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .bau-bks-logo1 {
              align-items: center;
            }
            .bau-bks-image1 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .bau-bks-text16 {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .bau-bks-links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .bau-bks-container13 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .bau-bks-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .bau-bks-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .bau-bks-mobile-menu {
              padding: 16px;
            }
            .bau-bks-pricing {
              width: 100%;
            }
            .bau-bks-container03 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .bau-bks-container04 {
              width: 100%;
            }
            .bau-bks-footer {
              padding: var(--dl-space-space-unit);
            }
            .bau-bks-container12 {
              align-items: center;
              flex-direction: column;
            }
            .bau-bks-image1 {
              margin-bottom: 0px;
            }
            .bau-bks-text16 {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .bau-bks-links-container {
              align-items: center;
              flex-direction: column;
            }
            .bau-bks-container13 {
              margin-right: 0px;
            }
            .bau-bks-container14 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .bau-bks-contact {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-unit);
            }
            .bau-bks-text26 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default BauBKS
