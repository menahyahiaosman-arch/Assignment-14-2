import postsData from "../../data/posts.json";
import { useEffect } from "react";
function Footer({ setCurrentPage, setSelectedCategory }) {
    useEffect(() => {
  if (sessionStorage.getItem("scrollToTopAfterReload") === "true") {
    window.scrollTo(0, 0);
    sessionStorage.removeItem("scrollToTopAfterReload");
  }
}, []);
  const categories = postsData.categories
    ? postsData.categories.slice(0, 4)
    : [];

  const footerLinkClass = `
    group/link
    inline-flex
    items-center
    gap-2
    border-0
    bg-transparent
    p-0
    font-['Tajawal']
    text-[14px]
    font-medium
    text-[#626262]
    transition-all
    duration-[250ms]

    hover:-translate-x-1
    hover:text-[#ff6500]

    max-[768px]:text-[16px]
    max-[520px]:text-[14px]
  `;

  const FooterArrow = () => (
    <svg
      className="
        h-4
        w-4
        shrink-0
        translate-x-[6px]
        text-[#ff6500]
        opacity-0
        transition-all
        duration-[250ms]

        group-hover/link:translate-x-0
        group-hover/link:opacity-100
      "
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const ColumnTitle = ({ children }) => (
    <div
      className="
        flex
        items-center
        justify-start
        gap-2.5
      "
    >
      <span
        className="
          block
          h-[2px]
          w-8
          rounded-full
          bg-linear-to-r
          from-[#f97316]
          to-[#eab308]

          max-[768px]:w-10
        "
      />

      <h3
        className="
          m-0
          whitespace-nowrap
          text-[16px]
          font-black
          text-[#f4f4f4]

          max-[768px]:text-[20px]
          max-[520px]:text-[17px]
        "
      >
        {children}
      </h3>
    </div>
  );

  return (
    <footer
      dir="rtl"
      className="
        w-full
        border-t
        border-[#292929]
        bg-[#090909]
        text-white
      "
    >
      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          bg-[#090909]
          px-6
          pb-[72px]
          pt-[78px]

          max-[1024px]:px-[30px]
          max-[1024px]:pb-[70px]
          max-[1024px]:pt-[60px]

          max-[768px]:px-[40px]
          max-[768px]:pb-[70px]
          max-[768px]:pt-[35px]

          max-[520px]:px-5
          max-[520px]:pb-[55px]
        "
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 50% 50%,
              rgba(255, 91, 0, 0.12) 0%,
              rgba(255, 91, 0, 0.05) 20%,
              transparent 48%
            ),
            radial-gradient(
              circle at 15% 70%,
              rgba(255, 91, 0, 0.045),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 70%,
              rgba(255, 91, 0, 0.035),
              transparent 30%
            )
          `,
        }}
      >
        {/* ===================================================
            MAIN GRID
        =================================================== */}
        <div
          className="
            mx-auto
            grid
            w-[min(1180px,90%)]
            grid-cols-[1.3fr_0.75fr_0.85fr_1fr]
            items-start
            gap-[55px]

            max-[1100px]:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]
            max-[1100px]:gap-10

            max-[1024px]:w-full
            max-[1024px]:grid-cols-2
            max-[1024px]:gap-x-[80px]
            max-[1024px]:gap-y-[70px]

            max-[768px]:grid-cols-1
            max-[768px]:gap-0
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}
          <div
            className="
              text-right

              max-[1024px]:min-h-[220px]

              max-[768px]:min-h-0
              max-[768px]:pb-[65px]

              max-[520px]:pb-[55px]
            "
          >
            {/* Brand Heading */}
            <div
              className="
                group/brand
                -mt-[5px]
                flex
                items-center
                justify-start
                gap-3
              "
            >
              {/* Logo */}
              <div
                className="
                  flex
                  h-[45px]
                  w-[45px]
                  items-center
                  justify-center
                  rounded-xl
                  bg-linear-to-br
                  from-[#ff6000]
                  to-[#fc5900]
                  text-[20px]
                  font-bold
                  text-white
                  shadow-[0_8px_25px_rgba(255,91,0,0.15)]
                  transition-all
                  duration-300

                  group-hover/brand:scale-[1.08]
                  group-hover/brand:shadow-[0_10px_30px_rgba(255,91,0,0.25)]

                  max-[768px]:h-[56px]
                  max-[768px]:w-[56px]
                  max-[768px]:rounded-[14px]
                  max-[768px]:text-[25px]

                  max-[520px]:h-[50px]
                  max-[520px]:w-[50px]
                  max-[520px]:text-[22px]
                "
              >
                ع
              </div>

              <h2
                className="
                  m-0
                  text-[20px]
                  font-bold
                  text-[#f2f2f2]

                  max-[768px]:text-[25px]
                  max-[520px]:text-[22px]
                "
              >
                عدسة
              </h2>
            </div>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-[310px]
                text-[14px]
                font-normal
                leading-[23px]
                text-[#737373]

                max-[1024px]:max-w-[500px]

                max-[768px]:mt-[30px]
                max-[768px]:max-w-full
                max-[768px]:text-[16px]
                max-[768px]:leading-[2]

                max-[520px]:mt-5
                max-[520px]:text-[14px]
                max-[520px]:leading-[1.9]
              "
            >
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
              المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>

            {/* Social Links */}
            <div
              className="
                mt-7
                flex
                items-center
                gap-2.5

                max-[768px]:mt-[28px]
                max-[768px]:gap-[10px]
              "
            >
              {/* X */}
              <a
                href="https://x.com/adasah"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#292929]
                  bg-[#171717]
                  text-[#777]
                  no-underline
                  transition-all
                  duration-[250ms]

                  hover:-translate-y-[3px]
                  hover:scale-[1.06]
                  hover:border-[#fb5600]
                  hover:bg-[#fb5600]
                  hover:text-white

                  max-[768px]:h-[50px]
                  max-[768px]:w-[50px]
                  max-[768px]:rounded-[14px]
                  max-[768px]:[&_svg]:h-[22px]
                  max-[768px]:[&_svg]:w-[22px]
                "
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/adasah"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#292929]
                  bg-[#171717]
                  text-[#777]
                  no-underline
                  transition-all
                  duration-[250ms]

                  hover:-translate-y-[3px]
                  hover:scale-[1.06]
                  hover:border-[#fb5600]
                  hover:bg-[#fb5600]
                  hover:text-white

                  max-[768px]:h-[50px]
                  max-[768px]:w-[50px]
                  max-[768px]:rounded-[14px]
                  max-[768px]:[&_svg]:h-[22px]
                  max-[768px]:[&_svg]:w-[22px]
                "
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/unavailable/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#292929]
                  bg-[#171717]
                  text-[#777]
                  no-underline
                  transition-all
                  duration-[250ms]

                  hover:-translate-y-[3px]
                  hover:scale-[1.06]
                  hover:border-[#fb5600]
                  hover:bg-[#fb5600]
                  hover:text-white

                  max-[768px]:h-[50px]
                  max-[768px]:w-[50px]
                  max-[768px]:rounded-[14px]
                  max-[768px]:[&_svg]:h-[22px]
                  max-[768px]:[&_svg]:w-[22px]
                "
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@adasah"
                target="_blank"
                rel="noreferrer"
                aria-label="Youtube"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#292929]
                  bg-[#171717]
                  text-[#777]
                  no-underline
                  transition-all
                  duration-[250ms]

                  hover:-translate-y-[3px]
                  hover:scale-[1.06]
                  hover:border-[#fb5600]
                  hover:bg-[#fb5600]
                  hover:text-white

                  max-[768px]:h-[50px]
                  max-[768px]:w-[50px]
                  max-[768px]:rounded-[14px]
                  max-[768px]:[&_svg]:h-[22px]
                  max-[768px]:[&_svg]:w-[22px]
                "
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* =================================================
              EXPLORE
          ================================================= */}
          <div
            className="
              text-right

              max-[1024px]:min-h-[220px]

              max-[768px]:min-h-0
              max-[768px]:pb-[70px]

              max-[520px]:pb-[55px]
            "
          >
            <ColumnTitle>استكشف</ColumnTitle>

            <ul
              className="
                m-0
                mt-[30px]
                list-none
                p-0

                max-[768px]:mt-[32px]
              "
            >
              <li className="mb-[18px] max-[768px]:mb-[24px]">
                <button
                  type="button"
                  onClick={() => setCurrentPage("home")}
                  className={footerLinkClass}
                >
                  <FooterArrow />
                  الرئيسية
                </button>
              </li>

              <li className="mb-[18px] max-[768px]:mb-[24px]">
                <button
                  type="button"
                  onClick={() => setCurrentPage("blog")}
                  className={footerLinkClass}
                >
                  <FooterArrow />
                  المدونة
                </button>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => setCurrentPage("about")}
                  className={footerLinkClass}
                >
                  <FooterArrow />
                  من نحن
                </button>
              </li>
            </ul>
          </div>

          {/* =================================================
              CATEGORIES
          ================================================= */}
          <div
            className="
              text-right

              max-[768px]:pb-[70px]

              max-[520px]:pb-[55px]
            "
          >
            <ColumnTitle>التصنيفات</ColumnTitle>

            <ul
              className="
                m-0
                mt-[30px]
                list-none
                p-0

                max-[768px]:mt-[32px]
              "
            >
              {categories.map((category, index) => {
                const name =
                  typeof category === "string"
                    ? category
                    : category.name || category.title;

                return (
                  <li
                    key={name || index}
                    className="
                      mb-[18px]
                      last:mb-0

                      max-[768px]:mb-[24px]
                    "
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory(name);
                        setCurrentPage("blog");
                      }}
                      className={footerLinkClass}
                    >
                      <FooterArrow />
                      {name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* =================================================
              NEWSLETTER
          ================================================= */}
          <div
            className="
              -ml-5
              text-right

              max-[1100px]:ml-0

              max-[1024px]:ml-0

              max-[768px]:w-full
            "
          >
            <ColumnTitle>ابقَ على اطلاع</ColumnTitle>

            <p
              className="
                mb-5
                mt-7
                text-[14px]
                leading-[1.6]
                text-[#656565]

                max-[768px]:mb-[24px]
                max-[768px]:mt-[34px]
                max-[768px]:text-[16px]
                max-[768px]:leading-[1.8]

                max-[520px]:text-[14px]
              "
            >
              اشترك للحصول على أحدث المقالات
              <br />
              والتحديثات.
            </p>

            <form
              className="
                flex
                w-[290px]
                max-w-full
                flex-col
                gap-[11px]

                max-[1024px]:w-full

                max-[768px]:w-full
                max-[768px]:gap-[16px]
              "
            >
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="
                  h-11
                  w-full
                  rounded-xl
                  border
                  border-[#292929]
                  bg-[#171717]
                  px-[13px]
                  text-right
                  text-[13px]
                  text-white
                  outline-none
                  transition-all
                  duration-[250ms]

                  placeholder:text-[#555]

                  focus:border-[#ff6900]
                  focus:shadow-[0_0_0_3px_rgba(255,109,11,0.06)]

                  max-[768px]:h-[57px]
                  max-[768px]:rounded-[14px]
                  max-[768px]:px-[18px]
                  max-[768px]:text-[15px]

                  max-[768px]:placeholder:text-[15px]

                  max-[520px]:h-[52px]
                  max-[520px]:text-[14px]
                "
              />

              <button
                type="submit"
                className="
                  h-11
                  w-full
                  rounded-[24px]
                  border-0
                  bg-linear-to-br
                  from-[#f66e14]
                  to-[#ee5f0f]
                  text-[13px]
                  font-bold
                  text-white
                  transition-all
                  duration-[250ms]

                  hover:-translate-y-0.5
                  hover:shadow-[0_8px_20px_rgba(255,91,0,0.18)]

                  max-[768px]:h-[66px]
                  max-[768px]:rounded-full
                  max-[768px]:text-[17px]

                  max-[520px]:h-[58px]
                  max-[520px]:text-[15px]
                "
              >
                اشترك
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM FOOTER
      ===================================================== */}
      <div
        className="
          min-h-[86px]
          w-full
          border-t
          border-[#292929]
          bg-[#090909]

          max-[768px]:min-h-0
          max-[768px]:py-[32px]

          max-[520px]:py-[26px]
        "
      >
        <div
          className="
            mx-auto
            flex
            min-h-[86px]
            w-[min(1180px,90%)]
            items-center
            justify-between
            gap-[30px]

            max-[768px]:min-h-0
            max-[768px]:w-[90%]
            max-[768px]:flex-col
            max-[768px]:justify-center
            max-[768px]:gap-[22px]
            max-[768px]:text-center
          "
        >
          {/* Copyright */}
          <div
            className="
              flex
              items-center
              gap-1.5
              text-[14px]
              font-normal
              text-[#555]

              max-[768px]:flex-wrap
              max-[768px]:justify-center
              max-[768px]:text-[14px]

              max-[520px]:text-[12px]
            "
          >
            <span>© 2026 عدسة. صنع بكل</span>

            <span
              className="
                flex
                items-center
                leading-none
                text-[#ff6d0b]
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
                />
              </svg>
            </span>

            <span>جميع الحقوق محفوظة.</span>
          </div>

          {/* Bottom Links */}
          <div
            className="
              flex
              items-center
              gap-[35px]

              max-[768px]:gap-[34px]

              max-[520px]:gap-[24px]
            "
          >
            <a
              href="#privacy"
              onClick={(e) => {
                e.preventDefault();

                setCurrentPage("privacy");

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="
                text-[14px]
                text-[#555]
                no-underline
                transition-colors
                duration-[250ms]

                hover:text-[#ff6d0b]

                max-[768px]:text-[14px]

                max-[520px]:text-[12px]
              "
            >
              سياسة الخصوصية
            </a>

            <a
              href="#terms"
              onClick={(e) => {
                e.preventDefault();

                setCurrentPage("terms");

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="
                text-[14px]
                text-[#555]
                no-underline
                transition-colors
                duration-[250ms]

                hover:text-[#ff6d0b]

                max-[768px]:text-[14px]

                max-[520px]:text-[12px]
              "
            >
              شروط الخدمة
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
