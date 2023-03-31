import {
    FlashOn,
    BusinessCenter,
    OndemandVideo,
    DateRangeOutlined,
    SellOutlined,
    VisibilityOutlined,
    ChatBubbleOutline,
    CallMade,
    AccessTime,
    Done,
    SentimentSatisfiedAltRounded,
    AutoAwesome,
    AutoFixHigh,
    LiveHelp,
    CheckRounded,
    CloseRounded,
    Facebook,
    Twitter,
    Instagram,
    GitHub,
    LinkedIn,
    YouTube,
    FormatQuoteRounded,
    LocationOnOutlined,
    AttachEmailOutlined,
    PhoneAndroidOutlined,
    Copyright,
    KeyboardArrowDown,
    SearchRounded,
    ArrowRightAlt,
    PersonOutlineOutlined,
    ArrowRight,
    ArrowLeft,
    ExpandLess,
    Check
  } from '@mui/icons-material';
  import { Rating, Stack } from '@mui/material';
  import { useState,useEffect, useRef, } from 'react';
  import emailjs from '@emailjs/browser';
  import Carousel from 'react-multi-carousel';
  import 'react-multi-carousel/lib/styles.css';
  import { Link } from 'react-scroll';
  import { Typewriter } from 'react-simple-typewriter';
  import { HashRouter as Router, 
    Route, 
    Routes, 
    Link as LinkR,
    useParams ,
    useLocation,
    useNavigate} from "react-router-dom";
    import { HashLink } from 'react-router-hash-link';
  import './App.css';
  const services = [
    {
      icon: <FlashOn className="icon" />,
      title: "design",
      desc: "In the business world, nice appearance plays a key role, we create a memorable identity and high quality graphics, so your business can convey the sense of professionalism",
      laila:"design",
      images:["design1.jpg","design2.jpg","design3.jpg"],
      about:
        <p className="about_desc">
          If you are looking for <strong>modern logo, minimalist logo, luxury logo, flat logo, monogram logo or elegant logo design,</strong> then you are on the right page.
          <br />You will definitely get <strong>incredibly, unique, creative and amazing designs here.</strong>
          <br />Your information and requirements are always <strong>taken into consideration</strong> to bring your logo vision/imagination come to life, to provide <strong>creative designs</strong> as per your expectation.
        </p>
      ,
      whyUs: [
        "100% satisfactory work",
        "Friendly & respective responses",
        "Unlimited revisions even after order completion.",
        "You will obviously receive new designs incase you do not like the delivered ones.",
        "suitable prices.",
        "Fast Delivery .",
        "100% Money-Back Guarantee.",
      ],
      packages:[]
    },
    {
      icon: <FlashOn className="icon" />,
      title: "web development",
      desc: "Smarter development that supports growth. we employ best industry practices and cutting edge technologies to implement working, high quality, & interactive website.",
      laila:"development",
      images:["dev1.jpg","dev2.jpg","dev3.jpg"],
      about: <p className='about_desc'>
        Are you looking for a <strong>website designer</strong>, <strong>web developer</strong>, 
        If your answer is <strong>yes</strong>, then you are at the right place!
        <br />We will build your <strong>dream website</strong> from scratch
        <br />From analyse, designing,  to development.
        <br />Using different technologies : in whech we have <strong>strong experience</strong>.
        <br /><strong>For designing  :</strong> sketch, figma, adobe xd..
        <br /><strong>For front-end  :</strong>  html, css, javascript, bootstrap, jquery, react.js sass…
        <br /><strong>For back-end  :</strong> python/ django, node.js/express.js, mysql, mongoDb.
      </p>,
      whyUs:[
        "Complete, working, dynamic, interactive, fast loading speed & responsive website.",
        "Fixing bugs in websites.",
        "Work with APIs",
        "SEO and Mobile friendly structure",
        "suitable prices",
        "Clean code",
        "100% satisfaction",
        "100% Money-Back Guarantee",
        "1 Month Free Dedicated Support",
        "Fast Delivery",
        "Communication throughout the whole process",
      ],
      packages:[
        {
          name: "basic",
          price: "150",
          services: [
            {
              name: "front-end website.",
              isExist: true
            },
            {
              name: "Back-end website.",
              isExist: false
            },
            {
              name: "Design Customization.",
              isExist: false
            },
            {
              name: "Responsive Design.",
              isExist: true
            },
            {
              name: "3 Pages.",
              isExist: true
            },
            {
              name: "Content Upload.",
              isExist: false
            },
            {
              name: "Include Source Code.",
              isExist: false
            },
            {
              name: "3 Revisions.",
              isExist: true
            },
          ]
        },
        {
          name: "standard",
          price: "250",
          services: [
            {
              name: "front-end website.",
              isExist: true
            },
            {
              name: "Back-end website.",
              isExist: true
            },
            {
              name: "Design Customization.",
              isExist: true
            },
            {
              name: "Responsive Design.",
              isExist: true
            },
            {
              name: "5 Pages.",
              isExist: true
            },
            {
              name: "Content Upload.",
              isExist: false
            },
            {
              name: "Include Source Code.",
              isExist: true
            },
            {
              name: "5 Revisions.",
              isExist: true
            },
          ]
        },
        {
          name: "premium",
          price: "350",
          services: [
            {
              name: "front-end website.",
              isExist: true
            },
            {
              name: "Back-end website.",
              isExist: true
            },
            {
              name: "Design Customization.",
              isExist: true
            },
            {
              name: "Responsive Design.",
              isExist: true
            },
            {
              name: "7 Pages.",
              isExist: true
            },
            {
              name: "Content Upload.",
              isExist: true
            },
            {
              name: "Include Source Code.",
              isExist: true
            },
            {
              name: "7 Revisions.",
              isExist: true
            },
          ]
        },
      ]
    },
    {
      icon: <BusinessCenter className="icon" />,
      title: "wordPress",
      desc: "Speed, security, third-party integrations, SEO, and flexibility are paramount for mature businesses. Our custom WordPress solutions have been tailored to address these needs and more.",
      laila:"wordpress",
      images:["wordpress1.jpg","wordpress2.jpg","wordpress3.jpg"],
      about: <p className='about_desc '>
        Are you looking for a professional, customizable  wordpress website ? Well !  you are at the right place.
        we have done so many websites using WordPress and you will get what you desired as per your requirements.
        Your site will be unique and attractive to Engage potential clients and Add Value to your business
      </p>,
      whyUs: [
        "Complete, working, dynamic, interactive, fast loading speed & responsive wordpress website. ",
        "Modern website using DIVI, Elementor",
        "PREMIUM Theme & Plugins",
        "Google Map & Analytics",
        "SSL & Payment Integration",
        "Social media & Contact form",
        "Backup & Migration",
        "including woocommerce functionality.",
        "SEO and Mobile friendly structure",
        "With suitable prices. ",
        "Communication throughout the whole process.",
        "Business or Corporate, Portfolio, eCommerce Stores, Health and Fitness, Education, AdSense Blogs.",
        "Fast Delivery",
        "100% Money-Back Guarantee",
        "1 Month Free Dedicated Support"
      ],
      packages:[
        {
          name: "basic",
          price: "50",
          services: [
            {
              name: "Functional Website.",
              isExist: true
            },
            {
              name: "Design Customization.",
              isExist: true
            },
            {
              name: "Responsive Design.",
              isExist: true
            },
            {
              name: "3 Pages.",
              isExist: true
            },
            {
              name: "Content Upload.",
              isExist: true
            },
            {
              name: "E-Commerce Functionality.",
              isExist: false
            },
            {
              name: "3 Plugins/Extensions Installation.",
              isExist: true
            },
            {
              name: "3 Revisions.",
              isExist: true
            },
          ]
        },
        {
          name: "standard",
          price: "150",
          services: [
            {
              name: "Functional Website.",
              isExist: true
            },
            {
              name: "Design Customization.",
              isExist: true
            },
            {
              name: "Responsive Design.",
              isExist: true
            },
            {
              name: "7 Pages.",
              isExist: true
            },
            {
              name: "Content Upload.",
              isExist: true
            },
            {
              name: "E-Commerce Functionality.",
              isExist: true
            },
            {
              name: "7 Plugins/Extensions Installation.",
              isExist: true
            },
            {
              name: "5 Revisions.",
              isExist: true
            },
          ]
        },
        {
          name: "premium",
          price: "250",
          services: [
            {
              name: "Functional Website.",
              isExist: true
            },
            {
              name: "Design Customization.",
              isExist: true
            },
            {
              name: "Responsive Design.",
              isExist: true
            },
            {
              name: "10 Pages.",
              isExist: true
            },
            {
              name: "Content Upload.",
              isExist: true
            },
            {
              name: "E-Commerce Functionality.",
              isExist: true
            },
            {
              name: "10 Plugins/Extensions Installation.",
              isExist: true
            },
            {
              name: "10 Revisions.",
              isExist: true
            },
          ]
        }
      ]
    },
    {
      icon: <BusinessCenter className="icon" />,
      title: "seo marketing",
      desc: "we know what it takes to optimize your website for driving maximum traffic, & also help you in establishing your brand name as reputed & trustworthy.",
      laila:"seo",
      images:["seo1.jpg","seo2.jpg","seo3.jpg","seo4.jpg"],
      about:
        <p className="about_desc">
          You build a new website but <strong>no traffic</strong> , <strong>no optimization</strong>.
          <br/>Your website <strong>not visible in search results</strong> and don't know why
          <br/>You want more : 
          <br/> <strong>-</strong> customers for your business,
          <br/> <strong>-</strong> visitors for your blog,
          <br/> <strong>-</strong> More salses for you store …
          <br/>& <strong>rank higher</strong> on search engines.
          We are always here to help you. We have <strong>a Professional team  & seo experts</strong> that will not only optimize your website for driving maximum traffic but also help you in establishing your brand name as reputed & trustworthy.
        </p>,
      whyUs: [
        "WordPress SEO Optimisation",
        "Focused Keyword research and Optimization",
        "Optimize Meta Description Title, Headers, URLs",
        "Add Images Alt Tags(and images)",
        "Creation of Permalinks & Breadcrumbs",
        "Setup and Verification from Google Search Console",
        "Website submission on Google",
        "suitable prices.",
        "Fast Delivery.",
        "100 % Money - Back Guarantee.",
        "1 Month Free Dedicated Support.",
        "OnPage & ofpage SEO",
      ],
      packages:[]
    },
    {
      icon: <AutoFixHigh className="icon" />,
      title: "fixing bugs",
      desc: "Your problems will meet a definite solution with us our agile methodology. we solve any django/ python/ node.js/express.js / mongodb issues.",
      laila:"bugs",
      images:["fixe2.jpg","fixe1.jpg","fixe3.jpg"],
      about:
      <p className="about_desc">
      Are you having a WordPress, javascript, python/Django, node.js/express.js , mongofb, or mysql Bug or any critical issue & looking for quick  issue fix service? 
      <br/>we can easily fix any kind of wordPress,  front end, back end, CSS, HTML, Database & Server errors and issues with in 12 hours.
      </p>
      ,
      whyUs: [
        "Server Hosting & Database Error",
        "Theme and Plugin Errors",
        "Not Sending Emails",
        "Any 403, 404, 501, 502, Fatal, CSS Style or Syntax errors",
        "Increasing Memory Limits & express or django Version Compatibility",
        "White ,blank Screen, Page Not Loading",
        "Login or Security Issues",
        "Any SEO on page or technical error",
        "WooCommerce Shop, Checkout, Cart & Product Page Customisations or WooCommerce Bugs",
        "3rd party API Integration (CRM, payment, location)",
        "suitable prices.",
        "Fast Delivery .",
        "100% Money-Back Guarantee.",
      ],
      packages:[]
    },
    {
      icon: <LiveHelp className="icon" />,
      title: "deployement",
      desc: "Make your business shine online we will help you to connect your website to the world. choose the right hosting provider fix any website  deployment issues.",
      laila:"deployement",
      images:["dep1.jpg","dep2.jpg","dep3.jpg"],
      about:
        <p className="about_desc">
          We will help you to deploy your website to any hosting provider.
          We setup, configure, fix, secure, Digitalocean, Google Cloud, AWS, Hostgator, Godaddy, Namecheap, Shared hosting,  etc…
        </p>
      ,
      whyUs: [
        "Setup, configure and optimize Nginx",
        "Setup SSH Key and configure FTP Access",
        "Setup Domain",
        "Migrate or setup Wordpress from one Web Hosting to another",
        "Setup and configure and secure PhpMyAdmin mongodb atlas with root access limited",
        "Setup  any version of python/Django, node.js/express.js",
        "suitable prices.",
        "Fast Delivery .",
        "100% Money-Back Guarantee.",
      ],
      packages:[]
    },
    
  
  ];
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  function App() {
    const servicesref=useRef(null)
    console.log(servicesref);
    return (
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Homepage homepage refServices={servicesref}/>} />
          <Route path={"/service/:serviceId"} element={<ServicesDetails  />} />
          <Route path="/blog" element={<Blog servicesref/>} />
          <Route path="/category/:categoryId" element={<Category  />} />
          <Route path="/post/:postId" element={<Post  />} />
        </Routes>
      </Router>
  
    );
  }
  // pages 
  // agency homepage 
  function Homepage({homepage,refServices}) {
    return (
      <>
        <Header refSer={refServices}  />
        <Banner />
        <About />
        <Services homepage itsRef={refServices}  />
        <Portfolio />
        <Subscribe />
        <Team />
        <LatestBlog />
        <Testimonial />
        <Contact />
        <Faq />
        <Footer />
      </>
    )
  }
  // !agency homepage 
  // services details
  function ServicesDetails(){
    return(
      <>
        <Header serviceId/>
       <ServiceDesc/>
       <ChooseService />
        <Footer />
      </>
    )
  }
  // !services details
  // blog homepage
  function Blog() {
    return (
      <>
        <Header />
        <Banner blog />
        <LatestBlog2 />
        <BlogFeed />
        <Footer />
      </>
    )
  }
  // !blog homepage
  // blog category
  function Category() {
    return (
      <>
        <Header />
        <Banner blog />
        <LatestBlog2 />
        <BlogFeed />
        <Footer />
      </>
    )
  }
  // !blog category
  // blog singlePost
  function Post() {
    return (
      <>
        <Header />
        <Banner blog />
        <LatestBlog2 />
        <PostFeed />
        <Footer />
      </>
    )
  }
  // !blog singlePost
  // !pages 
  // components 
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
  function Logo() {
    return (
      <LinkR to="/"
        className="logo">
        <span>H</span>igh<span>S</span>kills.
      </LinkR>
  
    )
  }
  function Button({ btnContent, path }) {
    return (
      <Link to={path} className='btn'>
        <div className="btn-content">{btnContent}</div>
        <div className="btn-layer"></div>
      </Link>
    )
  }
  function GoLink({ path, linkContent, custumClass }) {
    return (
      <LinkR to={path} className={"goLink cap " + custumClass}>
        {linkContent}
        <ArrowRightAlt className="icon_arrow_right" />
      </LinkR>
    )
  }
  function TooltipBtn({ tooltipContent, tooltipIcon, handleClick, custumClass }) {
    return (
      <div className={"tooltipBtn " + custumClass}  >
        <div className="tooltipContent">{tooltipContent}</div>
        <span onClick={handleClick} className="tooltipIcon">{tooltipIcon}</span>
      </div>
    )
  }
  function TooltipLink({ tooltipContent, tooltipIcon, path }) {
    return (
      <div className="tooltipBtn">
        <div className="tooltipContent">{tooltipContent}</div>
        <LinkR to={path} className="tooltipIcon">{tooltipIcon}</LinkR>
      </div>
    )
  }
  function Alert({type,content}) {
    return (
      <div className={"alert "+type+"Msg"}>
        {content} 
      </div>
    )
  }
  function SocialMediaIcons() {
    return (
      <div className="social_media_icons">
        <div className="social_media_icon">
          <LinkR
            className='iconLayer facebook'
            to="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <Facebook className="icon" />
          </LinkR>
        </div>
        <div className="social_media_icon">
          <LinkR
            className='iconLayer github'
            to="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <GitHub className="icon" />
          </LinkR>
        </div>
        <div className="social_media_icon">
          <LinkR
            className='iconLayer instagram'
            to="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <Instagram className="icon" />
          </LinkR>
        </div>
        <div className="social_media_icon">
          <LinkR
            className='iconLayer twitter'
            to="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <Twitter className="icon" />
          </LinkR>
        </div>
        <div className="social_media_icon">
          <LinkR
            className='iconLayer linkedin'
            to="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <LinkedIn className="icon" />
          </LinkR>
        </div>
      </div>
    )
  }
  function InfoBox() {
    return (
      <div className="info_box">
        <div className="info_item">
          <div className="info_icon"><LocationOnOutlined className="icon" /></div>
          <div className="info_text cap">Lorem ipsum dolor sit.</div>
        </div>
        <div className="info_item">
          <div className="info_icon"><AttachEmailOutlined className="icon" /></div>
          <LinkR className="info_text" to="mailto:info@highskills.com">info@highskills.com</LinkR>
        </div>
        <div className="info_item">
          <div className="info_icon"><PhoneAndroidOutlined className="icon" /></div>
          <LinkR className="info_text" to="tel:1234567890">1234567890</LinkR>
        </div>
        <SocialMediaIcons />
      </div>
    )
  }
  
  // header
  function Header({serviceId, refSer}) {
    const [searchBar, setSearchBar] = useState(false);
    const [showmenu, setShowmenu] = useState(false);
    const [showsubmenu, setShowsubmenu] = useState(0);
    const menu = [
      {
        path: "/",
        path2:"/",
        hasdropdown: false,
        label: "home"
      },
      {
        path: "about",
        path2:"/#about",
        hasdropdown: false,
        label: "about us"
      },
      {
        path: "services",
        path2:"/#services",
        hasdropdown: true,
        label: "services",
        dropdownList:
          services.map((service, i) => (
            {
              path: "/service/"+service.laila,
              label: service.title
            }
          ))
  
      },
      {
        path: "portfolio",
        path2:"/#portfolio",
        hasdropdown: false,
        label: "portfolio"
      },
      {
        path: "team",
        path2:"/#team",
        hasdropdown: false,
        label: "team"
      },
      {
        path: "blog",
        path2:"/blog",
        hasdropdown: true,
        label: "blog",
        dropdownList: [
          {
            path: "/category/categoryId",
            label: "category 1",
          },
          {
            path: "/category/categoryId",
            label: "category 2",
          },
          {
            path: "/category/categoryId",
            label: "category 3",
          },
        ]
      },
      {
        path: "contact",
        path2:"/contact",   
        hasdropdown: false,
        label: "contact us"
      }
    ];
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 20) {
        document.querySelector("header").classList.add("fixe")
      } else {
        document.querySelector("header").classList.remove("fixe")
      }
      if (document.documentElement.scrollTop > 500) {
        document.querySelector('.scrollUp').classList.add('show');
      } else {
        document.querySelector('.scrollUp').classList.remove('show');
      }
    }
    function handleClick(i) {
      showsubmenu === i ? setShowsubmenu(0) : setShowsubmenu(i);
    }
    
    function ServiceLinks() {
      return (
        <ul className={showmenu ? "nav cap show" : "nav cap"} >
          {menu.map((item, i) => (
            <li key={i} className="nav_li" >
              <div className="nav_li_con">
                <HashLink
                  onClick={() => { setShowmenu(false); setShowsubmenu(0) }}
                  className="nav_link"
                  activeClass="active"
                  to={item.path2}
                  smooth>
                  {item.label}
                </HashLink>
                {item.hasdropdown && <KeyboardArrowDown onClick={() => handleClick(i)} className='nav_arrow' style={{ transform: showsubmenu === i && "rotate(180deg)" }} />}
              </div>
              {item.hasdropdown &&
                <ul className="subnav cap" style={{ display: showsubmenu === i && "flex" }}>
                  {
                    item.dropdownList.map((li, j) => (
                      <li key={j}>
                        <LinkR className='subnav_link' to={li.path}>{li.label}</LinkR>
                      </li>
                    ))
                  }
                </ul>
              }
            </li>
          ))}
        </ul>
      )
    }
    return (
      <header className='header ' id="header">
        <Link
          className="scrollUp"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}>
          <ExpandLess className="scrollUp__icon" />
        </Link>
        <div className="container header_container flex">
          <Logo style={{ display: showmenu && "none" }} />
          {
            serviceId 
            ? <ServiceLinks/>
             : <ul  className={showmenu ? "nav cap show" : "nav cap"} >
            {menu.map((item, i) => (
              <li key={i} className="nav_li" >
                <div  className="nav_li_con">
                  <Link
                    onClick={() => { setShowmenu(false); setShowsubmenu(0) }}
                    className="nav_link"
                    activeClass="active"
                    to={item.path}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}>
                    {item.label}
                  </Link>
                  {item.hasdropdown && <KeyboardArrowDown  onClick={() => handleClick(i)} className='nav_arrow' style={{ transform: showsubmenu === i && "rotate(180deg)" }} />}
                </div>
                {item.hasdropdown &&
                  <ul className="subnav cap" style={{ display: showsubmenu === i && "flex" }}>
                    {
                      item.dropdownList.map((li, j) => (
                        <li key={j}>
                          <LinkR className='subnav_link' to={li.path}>{li.label}</LinkR>
                        </li>
                      ))
                    }
                  </ul>
                }
              </li>
            ))}
          </ul>
          }
          <div className="laila" >
            {searchBar
              ? <div
                className="searchIcon_mobile"
                onClick={() => setSearchBar(false)}>
                <CloseRounded
                  style={{ color: "var(--first-color)" }}
                  className="icon" />
              </div>
              : <div
                className="searchIcon_mobile"
                
                onClick={() => {
                  setSearchBar(true)
                  setShowmenu(false)
                }}>
                <SearchRounded
                  className="icon" />
              </div>
            }
            <div
            
              className={showmenu ? "icon_menu show" : "icon_menu"}
              onClick={() => {
                setShowmenu(!showmenu)
                setSearchBar(false)
              }}>
              <span className="icon_center"></span>
              <span className="icon_side"></span>
            </div>
          </div>
  
          <form  className={searchBar ? "searchForm show" : "searchForm"} >
            <input
              type="search"
              placeholder='search for..'
              className='searchInput' />
            <button><SearchRounded className="searchIcon" /></button>
          </form>
        </div>
      </header>
    )
  }
  // !header
  // banner
  function Banner({ blog }) {
    function BannerHomepage() {
      return (
        <div className="bannerbg">
          <div className="bannerContent container">
            <h5 className='subtitle'>Welcome to </h5>
            <h2 className='title'>
              <Logo />
              <span className="typewriter">
                <span className="word">For :</span>
                <Typewriter
                  loop
                  cursor
                  cursorStyle='..'
                  words={[
                    "design",
                    "web developement",
                    "fixing bugs",
                    "SEO Optimisation",
                    "Deployement",
                    "wordpress"
                  ]}
                />
              </span>
            </h2>
            <p className="desc bannerDesc">
            highskills is a Perfect Blend of Creativity & Technology to meet your business challenges and help you reach your full potential.
            </p>
            <Button btnContent={"contact us"} path="/" />
          </div>
        </div>
  
      )
    }
    function BannerBlog() {
      return (
        <div
          className="bannerbg blog">
          <div className="bannerContent container">
            <h5 className='subtitle'>knowlege & technology</h5>
            <h2 className='title'>amazing topic to know !</h2>
            <Button btnContent={"explore now"} path="/" />
          </div>
        </div>
      )
    }
    return (
      <section className="banner" id="home">
        {blog ? <BannerBlog /> : <BannerHomepage />}
      </section>
    )
  }
  // !banner
  // about 
  function About() {
    const features = [
      {
        icon: <AccessTime className="icon" />,
        top: "5 years",
        bottom: "experience"
      },
      {
        icon: <SentimentSatisfiedAltRounded className="icon" />,
        top: "23",
        bottom: "happy clients"
      },
      {
        icon: <Done className="icon" />,
        top: "30",
        bottom: "completed projects"
      },
      {
        icon: <AutoAwesome className="icon" />,
        top: "100%",
        bottom: "quality"
      },
    ]
    return (
      <section className="section about" id="about">
        <h1 className="section_title">about us</h1>
        <h2 className="section_subtitle">who we are</h2>
        <div className="container about_container">
          <div className="about_images">
            <img src={PF + "blog/1.jpg"} alt="" className="about_img_big" />
            <img src={PF + "service-thumb.png"} alt="" className="about_img_small" />
          </div>
          <div className="about_text">
            <h2 className="about_title">highskills is a creative agency to help your bessiness grow</h2>
            <p className='about_desc'>
            We are an integrated digital agency, with :
            <br/> <strong>-</strong> Profound technical expertise; 
            <br/> <strong>-</strong> Creative flair; 
            <br/> <strong>-</strong> Supercharged internet marketing skills.
            <br/> We are experts in <strong>web designing, development, seo, and CMS.</strong> <br/> 
            With an extreme focus on <strong>quality of work</strong> that we do! We always aim to deliver <strong>every new project</strong> with <strong>higher quality standards.</strong>
            <br/> So, expand your business online, open the door to new opportunities, 
            and experience enormous growth <strong>with our unique, tangible, and result-oriented solutions.</strong>
            </p>
            <div className="features">
              {
                features.map((item, i) => (
                  <div className="feature cap" key={i}>
                    <div className="featuresicon">{item.icon}</div>
                    <div className="featuresTop">{item.top}</div>
                    <div className="featuresBottom">{item.bottom}.</div>
                  </div>
                ))
              }
            </div>
            <div className="about_buttons">
              <Button btnContent="contact us" path="contact" />
              <GoLink path="#" linkContent="see more" />
            </div>
          </div>
        </div>
      </section>
    )
  }
  // !about
  // services 
  function Services({homepage,itsRef}) {
    console.log("services : "+itsRef.current)
    return (
      <section ref={itsRef} className="services section" id='services'>
        <h1 className="section_title">services</h1>
        <h2 className="section_subtitle">what we offre</h2>
        <div className="container services_container centred">
          {
            services.map((item, i) => (
              <div className="service_item" key={i}>
                <div className="service_icon">{item.icon}</div>
                <h2 className="service_title">{item.title}</h2>
                <p className="service_desc">{item.desc}</p>
                <GoLink path={"/service/"+item.laila} linkContent="view details" />
              </div>
            ))
          }
        </div>
      </section>
    )
  }
  // !services 
  // portfolio
  function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("all");
    const categories = [
      {
        name: "all",
        class: "all"
      },
      {
        name: "design",
        class: "design"
      },
      {
        name: "web app",
        class: "web"
      },
      {
        name: "wordpress websites",
        class: "wordpress"
      },
    ]
    const projects = [
      {
        img: "portfolio/1.jpg",
        title: "e-commerce wordPress website.",
        link: "",
        category: "wordpress"
      },
      {
        img: "portfolio/4.jpg",
        title: "tour & trips website",
        link: "",
        category: "web"
      },
      {
        img: "portfolio/3.jpg",
        title: "tour & trips wordPress website",
        link: "",
        category: "wordpress"
      },
      {
        img: "portfolio/2.jpg",
        title: "travel agency design",
        link: "",
        category: "design"
      },
      {
        img: "portfolio/5.jpg",
        title: "education platforme website",
        link: "",
        category: "web"
      },
      {
        img: "portfolio/6.jpg",
        title: "design education platforme website",
        link: "",
        category: "design"
      },
      {
        img: "portfolio/7.jpg",
        title: "blog wordPress website",
        link: "",
        category: "wordpress"
      },
      {
        img: "portfolio/4.jpg",
        title: "medical agency website",
        link: "",
        category: "web"
      },
      {
        img: "portfolio/6.jpg",
        title: "design medical agency website",
        link: "",
        category: "design"
      }
    ]
    const [filtredProjects, setFiltredProjects] = useState(projects);
    // useEffect(() => {
    //   if (activeCategory === "all") {
    //     setFiltredProjects(projects);
    //   } else {
    //     setFiltredProjects(projects.filter((item) => (item.category === activeCategory)))
  
    //   }
    // }, [activeCategory])
    return (
      // "homepage": "https://laila-saw.github.io",
      <section className="portfolio section" id='portfolio'>
        <h1 className="section_title">portfolio</h1>
        <h2 className="section_subtitle">latest worked projects</h2>
        <div className="container portfolio_container">
          <div className="portfolio_filters cap">
            {
              categories.map((category, i) => (
                <span
                  key={i}
                  className={activeCategory === category.class
                    ? "active portfolio_filter " + category.class
                    : "portfolio_filter " + category.class}
                  onClick={() => setTimeout(() => {
                    setActiveCategory(category.class)
                  }, 200)} >
                  {category.name}
                </span>
              ))
            }
          </div>
          <div className="portfolio_content">
            {
              filtredProjects.map((project, i) => (
                <div key={i} className={activeCategory === project.category || activeCategory === "all" ? "show portfolio_card" : "hide portfolio_card"}>
                  <img src={PF + project.img} alt="" className="portfolio_img" />
                  <h2 className="portfolio_title">{project.title}</h2>
                  <div className="portfolio_buttons">
                    <TooltipLink path="/" tooltipContent="view demo" tooltipIcon={<OndemandVideo className="icon" />} />
                    <TooltipBtn tooltipContent="used technology" tooltipIcon={<CallMade className="icon" />} />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    )
  }
  // !portfolio
  
  // subscribe
  function Subscribe() {
    return (
      <section className="subscribe section" id='subscribe'>
        <h1 className="section_title">subscribe</h1>
        <h2 className="section_subtitle">become a subscriber</h2>
        <div className="container subscribe_container ">
          <div className="subscribe_content">
            <p className="subscribeDesc">
              subscribe to our blog and get the latest updates straight to your inbox. <br />
              we don't share your informations.
            </p>
            <form className="subscribeForm">
              <input type="email" placeholder='Email Address' />
              <button className="send-btn"><CallMade className="send-icon" /></button>
            </form>
          </div>
        </div>
      </section>
    )
  }
  // !subscribe
  // team
  function Team() {
    const team = [
      {
        picture: "",
        name: "jane hego",
        city: "paris, fran",
        job: "designer",
        facebook: "",
        github: "",
        twitter: "",
        youtube: "",
        linkedin: "",
      },
      {
        picture: "",
        name: "jhon smeeth",
        city: "new",
        job: "front-end developer",
        facebook: "",
        github: "",
        twitter: "",
        youtube: "",
        linkedin: "",
      },
      {
        picture: "",
        name: "cristina molez",
        city: "malizia",
        job: "back-end developer",
        facebook: "",
        github: "",
        twitter: "",
        youtube: "",
        linkedin: "",
      },
      {
        picture: "",
        name: "cristiano rorando 😂",
        city: "espaniol, madrid",
        job: "manager",
        facebook: "",
        github: "",
        twitter: "",
        youtube: "",
        linkedin: "",
      },
      {
        picture: "",
        name: "selena gomes",
        city: "loce angeloce",
        job: "marketing",
        facebook: "",
        github: "",
        twitter: "",
        youtube: "",
        linkedin: "",
      },
      {
        picture: "",
        name: "jestien beiber",
        city: "packistan",
        job: "infografist",
        facebook: "",
        github: "",
        twitter: "",
        youtube: "",
        linkedin: "",
      },
      {
        picture: "",
        name: "ribicka jhoness",
        city: "india , delhi",
        job: "react developer",
        facebook: "",
        github: "",
        twitter: "",
        youtube: "",
        linkedin: "",
      },
    ];
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return (
      <section className="team section" id='team'>
        <h1 className="section_title">Our team</h1>
        <h2 className="section_subtitle">who work with us</h2>
        <div className=" team_container container">
          <Carousel
            responsive={responsive}
            infinite={true}
  
          >
  
            {
              team.map((member, i) => (
                <div className="team_card" key={i}>
                  <div className="front_face">
                    <div className="contents front">
                      <p className="cap">{member.name}</p>
                      <span className='cap'>{member.city}</span>
                    </div>
                  </div>
                  <div className='back_face'>
                    <div className="contents back">
                      <h2 className="cap">{member.job}</h2>
                      <span className='cap'>follow me </span>
                      <div className="icons">
                        <LinkR to="http://facebook.com" target="_blank" rel="noopener noreferrer"><GitHub className="icon" /></LinkR>
                        <LinkR to="http://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="icon" /></LinkR>
                        <LinkR to="http://facebook.com" target="_blank" rel="noopener noreferrer"><Twitter className="icon" /></LinkR>
                        <LinkR to="http://facebook.com" target="_blank" rel="noopener noreferrer"><LinkedIn className="icon" /></LinkR>
                        <LinkR to="http://facebook.com" target="_blank" rel="noopener noreferrer"><YouTube className="icon" /></LinkR>
                      </div>
                    </div>
                  </div>
                </div>
              ))
  
            }
          </Carousel>
        </div>
      </section>
    )
  }
  // !team 
  // latestBlog
  function LatestBlog() {
    const blogs = [
      {
        img: "blog/1.jpg",
        date: "02/01/2022",
        category: "web development",
        title: "5 raisons why you should learn web development!",
        desc: "",
        comment: 10,
        view: "6K"
      },
      {
        img: "blog/2.jpg",
        date: "03/01/2022",
        category: "marketing",
        title: "best startigies for great marketing",
        desc: "",
        comment: 20,
        view: "10M"
      },
      {
        img: "blog/3.jpg",
        date: "04/01/2022",
        category: "artificial intelegence",
        title: "can artificial intelegence replace humans ?",
        desc: "",
        comment: 33,
        view: "12K"
      },
    ]
    return (
      <section className="latestBlog section" id='blog'>
        <h1 className="section_title">news</h1>
        <h2 className="section_subtitle">our latest blogs with trending topic for this week</h2>
        <div className="container latestBlog_container ">
          {
            blogs.map((blog, i) => (
              <Blog_card
                key={i}
                img={blog.img}
                date={blog.date}
                category={blog.category}
                title={blog.title}
                comment={blog.comment}
                view={blog.view}
                readMoreIcon
                desc
                nbCharactereOfDesc={70}
              />
            )
            )
          }
        </div>
        <GoLink custumClass="latestBlog_link" path="/blog" linkContent="see all blogs" />
      </section>
    )
  }
  // !latestBlog
  // single blog card 
  function Blog_card(
    {
      img,
      link,
      date,
      category,
      title,
      desc,
      nbCharactereOfDesc,
      comment,
      view,
      readMoreBtn,
      readMoreIcon,
      author
    }) {
    const string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum unde suscipit esse, error asperiores accusamus beatae earum dolore hic harum quidem possimus! Iste dolore vero esse, ratione pariatur reiciendis suscipit tempore dolores error, magnam ipsum odio! Voluptatibus omnis quaerat odit accusamus perspiciatis. Nesciunt magnam aperiam placeat aspernatur! Obcaecati quae velit illum dolorum neque dolore reiciendis atque sit vel expedita minima odio sunt qui, accusamus itaque, aspernatur odit. Ea, facilis maiores.";
    return (
      <div className="latestBlog_card cap">
        <div className="latestBlog_img">
          <img src={PF + img} alt="" />
          {
            readMoreIcon &&
            <LinkR to="/post/postId" className="blog_link"><CallMade className="go-icon" /></LinkR>
          }
          <span>read more</span>
        </div>
        <div className="blog_data">
          <div className="blog_info">
            <div className="blog_info_item">
              <DateRangeOutlined className="blog_info_icon" />
              <span className="blog_info_text">{date}</span>
            </div>
            <div className="blog_info_item">
              <SellOutlined className="blog_info_icon" />
              <span className="blog_info_text">{category}</span>
            </div>
            {
              author &&
              <div className="blog_info_item author">
                <PersonOutlineOutlined className="blog_info_icon" />
                <span className="blog_info_text ">by {author}</span>
              </div>
            }
          </div>
          <h2 className="blog_title">{title}</h2>
          {
            desc &&
            <p className="blog_desc">
              {string.substring(0, nbCharactereOfDesc)
                + (string.substring(0, nbCharactereOfDesc).length < string.length
                  ? "..."
                  : ""
                )}
            </p>
          }
          {
            readMoreBtn && <GoLink path="/post/postId" linkContent="read more" />
          }
          <div className="blog_footer">
            <div className="blog_footer_item">
              <ChatBubbleOutline className="icon" /> <span>{comment}</span>
            </div>
            <div className="blog_footer_item">
              <VisibilityOutlined className="icon" /> <span>{view}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  // !single blog card 
  // latestBlog2
  function LatestBlog2() {
    const blogs = [
      {
        img: "blog/1.jpg",
        date: "02/01/2022",
        category: "web development",
        title: "5 raisons why you should learn web development!",
        comment: 10,
        view: "6K"
      },
      {
        img: "blog/2.jpg",
        date: "03/01/2022",
        category: "marketing",
        title: "best startigies for great marketing",
        comment: 20,
        view: "10M"
      },
      {
        img: "blog/3.jpg",
        date: "04/01/2022",
        category: "artificial intelegence",
        title: "can artificial intelegence replace humans ?",
        comment: 33,
        view: "12K"
      },
      {
        img: "blog/1.jpg",
        date: "02/01/2022",
        category: "web development",
        title: "5 raisons why you should learn web development!",
        comment: 10,
        view: "6K"
      },
      {
        img: "blog/2.jpg",
        date: "03/01/2022",
        category: "marketing",
        title: "best startigies for great marketing",
        comment: 20,
        view: "10M"
      },
      {
        img: "blog/3.jpg",
        date: "04/01/2022",
        category: "artificial intelegence",
        title: "can artificial intelegence replace humans ?",
        comment: 33,
        view: "12K"
      },
    ]
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return (
      <section className="latestBlog section" id='blog'>
        <h1 className="section_title">Latest Blog</h1>
        <div className="container latestBlog_container blogCarousel">
          <Carousel
            responsive={responsive}
            infinite={true}
  
          >
            {
              blogs.map((blog, i) => (
                <Blog_card
                  key={i}
                  img={blog.img}
                  date={blog.date}
                  category={blog.category}
                  title={blog.title}
                  comment={blog.comment}
                  view={blog.view}
                  readMoreIcon
                />
              )
              )
            }
          </Carousel>
        </div>
      </section>
    )
  }
  // !latestBlog2
  // testimonial
  function Testimonial() {
    const testimonial = [
      {
        name: "alex smith",
        job: "designer | developer",
        nbStars: "1", // number from 1 to 5 *
        img: "blog/1.png",
        msg: "",
      },
      {
        name: "alex smith 2",
        job: "designer ",
        nbStars: 2.5, // number from 1 to 5 *
        img: "blog/1.png",
        msg: "",
      },
      {
        name: "alex smith",
        job: "developer",
        nbStars: "5", // number from 1 to 5 *
        img: "blog/1.png",
        msg: "",
      },
      {
        name: "alex smith",
        job: "software engeener",
        nbStars: "3", // number from 1 to 5 *
        img: "blog/1.png",
        msg: "",
      },
    ];
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return (
      <section className="testimonial section" id='testimonial'>
        <h1 className="section_title">testimonial</h1>
        <h2 className="section_subtitle">Meet Client Satisfaction</h2>
        <div className=" testimonial_container container ">
          <Carousel
            responsive={responsive}
            infinite={true}
  
          >
            {
              testimonial.map((testi, i) => (
                <div className="testimonial_box" key={i}>
                  <FormatQuoteRounded className="quote" />
                  <p className="testimonial_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laudantium eos itaque ad aut voluptas non magnam, officiis officia eius!
                  </p>
                  <div className="testimonial_content flex">
                    <div className="info">
                      <div className="name cap">{testi.name}</div>
                      <div className="job cap">{testi.job}</div>
                      <div className="stars">
                        <Stack spacing={1}>
                          <Rating
                            defaultValue={2.5}
                            readOnly />
                        </Stack>
                      </div>
                    </div>
                    <div className="image"><img src={PF + "blog/1.jpg"} alt="" /></div>
                  </div>
                </div>
              ))
            }
          </Carousel>
        </div>
      </section>
    )
  }
  // !testimonial
  // contact 
  function Contact() {
    const ref=useRef();
    const [done,setDone]=useState(false);
    const [focusedusername,setFocusedusername]=useState(false);
    const [focusedemail,setFocusedemail]=useState(false);
    const [focusedmsg,setFocusedmsg]=useState(false);
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [subject,setSubject]=useState('');
    const [msg,setMsg]=useState('');
    const errorMsg={
      username:"userName is requared *",
      email:"it should be a valid email address *",
      msg:"it can't be empty *"
    }
    function handleSubmit(e){
      e.preventDefault();
      emailjs.sendForm(
        'service_1n8kyu9', 
        'template_1ltr0lc', 
        ref.current, 
        'user_NNBXdn4rLyJZQVlfvqKbI')
      .then((result) => {
          console.log(result.text);
          setDone(true);
          setFocusedusername(false);
          setFocusedemail(false);
          setFocusedmsg(false);
          setUsername("");
          setEmail("");
          setSubject("");
          setMsg("");
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
      <section className="contact section" id='contact'>
        <h1 className="section_title">contact us</h1>
        <h2 className="section_subtitle">let's talk about projects.</h2>
        <div className="container contact_container">
          <div className="contact_composant">
            <div className="contact form">
              <h3 className="contact_title">send your message</h3>
              <form 
               ref={ref}
               onSubmit={handleSubmit}
              >
                <input 
                type="text" 
                value="contact" 
                hidden 
                name="what" />
                <div className="form_box">
                  <div className="row50">
                    <div className="inputBox">
                      <span>full name</span>
                      <input
                      onBlur={(e)=>setFocusedusername(true)}
                      focused={focusedusername.toString()}
                      required
                      value={username}
                      onChange={(e)=>setUsername(e.target.value)}
                      name="name" 
                      type="text" 
                      placeholder='Jhon' />
                      <Alert type="error" content={errorMsg.username}/>
                    </div>
                    <div className="inputBox">
                      <span>Adress Email</span>
                      <input 
                      onBlur={(e)=>setFocusedemail(true)}
                      focused={focusedemail.toString()}
                      required
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      name="email"
                      type="email" 
                      placeholder='exemple: Jhon@gmail.com' />
                      <Alert type="error" content={errorMsg.email}/>
                    </div>
                  </div>
                  <div className="row100">
                    <div className="inputBox">
                      <span>Subject</span>
                      <input 
                      onChange={(e)=>setSubject(e.target.value)}
                      value={subject}
                      name="subject"
                      type="text" 
                      placeholder='your subject..' />
                    </div>
                  </div>
                  <div className="row100">
                    <div className="inputBox">
                      <span>Message</span>
                      <textarea 
                      onBlur={(e)=>setFocusedmsg(true)}
                      focused={focusedmsg.toString()}
                      required
                      placeholder='Type your message..'
                      onChange={(e)=>setMsg(e.target.value)}
                      value={msg}
                      name='message'
                      ></textarea>
                      <Alert type="error" content={errorMsg.msg}/>
                    </div>
                  </div>
                  <div className="row100 rowBtn">
                    <button className="send-Btn">send message</button>
                    {done &&  <Alert type="success" content="thank you! we will contact you."/>}
                  </div>
                </div>
              </form>
            </div>
            <div className="contact info">
              <h3 className="contact_title">Contact info</h3>
              <InfoBox />
            </div>
            <div className="contact map">
              <iframe
                className='google_map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110098.31140221872!2d-9.647785508398593!3d30.419876344276886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e9daad1cc9%3A0xbcf8d0b78bf48474!2sAgadir%2080000!5e0!3m2!1sen!2sma!4v1645660999305!5m2!1sen!2sma"
                // width={600} 
                // height={450} 
                // style="border:0;" 
                // allowfullscreen="" 
                loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </section>
    )
  }
  // !contact 
  // faq
  function Faq() {
    const [accordion, setAccordion] = useState("");
    function handleClick(id) {
      if (accordion === id) {
        setAccordion("");
      } else {
        setAccordion(id)
      }
    }
    const questions = [
      [
        {
          question: "",
          answer: ""
        },
        {
          question: "",
          answer: ""
        },
        {
          question: "",
          answer: ""
        }
      ],
      [
        {
          question: "",
          answer: ""
        },
        {
          question: "",
          answer: ""
        },
        {
          question: "",
          answer: ""
        }
      ],
  
    ]
    return (
      <section className="Faq section" id='Faq' >
        <h1 className="section_title">FAQ</h1>
        <h2 className="section_subtitle">Some of commun questions.were often asked </h2>
        <div className="container Faq_container">
          {
            questions.map((q, i) => (
              <div className="questions_group" key={i}>
                {
                  questions[i].map((item, j) => (
                    <div key={j} className={accordion === i + "-" + j ? "open questions_item" : "questions_item"}>
                      <header className="questions_header" onClick={() => handleClick(i + "-" + j)}>
                        <h3 className="question_text">Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
                        <span className="question_icon"></span>
                      </header>
                      <div
                        className="question_content">
                        <p className="question_desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, praesentium.</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </section>
    )
  }
  // !faq
  
  // ********************************************
  // BlogFeed
  function BlogFeed() {
    
    const blogs = [
      {
        img: "blog/1.jpg",
        date: "02/01/2022",
        category: "web development",
        title: "5 raisons why you should learn web development! 1",
        desc: "",
        comment: 10,
        view: "6K"
      },
      {
        img: "blog/2.jpg",
        date: "03/01/2022",
        category: "marketing",
        title: "best startigies for great marketing 2",
        desc: "",
        comment: 20,
        view: "10M"
      },
      {
        img: "blog/3.jpg",
        date: "04/01/2022",
        category: "artificial intelegence",
        title: "can artificial intelegence replace humans ? 3",
        desc: "",
        comment: 33,
        view: "12K"
      },
      {
        img: "blog/1.jpg",
        date: "02/01/2022",
        category: "web development",
        title: "5 raisons why you should learn web development! 4",
        desc: "",
        comment: 10,
        view: "6K"
      },
      {
        img: "blog/2.jpg",
        date: "03/01/2022",
        category: "marketing",
        title: "best startigies for great marketing 5",
        desc: "",
        comment: 20,
        view: "10M"
      },
      {
        img: "blog/3.jpg",
        date: "04/01/2022",
        category: "artificial intelegence",
        title: "can artificial intelegence replace humans ? 6",
        desc: "",
        comment: 33,
        view: "12K"
      },
      {
        img: "blog/1.jpg",
        date: "02/01/2022",
        category: "web development",
        title: "5 raisons why you should learn web development! 7",
        desc: "",
        comment: 10,
        view: "6K"
      },
      {
        img: "blog/2.jpg",
        date: "03/01/2022",
        category: "marketing",
        title: "best startigies for great marketing 8",
        desc: "",
        comment: 20,
        view: "10M"
      },
      {
        img: "blog/3.jpg",
        date: "04/01/2022",
        category: "artificial intelegence",
        title: "can artificial intelegence replace humans ? 9",
        desc: "",
        comment: 33,
        view: "12K"
      },
    ]
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost)
    function prevClick() {
      setCurrentPage(currentPage - 1)
    }
    function nextClick() {
      setCurrentPage(currentPage + 1)
      blogFeed.current.scrollIntoView()
    }
    let numberOfPage = Math.ceil(blogs.length / postsPerPage)
    const blogFeed=useRef(null) 
    return (
      <div ref={blogFeed} className="blogFeed_container container">
        <div className="blogFeed_main fullwidth">
          
          <div className="blogFeed_blogs">
            {
              currentPosts.map((blog, i) => (
                <Blog_card
                  key={i}
                  img={blog.img}
                  date={blog.date}
                  category={blog.category}
                  title={blog.title}
                  comment={blog.comment}
                  view={blog.view}
                  readMoreBtn
                  desc
                  nbCharactereOfDesc={200}
                  author="Admin"
                />
              )
              )
            }
          </div>
          <div className={currentPage <= 1 ? "disabledprev pagination" : currentPage >= numberOfPage ? "disablednext pagination" : "pagination"}>
            <TooltipBtn
              custumClass="prev"
              tooltipContent="precedent"
              handleClick={prevClick}
              tooltipIcon={<ArrowLeft className="icon"
              />} />
            <span className="pagination_page">{currentPage}/{numberOfPage}</span>
            <TooltipBtn custumClass="next" tooltipContent="next" handleClick={nextClick} tooltipIcon={<ArrowRight className="icon" />} />
          </div>
        </div>
        <Sidebar />
      </div>
    )
  }
  // !BlogFeed
  // BlogFeed
  function PostFeed() {
    const post =
    {
      img: "blog/1.jpg",
      date: "02/01/2022",
      category: "web development",
      title: "5 raisons why you should learn web development! 1",
      desc: "c",
      comment: 10,
      view: "6K"
    }
    const [save, setSave] = useState(false);
    const ref=useRef();
    const [done,setDone]=useState(false);
    const [focusedusername,setFocusedusername]=useState(false);
    const [focusedemail,setFocusedemail]=useState(false);
    const [focusedmsg,setFocusedmsg]=useState(false);
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [msg,setMsg]=useState('');
    const errorMsg={
      username:"userName is requared *",
      email:"it should be a valid email address *",
      msg:"it can't be empty *"
    }
    function handleSubmit(e){
      e.preventDefault();
      emailjs.sendForm(
        'service_1n8kyu9', 
        'template_1ltr0lc', 
        ref.current, 
        'user_NNBXdn4rLyJZQVlfvqKbI')
      .then((result) => {
          console.log(result.text);
          setDone(true);
          setFocusedusername(false);
          setFocusedemail(false);
          setFocusedmsg(false);
          setUsername("");
          setEmail("");
          setMsg("");
          setSave(true);
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
      <div className="blogFeed_container container">
        <div className="blogFeed_main fullwidth">
          <div className="blogFeed_blogs">
            {
              <Blog_card
                img={post.img}
                date={post.date}
                category={post.category}
                title={post.title}
                comment={post.comment}
                view={post.view}
                desc
                author="Admin"
              />
            }
            <form 
            ref={ref}
            onSubmit={handleSubmit}>
              <h2 className="sidebar_widget_title">Leave comment  </h2>
              <div className="form_box">
                <input 
                type="text" 
                value="comment" 
                hidden 
                name="what" />
                <div className="row50">
                <div className="inputBox">
                      <span>userName</span>
                      <input
                      onBlur={(e)=>setFocusedusername(true)}
                      focused={focusedusername.toString()}
                      required
                      value={username}
                      onChange={(e)=>setUsername(e.target.value)}
                      name="name" 
                      type="text" 
                      placeholder='Jhon' />
                      <Alert type="error" content={errorMsg.username}/>
                    </div>
                  <div className="inputBox">
                      <span>Adress Email</span>
                      <input 
                      onBlur={(e)=>setFocusedemail(true)}
                      focused={focusedemail.toString()}
                      required
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      name="email"
                      type="email" 
                      placeholder='exemple: Jhon@gmail.com' />
                      <Alert type="error" content={errorMsg.email}/>
                    </div>
                </div>
                <div className="row100">
                <div className="inputBox">
                      <span>comment</span>
                      <textarea 
                      onBlur={(e)=>setFocusedmsg(true)}
                      focused={focusedmsg.toString()}
                      required
                      placeholder='Type your comment..'
                      onChange={(e)=>setMsg(e.target.value)}
                      value={msg}
                      name='message'
                      ></textarea>
                      <Alert type="error" content={errorMsg.msg}/>
                    </div>
                </div>
                <div className="row100 rowSave">
                  <input
                    type="radio"
                    id="save"
                    name='saveInput'
                    hidden
                    checked={save}
                    onChange={(e) => e.target.value} />
                    <input 
                    type="text" 
                    value={save ? "save me" : "don't save me"}
                    hidden
                    onChange={(e) => e.target.value} 
                    name="save" />
                  <label htmlFor="save" className={save ? "checked custum_radio_btn" : "custum_radio_btn"} onClick={() => setSave(!save)}>
                    <div className="custum_radio_contain"></div>
                    <p>Save my name, email, and website in this browser for the next time I comment.</p>
                  </label>
  
                </div>
                <div className="row100 rowBtn">
                  <button className="send-Btn">send Comment</button>
                  {done &&  <Alert type="success" content="thank you for your comment. it will be published after checking."/>}
                </div>
              </div>
            </form>
            <div className="comments_container">
              <h2 className="sidebar_widget_title">Comment (4) </h2>
              <div className="comments_group cap">
                <div className="comments_item">
                  <div className="comment_infos">
                    <div className="comment_info username">Lorem123</div>
                    <div className="comment_info date">on 13/12/2021</div>
                  </div>
                  <p className="comment_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </div>
                <div className="comments_item">
                  <div className="comment_infos">
                    <div className="comment_info username">Lorem123</div>
                    <div className="comment_info date">on 13/12/2021</div>
                  </div>
                  <p className="comment_text">
                    Lorem.
                  </p>
                  <div className="comment_reply">
                    <img src="./favicon-32x32.png" alt="" className="img_admin_reply" />
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  </div>
                </div>
                <div className="comments_item">
                  <div className="comment_infos">
                    <div className="comment_info username">Lorem123</div>
                    <div className="comment_info date">on 13/12/2021</div>
                  </div>
                  <p className="comment_text">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                  </p>
                </div>
                <div className="comments_item">
                  <div className="comment_infos">
                    <div className="comment_info username">Lorem123</div>
                    <div className="comment_info date">on 13/12/2021</div>
                  </div>
                  <p className="comment_text">
                    Lorem ipsum dolor ?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    )
  }
  // !BlogFeed
  // sidebar 
  function Sidebar() {
    const categories = [
      {
        name: "design ui/ux",
        nbposts: "13"
      },
      {
        name: "NFTS",
        nbposts: "10"
      },
      {
        name: "wordpress",
        nbposts: "16"
      },
      {
        name: "django",
        nbposts: "22"
      },
      {
        name: "react js",
        nbposts: "15"
      },
      {
        name: "artificial intelegence",
        nbposts: "17"
      },
      {
        name: "marketing",
        nbposts: "7"
      },
      {
        name: "e-commerce",
        nbposts: "9"
      },
      {
        name: "tour & travels",
        nbposts: "8"
      }
    ]
    const blogs = [
      {
        img: "blog/1.jpg",
        date: "02/01/2022",
        category: "web development",
        title: "5 raisons why you should learn web development! 1",
        desc: "",
        comment: 10,
        view: "6K"
      },
      {
        img: "blog/2.jpg",
        date: "03/01/2022",
        category: "marketing",
        title: "best startigies for great marketing 2",
        desc: "",
        comment: 20,
        view: "10M"
      },
      {
        img: "blog/3.jpg",
        date: "04/01/2022",
        category: "artificial intelegence",
        title: "can artificial intelegence replace humans ? 3",
        desc: "",
        comment: 33,
        view: "12K"
      },
      {
        img: "blog/1.jpg",
        date: "02/01/2022",
        category: "web development",
        title: "5 raisons why you should learn web development! 4",
        desc: "",
        comment: 10,
        view: "6K"
      },
      {
        img: "blog/2.jpg",
        date: "03/01/2022",
        category: "marketing",
        title: "best startigies for great marketing 5",
        desc: "",
        comment: 20,
        view: "10M"
      },
      {
        img: "blog/3.jpg",
        date: "04/01/2022",
        category: "artificial intelegence",
        title: "can artificial intelegence replace humans ? 6",
        desc: "",
        comment: 33,
        view: "12K"
      },
    ]
    return (
      <div className="blogFeed_sidebar">
        <div className="sidebar_widget">
          <h2 className="sidebar_widget_title">most popular posts </h2>
          <div className="sidebar_widget_posts">
            {
              blogs.map((item, i) => (
                <div key={i} className="widget_post">
                  <div className="widget_post_img">
                    <img src={PF + item.img} alt="" />
                  </div>
                  <div className="widget_post_info">
                    <h2 className="widget_post_title">{item.title}</h2>
                    <div className="widget_post_date">{item.date}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="sidebar_widget">
          <h2 className="sidebar_widget_title">categories</h2>
          <div className="widget_categories">
            {
              categories.map((item, i) => (
                <div key={i} className="widget_category">
                  <div className="widget_category_name cap">{item.name}</div>
                  <div className="widget_category_number">({item.nbposts})</div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="sidebar_widget">
          <h2 className="sidebar_widget_title">main tags</h2>
          <div className="widget_tags">
            <div className="widget_tag">
              html
            </div>
            <div className="widget_tag">
              css
            </div>
            <div className="widget_tag">
              javascript
            </div>
            <div className="widget_tag">
              react
            </div>
            <div className="widget_tag">
              django
            </div>
            <div className="widget_tag">
              express
            </div>
            <div className="widget_tag">
              nodejs
            </div>
          </div>
        </div>
      </div>
    )
  }
  // sidebar 
  
  // serviceDesc 
  function ServiceDesc() {
    const [selectedSlide,setSelectedSlide]=useState(0);
    function handleClick(id){
      setSelectedSlide(id);
    }
    function rightClick(){
      if(selectedSlide<singleService[0].images.length-1){
        setSelectedSlide(selectedSlide+1);
      }
      else{
        setSelectedSlide(0);
      }
    }
    function leftClick(){
      if(selectedSlide>0){
        setSelectedSlide(selectedSlide-1);
      }
      else{
        setSelectedSlide(singleService[0].images.length-1);
      }
    }
    const {serviceId}=useParams();
    const [singleService,setSingleService]=useState(services);
    useEffect(() => {
      setSelectedSlide(0)
      setSingleService(services.filter((item)=>(item.laila===serviceId)))
    }, [serviceId])
    
    return (
      <section className="section serviceDesc" id="serviceDesc" style={{paddingTop:"100px"}}>
        <h1 className="section_title">{singleService[0].title} </h1>
        <h2 className="section_subtitle">Service description & used technology</h2>
        <div className="container serviceDesc_container">
        <div className="carouselContainer">
            <div className="serviceDesc_controller">
              <ArrowLeft className="icon" onClick={()=>leftClick()}/>
              <ArrowRight className="icon" onClick={()=>rightClick()}/>
              </div>
            {
              singleService[0].images.map((slide, i) => (
                <div key={i} className={"serviceDesc_img_container img-"+ i}>
                  <img src={PF + "services/" + slide } alt="" className={selectedSlide===i ? "selected serviceDesc_img " : "serviceDesc_img"} />
                </div>
              ))
            }
            <div className="serviceDesc_sliders">{
              singleService[0].images.map((slide,i)=>(
              <label 
              key={i} 
              onClick={()=>handleClick(i)}
              style={{backgroundColor:selectedSlide===i && "var(--first-color)"}}></label>
              ))
            }
            </div>
          </div>
          <div className="serviceDesc_text">
            <h2 className="serviceDesc_title">about {singleService[0].title}</h2>
            <div className="serviceDesc_para">
            {singleService[0].about}
              </div>
              <h2 className="serviceDesc_title">why choose this service</h2>
              <ul className="serviceDesc_features">
                {
                  singleService[0].whyUs.map((item,i)=>(
                    <li key={i} className="serviceDesc_feature">
                  <Check className="icon"/>
                  {item}
                  </li>
                  ))
                }
                </ul>
          </div>
        </div>
      </section>
    )
  }
  // !serviceDesc
  // ChooseService
  function ChooseService() {
    const [selectedTable,setSelectedTable]=useState("other")
    const {serviceId}=useParams();
    const [singleService,setSingleService]=useState(services);
    useEffect(() => {
      setSingleService(services.filter((item)=>(item.laila===serviceId)))
    }, [serviceId])
    const form = useRef();
    const [done,setDone]=useState(false);
    const [focusedusername,setFocusedusername]=useState(false);
    const [focusedemail,setFocusedemail]=useState(false);
    const [focusedmsg,setFocusedmsg]=useState(false);
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [subject,setSubject]=useState('');
    const [msg,setMsg]=useState('');
    const [opendropdown,setOpendropdown]=useState(false);
    const errorMsg={
      username:"userName is requared *",
      email:"it should be a valid email address *",
      msg:"it can't be empty *"
    }
    function handleSubmit(e){
      e.preventDefault();
      emailjs.sendForm(
        'service_1n8kyu9', 
        'template_8ic2cn5', 
        form.current, 
        'user_NNBXdn4rLyJZQVlfvqKbI')
        .then((result) => {
          console.log(result.text);
          setDone(true);
          setFocusedusername(false);
          setFocusedemail(false);
          setFocusedmsg(false);
          setUsername("");
          setEmail("");
          setSubject("");
          setMsg("");
          setSelectedTable("other");
          setTimeout(() => {
            setDone(false);
          }, 9000);
        }, (error) => {
            console.log(error.text);
        });
    }
    return (
      <section className="section chooseService" id="chooseService">
        {
        singleService[0].packages.length> 0 
        ? <>
        <h1 className="section_title">pricing  </h1>
        <h2 className="section_subtitle">you can choose one of this packages or custumise your order.</h2>
        </> 
        : ""
        }
        
        <div className="container chooseService_container">
          <form ref={form} onSubmit={handleSubmit}>
          <div className="pricing pricing_container flex">
          {
            singleService[0].packages.map((table,i)=>(
              <input 
              key={i} 
              type="radio" 
              name="pricing" 
              hidden 
              onChange={(e)=>e.target.value}
              checked={selectedTable===table.name && true} 
              id={table.name} />
            ))
          }
          {
            singleService[0].packages.map((table, i) => (
              <div className={"table " + table.name} key={i}>
                {table.name === "standard" && <div className="ribbon"><span>Recommended</span></div>}
  
                <div className="price-section">
                  <div className="price-area">
                    <div className="inner-area">
                      <span className="text">$</span>
                      <span className="price">{table.price}</span>
                    </div>
                  </div>
                </div>
                <div className="package-name cap" data-target={table.name}></div>
                <ul className="package-features">
                  {
                    table.services.map((feature, j) => (
                      <li className="package-features-item" key={j}>
                        <span className="list-name cap">{feature.name}</span>
                        {feature.isExist
                          ? <CheckRounded className="list-icon check" />
                          : <CloseRounded className="list-icon times" />
                        }
                      </li>
                    ))
                  }
                </ul>
  
                <div className="buttonContainer">
                  <label
                    htmlFor={table.name}
                    className="pricing_btn"
                    onClick={
                      () => {
                        selectedTable === table.name
                          ? setSelectedTable("other")
                          : setSelectedTable(table.name)
                      }
                    }
                  >
                    {selectedTable === table.name ? <>selected<Check className="icon" /> </> : "select"}
                  </label>
                </div>
              </div>
            ))
          }
        </div>
            <div className="contact_composant">
            <div className="contact form">
              <h3 className="contact_title">send your message</h3>
              <div className="form_box">
                  <div className="row50">
                    <div className="inputBox">
                      <span>full name</span>
                      <input
                      onBlur={(e)=>setFocusedusername(true)}
                      focused={focusedusername.toString()}
                      required
                      value={username}
                      onChange={(e)=>setUsername(e.target.value)}
                      name="name" 
                      type="text" 
                      placeholder='Jhon' />
                      <Alert type="error" content={errorMsg.username}/>
                    </div>
                    <div className="inputBox">
                      <span>Adress Email</span>
                      <input 
                      onBlur={(e)=>setFocusedemail(true)}
                      focused={focusedemail.toString()}
                      required
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      name="email"
                      type="email" 
                      placeholder='exemple: Jhon@gmail.com' />
                      <Alert type="error" content={errorMsg.email}/>
                    </div>
                  </div>
                  <div className="row50">
                    <div className="inputBox" style={{width:singleService[0].packages.length> 0 ? "50%" : "100%"}}>
                      <span>Subject</span>
                      <input 
                      onChange={(e)=>setSubject(e.target.value)}
                      value={subject}
                      name="subject"
                      type="text" 
                      placeholder='your subject..' />
                    </div>
                    {
                      singleService[0].packages.length> 0 
                      ? 
                      <div className="inputBox">
                      <span>package</span>
                      <div className={opendropdown ? "open custumSelect cap" :"custumSelect cap"}>
                        <div className="custumSelectTop" onClick={()=>setOpendropdown(!opendropdown)}>
                          {selectedTable!== "other" ? selectedTable : "other" } 
                          <KeyboardArrowDown className="icon"/>
                          </div>
                          <div  className="custumSelectBottom">
                          {
                            singleService[0].packages.map((table, i) => (
                              <div
                                  key={i}
                                  className="custumSelectBottomItem"
                                  onClick={() => {
                                    setSelectedTable(table.name)
                                    setOpendropdown(false)
                                  }}>
                                  {table.name}
                                </div>
                            ))
                          }
                            {selectedTable!== "other" && <div 
                            className="custumSelectBottomItem" 
                            onClick={()=>{
                              setSelectedTable("other")
                              setOpendropdown(false)
                              }}>other</div>}
                            </div>
                        </div>
                    </div>
                    : ""
                    }
                    <input 
                        hidden
                        name='service'
                        type="text" 
                        onChange={(e)=>setSubject(e.target.value)}
                        value={serviceId} />
                        <input 
                        onChange={(e)=>setSubject(e.target.value)}
                        hidden
                        name='package'
                        type="text" 
                        value={selectedTable!=="other" ? selectedTable : "other"} />
                  </div>
                  <div className="row100">
                    <div className="inputBox">
                      <span>Message</span>
                      <textarea 
                      onBlur={(e)=>setFocusedmsg(true)}
                      focused={focusedmsg.toString()}
                      required
                      placeholder='Type your message..'
                      onChange={(e)=>setMsg(e.target.value)}
                      value={msg}
                      name='message'
                      ></textarea>
                      <Alert type="error" content={errorMsg.msg}/>
                    </div>
                  </div>
                  <div className="row100 rowBtn">
                    <button className="send-Btn">send message</button>
                    {done &&  <Alert type="success" content="thank you ! We will contact you."/>}
                  </div>
                </div>
            </div>
              <div className="contact info">
                <h3 className="contact_title">Contact info</h3>
                <InfoBox />
              </div>
              <div className="contact map">
                <iframe
                  className='google_map'
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110098.31140221872!2d-9.647785508398593!3d30.419876344276886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e9daad1cc9%3A0xbcf8d0b78bf48474!2sAgadir%2080000!5e0!3m2!1sen!2sma!4v1645660999305!5m2!1sen!2sma"
                  loading="lazy"></iframe>
              </div>
            </div>
          </form>
          </div>
      </section>
    )
  }
  // !ChooseService
  // footer
  function Footer() {
    return (
      <footer>
        <div className="footer_container">
          <div className="footerLeft footerBox">
            <h2>About us</h2>
            <div className="footer_content">
              <div className='footerDesc'>
                <Logo />
                We help companies, big and small, discover what makes them unique and channel it into a memorable experience that outsells and outshines their competition online.
                </div>
            </div>
          </div>
          <div className="footerCenter footerBox">
            <h2>Info</h2>
            <div className="footer_content">
              <InfoBox />
            </div>
          </div>
          <div className="footerBox">
            <h2>subscribe</h2>
            <div className="footer_content">
              <div className='footerDesc'>
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <form className="subscribeForm">
                <input type="email" placeholder='Email Address' />
                <button className="send-btn"><CallMade className="send-icon" /></button>
              </form>
            </div>
          </div>
          <div className="footerRight footerBox">
            <h2>Usefull Links</h2>
            <div className="footer_content">
              <ul className="footerLinks cap">
                <li>
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    to="services"
                    className="link">services
                  </Link>
                </li>
                <li>
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    to="portfolio"
                    className="link">portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    to="blog"
                    className="link">blog
                  </Link>
                </li>
                <li>
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    to="contact"
                    className="link">contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer_bottom">created by  <Logo /> | <Copyright className="copyright" /> 2022 all rights reserved.</div>
      </footer>
    )
  }
  // !footer 
  // !components 
  export default App;
  