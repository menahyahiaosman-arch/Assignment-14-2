function ArticleSidebar({
  selectedPost,
  articleSections,
  onViewAll,
}) {
  return (
    <aside
  dir="rtl"
  className="
   
    w-full
    min-w-0
    min-[1025px]:sticky
    min-[1025px]:top-24

    max-[1024px]:relative
    max-[1024px]:top-auto
    max-[1024px]:w-full
    max-[1024px]:shrink-0
  "
>
      {/* =================================================
          CONTENTS
      ================================================== */}

      <div
        className="
          rounded-2xl
          border
          border-[#262626]
          bg-[#111111]
          p-6

          max-[1024px]:min-h-[478px]
          max-[1024px]:rounded-[20px]
          max-[1024px]:px-[30px]
          max-[1024px]:py-[30px]

          max-[768px]:min-h-0
          max-[768px]:px-6
          max-[768px]:py-6

          max-[500px]:px-5
          max-[500px]:py-5
        "
      >
        {/* Heading */}
        <div
          className="
            mb-5
            flex
            items-center
            gap-3

            max-[1024px]:mb-[26px]
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-xl

              border
              border-orange-500/30

              bg-orange-500/10

              max-[1024px]:h-[50px]
              max-[1024px]:w-[50px]
              max-[1024px]:rounded-[14px]

              max-[768px]:h-11
              max-[768px]:w-11
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="
                text-orange-500

                max-[1024px]:h-[25px]
                max-[1024px]:w-[25px]
              "
            >
              <title>list-filled</title>

              <path
                fill="currentColor"
                d="M21 6a1 1 0 0 1-1 1H10a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1m0 6a1 1 0 0 1-1 1H10a1 1 0 0 1 0-2h10a1 1 0 0 1 1 1m0 6a1 1 0 0 1-1 1H10a1 1 0 0 1 0-2h10a1 1 0 0 1 1 1M7 5.995v.02c0 1.099-.895 1.99-2 1.99s-2-.891-2-1.99v-.02c0-1.099.895-1.99 2-1.99s2 .891 2 1.99m0 6v.02c0 1.099-.895 1.99-2 1.99s-2-.891-2-1.99v-.02c0-1.099.895-1.99 2-1.99s2 .891 2 1.99m0 6v.02c0 1.099-.895 1.99-2 1.99s-2-.891-2-1.99v-.02c0-1.099.895-1.99 2-1.99s2 .891 2 1.99"
              />
            </svg>
          </div>

          <h3
            className="
              font-bold
              text-white

              max-[1024px]:text-[18px]

              max-[600px]:text-[16px]
            "
          >
            محتويات المقال
          </h3>
        </div>

        {/* Navigation */}
        <nav
          className="
            space-y-2

            max-[1024px]:space-y-[10px]
          "
        >
          {articleSections.map((section, index) => (
            <a
              key={`${section.title}-${index}`}
              type="button"
              onClick={() => {
                document
                  .getElementById(`article-section-${index}`)
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
              className="
                group
                flex
                cursor-pointer
                items-center
                gap-3

                rounded-xl

                p-3

                text-neutral-400

                transition-all
                duration-300

                hover:bg-orange-500/5
                hover:text-orange-500

                max-[1024px]:min-h-[56px]
                max-[1024px]:px-4
                max-[1024px]:py-3

                max-[600px]:min-h-[50px]
                max-[600px]:px-3
              "
            >
              {/* Number */}
              <span
                className="
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center

                  rounded-lg

                  bg-[#1a1a1a]

                  text-xs
                  font-bold
                  text-neutral-500

                  transition-colors

                  group-hover:bg-orange-500/10
                  group-hover:text-orange-500

                  max-[1024px]:h-[30px]
                  max-[1024px]:w-[30px]
                  max-[1024px]:text-[13px]

                  max-[600px]:h-7
                  max-[600px]:w-7
                "
              >
                {index + 1}
              </span>

              {/* Text */}
              <span
                className="
                  text-sm

                  max-[1024px]:text-[15px]

                  max-[600px]:text-[14px]
                "
              >
                {section.title}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* =================================================
          DATE + READ TIME
      ================================================== */}

      <div
        className="
          mt-5

          rounded-2xl

          border
          border-[#262626]

          bg-[#111111]

          p-6

          max-[1024px]:mt-[30px]
          max-[1024px]:rounded-[20px]
          max-[1024px]:p-[30px]

          max-[768px]:p-6

          max-[500px]:p-4
        "
      >
        <div
          className="
            grid
            grid-cols-2
            gap-4

            max-[1024px]:gap-[20px]

            max-[600px]:gap-3

            max-[420px]:grid-cols-1
          "
        >
          {/* =================================================
              READ TIME
          ================================================== */}

          <div
            className="
              rounded-2xl
              bg-[#080808]
              p-4
              text-center

              max-[1024px]:flex
              max-[1024px]:min-h-[125px]
              max-[1024px]:flex-col
              max-[1024px]:items-center
              max-[1024px]:justify-center
              max-[1024px]:rounded-[16px]
              max-[1024px]:p-5

              max-[600px]:min-h-[115px]
              max-[600px]:p-4
            "
          >
            <svg
              className="
                mx-auto
                mb-3
                text-orange-500

                max-[1024px]:mb-[10px]
              "
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>

            <div
              className="
                text-lg
                font-bold
                text-white

                max-[1024px]:text-[18px]

                max-[600px]:text-[16px]
              "
            >
              {selectedPost.readTime || "8 دقائق"}
            </div>

            <div
              className="
                text-xs
                text-gray-500

                max-[1024px]:mt-1
                max-[1024px]:text-[12px]
              "
            >
              وقت القراءة
            </div>
          </div>

          {/* =================================================
              DATE
          ================================================== */}

          <div
            className="
              rounded-xl
              bg-[#0a0a0a]
              p-4
              text-center

              max-[1024px]:flex
              max-[1024px]:min-h-[125px]
              max-[1024px]:flex-col
              max-[1024px]:items-center
              max-[1024px]:justify-center
              max-[1024px]:rounded-[16px]
              max-[1024px]:p-5

              max-[600px]:min-h-[115px]
              max-[600px]:p-4
            "
          >
            <svg
              className="
                mx-auto
                mb-2
                text-orange-500

                max-[1024px]:mb-[10px]
              "
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="17"
                rx="2"
              />

              <line
                x1="16"
                y1="2"
                x2="16"
                y2="6"
              />

              <line
                x1="8"
                y1="2"
                x2="8"
                y2="6"
              />

              <line
                x1="3"
                y1="10"
                x2="21"
                y2="10"
              />
            </svg>

            <div
              className="
                text-lg
                font-bold
                text-white

                max-[1024px]:text-[18px]

                max-[600px]:text-[16px]
              "
            >
              {new Date(
                selectedPost.date
              ).toLocaleDateString("ar-EG", {
                day: "numeric",
                month: "long",
              })}
            </div>

            <p
              className="
                text-xs
                text-neutral-500

                max-[1024px]:mt-1
                max-[1024px]:text-[12px]
              "
            >
              تاريخ النشر
            </p>
          </div>
        </div>
      </div>

      {/* =================================================
          NEWSLETTER
      ================================================== */}

      <div
        className="
          mt-5

          rounded-2xl

          border
          border-orange-500/20

          bg-linear-to-br
          from-orange-500/10
          to-yellow-500/5

          p-5

          max-[1024px]:mt-[30px]
          max-[1024px]:rounded-[20px]
          max-[1024px]:px-[30px]
          max-[1024px]:pb-[30px]
          max-[1024px]:pt-[30px]

          max-[768px]:px-6

          max-[500px]:px-5
          max-[500px]:py-6
        "
      >
        {/* Icon */}
        <div
          className="
            mx-auto
            mb-4

            flex
            h-14
            w-14
            items-center
            justify-center

            rounded-2xl

            bg-orange-500/20

            max-[1024px]:h-[70px]
            max-[1024px]:w-[70px]
            max-[1024px]:rounded-[20px]

            max-[600px]:h-[62px]
            max-[600px]:w-[62px]
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="
              text-xl
              text-orange-500

              max-[1024px]:h-[28px]
              max-[1024px]:w-[28px]
            "
            width="25"
            height="25"
            viewBox="0 0 640 640"
          >
            <title>envelope</title>

            <path
              fill="currentColor"
              d="M112 128c-26.5 0-48 21.5-48 48c0 15.1 7.1 29.3 19.2 38.4l208 156a48 48 0 0 0 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48zM64 260v188c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V260L377.6 408.8c-34.1 25.6-81.1 25.6-115.2 0z"
            />
          </svg>
        </div>

        {/* Title */}
        <h3
          className="
            mb-2

            text-center
            font-bold
            text-white

            max-[1024px]:text-[18px]

            max-[600px]:text-[17px]
          "
        >
          لا تفوت جديدنا
        </h3>

        {/* Description */}
        <p
          className="
            mb-4

            text-center
            text-sm
            text-neutral-400

            max-[1024px]:mb-[22px]
            max-[1024px]:text-[14px]
          "
        >
          اشترك للحصول على أحدث المقالات
        </p>

        {/* Button */}
        <button
          type="button"
          onClick={() => {
            onViewAll?.();
          }}
          className="
            block
            w-full

            cursor-pointer

            rounded-xl

            border-0

            bg-orange-500

            py-3

            text-center
            font-semibold
            text-white

            transition-colors

            hover:bg-orange-600

            max-[1024px]:h-[60px]
            max-[1024px]:py-0
            max-[1024px]:text-[16px]

            max-[600px]:h-[56px]
            max-[600px]:text-[15px]
          "
        >
          تصفح المزيد
        </button>
      </div>
    </aside>
  );
}

export default ArticleSidebar;
