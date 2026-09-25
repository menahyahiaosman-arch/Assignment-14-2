import postsData from "../../data/posts.json";

function LatestArticles({ onGoToBlog, onPostClick }) {
  const latestPosts = postsData.posts.filter((post) =>
    [4, 5, 6].includes(post.id)
  );

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#0b0b0b]
        px-6
        py-24
        text-white

        max-[1024px]:px-[30px]
        max-[1024px]:py-[80px]

        max-[768px]:px-[30px]
        max-[768px]:py-[70px]

        max-[500px]:px-4
        max-[500px]:py-[55px]
      "
      dir="rtl"
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}
      <div
        className="
          pointer-events-none
          absolute
          -left-45
          -top-45
          h-150
          w-150
          rounded-full
          bg-[#8b451f]/10
          blur-[180px]

          max-[768px]:-left-[220px]
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
          w-[85%]
          max-w-[1180px]

          max-[1200px]:w-[90%]

          max-[1024px]:w-full
          max-[1024px]:max-w-none

          max-[768px]:w-full
        "
      >
        {/* =========================================
            HEADER
        ========================================= */}
        <div
          className="
            mb-10
            flex
            items-end
            justify-between
            gap-8

            max-[1024px]:mb-[60px]
            max-[1024px]:items-end

            max-[768px]:mb-[64px]
            max-[768px]:flex-col
            max-[768px]:items-start
            max-[768px]:gap-0

            max-[500px]:mb-[45px]
          "
        >
          {/* =====================================
              RIGHT HEADER
          ===================================== */}
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
                mb-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-orange-500/25
                bg-[#22150B]
                px-3.5
                py-2
                text-[14px]
                font-medium
                text-orange-500

                max-[1024px]:mb-6

                max-[768px]:mb-[28px]
                max-[768px]:px-[18px]
                max-[768px]:py-2
                max-[768px]:text-[14px]

                max-[500px]:mb-5
                max-[500px]:px-4
                max-[500px]:text-[13px]
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

              {/* Big Animated Dot */}
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

              <span className="mr-3">الأحدث</span>
            </div>

            {/* Main Title */}
            <h2
              className="
                text-[60px]
                font-extrabold
                leading-[1.15]
                tracking-tight
                text-white

                max-[1200px]:text-[54px]

                max-[1024px]:text-[48px]

                max-[768px]:text-[clamp(38px,6.5vw,48px)]

                max-[500px]:text-[clamp(30px,9vw,40px)]
              "
            >
              أحدث المقالات
            </h2>

            {/* Description */}
            <p
              className="
                mt-4
                text-[18px]
                font-normal
                text-[#a1a1a1]

                max-[1024px]:text-[17px]

                max-[768px]:mt-[22px]
                max-[768px]:text-[clamp(16px,2.6vw,19px)]

                max-[500px]:mt-4
                max-[500px]:text-[15px]
              "
            >
              محتوى جديد طازج من المطبعة
            </p>
          </div>

          {/* =====================================
              SHOW ALL LINK
          ===================================== */}
          <button
            type="button"
            onClick={onGoToBlog}
            className="
              group
              mb-2
              flex
              shrink-0
              items-center
              gap-2
              text-[16px]
              font-bold
              text-orange-500
              transition
              duration-300

              hover:text-[#FF8904]

              max-[1024px]:text-[15px]

              max-[768px]:mb-0
              max-[768px]:mt-[28px]
              max-[768px]:self-start
              max-[768px]:text-[18px]

              max-[500px]:mt-5
              max-[500px]:text-[15px]
            "
          >
            عرض جميع المقالات

            <svg
              className="
                h-5
                w-5
                rotate-180
                transition-transform
                duration-300

                group-hover:-translate-x-1

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

        {/* =========================================
            CARDS GRID
        ========================================= */}
        <div
          className="
            grid
            grid-cols-3
            gap-7

            max-[1200px]:gap-6

            max-[1024px]:grid-cols-2
            max-[1024px]:gap-6

            max-[768px]:grid-cols-1
            max-[768px]:gap-[30px]
          "
        >
          {latestPosts.map((post) => (
            <article
              key={post.id}
              className="
                group
                cursor-pointer
                overflow-hidden
                rounded-2xl
                border
                border-[#292929]
                bg-[#171717]
                transition
                duration-300

                hover:-translate-y-1.5

                max-[1024px]:rounded-[22px]

                max-[768px]:rounded-[28px]

                max-[500px]:rounded-[22px]
              "
            >
              {/* =====================================
                  IMAGE
              ===================================== */}
              <div
                className="
                  relative
                  h-[220px]
                  overflow-hidden

                  max-[1200px]:h-[230px]

                  max-[1024px]:h-[260px]

                  max-[768px]:h-[260px]

                  max-[640px]:h-[clamp(220px,48vw,260px)]

                  max-[500px]:h-[220px]
                "
                onClick={() => onPostClick?.(post)}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500

                    group-hover:scale-105
                  "
                />

                {/* Base Overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-[#171717]
                    via-transparent
                    to-transparent
                    opacity-80
                  "
                />

                {/* Hover Overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-black/70
                    via-black/20
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    ease-in-out

                    group-hover:opacity-100
                  "
                />

                {/* Category Badge */}
                <span
                  className="
                    absolute
                    right-4
                    top-4
                    rounded-full
                    bg-black/70
                    px-3.5
                    py-1
                    text-[12px]
                    font-medium
                    text-white
                    backdrop-blur-sm

                    max-[1024px]:right-4
                    max-[1024px]:top-4

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
                  {post.category}
                </span>
              </div>

              {/* =====================================
                  CARD CONTENT
              ===================================== */}
              <div
                className="
                  p-5

                  max-[1024px]:p-[26px]

                  max-[768px]:p-[30px]

                  max-[500px]:p-5
                "
              >
                {/* =================================
                    DATE + READING TIME
                ================================= */}
                <div
                  className="
                    mb-4
                    flex
                    items-center
                    gap-3
                    text-gray-600

                    max-[768px]:mb-5
                    max-[768px]:gap-3

                    max-[500px]:gap-2
                  "
                >
                  {/* Reading Time */}
                  <span
                    className="
                      flex
                      items-center
                      gap-1
                      whitespace-nowrap
                      text-[14px]
                      font-normal
                      text-[#737373]

                      max-[1024px]:text-[13px]

                      max-[768px]:text-[15px]

                      max-[500px]:text-[12px]
                    "
                  >
                    <svg
                      className="
                        h-4
                        w-4
                        shrink-0

                        max-[768px]:h-[18px]
                        max-[768px]:w-[18px]

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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    {post.readTime || "5 دقائق للقراءة"}
                  </span>

                  {/* Dot */}
                  <span className="h-1 w-1 shrink-0 rounded-full bg-neutral-600" />

                  {/* Date */}
                  <span
                    className="
                      whitespace-nowrap
                      text-[14px]
                      font-normal
                      text-[#737373]

                      max-[1024px]:text-[13px]

                      max-[768px]:text-[15px]

                      max-[500px]:text-[12px]
                    "
                  >
                    {new Date(post.date).toLocaleDateString("ar-EG", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* =================================
                    TITLE
                ================================= */}
                <h3
                  className="
                    line-clamp-2
                    min-h-[58px]
                    text-[20px]
                    font-extrabold
                    leading-7
                    text-white
                    transition
                    duration-300

                    group-hover:text-orange-400

                    max-[1024px]:text-[22px]
                    max-[1024px]:leading-8

                    max-[768px]:min-h-0
                    max-[768px]:text-[clamp(22px,3.5vw,28px)]
                    max-[768px]:leading-[1.45]

                    max-[500px]:text-[20px]
                  "
                >
                  {post.title}
                </h3>

                {/* =================================
                    EXCERPT
                ================================= */}
                <p
                  className="
                    mt-3
                    line-clamp-2
                    min-h-12
                    text-[14px]
                    font-normal
                    leading-6
                    text-[#a1a1a1]

                    max-[1024px]:text-[14.5px]

                    max-[768px]:mt-4
                    max-[768px]:min-h-0
                    max-[768px]:text-[clamp(14px,2.2vw,16px)]
                    max-[768px]:leading-7

                    max-[500px]:text-[14px]
                  "
                >
                  {post.excerpt}
                </p>

                {/* Divider */}
                <div
                  className="
                    my-5
                    h-px
                    bg-[#292929]

                    max-[768px]:my-6
                  "
                />

                {/* =================================
                    FOOTER
                ================================= */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  {/* Author */}
                  <div className="flex min-w-0 items-center gap-2">
                    {post.author?.avatar ? (
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="
                          h-9
                          w-9
                          shrink-0
                          rounded-full
                          object-cover

                          max-[1024px]:h-10
                          max-[1024px]:w-10

                          max-[768px]:h-[46px]
                          max-[768px]:w-[46px]

                          max-[500px]:h-10
                          max-[500px]:w-10
                        "
                      />
                    ) : (
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-gray-700
                          text-[14px]
                        "
                      />
                    )}

                    <div className="min-w-0">
                      <p
                        className="
                          truncate
                          text-[14px]
                          font-medium
                          text-white

                          max-[768px]:text-[15px]

                          max-[500px]:text-[13px]
                        "
                      >
                        {post.author?.name || "كاتب عدسة"}
                      </p>

                      <p
                        className="
                          mt-0.5
                          truncate
                          text-[12px]
                          text-[#737373]

                          max-[768px]:text-[13px]

                          max-[500px]:text-[11px]
                        "
                      >
                        {post.author?.role || "مصور محترف"}
                      </p>
                    </div>
                  </div>

                  {/* Read Article Button */}
                  <button
                    type="button"
                    aria-label="اقرأ المقال"
                    onClick={() => onPostClick?.(post)}
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-orange-500/40
                      bg-orange-500/8
                      text-orange-500
                      transition-all
                      duration-300

                      group-hover:scale-105
                      group-hover:bg-orange-500
                      group-hover:text-white

                      max-[768px]:h-10
                      max-[768px]:w-10
                    "
                  >
                    <svg
                      className="
                        h-4
                        w-4
                        rotate-180
                        text-current
                        transition-colors
                        duration-300
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestArticles;