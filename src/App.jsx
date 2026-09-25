import { useState, useEffect } from "react";
import "./App.css";

import adasaLogo from "./assets/image/logo-GdqARQRt.png";

import FeaturedArticles from "./Component/FeaturedArticles/FeaturedArticles";
import CategoriesSection from "./Component/CategoriesSection/CategoriesSection";
import LatestArticles from "./Component/LatestArticles/LatestArticles";
import Newsletter from "./Component/Newsletter/Newsletter";
import Footer from "./Component/Footer/Footer";
import Blog from "./Component/Blog/Blog";
import About from "./Component/About/About";
import PrivacyPolicy from "./Component/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./Component/TermsOfService/TermsOfService";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setCurrentPage("blog");
  };

  const handleCategoryClick = (categoryName) => {
    console.log("Selected category:", categoryName);

    setSelectedPost(null);
    setSelectedCategory(categoryName);
    setCurrentPage("blog");
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const desktopNavButtonClass = (page) => `
    min-w-[84px]
    rounded-[30px]
    border-0
    px-5
    py-2.5
    text-center
    text-[14px]
    font-semibold
    transition-all
    duration-[250ms]
    ${currentPage === page
      ? "bg-linear-to-r from-[#FF6400] to-[#F84F00] text-white"
      : "bg-transparent text-[#777777] hover:text-white"
    }
  `;

  const mobileNavButtonClass = (page) => `
    flex
    h-[57px]
    w-full
    items-center
    justify-start
    rounded-[15px]
    border
    px-5
    text-right
    text-[16px]
    font-medium
    transition-colors
    duration-[250ms]
    ${currentPage === page
      ? "border-[#74320d] bg-[#2b190f] text-[#ff6500]"
      : "border-transparent bg-transparent text-[#a3a3a3]"
    }
  `;

  return (
    <main
      dir="rtl"
      className="
        min-h-screen
        overflow-x-clip
        overflow-y-visible
        bg-[#090909]
        pt-19.5
        text-white

        max-[768px]:pt-23
      "
    >
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className="
          fixed
          inset-x-0
          top-0
          z-1000
          h-19.5
          border-b
          border-[#252525]
          bg-[rgba(22,22,22,0.92)]
          backdrop-blur-md

          max-[768px]:h-23
          max-[768px]:bg-[rgba(20,20,20,0.98)]
        "
      >
        <div
          className="
            mx-auto
            flex
            h-full
            w-[min(1180px,calc(100%_-_48px))]
            items-center
            justify-between
            gap-7.5

            max-[768px]:w-full
            max-[768px]:gap-0
            max-[768px]:px-10

            max-[500px]:px-5.5
          "
        >
          {/* Logo */}
          <div
            className="
              flex
              cursor-pointer
              items-center
              gap-2.5

              max-[768px]:order-1
            "
            onClick={() => {
              setSelectedPost(null);
              setSelectedCategory(null);
              setCurrentPage("home");
              setIsMobileMenuOpen(false);

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            {/*  */}
            <img
              src={adasaLogo}
              alt="عدسة"
              onClick={() => {
                setSelectedPost(null);
                setSelectedCategory(null);
                setCurrentPage("home");
                setIsMobileMenuOpen(false);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="
             block
            h-12
          w-12
       cursor-pointer
    object-contain

    transition-transform
    duration-300
    ease-out

    hover:scale-110

    max-[768px]:h-14.5
    max-[768px]:w-14.5

    max-[500px]:h-13
    max-[500px]:w-13
  "
            />

            <div className="flex flex-col items-start">
              <h1
                className="
                  mt-2
                  text-[20px]
                  font-bold
                  text-gray-300

                  max-[768px]:mt-0
                  max-[768px]:text-[23px]
                  max-[768px]:leading-[1.1]

                  max-[500px]:text-[20px]
                "
              >
                عدسة
              </h1>

              <p
                className="
                  mb-1.25
                  whitespace-nowrap
                  text-[12px]
                  text-[#ff9d2ccc]

                  max-[768px]:mb-0
                  max-[768px]:mt-1.5
                  max-[768px]:text-[13px]
                  max-[768px]:text-[#d88719]

                  max-[500px]:text-[12px]
                "
              >
                عالم التصوير الفوتوغرافي
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="
              flex
              items-center
              gap-1
              rounded-[35px]
              border
              border-[#252525]
              bg-[#151515]
              p-1.25

              max-[768px]:hidden
            "
          >
            <button
              type="button"
              className={desktopNavButtonClass("home")}
              onClick={() => {
                setSelectedPost(null);
                setSelectedCategory(null);
                setCurrentPage("home");
              }}
            >
              الرئيسية
            </button>

            <button
              type="button"
              className={desktopNavButtonClass("blog")}
              onClick={() => {
                setSelectedPost(null);
                setSelectedCategory("جميع المقالات");
                setCurrentPage("blog");

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              المدونة
            </button>

            <button
              type="button"
              className={desktopNavButtonClass("about")}
              onClick={() => {
                setCurrentPage("about");
              }}
            >
              من نحن
            </button>
          </nav>

          {/* Desktop Actions */}
          <div
            className="
              flex
              items-center
              gap-2.5

              max-[768px]:hidden
            "
          >
            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              className="
                flex
                h-11.25
                w-11.25
                items-center
                justify-center
                rounded-[15px]
                border
                border-transparent
                bg-transparent
                text-[#777777]
                transition-all
                duration-200

                hover:border-[#292929]
                hover:bg-[#151515]
                hover:text-[#ff6500]
              "
            >
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
            </button>

            {/* Start Reading */}
            <button
              type="button"
              className="
                rounded-full
                border-0
                bg-linear-to-r
                from-[#F76F14]
                to-[#EE5F0F]
                px-7.75
                py-3.75
                text-[14px]
                font-extrabold
                text-white
                transition-transform
                duration-250

                hover:-translate-y-0.5
              "
              onClick={() => {
                setSelectedPost(null);
                setSelectedCategory("جميع المقالات");
                setCurrentPage("blog");
              }}
            >
              ابدأ القراءة
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              isMobileMenuOpen
                ? "إغلاق القائمة"
                : "فتح القائمة"
            }
            onClick={() =>
              setIsMobileMenuOpen((prev) => !prev)
            }
            className="
              hidden

              max-[768px]:order-2
              max-[768px]:flex
              max-[768px]:h-15
              max-[768px]:w-15
              max-[768px]:items-center
              max-[768px]:justify-center
              max-[768px]:rounded-[15px]
              max-[768px]:border
              max-[768px]:border-transparent
              max-[768px]:bg-transparent
              max-[768px]:p-0
              max-[768px]:text-[#9a9a9a]
              max-[768px]:transition-all
              max-[768px]:duration-250

              max-[768px]:hover:border-[#2b2b2b]
              max-[768px]:hover:bg-[#151515]
              max-[768px]:hover:text-white

              max-[768px]:[&_svg]:h-7
              max-[768px]:[&_svg]:w-7
            "
          >
            {isMobileMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        <div
          className={`
            absolute
            inset-x-0
            top-23
            hidden
            px-7.5
            pb-3
            pt-2.5
            transition-all
            duration-250

            max-[768px]:block

            max-[500px]:px-4

            ${isMobileMenuOpen
              ? "visible translate-y-0 opacity-100 pointer-events-auto"
              : "invisible -translate-y-2 opacity-0 pointer-events-none"
            }
          `}
        >
          <div
            className="
              flex
              w-full
              flex-col
              gap-1.25
              rounded-[20px]
              border
              border-[#2b2b2b]
              bg-[#151515]
              p-5
            "
          >
            <button
              type="button"
              className={mobileNavButtonClass("home")}
              onClick={() => {
                setSelectedPost(null);
                setSelectedCategory(null);
                setCurrentPage("home");
                setIsMobileMenuOpen(false);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              الرئيسية
            </button>

            <button
              type="button"
              className={mobileNavButtonClass("blog")}
              onClick={() => {
                setSelectedPost(null);
                setSelectedCategory("جميع المقالات");
                setCurrentPage("blog");
                setIsMobileMenuOpen(false);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              المدونة
            </button>

            <button
              type="button"
              className={mobileNavButtonClass("about")}
              onClick={() => {
                setCurrentPage("about");
                setIsMobileMenuOpen(false);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              من نحن
            </button>

            <button
              type="button"
              className="
                mt-2.5
                h-16.25
                w-full
                rounded-full
                border-0
                bg-[#ff6500]
                text-[17px]
                font-bold
                text-white
                transition-colors
                duration-250

                hover:bg-[#ff741c]
              "
              onClick={() => {
                setSelectedPost(null);
                setSelectedCategory("جميع المقالات");
                setCurrentPage("blog");
                setIsMobileMenuOpen(false);

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              ابدأ القراءة
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          PAGES
      ===================================================== */}

      {currentPage === "home" ? (
        <>
          {/* =================================================
              HERO
          ================================================= */}

          <section
            className="
              relative
              flex
              min-h-[calc(100vh-78px)]
              justify-center

              max-[768px]:min-h-0
              max-[768px]:pb-12.5
            "
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(255,255,255,0.055) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(255,255,255,0.055) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "58px 58px",
              backgroundPosition: "center top",
            }}
          >
            {/* Orange Glow */}
            <div
              className="
                pointer-events-none
                absolute
                left-[12%]
                top-[30%]
                z-0
                h-70
                w-70
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[rgba(255,105,0,0.13)]
                blur-[85px]

                max-[768px]:left-1/2
                max-[768px]:top-[35%]
                max-[768px]:h-105
                max-[768px]:w-90
                max-[768px]:blur-[100px]
              "
            />

            <div
              className="
                relative
                z-1
                flex
                w-full
                max-w-250
                flex-col
                items-center
                px-6
                pb-12.5
                pt-3
                text-center

                max-[768px]:mx-auto
                max-[768px]:max-w-180
                max-[768px]:px-5.5
              "
            >
              {/* Hero Badge */}
              <div
                className="
                  mt-16.25
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-[30px]
                  border
                  border-[#5E2B0E]
                  bg-[rgba(76,47,22,0.3)]
                  px-3
                  py-2.5
                  text-[14px]
                  font-medium
                  text-[#f4f4f4]

                  max-[768px]:mx-auto
                  max-[768px]:mb-5.5
                  max-[768px]:mt-0
                  max-[768px]:rounded-full
                  max-[768px]:px-5.5
                  max-[768px]:text-[20px]

                  max-[640px]:px-4
                  max-[640px]:py-2
                  max-[640px]:text-[14px]
                "
              >
                {/* Small Dot */}
                <span
                  className="
                    h-1.5
                    w-1.5
                    animate-pulse
                    rounded-full
                    bg-[#ff710f]
                    shadow-[0_0_5px_rgba(255,113,15,0.6)]
                  "
                />

                {/* Animated Dot */}
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span
                    className="
                      absolute
                      h-2
                      w-2
                      animate-ring-pulse
                      rounded-full
                      border
                      border-[#ff710f]
                    "
                  />

                  <span
                    className="
                      relative
                      h-2
                      w-2
                      rounded-full
                      bg-[#ff710f]
                      shadow-[0_0_7px_rgba(255,113,15,0.7)]
                    "
                  />
                </span>

                <span>مرحبًا بك في عدسة</span>
              </div>

              {/* Hero Title */}
              <h2
                className="
                  mt-10
                  text-center
                  text-[72px]
                  font-bold
                  leading-22.5
                  tracking-[-2px]
                  text-[#f8f8f8]

                  max-[768px]:mb-0
                  max-[768px]:mt-10
                  max-[768px]:text-[76px]
                  max-[768px]:font-extrabold
                  max-[768px]:leading-[1.12]
                  max-[768px]:tracking-[-1.5px]

                  max-[640px]:text-[clamp(42px,10vw,64px)]
                  max-[640px]:leading-[1.1]
                  max-[640px]:tracking-[-1px]
                "
              >
                اكتشف{" "}
                <span className="text-[#FAAB20]">
                  فن
                </span>

                <br />

                التصوير الفوتوغرافي
              </h2>

              {/* Hero Description */}
              <p
                className="
                  mt-5.75
                  text-[24px]
                  font-normal
                  leading-9.75
                  text-[#929292]

                  max-[768px]:mx-auto
                  max-[768px]:max-w-full
                  max-[768px]:text-[20px]
                  max-[768px]:leading-[1.9]

                  max-[640px]:text-[clamp(16px,3.2vw,20px)]
                  max-[640px]:leading-[1.8]
                "
              >
                انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في

                <br className="max-[768px]:hidden" />

                {" "}التصوير.
              </p>

              {/* Hero Buttons */}
              <div
                className="
                  mt-8.75
                  flex
                  items-center
                  justify-center
                  gap-3.75

                  max-[768px]:mb-19.5
                  max-[768px]:mt-8.5
                  max-[768px]:w-full
                  max-[768px]:flex-row
                  max-[768px]:gap-5

                  max-[640px]:flex-col
                  max-[640px]:gap-5
                "
              >
                {/* Explore */}
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage("blog")
                  }
                  className="
                    group
                    flex
                    h-14.5
                    min-w-55
                    items-center
                    justify-center
                    gap-2
                    rounded-4xl
                    border
                    border-[#ff6d0b]
                    bg-linear-to-r
                    from-[#F56C13]
                    to-[#EC5D0E]
                    px-7.5
                    text-[16px]
                    font-semibold
                    text-white
                    transition-transform
                    duration-250

                    hover:-translate-y-0.75

                    max-[768px]:h-18.5
                    max-[768px]:w-71.25
                    max-[768px]:min-w-71.25
                    max-[768px]:rounded-full
                    max-[768px]:px-8
                    max-[768px]:text-[18px]
                    max-[768px]:font-extrabold

                    max-[640px]:h-17.5
                    max-[640px]:w-full
                    max-[640px]:min-w-0
                  "
                >
                  استكشف المقالات

                  <svg
                    className="
                      h-5
                      w-5
                      shrink-0
                      rotate-180
                      transition-transform
                      duration-250

                      group-hover:translate-x-0.75
                    "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>

                {/* Learn More */}
                <button
                  type="button"
                  onClick={() =>
                    setCurrentPage("about")
                  }
                  className="
                    flex
                    h-14.5
                    min-w-42.5
                    items-center
                    justify-center
                    gap-2
                    rounded-4xl
                    border
                    border-[#303030]
                    bg-transparent
                    px-7.5
                    text-[16px]
                    font-semibold
                    text-white
                    transition-all
                    duration-250

                    hover:border-[#ff6d0b]
                    hover:bg-[#2D190A]
                    hover:text-[#F97316]

                    max-[768px]:h-18.5
                    max-[768px]:w-55
                    max-[768px]:min-w-55
                    max-[768px]:rounded-full
                    max-[768px]:px-7
                    max-[768px]:text-[18px]
                    max-[768px]:font-extrabold

                    max-[640px]:h-17.5
                    max-[640px]:w-full
                    max-[640px]:min-w-0
                  "
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  اعرف المزيد
                </button>
              </div>

              {/* =================================================
                  STATISTICS
              ================================================= */}

              <div
                className="
                  mt-15
                  grid
                  grid-cols-[repeat(4,150px)]
                  gap-5

                  max-[768px]:mx-auto
                  max-[768px]:mt-0
                  max-[768px]:w-full
                  max-[768px]:max-w-180
                  max-[768px]:grid-cols-2
                  max-[768px]:gap-5.5

                  max-[640px]:gap-5

                  max-[400px]:gap-3
                "
              >
                {/* Articles */}
                <div
                  className="
                    flex
                    h-[114px]
                    flex-col
                    items-center
                    justify-center
                    rounded-[22px]
                    border
                    border-[#292929]
                    bg-[rgba(22,22,22,0.85)]
                    transition-transform
                    duration-[250ms]

                    hover:scale-[1.08]

                    max-[768px]:h-[142px]
                    max-[768px]:w-full
                    max-[768px]:rounded-[28px]
                    max-[768px]:px-4
                    max-[768px]:py-5

                    max-[400px]:h-[130px]
                    max-[400px]:rounded-[22px]
                  "
                >
                  <div
                    className="
                      mb-[5px]
                      flex
                      items-center
                      justify-center
                      text-[#ff6d0b]

                      max-[768px]:mb-2.5
                      max-[768px]:[&_svg]:h-[34px]
                      max-[768px]:[&_svg]:w-[34px]

                      max-[400px]:[&_svg]:h-[30px]
                      max-[400px]:[&_svg]:w-[30px]
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M96 96c0-35.3 28.7-64 64-64h288c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32v272c0 8.8 7.2 16 16 16s16-7.2 16-16zm64 24v80c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24m208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16m0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16m-208 96c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16m0 96c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16"
                      />
                    </svg>
                  </div>

                  <strong
                    className="
                      text-[30px]
                      font-bold
                      leading-[1.1]
                      text-[#FA9D1E]

                      max-[400px]:text-[24px]
                    "
                  >
                    +50
                  </strong>

                  <span
                    className="
                      mt-0.5
                      text-[14px]
                      font-normal
                      text-[#737373]

                      max-[400px]:text-[13px]
                    "
                  >
                    مقالة
                  </span>
                </div>

                {/* Readers */}
                <div
                  className="
                    flex
                    h-[114px]
                    flex-col
                    items-center
                    justify-center
                    rounded-[22px]
                    border
                    border-[#292929]
                    bg-[rgba(22,22,22,0.85)]
                    transition-transform
                    duration-[250ms]

                    hover:scale-[1.08]

                    max-[768px]:h-[142px]
                    max-[768px]:w-full
                    max-[768px]:rounded-[28px]
                    max-[768px]:px-4
                    max-[768px]:py-5

                    max-[400px]:h-[130px]
                    max-[400px]:rounded-[22px]
                  "
                >
                  <div
                    className="
                      mb-[5px]
                      flex
                      items-center
                      justify-center
                      text-[#ff6d0b]

                      max-[768px]:mb-2.5
                      max-[768px]:[&_svg]:h-[34px]
                      max-[768px]:[&_svg]:w-[34px]

                      max-[400px]:[&_svg]:h-[30px]
                      max-[400px]:[&_svg]:w-[30px]
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 640 640"
                    >
                      <path
                        fill="currentColor"
                        d="M320 80c57.4 0 104 46.6 104 104s-46.6 104-104 104s-104-46.6-104-104S262.6 80 320 80M96 152c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72s32.2-72 72-72M0 480c0-70.7 57.3-128 128-128c12.8 0 25.2 1.9 36.9 5.4C132 394.2 112 442.8 112 496v16c0 11.4 2.4 22.2 6.7 32H32c-17.7 0-32-14.3-32-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32v-16c0-53.2-20-101.8-52.9-138.6c11.7-3.5 24.1-5.4 36.9-5.4c70.7 0 128 57.3 128 128v32c0 17.7-14.3 32-32 32zM472 224c0-39.8 32.2-72 72-72s72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72M160 496c0-88.4 71.6-160 160-160s160 71.6 160 160v16c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32z"
                      />
                    </svg>
                  </div>

                  <strong
                    className="
                      text-[30px]
                      font-bold
                      leading-[1.1]
                      text-[#FA9D1E]

                      max-[400px]:text-[24px]
                    "
                  >
                    +10ألف
                  </strong>

                  <span
                    className="
                      mt-0.5
                      text-[14px]
                      font-normal
                      text-[#737373]

                      max-[400px]:text-[13px]
                    "
                  >
                    قارئ
                  </span>
                </div>

                {/* Categories */}
                <div
                  className="
                    flex
                    h-[114px]
                    flex-col
                    items-center
                    justify-center
                    rounded-[22px]
                    border
                    border-[#292929]
                    bg-[rgba(22,22,22,0.85)]
                    transition-transform
                    duration-[250ms]

                    hover:scale-[1.08]

                    max-[768px]:h-[142px]
                    max-[768px]:w-full
                    max-[768px]:rounded-[28px]
                    max-[768px]:px-4
                    max-[768px]:py-5

                    max-[400px]:h-[130px]
                    max-[400px]:rounded-[22px]
                  "
                >
                  <div
                    className="
                      mb-[5px]
                      flex
                      items-center
                      justify-center
                      text-[#ff6d0b]

                      max-[768px]:mb-2.5
                      max-[768px]:[&_svg]:h-[34px]
                      max-[768px]:[&_svg]:w-[34px]

                      max-[400px]:[&_svg]:h-[30px]
                      max-[400px]:[&_svg]:w-[30px]
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M2 6a3 3 0 0 1 3-3h4l.099.005a1 1 0 0 1 .608.288L12.414 6H19a3 3 0 0 1 2.828 2H7.305a2 2 0 0 0-1.814 1.157l-.058.141l-1.379 3.676a1 1 0 1 0 1.873.702l1.134-3.027A1 1 0 0 1 7.998 10H21l.217.012a2 2 0 0 1 .783.256a2.02 2.02 0 0 1 .928 1.201c.077.28.092.573.045.859l-.005.024l-.995 5.21a3 3 0 0 1-2.686 2.426l-.261.012H5a3 3 0 0 1-3-3z"
                      />
                    </svg>
                  </div>

                  <strong
                    className="
                      text-[30px]
                      font-bold
                      leading-[1.1]
                      text-[#FA9D1E]

                      max-[400px]:text-[24px]
                    "
                  >
                    4
                  </strong>

                  <span
                    className="
                      mt-0.5
                      text-[14px]
                      font-normal
                      text-[#737373]

                      max-[400px]:text-[13px]
                    "
                  >
                    تصنيفات
                  </span>
                </div>

                {/* Writers */}
                <div
                  className="
                    flex
                    h-[114px]
                    flex-col
                    items-center
                    justify-center
                    rounded-[22px]
                    border
                    border-[#292929]
                    bg-[rgba(22,22,22,0.85)]
                    transition-transform
                    duration-[250ms]

                    hover:scale-[1.08]

                    max-[768px]:h-[142px]
                    max-[768px]:w-full
                    max-[768px]:rounded-[28px]
                    max-[768px]:px-4
                    max-[768px]:py-5

                    max-[400px]:h-[130px]
                    max-[400px]:rounded-[22px]
                  "
                >
                  <div
                    className="
                      mb-[5px]
                      flex
                      items-center
                      justify-center
                      text-[#ff6d0b]

                      max-[768px]:mb-2.5
                      max-[768px]:[&_svg]:h-[34px]
                      max-[768px]:[&_svg]:w-[34px]

                      max-[400px]:[&_svg]:h-[30px]
                      max-[400px]:[&_svg]:w-[30px]
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="m368.4 18.3l-55.7 55.8l125.2 125.2l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2l-46-46.1c-21.9-21.9-57.3-21.9-79.2 0M288 94.6l-9.2 2.8l-144.1 43.2c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4l153.6-153.5c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1l2.7-9.2z"
                      />
                    </svg>
                  </div>

                  <strong
                    className="
                      text-[30px]
                      font-bold
                      leading-[1.1]
                      text-[#FA9D1E]

                      max-[400px]:text-[24px]
                    "
                  >
                    6
                  </strong>

                  <span
                    className="
                      mt-0.5
                      text-[14px]
                      font-normal
                      text-[#737373]

                      max-[400px]:text-[13px]
                    "
                  >
                    كاتب
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              HOME COMPONENTS
          ================================================= */}

          <FeaturedArticles
            onViewAll={() =>
              setCurrentPage("blog")
            }
            onPostClick={handlePostClick}
          />

          <CategoriesSection
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryClick}
          />

          <LatestArticles
            onPostClick={handlePostClick}
            onGoToBlog={() => {
              setSelectedPost(null);
              setSelectedCategory("جميع المقالات");
              setCurrentPage("blog");
            }}
          />

          <Newsletter />
        </>
      ) : currentPage === "blog" ? (
        <Blog
          selectedCategory={selectedCategory}
          selectedPost={selectedPost}
          onSelectPost={handlePostClick}
          onGoHome={() => {
            setSelectedPost(null);
            setSelectedCategory(null);
            setCurrentPage("home");

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      ) : currentPage === "privacy" ? (
        <PrivacyPolicy
          setCurrentPage={setCurrentPage}
        />
      ) : currentPage === "terms" ? (
        <TermsOfService
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <About
          onGoBlog={() => {
            setSelectedPost(null);
            setSelectedCategory("جميع المقالات");
            setCurrentPage("blog");

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      )}

      <Footer
        setCurrentPage={setCurrentPage}
        setSelectedCategory={setSelectedCategory}
      />
    </main>
  );
}

export default App;