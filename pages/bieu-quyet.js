import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const BieuQuyet = (props) => {
  return (
    <>
      <div className="bieu-quyet-container">
        <Head>
          <title>Bieu-Quyet - exported project</title>
          <meta property="og:title" content="Bieu-Quyet - exported project" />
        </Head>
        <header data-thq="thq-navbar" className="bieu-quyet-navbar-interactive">
          <Image
            alt="logo"
            src="/playground_assets/logo-hsg-200h.png"
            className="bieu-quyet-logo"
            width={105}
            height={105}
          />
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="bieu-quyet-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="bieu-quyet-nav"
            >
              <Link href="/bau-hdqt">
                <a className="bieu-quyet-link">Bầu HĐQT</a>
              </Link>
              <Link href="/bau-bks">
                <a className="bieu-quyet-link01">Bầu BKS</a>
              </Link>
              <Link href="/bieu-quyet">
                <a className="bieu-quyet-link02">Biểu Quyết</a>
              </Link>
              <Link href="/ket-qua">
                <a className="bieu-quyet-link03">Kết Quả</a>
              </Link>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="bieu-quyet-btn-group">
            <Link href="/logn">
              <a className="bieu-quyet-link04 button">Đăng Nhập</a>
            </Link>
          </div>
          <div data-thq="thq-burger-menu" className="bieu-quyet-burger-menu">
            <svg viewBox="0 0 1024 1024" className="bieu-quyet-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="bieu-quyet-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="bieu-quyet-nav1"
            >
              <div className="bieu-quyet-container01">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="bieu-quyet-image"
                />
                <div
                  data-thq="thq-close-menu"
                  className="bieu-quyet-menu-close"
                >
                  <svg viewBox="0 0 1024 1024" className="bieu-quyet-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="bieu-quyet-nav2"
              >
                <Link href="/bau-hdqt">
                  <a className="bieu-quyet-link05">Bầu HĐQT</a>
                </Link>
                <Link href="/bau-bks">
                  <a className="bieu-quyet-link06">Bầu BKS</a>
                </Link>
                <Link href="/bieu-quyet">
                  <a className="bieu-quyet-link07">Biểu Quyết</a>
                </Link>
                <Link href="/ket-qua">
                  <a className="bieu-quyet-link08">Kết Quả</a>
                </Link>
              </nav>
              <div className="bieu-quyet-container02">
                <Link href="/logn">
                  <a className="bieu-quyet-link09 button">Đăng Nhập</a>
                </Link>
              </div>
            </div>
            <div className="bieu-quyet-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="bieu-quyet-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="bieu-quyet-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="bieu-quyet-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="bieu-quyet-pricing">
          <div className="bieu-quyet-container03">
            <div className="bieu-quyet-pricing-card">
              <span className="bieu-quyet-text">BIỂU QUYẾT</span>
              <div className="bieu-quyet-container04">
                <div className="bieu-quyet-container05">
                  <form className="bieu-quyet-form">
                    <label>1.</label>
                  </form>
                  <form className="bieu-quyet-form01">
                    <span>vđ1</span>
                  </form>
                </div>
                <div className="bieu-quyet-container06">
                  <form className="bieu-quyet-form02">
                    <input type="checkbox" checked="true" />
                    <label className="bieu-quyet-text03">Đồngý</label>
                  </form>
                  <form className="bieu-quyet-form03">
                    <input type="checkbox" checked="true" />
                    <label className="bieu-quyet-text04">Không Đồng ý</label>
                  </form>
                  <form className="bieu-quyet-form04">
                    <input type="checkbox" checked="true" />
                    <label className="bieu-quyet-text05">Không ý kiến</label>
                  </form>
                </div>
                <div className="bieu-quyet-container07">
                  <form className="bieu-quyet-form05">
                    <label>2.</label>
                  </form>
                  <form className="bieu-quyet-form06">
                    <span>vđ1</span>
                  </form>
                </div>
                <div className="bieu-quyet-container08">
                  <form className="bieu-quyet-form07">
                    <input type="checkbox" checked="true" />
                    <label className="bieu-quyet-text08">Đồngý</label>
                  </form>
                  <form className="bieu-quyet-form08">
                    <input type="checkbox" checked="true" />
                    <label className="bieu-quyet-text09">Không Đồng ý</label>
                  </form>
                  <form className="bieu-quyet-form09">
                    <input type="checkbox" checked="true" />
                    <label className="bieu-quyet-text10">Không ý kiến</label>
                  </form>
                </div>
              </div>
              <button type="submit" className="bieu-quyet-button button">
                Biểu Quyết
              </button>
            </div>
          </div>
        </div>
        <footer className="bieu-quyet-footer">
          <div className="bieu-quyet-container09">
            <div className="bieu-quyet-logo1">
              <Image
                alt="logo"
                src="/playground_assets/logo-hsg-200h.png"
                className="bieu-quyet-image1"
                width={121}
                height={121}
              />
              <span className="bieu-quyet-text11">
                Công ty cổ phần Tập đoàn Hoa Sen
              </span>
            </div>
            <div className="bieu-quyet-links-container">
              <div className="bieu-quyet-container10">
                <div className="bieu-quyet-product-container">
                  <span className="bieu-quyet-text12">TRANG</span>
                  <Link href="/bau-hdqt">
                    <a className="bieu-quyet-link10">Bầu HĐQT</a>
                  </Link>
                  <Link href="/bau-bks">
                    <a className="bieu-quyet-link11">Bầu BKS</a>
                  </Link>
                  <Link href="/bieu-quyet">
                    <a className="bieu-quyet-link12">Biểu quyết</a>
                  </Link>
                  <Link href="/ket-qua">
                    <a className="bieu-quyet-link13">Kết quả</a>
                  </Link>
                </div>
                <div className="bieu-quyet-company-container">
                  <span className="bieu-quyet-text13">LIÊN KẾT</span>
                  <span className="bieu-quyet-text14">Nhựa Hoa Sen</span>
                  <span className="bieu-quyet-text15">Việt Nam Steel</span>
                  <span className="bieu-quyet-text16">Hoa Sen Home</span>
                </div>
              </div>
              <div className="bieu-quyet-container11">
                <div className="bieu-quyet-contact">
                  <span className="bieu-quyet-text17">LIÊN HỆ</span>
                  <span className="bieu-quyet-text18">cskh@hoasengroup.vn</span>
                  <span className="bieu-quyet-text19">(028) 39990 111</span>
                </div>
                <div className="bieu-quyet-socials">
                  <span className="bieu-quyet-text20">THEO DÕI</span>
                  <div className="bieu-quyet-icon-group1">
                    <a
                      href="https://www.facebook.com/hoasengroup.vn"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="bieu-quyet-link14"
                    >
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="bieu-quyet-icon10"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.tiktok.com/@hoasenhome.vn"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="bieu-quyet-link15"
                    >
                      <img
                        alt="image"
                        src="/playground_assets/tik-tok-200h.png"
                        className="bieu-quyet-image2"
                      />
                    </a>
                    <a
                      href="https://zalo.me/2867298229687548991"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="bieu-quyet-link16"
                    >
                      <img
                        alt="image"
                        src="/playground_assets/icons8-zalo-50-200h.png"
                        className="bieu-quyet-image3"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/@CongtyCPTapdoanHoaSen"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="bieu-quyet-link17"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="bieu-quyet-icon12"
                      >
                        <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bieu-quyet-separator"></div>
          <span className="bieu-quyet-text21">
            © 2023 HOA SEN GROUP, All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .bieu-quyet-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .bieu-quyet-navbar-interactive {
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
          .bieu-quyet-logo {
            width: 105px;
            height: 105px;
          }
          .bieu-quyet-desktop-menu {
            display: flex;
          }
          .bieu-quyet-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .bieu-quyet-link {
            font-size: 20px;
            text-decoration: none;
          }
          .bieu-quyet-link01 {
            font-size: 20px;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .bieu-quyet-link02 {
            font-size: 20px;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .bieu-quyet-link03 {
            font-size: 20px;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .bieu-quyet-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .bieu-quyet-link04 {
            font-size: 20px;
            border-width: 0px;
            text-decoration: none;
          }
          .bieu-quyet-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .bieu-quyet-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .bieu-quyet-mobile-menu {
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
          .bieu-quyet-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .bieu-quyet-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .bieu-quyet-image {
            height: 2rem;
          }
          .bieu-quyet-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bieu-quyet-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .bieu-quyet-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .bieu-quyet-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bieu-quyet-link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bieu-quyet-link07 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bieu-quyet-link08 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bieu-quyet-container02 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .bieu-quyet-link09 {
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .bieu-quyet-icon-group {
            display: flex;
          }
          .bieu-quyet-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .bieu-quyet-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .bieu-quyet-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .bieu-quyet-pricing {
            width: 1398px;
            display: flex;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxzd2lzcyUyMGNoZWVzZSUyMHBsYW50fGVufDB8fHx8MTYyNTg0MTU0Mg&ixlib=rb-1.2.1&w=1500');
            background-position: center;
          }
          .bieu-quyet-container03 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            background-size: cover;
            justify-content: center;
          }
          .bieu-quyet-pricing-card {
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
          .bieu-quyet-pricing-card:hover {
            transform: scale(1.02);
          }
          .bieu-quyet-text {
            font-size: 1.5rem;
            align-self: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: uppercase;
          }
          .bieu-quyet-container04 {
            width: 100%;
            height: 343px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .bieu-quyet-container05 {
            width: 100%;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bieu-quyet-form {
            width: 18px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bieu-quyet-form01 {
            width: 200px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .bieu-quyet-container06 {
            width: 100%;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bieu-quyet-form02 {
            width: 92px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .bieu-quyet-text03 {
            margin-left: var(--dl-space-space-unit);
          }
          .bieu-quyet-form03 {
            width: 156px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .bieu-quyet-text04 {
            margin-left: var(--dl-space-space-unit);
          }
          .bieu-quyet-form04 {
            width: 159px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .bieu-quyet-text05 {
            margin-left: var(--dl-space-space-unit);
          }
          .bieu-quyet-container07 {
            width: 100%;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bieu-quyet-form05 {
            width: 18px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bieu-quyet-form06 {
            width: 200px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .bieu-quyet-container08 {
            width: 100%;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .bieu-quyet-form07 {
            width: 92px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .bieu-quyet-text08 {
            margin-left: var(--dl-space-space-unit);
          }
          .bieu-quyet-form08 {
            width: 156px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .bieu-quyet-text09 {
            margin-left: var(--dl-space-space-unit);
          }
          .bieu-quyet-form09 {
            width: 159px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .bieu-quyet-text10 {
            margin-left: var(--dl-space-space-unit);
          }
          .bieu-quyet-button {
            align-self: center;
            margin-top: var(--dl-space-space-unit);
          }
          .bieu-quyet-footer {
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
          .bieu-quyet-container09 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .bieu-quyet-logo1 {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .bieu-quyet-image1 {
            width: 121px;
            height: 121px;
          }
          .bieu-quyet-text11 {
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .bieu-quyet-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .bieu-quyet-container10 {
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .bieu-quyet-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: column;
            justify-content: flex-start;
          }
          .bieu-quyet-text12 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .bieu-quyet-link10 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bieu-quyet-link11 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bieu-quyet-link12 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bieu-quyet-link13 {
            font-size: 14px;
            text-decoration: none;
          }
          .bieu-quyet-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .bieu-quyet-text13 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .bieu-quyet-text14 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .bieu-quyet-text15 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .bieu-quyet-text16 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .bieu-quyet-container11 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .bieu-quyet-contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .bieu-quyet-text17 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .bieu-quyet-text18 {
            font-size: 14px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .bieu-quyet-text19 {
            font-size: 14px;
          }
          .bieu-quyet-socials {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .bieu-quyet-text20 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .bieu-quyet-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .bieu-quyet-link14 {
            display: contents;
          }
          .bieu-quyet-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bieu-quyet-link15 {
            display: contents;
          }
          .bieu-quyet-image2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bieu-quyet-link16 {
            display: contents;
          }
          .bieu-quyet-image3 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .bieu-quyet-link17 {
            display: contents;
          }
          .bieu-quyet-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          .bieu-quyet-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .bieu-quyet-text21 {
            align-self: center;
          }
          @media (max-width: 1200px) {
            .bieu-quyet-pricing {
              width: 100%;
            }
            .bieu-quyet-pricing-card {
              max-width: 100%;
            }
          }
          @media (max-width: 991px) {
            .bieu-quyet-pricing {
              width: 100%;
            }
            .bieu-quyet-pricing-card {
              width: 100%;
              max-width: 100%;
              align-items: center;
            }
            .bieu-quyet-footer {
              flex-direction: column;
            }
            .bieu-quyet-container10 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .bieu-quyet-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .bieu-quyet-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .bieu-quyet-desktop-menu {
              display: none;
            }
            .bieu-quyet-link01 {
              margin-left: var(--dl-space-space-unit);
            }
            .bieu-quyet-link02 {
              margin-left: var(--dl-space-space-unit);
            }
            .bieu-quyet-link03 {
              margin-left: var(--dl-space-space-unit);
            }
            .bieu-quyet-btn-group {
              display: none;
            }
            .bieu-quyet-burger-menu {
              display: flex;
            }
            .bieu-quyet-pricing {
              width: 100%;
            }
            .bieu-quyet-container03 {
              flex-flow: column;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .bieu-quyet-pricing-card {
              width: 100%;
              max-width: 100%;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .bieu-quyet-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .bieu-quyet-container09 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .bieu-quyet-logo1 {
              align-items: center;
            }
            .bieu-quyet-image1 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .bieu-quyet-text11 {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .bieu-quyet-links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .bieu-quyet-container10 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .bieu-quyet-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .bieu-quyet-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .bieu-quyet-mobile-menu {
              padding: 16px;
            }
            .bieu-quyet-pricing {
              width: 100%;
            }
            .bieu-quyet-container03 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .bieu-quyet-footer {
              padding: var(--dl-space-space-unit);
            }
            .bieu-quyet-container09 {
              align-items: center;
              flex-direction: column;
            }
            .bieu-quyet-image1 {
              margin-bottom: 0px;
            }
            .bieu-quyet-text11 {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .bieu-quyet-links-container {
              align-items: center;
              flex-direction: column;
            }
            .bieu-quyet-container10 {
              margin-right: 0px;
            }
            .bieu-quyet-container11 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .bieu-quyet-contact {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-unit);
            }
            .bieu-quyet-text21 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default BieuQuyet
