import postsData from "../../data/posts.json";

function TermsOfService({ setCurrentPage }) {
  const terms = postsData.termsOfService;

  if (!terms) {
    return (
      <section
        dir="rtl"
        className="min-h-screen bg-[#090909] px-6 py-24 text-center text-white"
      >
        <h1 className="text-3xl font-bold">
          بيانات شروط الخدمة غير متوفرة
        </h1>
      </section>
    );
  }

  return (
    <section
      dir="rtl"
      className="min-h-screen bg-[#090909] text-white"
    >
      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        className="
          relative
          flex
          min-h-117.5
          items-center
          justify-center
          overflow-hidden
          border-b
          border-[#202020]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      >
        {/* Glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-20
            top-30
            h-95
            w-95
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
            max-w-270
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
              {terms.title}
            </span>
          </div>

          {/* Document icon */}
          <div
            className="
              mb-6
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              border-orange-500/30
              bg-orange-500/10
              text-orange-500
              backdrop-blur-sm 
            "
          >
            <svg class="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {terms.title}
          </h1>

          <p className="text-lg text-neutral-400">
            آخر تحديث: {terms.lastUpdated}
          </p>
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <section
        className="
          mx-auto
          w-full
          max-w-220
          px-6
          pb-27
          pt-19
        "
      >
        {/* ================= NOTICE ================= */}
        {terms.notice && (
          <div
            className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 mb-12"
          >
            <div className="flex items-start gap-4">

              {/* Warning icon */}
              <div
                className="
                  mt-1
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  text-[#f5b800]
                "
              >
              <svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              </div>

              <div>
                <h3
                  className="
            font-semibold text-yellow-500 mb-1
                  "
                >
                  {terms.notice.title}
                </h3>

                <p
                  className="
                   text-yellow-300/80 text-sm
                  "
                >
                  {terms.notice.text}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================= SECTIONS ================= */}
        <div className="space-y-12">
          {terms.sections?.map((section) => (
            <article
              key={section.id}
              className="w-full"
            >
              {/* Heading */}
              <div className="mb-6 flex items-center gap-4">
                {/* Number */}
                <div
                  className="flex items-center justify-center w-8 h-8 bg-linear-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg"
                >
                  {section.id}
                </div>

                <h2
                  className="
                   flex
                   items-center
                   gap-3
                    text-2xl
                    font-bold
                    mb-4 
                    leading-[1.4]
                    text-white
                  "
                >
                  {section.title}
                </h2>
              </div>

              {/* ================= Paragraph ================= */}
              {section.type === "paragraph" && (
                <p
                  className="
                    text-[18px]
                    text-[#a7a7a7]
                  "
                >
                  {section.content}
                </p>
              )}

              {/* ================= Red X list ================= */}
              {section.type === "list-danger" && (
                <>
                  {section.content && (
                    <p
                      className="
                        mb-6
                        text-[18px]
                        text-[#a7a7a7]
                      "
                    >
                      {section.content}
                    </p>
                  )}

                  {section.listTitle && (
                    <p
                      className="
                        mb-4
                        text-[17px]
                        font-extrabold
                        text-white
                      "
                    >
                      {section.listTitle}
                    </p>
                  )}

                  <div className="space-y-2">
                    {section.items?.map((item, index) => (
                      <div
                        key={index}
                        className="
                          flex
                          items-start
                          gap-3
                          text-[18px]
                        "
                      >
                        
                        <span
                          className="
                            mt-0.5
                            flex
                            h-5
                            w-5
                            shrink-0
                            items-center
                            justify-center
                            text-red-400
                          "
                        >
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> 
                        </span>

                        <span className="text-[#a7a7a7]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* ================= CONTACT ================= */}
              {section.type === "contact" && (
                <div>
                  <p
                    className="
                      mb-5
                      text-[18px]
                      text-[#a7a7a7]
                    "
                  >
                    {section.content}
                  </p>

                  <a
                    href={`mailto:${section.email}`}
                    className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium"
                  >
                    

                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                   {section.email}
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* ================= BOTTOM ================= */}
        <div
          className="
            mt-22.5
            border-t
            border-[#292929]
            pt-10
            text-center
            text-[15px]
            text-[#777777]
          "
        >
          باستخدام موقعنا، فإنك توافق على شروط الخدمة هذه. انظر أيضًا{" "}
          <a
            href="#privacy"
            onClick={(e) => {
              e.preventDefault();

              setCurrentPage?.("privacy");

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="text-orange-500 hover:text-orange-400 font-medium"
          >
            سياسة الخصوصية
          </a>
          .
        </div>
      </section>
    </section>
  );
}

export default TermsOfService;