import postsData from "../../data/posts.json";

function PrivacyPolicy({ setCurrentPage }) {
  const privacy = postsData.privacyPolicy;

  if (!privacy) {
    return (
      <section
        className="min-h-screen bg-[#090909] px-6 py-24 text-center text-white"
        dir="rtl"
      >
        <h1 className="text-3xl font-bold">
          بيانات سياسة الخصوصية غير متوفرة
        </h1>
      </section>
    );
  }

  return (
    <section
      className="min-h-screen bg-[#090909] text-white"
      dir="rtl"
    >
      {/* ================= HERO ================= */}
      <section
        className="
          relative
          flex
          min-h-[470px]
          items-center
          justify-center
          overflow-hidden
          border-b
          border-[#1f1f1f]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      >
        {/* Orange Glow */}
        <div
          className="
            pointer-events-none
            absolute
            right-[-120px]
            top-[120px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-orange-500/5
            blur-[130px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            w-full
            max-w-[1050px]
            flex-col
            items-center
            px-6
            text-center
          "
        >
          {/* Breadcrumb */}
          <div
            className="
              mb-10
              flex
              items-center
              justify-center
              gap-4
              text-[16px]
            "
          >
            <button
              type="button"
              onClick={() => setCurrentPage?.("home")}
              className="
                cursor-pointer
                bg-transparent
                text-[#a1a1a1]
                transition-colors
                duration-200
                hover:text-white
              "
            >
              الرئيسية
            </button>

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#777"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>

            <span className="font-bold text-[#ff6500]">
              {privacy.title}
            </span>
          </div>

          {/* Lock */}

          <div
            className="
              mb-6
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              backdrop-blur-sm 
              border
              border-orange-500/30
              bg-orange-500/10
              text-orange-500
            "
          >
            <svg class="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
          </div>

          <h1
            className="
              text-4xl md:text-5xl font-bold text-white mb-4
            "
          >
            {privacy.title}
          </h1>

          <p className="mt-5 text-lg text-[#a1a1a1]">
            آخر تحديث: {privacy.lastUpdated}
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section
        className="
          mx-auto
          w-full
          max-w-250
          px-6
          pb-27.5
          pt-19
        "
      >
        {/* Notice */}
        {privacy.notice && (

          <div
            className="
              mb-12
              rounded-2xl
              border
              border-orange-500/20
              bg-orange-500/10
              p-6
              px-8
              py-7
            "
          >
            <div className="flex items-start gap-4">
              <div
                className="
                  mt-1
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  text-orange-500
                "
              >
                <svg class="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-orange-500">
                  {privacy.notice.title}
                </h3>

                <p className="text-orange-300/80 text-sm">
                  {privacy.notice.text}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Sections */}
        <div className="space-y-12">
          {privacy.sections?.map((section) => (
            <article key={section.id}>
              {/* Title */}
              <div className="mb-6 flex items-center gap-4">
                <div
                  className="
                    flex
                    h-8
                    min-w-8
                    items-center
                    justify-center
                    rounded-lg
                    bg-linear-to-br
                    from-orange-500 
                    to-yellow-500
                    px-3
                    text-sm 
                    font-bold
                    text-white

                  "
                >
                  {section.id}
                </div>
                <h2
                  className="
                    flex
                    -mb-5 
                    font-bold
                    text-2xl
                    text-white
                    gap-3
                    items-center 
                  "
                >
                  {section.title}
                </h2>
              </div>

              {/* Paragraph */}
              {section.type === "paragraph" && (
              
                <p className="text-[18px] leading-relaxed text-neutral-400 pr-11">
                  {section.content}
                </p>
              )}

              {/* List */}
              {section.type === "list" && (
                <div className="space-y-3">
                  {section.items?.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 text-neutral-400 mr-10 "
                    >
                      <span
                        className="
                          mt-1.75
                          flex
                          h-5
                          w-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-orange-500
                          text-black
                        "
                      >
                        
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m5 12 4 4L19 6" />
                        </svg>
                      </span>

                      <p className="text-[#a7a7a7]">
                        <strong className="font-extrabold text-white">
                          {item.title}:
                        </strong>{" "}
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Simple List */}
              {section.type === "list-simple" && (
                <div className="space-y-4">
                  {section.items?.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 text-[18px]  mr-10"
                    >
                      <span
                        className="
                          flex
                          h-5
                          w-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#ff6500]
                          text-black
                        "
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m5 12 4 4L19 6" />
                        </svg>
                      </span>

                      <span className=" text-[#a7a7a7]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Contact */}
              {section.type === "contact" && (
                <div>
                  <p className="mb-2 text-[18px]  text-[#a7a7a7] mr-10">
                    {section.content}
                  </p>
                  <a
                    href={`mailto:${section.email}`}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-[17px]
                      font-medium
                      text-orange-500 
                      hover:text-orange-400
                      mr-10
                    "
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        width="20"
                        height="16"
                        x="2"
                        y="4"
                        rx="2"
                      />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>

                    {section.email}
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="
            mt-[90px]
            border-t
            border-[#292929]
            pt-10
            text-center
            text-[15px]
            text-[#777777]
          "
        >
          باستخدام موقعنا، فإنك توافق على سياسة الخصوصية هذه. انظر أيضًا{" "}
          
          <button
            type="button"
            onClick={() => setCurrentPage?.("terms")}
            className="
              cursor-pointer
              bg-transparent
              font-medium
              text-orange-500 
              hover:text-orange-400
            "
          >
            شروط الخدمة
          </button>
          .
        </div>
      </section>
    </section>
  );
}

export default PrivacyPolicy;