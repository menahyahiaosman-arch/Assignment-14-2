import postsData from "../../data/posts.json";
import { useEffect } from "react";

function Newsletter() {
  useEffect(() => {
  if (sessionStorage.getItem("scrollToTopAfterReload") === "true") {
    window.scrollTo(0, 0);
    sessionStorage.removeItem("scrollToTopAfterReload");
  }
}, []);
  const subscribers = postsData.posts.slice(0, 3);

  return (
    <section
      dir="rtl"
      className="
        relative
        flex
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#090909]
        bg-[radial-gradient(circle_at_50%_0%,#211209,transparent_50%)]
        px-6
        py-20

        min-[801px]:min-h-[720px]

        max-[640px]:min-h-0
        max-[640px]:px-5
        max-[640px]:py-[60px]

        max-[480px]:px-4
        max-[480px]:py-[45px]
      "
    >
      {/* =========================================
          NEWSLETTER CARD
      ========================================= */}
      <div
        className="
          relative
          mt-[50px]
          flex
          w-[min(810px,90%)]
          flex-col
          items-center
          justify-start
          rounded-[28px]
          border
          border-[#292929]
          bg-[#161616]
          px-[60px]
          pb-[55px]
          pt-[72px]
          text-center
          shadow-[0_20px_80px_rgba(0,0,0,0.25)]

          max-[640px]:mt-0
          max-[640px]:w-full
          max-[640px]:rounded-[28px]
          max-[640px]:px-[42px]
          max-[640px]:pb-[42px]
          max-[640px]:pt-[40px]

          max-[480px]:rounded-[22px]
          max-[480px]:px-5
          max-[480px]:pb-[32px]
          max-[480px]:pt-[32px]
        "
      >
        {/* =========================================
            EMAIL ICON
        ========================================= */}
        <div
          className="
            mb-[27px]
            flex
            h-[65px]
            w-[65px]
            items-center
            justify-center
            rounded-[17px]
            bg-linear-to-br
            from-[#FF6300]
            to-[#F85100]

            max-[640px]:mb-[30px]
            max-[640px]:h-[80px]
            max-[640px]:w-[80px]
            max-[640px]:rounded-[20px]

            max-[480px]:h-[68px]
            max-[480px]:w-[68px]
            max-[480px]:rounded-[18px]
          "
        >
          <svg
            className="
              h-8
              w-8
              text-white

              max-[640px]:h-[36px]
              max-[640px]:w-[36px]

              max-[480px]:h-8
              max-[480px]:w-8
            "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        {/* =========================================
            TITLE
        ========================================= */}
        <h2
          className="
            m-0
            text-[36px]
            font-bold
            leading-normal
            text-[#f5f5f5]

            max-[640px]:text-[clamp(30px,5.5vw,36px)]
            max-[640px]:leading-[1.5]

            max-[480px]:text-[clamp(26px,7vw,31px)]
          "
        >
          اشترك في{" "}
          <span
            className="
              bg-linear-to-r
              from-[#F97E18]
              via-[#FFB300]
              to-[#FAB121]
              bg-clip-text
              text-transparent
            "
          >
            نشرتنا الإخبارية
          </span>
        </h2>

        {/* =========================================
            DESCRIPTION
        ========================================= */}
        <p
          className="
            mt-2
            max-w-[650px]
            text-[18px]
            font-medium
            leading-loose
            text-[#858585]

            max-[640px]:mt-[12px]
            max-[640px]:max-w-[540px]
            max-[640px]:text-[18px]
            max-[640px]:leading-[1.9]

            max-[480px]:text-[15px]
            max-[480px]:leading-[1.8]
          "
        >
          احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
          الإلكتروني
        </p>

        {/* =========================================
            FORM
        ========================================= */}
        <form
          className="
            mt-[34px]
            flex
            w-full
            max-w-[575px]
            items-center
            justify-center
            gap-3

            max-[640px]:mt-[36px]
            max-[640px]:max-w-none
            max-[640px]:flex-col
            max-[640px]:gap-[15px]

            max-[480px]:mt-[28px]
          "

        >
          {/* Email Input */}
          <input
            type="email"
            required
            placeholder="أدخل بريدك الإلكتروني"
            className="
              h-[65px]
              min-w-0
              flex-1
              rounded-[14px]
              border
              border-[#303030]
              bg-[#0A0A0A]
              px-[22px]
              text-right
              text-[14px]
              text-white
              outline-none
              transition-all
              duration-[250ms]
              ease-in-out

              placeholder:text-[16px]
              placeholder:text-[#787676]

              hover:border-[rgba(255,109,11,0.6)]

              focus:border-[rgba(255,109,11,0.6)]
              focus:shadow-[0_0_0_3px_rgba(255,109,11,0.06)]

              max-[640px]:h-[72px]
              max-[640px]:w-full
              max-[640px]:flex-none
              max-[640px]:rounded-[14px]
              max-[640px]:px-[24px]
              max-[640px]:text-[16px]

              max-[640px]:placeholder:text-[16px]

              max-[480px]:h-[62px]
              max-[480px]:px-[18px]
              max-[480px]:text-[14px]

              max-[480px]:placeholder:text-[14px]
            "
          />

          {/* Subscribe Button */}
          <button
            type="submit"
            className="
              h-[65px]
              w-[161px]
              shrink-0
              rounded-[14px]
              border-none
              bg-linear-to-br
              from-[#F76F15]
              to-[#ff5700]
              text-[15px]
              font-extrabold
              text-white
              transition-all
              duration-[250ms]
              ease-in-out

              hover:from-[#EF4700]
              hover:to-[#D03800]

              max-[640px]:h-[69px]
              max-[640px]:w-full
              max-[640px]:rounded-[14px]
              max-[640px]:text-[18px]

              max-[480px]:h-[60px]
              max-[480px]:text-[16px]
            "
          >
            اشترك الآن
          </button>
        </form>

        {/* =========================================
            BOTTOM INFORMATION
        ========================================= */}
        <div
          className="
            mt-[27px]
            flex
            w-full
            items-center
            justify-center
            gap-[25px]
            text-[#5f5f5f]

            max-[640px]:mt-[30px]
            max-[640px]:flex-row
            max-[640px]:flex-nowrap
            max-[640px]:gap-[14px]

            max-[520px]:gap-[8px]

            max-[480px]:mt-[25px]
            max-[480px]:flex-wrap
            max-[480px]:gap-x-3
            max-[480px]:gap-y-2
          "
        >
          {/* =====================================
              SUBSCRIBERS
          ===================================== */}
          <div
            className="
              flex
              shrink-0
              items-center
              gap-2.5

              max-[640px]:gap-2
            "
          >
            {/* Avatars */}
            <div className="flex items-center">
              {subscribers.map((post, index) => {
                const zIndexes = [1, 10, 2];

                return (
                  <img
                    key={post.id}
                    src={post.author.avatar}
                    alt={post.author.name}
                    className={`
                      relative
                      h-[33px]
                      w-[33px]
                      rounded-full
                      border-2
                      border-[#171717]
                      object-cover
                      transition-all

                      max-[640px]:h-[36px]
                      max-[640px]:w-[36px]

                      max-[520px]:h-[31px]
                      max-[520px]:w-[31px]

                      ${
                        index === 1
                          ? "-mr-2 ml-1.5 scale-105"
                          : index === 2
                          ? "-mr-1"
                          : ""
                      }
                    `}
                    style={{
                      zIndex: zIndexes[index],
                    }}
                  />
                );
              })}
            </div>

            {/* Subscribers text */}
            <span
              className="
                whitespace-nowrap
                text-[14px]
                text-[#737373]

                max-[640px]:text-[13px]

                max-[520px]:text-[11px]
              "
            >
              انضم لـ
              <span
                className="
                  mx-[3px]
                  text-[14px]
                  font-extrabold
                  text-[#eeeeee]

                  max-[640px]:text-[13px]

                  max-[520px]:text-[11px]
                "
              >
                +10,000
              </span>
              مصور
            </span>
          </div>

          {/* Separator */}
          <span
            className="
              h-[3px]
              w-[3px]
              shrink-0
              rounded-full
              bg-neutral-600

              max-[520px]:h-[2px]
              max-[520px]:w-[2px]
            "
          />

          {/* No Spam */}
          <span
            className="
              shrink-0
              whitespace-nowrap
              text-[14px]
              text-[#737373]

              max-[640px]:text-[13px]

              max-[520px]:text-[11px]
            "
          >
            بدون إزعاج
          </span>

          {/* Separator */}
          <span
            className="
              h-[3px]
              w-[3px]
              shrink-0
              rounded-full
              bg-neutral-600

              max-[520px]:h-[2px]
              max-[520px]:w-[2px]
            "
          />

          {/* Unsubscribe */}
          <span
            className="
              shrink-0
              whitespace-nowrap
              text-[14px]
              text-[#737373]

              max-[640px]:text-[13px]

              max-[520px]:text-[11px]
            "
          >
            إلغاء الاشتراك في أي وقت
          </span>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;