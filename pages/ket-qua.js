import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const KetQua = (props) => {
  return (
    <>
      <div className="ket-qua-container">
        <Head>
          <title>Ket-Qua - exported project</title>
          <meta property="og:title" content="Ket-Qua - exported project" />
        </Head>
        <header data-thq="thq-navbar" className="ket-qua-navbar-interactive">
          <Image
            alt="logo"
            src="/playground_assets/logo-hsg-200h.png"
            className="ket-qua-logo"
            width={105}
            height={105}
          />
          <div
            data-role="Nav"
            data-thq="thq-navbar-nav"
            className="ket-qua-desktop-menu"
          >
            <nav
              data-role="Nav"
              data-thq="thq-navbar-nav-links"
              className="ket-qua-nav"
            >
              <Link href="/bau-hdqt">
                <a className="ket-qua-link">Bầu HĐQT</a>
              </Link>
              <Link href="/bau-bks">
                <a className="ket-qua-link01">Bầu BKS</a>
              </Link>
              <Link href="/bieu-quyet">
                <a className="ket-qua-link02">Biểu Quyết</a>
              </Link>
              <Link href="/ket-qua">
                <a className="ket-qua-link03">Kết Quả</a>
              </Link>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="ket-qua-btn-group">
            <Link href="/logn">
              <a className="ket-qua-link04 button">Đăng Nhập</a>
            </Link>
          </div>
          <div data-thq="thq-burger-menu" className="ket-qua-burger-menu">
            <svg viewBox="0 0 1024 1024" className="ket-qua-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="ket-qua-mobile-menu">
            <div
              data-role="Nav"
              data-thq="thq-mobile-menu-nav"
              className="ket-qua-nav1"
            >
              <div className="ket-qua-container01">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="ket-qua-image"
                />
                <div data-thq="thq-close-menu" className="ket-qua-menu-close">
                  <svg viewBox="0 0 1024 1024" className="ket-qua-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-role="Nav"
                data-thq="thq-mobile-menu-nav-links"
                className="ket-qua-nav2"
              >
                <span className="ket-qua-text">Bầu HĐQT</span>
                <span className="ket-qua-text01">Bầu BKS</span>
                <span className="ket-qua-text02">Biểu Quyết</span>
                <span className="ket-qua-text03">Kết Quả</span>
              </nav>
              <div className="ket-qua-container02">
                <button className="ket-qua-login1 button">Đăng Nhập</button>
              </div>
            </div>
            <div className="ket-qua-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="ket-qua-icon04"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="ket-qua-icon06"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="ket-qua-icon08"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="ket-qua-pricing">
          <div className="ket-qua-container03">
            <div className="ket-qua-pricing-card">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="ket-qua-image01"
              />
              <div className="ket-qua-container04">
                <label className="ket-qua-text04">BAN KIỂM SOÁT</label>
                <div className="ket-qua-container05">
                  <form className="ket-qua-form">
                    <img
                      alt="image"
                      src="https://play.teleporthq.io/static/svg/default-img.svg"
                      className="ket-qua-image02"
                    />
                  </form>
                  <form className="ket-qua-form01">
                    <label>ứng cử viên 1</label>
                  </form>
                </div>
                <div className="ket-qua-container06">
                  <form className="ket-qua-form02">
                    <img
                      alt="image"
                      src="https://play.teleporthq.io/static/svg/default-img.svg"
                      className="ket-qua-image03"
                    />
                  </form>
                  <form className="ket-qua-form03">
                    <label>ứng cử viên 1</label>
                  </form>
                </div>
                <div className="ket-qua-container07">
                  <form className="ket-qua-form04">
                    <img
                      alt="image"
                      src="https://play.teleporthq.io/static/svg/default-img.svg"
                      className="ket-qua-image04"
                    />
                  </form>
                  <form className="ket-qua-form05">
                    <label>ứng cử viên 1</label>
                  </form>
                </div>
              </div>
            </div>
            <div className="ket-qua-pricing-card1">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="ket-qua-image05"
              />
              <div className="ket-qua-container08">
                <label className="ket-qua-text08">HỘI ĐỒNG QUẢN TRỊ</label>
                <div className="ket-qua-container09">
                  <div className="ket-qua-container10">
                    <form className="ket-qua-form06">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="ket-qua-image06"
                      />
                    </form>
                    <form className="ket-qua-form07">
                      <label>ứng cử viên 1</label>
                    </form>
                  </div>
                  <div className="ket-qua-container11">
                    <form className="ket-qua-form08">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="ket-qua-image07"
                      />
                    </form>
                    <form className="ket-qua-form09">
                      <label>ứng cử viên 1</label>
                    </form>
                  </div>
                </div>
                <div className="ket-qua-container12">
                  <div className="ket-qua-container13">
                    <form className="ket-qua-form10">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="ket-qua-image08"
                      />
                    </form>
                    <form className="ket-qua-form11">
                      <label>ứng cử viên 1</label>
                    </form>
                  </div>
                  <div className="ket-qua-container14">
                    <form className="ket-qua-form12">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="ket-qua-image09"
                      />
                    </form>
                    <form className="ket-qua-form13">
                      <label>ứng cử viên 1</label>
                    </form>
                  </div>
                </div>
                <div className="ket-qua-container15">
                  <div className="ket-qua-container16">
                    <form className="ket-qua-form14">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="ket-qua-image10"
                      />
                    </form>
                    <form className="ket-qua-form15">
                      <label>ứng cử viên 1</label>
                    </form>
                  </div>
                  <div className="ket-qua-container17">
                    <form className="ket-qua-form16">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="ket-qua-image11"
                      />
                    </form>
                    <form className="ket-qua-form17">
                      <label>ứng cử viên 1</label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="ket-qua-pricing-card2">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="ket-qua-image12"
              />
              <div className="ket-qua-container18">
                <label className="ket-qua-text15">BIỂU QUYẾT</label>
                <div className="ket-qua-container19">
                  <div className="ket-qua-container20">
                    <form className="ket-qua-form18">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="ket-qua-image13"
                      />
                    </form>
                    <form className="ket-qua-form19">
                      <label>VD 1</label>
                    </form>
                  </div>
                  <div className="ket-qua-container21">
                    <form className="ket-qua-form20">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="ket-qua-image14"
                      />
                    </form>
                    <form className="ket-qua-form21">
                      <label>VD 1</label>
                    </form>
                  </div>
                </div>
                <div className="ket-qua-container22">
                  <div className="ket-qua-container23">
                    <form className="ket-qua-form22">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="ket-qua-image15"
                      />
                    </form>
                    <form className="ket-qua-form23">
                      <label>VD 1</label>
                    </form>
                  </div>
                  <div className="ket-qua-container24">
                    <form className="ket-qua-form24">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="ket-qua-image16"
                      />
                    </form>
                    <form className="ket-qua-form25">
                      <label>VD 1</label>
                    </form>
                  </div>
                </div>
                <div className="ket-qua-container25">
                  <div className="ket-qua-container26">
                    <form className="ket-qua-form26">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="ket-qua-image17"
                      />
                    </form>
                    <form className="ket-qua-form27">
                      <label>VD 1</label>
                    </form>
                  </div>
                  <div className="ket-qua-container27">
                    <form className="ket-qua-form28">
                      <img
                        alt="image"
                        src="https://play.teleporthq.io/static/svg/default-img.svg"
                        className="ket-qua-image18"
                      />
                    </form>
                    <form className="ket-qua-form29">
                      <label>VD 1</label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="ket-qua-footer">
          <div className="ket-qua-container28">
            <div className="ket-qua-logo1">
              <Image
                alt="logo"
                src="/playground_assets/logo-hsg-200h.png"
                className="ket-qua-image19"
                width={84}
                height={84}
              />
              <span className="ket-qua-text22">
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
            <div className="ket-qua-links-container">
              <div className="ket-qua-container29">
                <div className="ket-qua-product-container">
                  <span className="ket-qua-text26">TRANG</span>
                  <Link href="/bau-hdqt">
                    <a className="ket-qua-link05">Bầu HĐQT</a>
                  </Link>
                  <Link href="/bau-bks">
                    <a className="ket-qua-link06">Bầu BKS</a>
                  </Link>
                  <Link href="/bieu-quyet">
                    <a className="ket-qua-link07">Biểu quyết</a>
                  </Link>
                  <Link href="/ket-qua">
                    <a className="ket-qua-link08">Kết quả</a>
                  </Link>
                </div>
                <div className="ket-qua-company-container">
                  <span className="ket-qua-text27">LIÊN KẾT</span>
                  <a
                    href="https://nhuahoasen.vn/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="ket-qua-link09"
                  >
                    Nhựa hoa sen
                  </a>
                  <a
                    href="https://hoasenhome.vn/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="ket-qua-link10"
                  >
                    Việt Nam Steel
                  </a>
                  <a
                    href="https://hoasenhome.vn/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="ket-qua-link11"
                  >
                    Hoa sen Home
                  </a>
                </div>
              </div>
              <div className="ket-qua-container30">
                <div className="ket-qua-contact">
                  <span className="ket-qua-text28">LIÊN HỆ</span>
                  <span className="ket-qua-text29">cskh@hoasengroup.vn</span>
                  <span>(028) 39990 111</span>
                </div>
                <div className="ket-qua-socials">
                  <span className="ket-qua-text31">THEO DÕI</span>
                  <div className="ket-qua-icon-group1">
                    <a
                      href="https://www.youtube.com/@CongtyCPTapdoanHoaSen"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="ket-qua-link12"
                    >
                      <svg viewBox="0 0 1024 1024" className="ket-qua-icon10">
                        <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://zalo.me/2867298229687548991"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="ket-qua-link13"
                    >
                      <img
                        alt="image"
                        src="/playground_assets/icons8-zalo-50-200h.png"
                        className="ket-qua-image20"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/hoasengroup.vn"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="ket-qua-link14"
                    >
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="ket-qua-icon12"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.tiktok.com/@hoasenhome.vn"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="ket-qua-link15"
                    >
                      <img
                        alt="image"
                        src="/playground_assets/tik-tok-200h.png"
                        className="ket-qua-image21"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ket-qua-separator"></div>
          <span className="ket-qua-text32">
            © 2023 HOA SEN GROUP, All Rights Reserved.
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .ket-qua-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .ket-qua-navbar-interactive {
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
          .ket-qua-logo {
            width: 105px;
            height: 105px;
          }
          .ket-qua-desktop-menu {
            display: flex;
          }
          .ket-qua-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .ket-qua-link {
            font-size: 20px;
            text-decoration: none;
          }
          .ket-qua-link01 {
            font-size: 20px;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .ket-qua-link02 {
            font-size: 20px;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .ket-qua-link03 {
            font-size: 20px;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .ket-qua-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .ket-qua-link04 {
            font-size: 20px;
            border-width: 0px;
            text-decoration: none;
          }
          .ket-qua-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .ket-qua-mobile-menu {
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
          .ket-qua-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .ket-qua-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .ket-qua-image {
            height: 2rem;
          }
          .ket-qua-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .ket-qua-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .ket-qua-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .ket-qua-text01 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .ket-qua-text02 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .ket-qua-text03 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .ket-qua-container02 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .ket-qua-login1 {
            margin-right: var(--dl-space-space-twounits);
          }
          .ket-qua-icon-group {
            display: flex;
          }
          .ket-qua-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .ket-qua-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .ket-qua-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .ket-qua-pricing {
            width: 100%;
            display: flex;
            background-size: cover;
            justify-content: center;
            background-image: url('https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxzd2lzcyUyMGNoZWVzZSUyMHBsYW50fGVufDB8fHx8MTYyNTg0MTU0Mg&ixlib=rb-1.2.1&h=1200');
            background-position: center;
          }
          .ket-qua-container03 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            background-size: cover;
            justify-content: center;
          }
          .ket-qua-pricing-card {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 450px;
            min-height: 450px;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .ket-qua-pricing-card:hover {
            transform: scale(1.02);
          }
          .ket-qua-image01 {
            width: 180px;
            height: 180px;
            object-fit: cover;
          }
          .ket-qua-container04 {
            width: 350px;
            height: 175px;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .ket-qua-text04 {
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .ket-qua-container05 {
            width: 100%;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-form {
            width: 58px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-image02 {
            width: 30px;
            height: 22px;
            object-fit: cover;
          }
          .ket-qua-form01 {
            width: 191px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .ket-qua-container06 {
            width: 100%;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-form02 {
            width: 58px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-image03 {
            width: 30px;
            height: 22px;
            object-fit: cover;
          }
          .ket-qua-form03 {
            width: 191px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .ket-qua-container07 {
            width: 100%;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-form04 {
            width: 58px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-image04 {
            width: 30px;
            height: 22px;
            object-fit: cover;
          }
          .ket-qua-form05 {
            width: 191px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .ket-qua-pricing-card1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: 450px;
            min-height: 450px;
            transition: 0.3s;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .ket-qua-pricing-card1:hover {
            transform: scale(1.02);
          }
          .ket-qua-image05 {
            width: 180px;
            height: 180px;
            object-fit: cover;
          }
          .ket-qua-container08 {
            width: 350px;
            height: 175px;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .ket-qua-text08 {
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .ket-qua-container09 {
            width: 100%;
            height: 51px;
            display: flex;
            align-items: flex-start;
          }
          .ket-qua-container10 {
            width: 50%;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-form06 {
            width: 58px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-image06 {
            width: 30px;
            height: 22px;
            object-fit: cover;
          }
          .ket-qua-form07 {
            width: 191px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .ket-qua-container11 {
            width: 50%;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-form08 {
            width: 58px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-image07 {
            width: 30px;
            height: 22px;
            object-fit: cover;
          }
          .ket-qua-form09 {
            width: 191px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .ket-qua-container12 {
            width: 100%;
            height: 51px;
            display: flex;
            align-items: flex-start;
          }
          .ket-qua-container13 {
            width: 50%;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-form10 {
            width: 58px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-image08 {
            width: 30px;
            height: 22px;
            object-fit: cover;
          }
          .ket-qua-form11 {
            width: 191px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .ket-qua-container14 {
            width: 50%;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-form12 {
            width: 58px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-image09 {
            width: 30px;
            height: 22px;
            object-fit: cover;
          }
          .ket-qua-form13 {
            width: 191px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .ket-qua-container15 {
            width: 100%;
            height: 51px;
            display: flex;
            align-items: flex-start;
          }
          .ket-qua-container16 {
            width: 50%;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-form14 {
            width: 58px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-image10 {
            width: 30px;
            height: 22px;
            object-fit: cover;
          }
          .ket-qua-form15 {
            width: 191px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .ket-qua-container17 {
            width: 50%;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-form16 {
            width: 58px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-image11 {
            width: 30px;
            height: 22px;
            object-fit: cover;
          }
          .ket-qua-form17 {
            width: 191px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .ket-qua-pricing-card2 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: 450px;
            min-height: 450px;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
            background-color: var(--dl-color-gray-white);
          }
          .ket-qua-pricing-card2:hover {
            transform: scale(1.02);
          }
          .ket-qua-image12 {
            width: 180px;
            height: 180px;
            object-fit: cover;
          }
          .ket-qua-container18 {
            width: 350px;
            height: 175px;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .ket-qua-text15 {
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .ket-qua-container19 {
            width: 100%;
            height: 51px;
            display: flex;
            align-items: flex-start;
          }
          .ket-qua-container20 {
            width: 50%;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-form18 {
            width: 58px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-image13 {
            width: 30px;
            height: 22px;
            object-fit: cover;
          }
          .ket-qua-form19 {
            width: 191px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .ket-qua-container21 {
            width: 50%;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-form20 {
            width: 58px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-image14 {
            width: 30px;
            height: 22px;
            object-fit: cover;
          }
          .ket-qua-form21 {
            width: 191px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .ket-qua-container22 {
            width: 100%;
            height: 51px;
            display: flex;
            align-items: flex-start;
          }
          .ket-qua-container23 {
            width: 50%;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-form22 {
            width: 58px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-image15 {
            width: 30px;
            height: 22px;
            object-fit: cover;
          }
          .ket-qua-form23 {
            width: 191px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .ket-qua-container24 {
            width: 50%;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-form24 {
            width: 58px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-image16 {
            width: 30px;
            height: 22px;
            object-fit: cover;
          }
          .ket-qua-form25 {
            width: 191px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .ket-qua-container25 {
            width: 100%;
            height: 51px;
            display: flex;
            align-items: flex-start;
          }
          .ket-qua-container26 {
            width: 50%;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-form26 {
            width: 58px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-image17 {
            width: 30px;
            height: 22px;
            object-fit: cover;
          }
          .ket-qua-form27 {
            width: 191px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .ket-qua-container27 {
            width: 50%;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-form28 {
            width: 58px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .ket-qua-image18 {
            width: 30px;
            height: 22px;
            object-fit: cover;
          }
          .ket-qua-form29 {
            width: 191px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .ket-qua-footer {
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
          .ket-qua-container28 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .ket-qua-logo1 {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .ket-qua-image19 {
            width: 84px;
            height: 84px;
          }
          .ket-qua-text22 {
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .ket-qua-links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .ket-qua-container29 {
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .ket-qua-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: column;
            justify-content: flex-start;
          }
          .ket-qua-text26 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .ket-qua-link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .ket-qua-link06 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .ket-qua-link07 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .ket-qua-link08 {
            text-decoration: none;
          }
          .ket-qua-company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .ket-qua-text27 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .ket-qua-link09 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .ket-qua-link10 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .ket-qua-link11 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .ket-qua-container30 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .ket-qua-contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .ket-qua-text28 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .ket-qua-text29 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .ket-qua-socials {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .ket-qua-text31 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .ket-qua-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .ket-qua-link12 {
            display: contents;
          }
          .ket-qua-icon10 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .ket-qua-link13 {
            display: contents;
          }
          .ket-qua-image20 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .ket-qua-link14 {
            display: contents;
          }
          .ket-qua-icon12 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .ket-qua-link15 {
            display: contents;
          }
          .ket-qua-image21 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            object-fit: cover;
            text-decoration: none;
          }
          .ket-qua-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .ket-qua-text32 {
            align-self: center;
          }
          @media (max-width: 991px) {
            .ket-qua-pricing {
              flex-direction: row;
            }
            .ket-qua-container03 {
              flex-direction: column;
            }
            .ket-qua-pricing-card {
              width: 543px;
              padding: var(--dl-space-space-twounits);
              max-width: 100%;
              align-items: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .ket-qua-pricing-card1 {
              width: 543px;
              max-width: 100%;
              align-items: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .ket-qua-pricing-card2 {
              width: 538px;
              height: 36px;
              max-width: 100%;
              align-items: center;
              padding-top: var(--dl-space-space-twounits);
              margin-right: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .ket-qua-footer {
              flex-direction: column;
            }
            .ket-qua-container29 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .ket-qua-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .ket-qua-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .ket-qua-desktop-menu {
              display: none;
            }
            .ket-qua-link01 {
              margin-left: var(--dl-space-space-unit);
            }
            .ket-qua-link02 {
              margin-left: var(--dl-space-space-unit);
            }
            .ket-qua-link03 {
              margin-left: var(--dl-space-space-unit);
            }
            .ket-qua-btn-group {
              display: none;
            }
            .ket-qua-burger-menu {
              display: flex;
            }
            .ket-qua-container03 {
              flex-flow: column;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .ket-qua-pricing-card {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .ket-qua-pricing-card1 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .ket-qua-pricing-card2 {
              width: 100%;
              max-width: 450px;
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .ket-qua-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .ket-qua-container28 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .ket-qua-logo1 {
              align-items: center;
            }
            .ket-qua-image19 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .ket-qua-text22 {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .ket-qua-links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .ket-qua-container29 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .ket-qua-product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 479px) {
            .ket-qua-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .ket-qua-mobile-menu {
              padding: 16px;
            }
            .ket-qua-container03 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .ket-qua-pricing-card2 {
              margin-bottom: 0px;
            }
            .ket-qua-footer {
              padding: var(--dl-space-space-unit);
            }
            .ket-qua-container28 {
              align-items: center;
              flex-direction: column;
            }
            .ket-qua-image19 {
              margin-bottom: 0px;
            }
            .ket-qua-text22 {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .ket-qua-links-container {
              align-items: center;
              flex-direction: column;
            }
            .ket-qua-container29 {
              margin-right: 0px;
            }
            .ket-qua-container30 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .ket-qua-contact {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-unit);
            }
            .ket-qua-text32 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

export default KetQua
