function ArticleHero({
  selectedPost,
  formattedDate,
  onBackToBlog,
  onGoHome,
}) {
  return (
    <section
      className="
        relative
        h-125
        overflow-hidden

        max-[768px]:h-[600px]
      "
    >
      {/* Background Image */}
      <img
        src={selectedPost.image}
        alt={selectedPost.title}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

      <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a]/30 to-transparent" />

      <div
        className="
          relative
          z-10
          mx-auto
          h-full
          max-w-295
          px-6

          max-[768px]:px-6
        "
      >
        {/* =================================================
            BREADCRUMB
        ================================================== */}

        <div
          className="
            absolute
            -right-33
            top-7

            flex
            items-center
            gap-2

            whitespace-nowrap

            rounded-full
            border
            border-white/10

            bg-black/30
            px-4
            py-2

            text-sm

            backdrop-blur-md

            max-[1286px]:right-6

            max-[768px]:right-6
            max-[768px]:top-7
            max-[768px]:gap-1.5
            max-[768px]:px-4
            max-[768px]:py-2
            max-[768px]:text-[14px]
          "
        >
          {/* Home */}
          <span className="flex items-center text-gray-300">
            <button
              type="button"
              onClick={() => onGoHome?.()}
              aria-label="الصفحة الرئيسية"
              className="
                flex
                cursor-pointer
                items-center
                justify-center
                border-0
                bg-transparent
                p-0
                text-[#b5b5b5]
                transition-none

                hover:text-[#b5b5b5]
                focus:text-[#b5b5b5]
                active:text-[#b5b5b5]
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 640 640"
              >
                <title>home</title>

                <path
                  fill="currentColor"
                  d="M341.8 72.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S82.8 336 96 336h16v176c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V336h16c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1zM304 384h32c26.5 0 48 21.5 48 48v96H256v-96c0-26.5 21.5-48 48-48"
                />
              </svg>
            </button>
          </span>

          {/* Arrow */}
          <span className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <title>chevron-left</title>

              <path
                fill="currentColor"
                d="M14 17.308L8.692 12L14 6.692l.708.708l-4.6 4.6l4.6 4.6z"
              />
            </svg>
          </span>

          {/* Blog */}
          <button
            type="button"
            onClick={onBackToBlog}
            className="
              cursor-pointer
              border-0
              bg-transparent
              p-0
              text-white

              hover:text-white
              focus:text-white
            "
          >
            المدونة
          </button>

          {/* Arrow */}
          <span className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <title>chevron-left</title>

              <path
                fill="currentColor"
                d="M14 17.308L8.692 12L14 6.692l.708.708l-4.6 4.6l4.6 4.6z"
              />
            </svg>
          </span>

          {/* Category */}
          <span className="font-medium text-orange-500">
            {selectedPost.category}
          </span>
        </div>

        {/* =================================================
            ARTICLE INFO
        ================================================== */}

        <div
          className="
            absolute
            right-20
            top-32

            flex
            items-center
            gap-3

            text-sm
            text-gray-300

            max-[768px]:right-6
            max-[768px]:top-[300px]
            max-[768px]:gap-3
          "
        >
          {/* Category */}
          <span
            className="
              rounded-full
              bg-orange-500
              px-3.5
              py-2

              font-bold
              text-white

              max-[768px]:px-4
              max-[768px]:py-2.5
              max-[768px]:text-[14px]
            "
          >
            {selectedPost.category}
          </span>

          {/* Date */}
          <span className="flex items-center gap-2 text-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <title>calendar</title>

              <path
                fill="currentColor"
                d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"
              />
            </svg>

            <span>{formattedDate}</span>
          </span>

          {/* Reading Time */}
          <span className="flex items-center gap-2 text-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <title>clock</title>

              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0" />

                <path d="M12 7v5l3 3" />
              </g>
            </svg>

            <span>
              {selectedPost.readTime || "5 دقائق للقراءة"}
            </span>
          </span>
        </div>

        {/* =================================================
            TITLE - DESKTOP
        ================================================== */}

        <div
          className="
            absolute
            right-20
            top-42
            max-w-212.5

            max-[768px]:hidden
          "
        >
          <h1
            className="
              text-[58px]
              font-bold
              text-white
            "
          >
            {selectedPost.title}
          </h1>
        </div>

        {/* =================================================
            AUTHOR CARD - DESKTOP
        ================================================== */}

        <div
          className="
            absolute
            bottom-13.75
            right-20

            max-[768px]:hidden
          "
        >
          <div
            className="
              flex
              w-fit
              items-center
              gap-4

              rounded-2xl
              border
              border-white/10

              bg-white/5

              p-4

              backdrop-blur-md
            "
          >
            {selectedPost.author?.avatar && (
              <img
                src={selectedPost.author.avatar}
                alt={selectedPost.author?.name}
                className="
                  h-14
                  w-14

                  rounded-full

                  border-2
                  border-orange-500/50

                  object-cover
                "
              />
            )}

            <div className="flex flex-col">
              <p className="font-bold text-white">
                {selectedPost.author?.name || "سالم أحمد"}
              </p>

              <p className="text-sm text-white/60">
                {selectedPost.author?.role || "مصور محترف"}
              </p>
            </div>
          </div>
        </div>

        {/* =================================================
            TITLE + AUTHOR - MOBILE
            مربوطين ببعض علشان المسافة تفضل ثابتة
        ================================================== */}

        <div
          className="
            hidden

            max-[768px]:absolute
            max-[768px]:bottom-6
            max-[768px]:right-6
            max-[768px]:left-6
            max-[768px]:block
          "
        >
          {/* Mobile Title */}
          <h1
            className="
              m-0
              text-[38px]
              font-bold
              leading-[1.35]
              tracking-[-0.5px]
              text-white

              max-[640px]:text-[35px]

              max-[550px]:text-[32px]

              max-[450px]:text-[29px]
            "
          >
            {selectedPost.title}
          </h1>


          <div
            className="
              mt-[26px]

              max-[500px]:mt-[22px]
            "
          >
            {/* Mobile Author Card */}
            <div
              className="
                ml-auto

                flex
                w-fit
                min-w-[228px]

                items-center
                gap-4

                rounded-[18px]
                border
                border-white/10

                bg-white/5

                px-4
                py-4

                backdrop-blur-md
              "
            >
              {selectedPost.author?.avatar && (
                <img
                  src={selectedPost.author.avatar}
                  alt={selectedPost.author?.name}
                  className="
                    h-[72px]
                    w-[72px]
                    shrink-0

                    rounded-full

                    border-2
                    border-orange-500/50

                    object-cover

                    max-[500px]:h-[64px]
                    max-[500px]:w-[64px]
                  "
                />
              )}

              <div className="flex flex-col">
                <p
                  className="
                    m-0
                    text-[17px]
                    font-bold
                    text-white

                    max-[500px]:text-[16px]
                  "
                >
                  {selectedPost.author?.name || "سالم أحمد"}
                </p>

                <p
                  className="
                    m-0
                    mt-1

                    text-[14px]
                    text-white/60

                    max-[500px]:text-[13px]
                  "
                >
                  {selectedPost.author?.role || "مصور محترف"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleHero;
