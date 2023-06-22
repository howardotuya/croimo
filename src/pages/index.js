import Head from "next/head";
import Image from "next/image";
import logo2 from "../../public/logo2.svg";
import menu from "../../public/menu.svg";
import Dashboard from "../../public/Dashboard.png";
import card1 from "../../public/card1.png";
import card2 from "../../public/card2.png";
import card3 from "../../public/card3.png";
import fricimg from "../../public/fricimg.png";
import fricimg2 from "../../public/fricimg2.png";
import hicon from "../../public/hicon.png";
import startImg from "../../public/startImg.png";
import Dribbble from "../../public/Dribbble.png";
import Instagram from "../../public/Instagram.png";
import Twitter from "../../public/Twitter.png";
import Youtube from "../../public/Youtube.png";
import headbody from "../../public/head-body.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Croimo - Homepage</title>
        <meta
          name="description"
          content="Instantly send & receive money anytime, anywhere with our multi-currency wallet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="blur"></div>
      </div>
      <main class="setM">
        <header className=" bg-transparent">
          <navbar className="bg-white">
            <div className="navbar-l hidden lg:flex">
              <div>
                <Image class="h-7 lg:h-9 w-full" quality={100} alt="" src={hicon} />
              </div>
              <div className="flex gap-8">
                <a className="nav-link">Contact Us</a>
                <a className="nav-link">FAQs</a>
                <a className="nav-link">Login</a>
              </div>
              <div>
                <button className="button1">Get Started</button>
              </div>
            </div>
            <div className="navbar-s flex items-center justify-between lg:hidden">
              <div>
                <Image quality={100} className="logoim" alt="logo" src={logo2} />
              </div>
              <div>
                <Image quality={100} alt="menu" class="h-5 w-6" src={menu} />
              </div>
            </div>
          </navbar>

          <div className="head-text flex flex-col items-center">
            <h1>
              Instantly <span className="green">send & receive</span> money
              anytime, anywhere with our multi-currency wallet
            </h1>
            <h2>
              Deposit, exchange, transfer, and withdraw money using your bank
              account or debit card.
            </h2>
            <button>Get Started</button>
          </div>

          <div className="imgery flex items-center justify-center">
            <div className="shaad hidden lg:flex ">
              <Image quality={100} src={Dashboard} alt="" />
            </div>
            <div className="block px-14 lg:hidden">
              <Image quality={100} class="shad" alt="" src={headbody} />
            </div>
          </div>
        </header>

        <section className="bg-grey">
          <div className="grey flex flex-col items-center">
            <h1>
              We ensure easy access to multi-currency accounts to move & store
              money
            </h1>
            <h2>
              Croimo is the easiest place to swap between currencies, store your
              money, send and receive money from anyone
            </h2>
          </div>
          <div className="card-cont flex lg:flex-row flex-col gap-6 pl-8 lg:pl-0 lg:gap-8 justify-center">
            <div className="card">
              <Image
                sizes="100%"
                quality={100}
                class="tes"
                alt=""
                src={card1}
              />
              <h1>Best conversion rates</h1>
              <p>Our rates are as low as 1% for every transaction made.</p>
            </div>
            <div className="card">
              <Image
                quality={100}
                sizes="100%"
                class="tes"
                src={card2}
                alt=""
              />
              <h1>Secure & transparent</h1>
              <p>We ensure that your earnings are 100% secure.</p>
            </div>
            <div className="card3">
              <Image
                quality={100}
                sizes="100%"
                class="tes"
                src={card3}
                alt=""
              />
              <h1>Fast Payment</h1>
              <p>Funds to recipients appear with 3 days of payment</p>
            </div>
          </div>
        </section>

        <section className="fric bg-greey">
          <div class="fric-head">
            <h1>
              We reduce friction in cross-border transactions and empower
              migrants to achieve more with their earnings
            </h1>
          </div>

          <div class="bg-sere">
            <div class="bgsein">
              <div class="order-2 lg:order-1">
                <Image quality={100} alt="" src={fricimg} />
              </div>
              <div class="bgtext order-1 lg:order-2">
                <h1>
                  Send & Receive payments easily with your{" "}
                  <span class="green">$Cro tag!</span>
                </h1>
                <p>
                  Create a cro tag when you sign up. All you need from your
                  receiver/sender is a $cro tag to directly receive or send
                  money to your cro wallet.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-sere bg2t">
            <div class="bgsein">
              <div class="order-2">
                <Image quality={100} alt="" src={fricimg2} />
              </div>
              <div class="bgtext order-1">
                <h1>
                  <span class="green">Swap</span> between currencies & withdraw
                  at anytime!
                </h1>
                <p class="ww">
                  Our financial solution allows you to store your money in a
                  secure wallet, swap between currencies and withdraw to your
                  bank account
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="get-stard" class="bg-greey">
          <div>
            <h1 class="starthead">Get Started in 3 easy steps</h1>
          </div>
          <div class="scont flex items-center justify-center">
            <div>
              <Image class="phone-img" quality={100} alt="" src={startImg} />
            </div>
            <div class="item-cont">
              <div id="item" class="flex gap-8">
                <div class="item-left flex flex-col items-center">
                  <p>01</p>
                  <div class="line"></div>
                </div>
                <div class="item-right flex flex-col">
                  <h1>Create account</h1>
                  <p>Create an account with your email, verify your KYC</p>
                </div>
              </div>
              <div id="item" class="flex gap-8">
                <div class="item-left flex flex-col items-center">
                  <p>02</p>
                  <div class="line"></div>
                </div>
                <div class="item-right flex flex-col">
                  <h1>Add your bank account</h1>
                  <p>
                    Link your bank account to make deposits and withdrawals to
                    your wallet
                  </p>
                </div>
              </div>
              <div id="item" class="flex gap-8">
                <div class="item-left flex flex-col items-center">
                  <p>03</p>
                </div>
                <div class="item-right flex flex-col">
                  <h1>Start sending & receiving money</h1>
                  <p>
                    Fund your wallet from your account and enjoy the
                    transactions!{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="movemoney" class="bg-greey">
          <div className="move-cont flex flex-col items-center">
            <h1>Let’s help you move your money</h1>
            <p>
              We care a lot about you and how you move your money, if you’re one
              of the francophone africans seeking the best way to move your
              money between currencies, we offer the best possible means.
            </p>
            <button>Get Started</button>
          </div>
        </section>

        <footer>
          <div id="footer-large" class="hidden lg:block">
            <div class="footer-l">
              <div className="flex justify-between items-center">
                <Image alt="" class=" h-9 w-auto" src={hicon} />
                <div class="socontt flex">
                  <Image class="social" quality={100} alt="" src={Dribbble} />
                  <Image class="social" quality={100} alt="" src={Instagram} />
                  <Image class="social" quality={100} alt="" src={Twitter} />
                  <Image class="social" quality={100} alt="" src={Youtube} />
                </div>
              </div>
              <div class="bel">
                <p>© 2021 Croimo</p>
                <p> All rights reserved</p>
              </div>
            </div>
            <div class="flex llin-c items-center">
              <div class="llin"></div>
            </div>
          </div>

          <div id="footer-small" class="block lg:hidden">
            <div>
              <Image quality={100} class="logoim" alt="" src={logo2} />
            </div>
            <div class="flex pl-1 ra1 gap-8 pt-8 pb-14">
              <p>Contact us</p>
              <p>FAQs</p>
              <p>Login</p>
            </div>
            <div class="flex pl-1 socontt pb-7">
              <Image class="social" quality={100} alt="" src={Dribbble} />
              <Image class="social" quality={100} alt="" src={Instagram} />
              <Image class="social" quality={100} alt="" src={Twitter} />
              <Image class="social" quality={100} alt="" src={Youtube} />
            </div>
            <div class="bel pl-1 pb-28 flex flex-col">
              <p>© 2021 Croimo </p>
              <p>All rights reserved</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
