import postsData from "../../data/posts.json";

function FeaturedArticles({ onViewAll, onPostClick }) {
  const featuredPosts = postsData.posts
    .filter((post) => post.featured)
    .slice(0, 3);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#090909]
        px-6
        py-24
        text-white

        max-[1200px]:px-5
        max-[992px]:px-4

        max-[768px]:px-[30px]
        max-[768px]:py-[70px]

        max-[500px]:px-4
        max-[500px]:py-[55px]
      "
      dir="rtl"
    >
      {/* =========================================
          ORANGE GLOW
      ========================================= */}
      <div
        className="
          pointer-events-none
          absolute
          -right-45
          -top-45
          h-150
          w-150
          rounded-full
          bg-[#8b451f]/18
          blur-[180px]

          max-[768px]:-right-[220px]
          max-[768px]:-top-[180px]
          max-[768px]:h-[500px]
          max-[768px]:w-[500px]
          max-[768px]:blur-[160px]
        "
      />

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}
      <div
        className="
          relative
          mx-auto
          mt-3
          w-[80%]
          max-w-[1180px]

          max-[1280px]:w-[88%]
          max-[1100px]:w-[92%]
          max-[992px]:w-[94%]

          max-[768px]:mt-0
          max-[768px]:w-full
          max-[768px]:max-w-none
        "
      >
        {/* =========================================
            SECTION HEADER
        ========================================= */}
        <div
          className="
            mb-8
            flex
            items-end
            justify-between
            gap-6

            max-[1200px]:gap-5
            max-[992px]:items-start
            max-[992px]:gap-4

            max-[768px]:mb-[60px]
            max-[768px]:flex-col
            max-[768px]:items-start
            max-[768px]:gap-0

            max-[500px]:mb-[45px]
          "
        >
          {/* Header Text */}
          <div
            className="
              min-w-0

              max-[768px]:w-full
              max-[768px]:text-right
            "
          >
            {/* Badge */}
            <div
              className="
                mb-4
                inline-flex
                items-center
                rounded-full
                border
                border-orange-500/40
                bg-orange-500/8
                px-5
                py-2.5
                text-[14px]
                font-bold
                text-orange-500

                max-[992px]:px-4
                max-[992px]:py-2
                max-[992px]:text-[13px]

                max-[768px]:mb-[28px]
                max-[768px]:px-[18px]
                max-[768px]:py-2
                max-[768px]:text-[14px]

                max-[500px]:mb-5
                max-[500px]:text-[13px]
              "
            >
              <div className="flex items-center gap-1.5">
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
              </div>

              <span className="mr-4">مميز</span>
            </div>

            {/* Main Title */}
            <h2
              className="
                text-3xl
                font-bold
                tracking-tight
                text-white
                md:text-6xl

                max-[1200px]:text-[50px]
                max-[1100px]:text-[46px]
                max-[992px]:text-[40px]

                max-[768px]:text-[clamp(36px,6vw,48px)]
                max-[768px]:leading-[1.15]
                max-[768px]:tracking-[-1px]

                max-[500px]:text-[clamp(30px,9vw,40px)]
              "
            >
              مقالات مختارة
            </h2>

            {/* Description */}
            <p
              className="
                mt-3
                max-w-md
                text-[18px]
                font-medium
                text-[#a1a1a1]

                max-[1200px]:text-[17px]
                max-[992px]:text-[16px]

                max-[768px]:mt-[22px]
                max-[768px]:max-w-full
                max-[768px]:text-[clamp(16px,2.5vw,20px)]

                max-[500px]:mt-4
              "
            >
              محتوى منتقى لبدء رحلة تعلمك
            </p>
          </div>

          {/* =========================================
              VIEW ALL BUTTON
          ========================================= */}
          <button
            type="button"
            onClick={onViewAll}
            className="
              group
              flex
              shrink-0
              items-center
              gap-2
              rounded-[10px]
              bg-linear-to-r
              from-[#FF6200]
              to-[#F64B00]
              px-5
              py-2.5
              text-[16px]
              font-bold
              text-white
              transition
              duration-300

              hover:-translate-y-1

              max-[1200px]:px-[18px]
              max-[1200px]:text-[15px]

              max-[992px]:px-4
              max-[992px]:py-2
              max-[992px]:text-[14px]

              max-[768px]:mt-[26px]
              max-[768px]:h-[56px]
              max-[768px]:self-start
              max-[768px]:rounded-[14px]
              max-[768px]:px-[28px]
              max-[768px]:text-[17px]

              max-[500px]:mt-5
              max-[500px]:h-[50px]
              max-[500px]:px-5
              max-[500px]:text-[15px]
            "
          >
            عرض الكل

            <svg
              className="
                h-4
                w-4
                rotate-180
                transition-transform
                duration-300

                group-hover:-translate-x-1

                max-[768px]:h-[18px]
                max-[768px]:w-[18px]
              "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* =========================================
            ARTICLES LIST
        ========================================= */}
        <div
          className="
            flex
            flex-col
            gap-8

            max-[992px]:gap-7
            max-[768px]:gap-[30px]
          "
        >
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="
                group
                flex
                min-h-[390px]
                w-full
                cursor-pointer
                overflow-hidden
                rounded-[28px]
                border
                border-[#292929]
                bg-[#151515]
                transition
                duration-300

                hover:border-orange-500/40

                max-[1200px]:min-h-[350px]
                max-[1100px]:min-h-[330px]
                max-[992px]:min-h-[300px]

                max-[768px]:min-h-0
                max-[768px]:flex-col
                max-[768px]:rounded-[28px]

                max-[500px]:rounded-[22px]
              "
            >
              {/* =====================================
                  IMAGE - RIGHT SIDE ON DESKTOP
              ===================================== */}
              <div
                className="
                  relative
                  w-[50%]
                  shrink-0
                  overflow-hidden

                  max-[1200px]:w-[49%]
                  max-[1100px]:w-[48%]
                  max-[992px]:w-[47%]

                  max-[768px]:h-[360px]
                  max-[768px]:w-full

                  max-[640px]:h-[clamp(245px,50vw,330px)]

                  max-[500px]:h-[230px]
                "
              >
                <img
                  src={post.image}
                  alt={post.title}
                  onClick={() => onPostClick(post)}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-500

                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-linear-to-l
                    from-transparent
                    to-black/10
                  "
                />

                {/* Featured Label */}
                <span
                  className="
                    absolute
                    right-4
                    top-4
                    flex
                    items-center
                    gap-1.5
                    rounded-full
                    bg-linear-to-r
                    from-[#FF7500]
                    to-[#F5A700]
                    px-3
                    py-1.5
                    text-[12px]
                    font-bold
                    text-white

                    max-[992px]:right-3
                    max-[992px]:top-3
                    max-[992px]:px-2.5
                    max-[992px]:py-1.5
                    max-[992px]:text-[11px]

                    max-[768px]:right-5
                    max-[768px]:top-5
                    max-[768px]:px-4
                    max-[768px]:py-2
                    max-[768px]:text-[14px]

                    max-[500px]:right-3
                    max-[500px]:top-3
                    max-[500px]:px-3
                    max-[500px]:py-1.5
                    max-[500px]:text-[12px]
                  "
                >
                  <svg
                    className="
                      h-3.5
                      w-3.5

                      max-[992px]:h-3
                      max-[992px]:w-3

                      max-[768px]:h-4
                      max-[768px]:w-4
                    "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  مميز
                </span>
              </div>

              {/* =====================================
                  CONTENT - LEFT SIDE
              ===================================== */}
              <div
                className="
                  flex
                  min-w-0
                  flex-1
                  flex-col
                  justify-between
                  p-10

                  max-[1200px]:p-8
                  max-[1100px]:p-7
                  max-[992px]:p-6

                  max-[768px]:p-[28px]

                  max-[500px]:p-5
                "
              >
                <div>
                  {/* =================================
                      CATEGORY + READ TIME
                  ================================= */}
                  <div
                    className="
                      mb-3
                      flex
                      items-center
                      gap-3
                      text-[10px]
                      text-gray-500

                      max-[992px]:mb-2
                      max-[992px]:gap-2

                      max-[768px]:mb-5
                      max-[768px]:flex-wrap
                      max-[768px]:gap-3

                      max-[500px]:gap-2
                    "
                  >
                    {/* Category */}
                    <span
                      className="
                        rounded-full
                        border
                        border-orange-500/40
                        bg-[#2E1E14]
                        px-3
                        py-1
                        text-[12px]
                        font-extrabold
                        text-[#f97200]

                        max-[992px]:px-2.5
                        max-[992px]:text-[11px]

                        max-[768px]:px-4
                        max-[768px]:py-1.5
                        max-[768px]:text-[14px]

                        max-[500px]:px-3
                        max-[500px]:text-[12px]
                      "
                    >
                      {post.category}
                    </span>

                    {/* Read Time */}
                    <span
                      className="
                        flex
                        items-center
                        gap-1
                        whitespace-nowrap
                        text-[14px]
                        font-normal
                        text-[#737373]

                        max-[1100px]:text-[13px]
                        max-[992px]:text-[12px]

                        max-[768px]:text-[15px]

                        max-[500px]:text-[12px]
                      "
                    >
                      <svg
                        className="
                          h-4
                          w-4
                          shrink-0

                          max-[992px]:h-3.5
                          max-[992px]:w-3.5

                          max-[768px]:h-[18px]
                          max-[768px]:w-[18px]
                        "
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      {post.readTime || "5 دقائق للقراءة"}
                    </span>
                  </div>

                  {/* =================================
                      ARTICLE TITLE
                  ================================= */}
                  <h3
                    className="
                      text-[28px]
                      font-extrabold
                      leading-[1.45]
                      text-white
                      transition
                      duration-300

                      group-hover:text-orange-400

                      max-[1200px]:text-[25px]
                      max-[1100px]:text-[23px]
                      max-[992px]:text-[20px]
                      max-[992px]:leading-[1.5]

                      max-[768px]:text-[clamp(24px,4vw,32px)]
                      max-[768px]:leading-[1.45]

                      max-[500px]:text-[22px]
                    "
                  >
                    {post.title}
                  </h3>

                  {/* =================================
                      EXCERPT
                  ================================= */}
                  <p
                    className="
                      mt-4
                      line-clamp-2
                      text-[15.5px]
                      font-normal
                      leading-6
                      text-[#a1a1a1]

                      max-[1200px]:text-[15px]

                      max-[1100px]:mt-3
                      max-[1100px]:text-[14.5px]

                      max-[992px]:mt-3
                      max-[992px]:text-[14px]
                      max-[992px]:leading-6

                      max-[768px]:mt-4
                      max-[768px]:text-[clamp(14px,2.3vw,17px)]
                      max-[768px]:leading-8

                      max-[500px]:leading-7
                    "
                  >
                    {post.excerpt}
                  </p>
                </div>

                {/* =====================================
                    BOTTOM AREA
                ===================================== */}
                <div
                  className="
                    mt-4
                    flex
                    items-end
                    justify-between
                    gap-4

                    max-[992px]:mt-3
                    max-[992px]:gap-3

                    max-[768px]:mt-7
                    max-[768px]:items-center

                    max-[500px]:mt-6
                    max-[500px]:gap-3
                  "
                >
                  {/* =================================
                      AUTHOR
                  ================================= */}
                  <div className="relative flex min-w-0 items-center gap-2">
                    <div className="relative shrink-0">
                      {post.author?.avatar ? (
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="
                            h-14
                            w-14
                            rounded-full
                            object-cover

                            max-[1100px]:h-12
                            max-[1100px]:w-12

                            max-[992px]:h-11
                            max-[992px]:w-11

                            max-[768px]:h-[52px]
                            max-[768px]:w-[52px]

                            max-[500px]:h-11
                            max-[500px]:w-11
                          "
                        />
                      ) : (
                        <div
                          className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            bg-gray-700
                            text-xs
                          "
                        />
                      )}

                      {/* Orange Online Dot */}
                      <span
                        className="
                          absolute
                          bottom-0
                          left-0
                          h-4
                          w-4
                          rounded-full
                          border-2
                          border-[#151515]
                          bg-orange-500

                          max-[992px]:h-3.5
                          max-[992px]:w-3.5
                        "
                      />
                    </div>

                    {/* Author Text */}
                    <div className="min-w-0">
                      <p
                        className="
                          truncate
                          text-[14px]
                          font-bold
                          text-white

                          max-[1100px]:text-[13px]
                          max-[992px]:text-[12px]

                          max-[768px]:text-[15px]

                          max-[500px]:text-[13px]
                        "
                      >
                        {post.author?.name || "كاتب عدسة"}
                      </p>

                      <p
                        className="
                          whitespace-nowrap
                          text-[12px]
                          text-[#737373]

                          max-[1100px]:text-[11px]
                          max-[992px]:text-[10px]

                          max-[768px]:text-[13px]

                          max-[500px]:text-[11px]
                        "
                      >
                        {new Date(post.date).toLocaleDateString("ar-EG", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>

                  {/* =================================
                      READ MORE
                  ================================= */}
                  <button
                    type="button"
                    onClick={() => onPostClick?.(post)}
                    className="
                      flex
                      shrink-0
                      items-center
                      gap-2
                      whitespace-nowrap
                      text-[14px]
                      font-bold
                      text-orange-500

                      max-[1100px]:text-[13px]
                      max-[992px]:gap-1.5
                      max-[992px]:text-[12px]

                      max-[768px]:text-[15px]

                      max-[500px]:text-[13px]
                    "
                  >
                    <span
                      className="
                        transition-transform
                        duration-300

                        group-hover:translate-x-2
                      "
                    >
                      اقرأ المقال
                    </span>

                    <svg
                      className="
                        h-5
                        w-5
                        rotate-180

                        max-[992px]:h-4
                        max-[992px]:w-4

                        max-[768px]:h-5
                        max-[768px]:w-5

                        max-[500px]:h-4
                        max-[500px]:w-4
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
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedArticles;