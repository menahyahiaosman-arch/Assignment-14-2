function ArticleMain({
  selectedPost,
  articleIntro,
  articleSections,
  copied,
  handleCopyLink,
  posts,
  onSelectPost,
  showNormalRelatedPosts,
}) {
  return (
    <article
      className="
        min-w-0
        w-full
        flex-1
         max-w-full
        max-[1027px]:w-full
        max-[1027px]:flex-none
      "
      dir="rtl"
    >
      {/* =================================================
          QUOTE
      ================================================== */}

      {selectedPost.excerpt && (
        <div
          className="
            mb-10
            rounded-2xl
            border
            border-orange-500/20
            bg-gradient-to-r
            from-orange-500/10
            to-yellow-500/5
            p-6

            max-[1024px]:w-full
            max-[1024px]:rounded-[20px]
            max-[1024px]:px-[28px]
            max-[1024px]:py-[28px]

            max-[768px]:px-6
            max-[768px]:py-6
          "
        >
          <p
            className="
              text-lg
              italic
              leading-relaxed
              text-neutral-200

              max-[1024px]:text-[18px]

              max-[768px]:text-[17px]
            "
          >
            "{selectedPost.excerpt}"
          </p>
        </div>
      )}

      {/* =================================================
          INTRO
      ================================================== */}

      {articleIntro && (
        <div
          className="
            mb-10
            w-full
          "
        >
          <p
            className="
              text-lg
              leading-relaxed
              text-neutral-300

              max-[1024px]:text-[18px]
              max-[1024px]:leading-[2]

              max-[768px]:text-[17px]
            "
          >
            {articleIntro}
          </p>
        </div>
      )}

      {/* =================================================
          DYNAMIC ARTICLE SECTIONS
      ================================================== */}

      {articleSections.map((section, index) => (
        <section
          key={`${section.title}-${index}`}
          id={`article-section-${index}`}
          className="
            mb-16
            w-full
            scroll-mt-28

            max-[1024px]:mb-[58px]

            max-[768px]:mb-[50px]
          "
        >
          {/* Section Heading */}
          <div
            className="
              mb-7
              flex
              items-center
              gap-4

              max-[1024px]:mb-[28px]

              max-[768px]:gap-3
            "
          >
            {/* Icon */}
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center

                rounded-xl

                border
                border-orange-500/30

                bg-orange-500/10

                text-orange-500

                max-[1024px]:h-[50px]
                max-[1024px]:w-[50px]
                max-[1024px]:rounded-[14px]

                max-[768px]:h-11
                max-[768px]:w-11
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
              >
                <title>camera-filled</title>

                <path
                  fill="currentColor"
                  d="M15 3a2 2 0 0 1 1.995 1.85L17 5a1 1 0 0 0 .883.993L18 6h1a3 3 0 0 1 2.995 2.824L22 9v9a3 3 0 0 1-2.824 2.995L19 21H5a3 3 0 0 1-2.995-2.824L2 18V9a3 3 0 0 1 2.824-2.995L5 6h1a1 1 0 0 0 1-1a2 2 0 0 1 1.85-1.995L9 3zm-3 7a3 3 0 0 0-2.985 2.698l-.011.152L9 13l.004.15A3 3 0 1 0 12 10"
                />
              </svg>
            </div>

            {/* Title */}
            <h2
              className="
                text-3xl
                font-bold
                text-white

                max-[1024px]:text-[34px]

                max-[768px]:text-[28px]

                max-[500px]:text-[24px]
              "
            >
              {section.title}
            </h2>
          </div>

          {/* Paragraphs */}
          <div className="space-y-5">
            {section.content.map(
              (paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="
                    mb-6
                    text-[16.5px]
                    font-medium
                    leading-relaxed
                    text-neutral-300

                    max-[1024px]:text-[17px]
                    max-[1024px]:leading-[2]

                    max-[768px]:text-[16px]
                    max-[768px]:leading-[1.9]
                  "
                >
                  {paragraph}
                </p>
              )
            )}
          </div>
        </section>
      ))}

      {/* =================================================
          TAGS SECTION
      ================================================== */}

      <div
        className="
          mt-14
          w-full
max-w-[800px]

          rounded-2xl
          border
          border-[#262626]

          bg-[#111111]

          p-6

          shadow-lg

          max-[1024px]:w-full
          max-[1024px]:rounded-[20px]
          max-[1024px]:px-[30px]
          max-[1024px]:py-[30px]

          max-[768px]:px-6
          max-[768px]:py-6
        "
      >
        {/* Header */}
        <div
          className="
            mb-4
            flex
            items-center
            justify-start
            gap-3

            max-[1024px]:mb-5
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

              text-orange-500

              max-[1024px]:h-[50px]
              max-[1024px]:w-[50px]
              max-[1024px]:rounded-[14px]
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <title>tags</title>

              <path
                fill="currentColor"
                d="M5.5 9A1.5 1.5 0 0 0 7 7.5A1.5 1.5 0 0 0 5.5 6A1.5 1.5 0 0 0 4 7.5A1.5 1.5 0 0 0 5.5 9m11.91 2.58c.36.36.59.86.59 1.42c0 .55-.22 1.05-.59 1.41l-5 5a1.996 1.996 0 0 1-2.83 0l-6.99-6.99C2.22 12.05 2 11.55 2 11V6c0-1.11.89-2 2-2h5c.55 0 1.05.22 1.41.58zm-3.87-5.87l1-1l6.87 6.87c.37.36.59.87.59 1.42s-.22 1.05-.58 1.41l-5.38 5.38l-1-1L20.75 13z"
              />
            </svg>
          </div>

          <h3
            className="
              font-bold
              text-white

              max-[1024px]:text-[18px]
            "
          >
            الوسوم
          </h3>
        </div>

        {/* Tags */}
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-start
            gap-2

            max-[1024px]:gap-3
          "
        >
          {(selectedPost.tags?.length > 0
            ? selectedPost.tags
            : ["إضاءة", "الساعة الذهبية", "تصوير خارجي"]
          ).map((tag, index) => (
            <span
              key={index}
              className="
                cursor-pointer
                rounded-full

                border
                border-[#262626]

                bg-[#1a1a1a]

                px-4
                py-2

                text-sm
                text-neutral-400

                transition-colors

                hover:border-orange-500/50
                hover:text-orange-500

                max-[1024px]:px-[18px]
                max-[1024px]:py-[10px]
                max-[1024px]:text-[14px]
              "
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* =================================================
          SHARE ARTICLE
      ================================================== */}

      <div
        className="
          mt-6

          flex

          min-h-4
          w-full
max-w-[800px]

          items-center
          justify-between

          rounded-[20px]

          border
          border-[#2a2a2a]

          bg-[#111111]

          px-6
          py-6

          max-[1024px]:w-full
          max-[1024px]:min-h-[118px]
          max-[1024px]:px-[30px]
          max-[1024px]:py-[26px]

          max-[768px]:px-6
          max-[768px]:py-6

          max-[560px]:flex-col
          max-[560px]:items-start
          max-[560px]:gap-5
        "
        dir="rtl"
      >
        {/* ================= RIGHT SIDE ================= */}

        <div
          className="
            flex
            items-center
            gap-4
          "
          dir="rtl"
        >
          {/* Share Icon */}
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center

              rounded-xl

              border
              border-orange-500/30

              bg-orange-500/10

              text-orange-500

              max-[1024px]:h-[50px]
              max-[1024px]:w-[50px]
              max-[1024px]:rounded-[14px]
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 640 640"
            >
              <title>share-nodes</title>

              <path
                fill="currentColor"
                d="M448 256c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 5.4.5 10.8 1.3 16l-129.7 72.1c-16.9-15-39.2-24.1-63.6-24.1c-53 0-96 43-96 96s43 96 96 96c24.4 0 46.6-9.1 63.6-24.1L353.3 464c-.9 5.2-1.3 10.5-1.3 16c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-24.4 0-46.6 9.1-63.6 24.1L254.7 336c.9-5.2 1.3-10.5 1.3-16s-.5-10.8-1.3-16l129.7-72.1c16.9 15 39.2 24.1 63.6 24.1"
              />
            </svg>
          </div>

          {/* Title */}
          <h3
            className="
              m-0
              font-bold
              text-white

              max-[1024px]:text-[18px]
            "
          >
            شارك المقال
          </h3>
        </div>

        {/* ================= SOCIAL BUTTONS ================= */}

        <div
          className="
            flex
            items-center
            gap-2

            max-[1024px]:gap-[10px]
          "
          dir="rtl"
        >
          {/* X */}
          <button
            type="button"
            onClick={handleCopyLink}
            title="x"
            className="
              relative

              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-xl

              border
              border-[#262626]

              bg-[#1a1a1a]

              text-neutral-400

              transition-all
              duration-300

              hover:border-transparent
              hover:bg-[#1da1f2]
              hover:text-white
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <title>x-solid</title>

              <path
                fill="currentColor"
                d="M13.795 10.533L20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22zm-2.38 2.95L9.97 11.464L4.36 3.627h2.31l4.528 6.317l1.443 2.02l6.018 8.409h-2.31z"
              />
            </svg>
          </button>

          {/* LinkedIn */}
          <button
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
              window.location.href
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            title="linkedin"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-xl

              border
              border-[#262626]

              bg-[#1a1a1a]

              text-neutral-400

              transition-all
              duration-300

              hover:border-transparent
              hover:bg-[#0077b5]
              hover:text-white
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 640 640"
            >
              <title>linkedin-in</title>

              <path
                fill="currentColor"
                d="M196.3 512h-92.9V212.9h92.9zm-46.5-339.9c-29.7 0-53.8-24.6-53.8-54.3c0-14.3 5.7-27.9 15.8-38s23.8-15.8 38-15.8s27.9 5.7 38 15.8s15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3M543.9 512h-92.7V366.4c0-34.7-.7-79.2-48.3-79.2c-48.3 0-55.7 37.7-55.7 76.7V512h-92.8V212.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3c94 0 111.3 61.9 111.3 142.3V512z"
              />
            </svg>
          </button>

          {/* WhatsApp */}
          <button
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              window.location.href
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            title="whatsApp"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-xl

              border
              border-[#262626]

              bg-[#1a1a1a]

              text-neutral-400

              transition-all
              duration-300

              hover:border-transparent
              hover:bg-[#25d366]
              hover:text-white
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <title>round-whatsapp</title>

              <path
                fill="currentColor"
                d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
              />
            </svg>
          </button>

          {/* Copy Link */}
          <button
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              window.location.href
            )}&text=${encodeURIComponent(
              selectedPost.title
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            title={copied ? "تم النسخ!" : "نسخ الرابط"}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-xl

              border
              border-[#262626]

              bg-[#1a1a1a]

              text-neutral-400

              transition-all
              duration-300

              hover:border-transparent
              hover:bg-orange-500
              hover:text-white
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
            >
              <title>link</title>

              <g fill="currentColor">
                <path d="M6.939 5.01c.57.044 1.122.216 1.619.503c.496.286.924.678 1.257 1.148l-1.63 1.157a2 2 0 0 0-.625-.573a1.8 1.8 0 0 0-1.564-.12c-.255.101-.49.26-.69.469l-1.75 1.848c-.355.391-.56.924-.555 1.486c.005.564.22 1.094.584 1.478c.362.383.841.59 1.33.594a1.85 1.85 0 0 0 1.333-.562l.308-.325a1 1 0 0 1 1.452 1.375l-.315.332l-.012.013A3.85 3.85 0 0 1 4.896 15a3.86 3.86 0 0 1-2.763-1.218A4.18 4.18 0 0 1 1 10.943a4.18 4.18 0 0 1 1.085-2.857l.012-.013l1.758-1.855a3.9 3.9 0 0 1 1.408-.953a3.8 3.8 0 0 1 1.676-.254" />

                <path d="M11.105 1a3.86 3.86 0 0 1 2.762 1.218A4.18 4.18 0 0 1 15 5.057a4.18 4.18 0 0 1-1.085 2.858l-.012.013l-1.758 1.854a3.9 3.9 0 0 1-1.408.953a3.8 3.8 0 0 1-3.295-.247a4 4 0 0 1-1.257-1.15l1.63-1.156c.17.24.386.434.626.573a1.79 1.79 0 0 0 1.563.12c.255-.1.49-.26.69-.469l1.751-1.847c.355-.391.56-.924.555-1.486a2.18 2.18 0 0 0-.584-1.48A1.86 1.86 0 0 0 11.086 3a1.85 1.85 0 0 0-1.334.564l-.313.328a1 1 0 0 1-1.447-1.38l.319-.334l.01-.01A3.85 3.85 0 0 1 11.104 1" />
              </g>
            </svg>
          </button>
        </div>
      </div>

      {/* =================================================
          AUTHOR BOX SECTION
      ================================================== */}

      <div
        className="
          mt-7
          w-full
max-w-[800px]

          rounded-[20px]

          border
          border-[#292929]

          bg-[#121212]

          px-5
          py-5

          max-[1024px]:w-full
          max-[1024px]:px-[30px]
          max-[1024px]:py-[30px]

          max-[768px]:px-6
          max-[768px]:py-6

          max-[500px]:px-5
          max-[500px]:py-5
        "
        dir="rtl"
      >
        <div
          className="
            flex
            h-full
            items-start
            gap-6.5

            max-[640px]:gap-4
          "
        >
          {/* ================= AUTHOR IMAGE ================= */}

          <div className="shrink-0">
            <div
              className="
                mt-3

                h-24
                w-24

                overflow-hidden

                rounded-2xl

                border-[5px]
                border-orange-500/20

                bg-[#191919]

                object-cover

                max-[1024px]:h-[120px]
                max-[1024px]:w-[120px]

                max-[768px]:h-[105px]
                max-[768px]:w-[105px]

                max-[500px]:h-[90px]
                max-[500px]:w-[90px]
              "
            >
              <img
                src={
                  selectedPost?.author?.avatar ||
                  selectedPost?.authorAvatar ||
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
                }
                alt={
                  selectedPost?.author?.name ||
                  "كاتب المقال"
                }
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>
          </div>

          {/* ================= AUTHOR CONTENT ================= */}

          <div
            className="
              mt-4

              flex
              min-w-0
              flex-1
              flex-col
              items-start

              text-right
            "
          >
            {/* Label */}
            <span
              className="
                text-xs
                font-semibold
                uppercase
                leading-[1.4]
                tracking-wider
                text-orange-500

                max-[1024px]:text-[13px]
              "
            >
              كاتب المقال
            </span>

            {/* Name */}
            <h3
              className="
                mt-1

                text-xl
                font-bold
                leading-[1.2]
                text-white

                max-[1024px]:text-[22px]

                max-[768px]:text-[20px]
              "
            >
              {selectedPost?.author?.name ||
                selectedPost?.authorName ||
                "سالم أحمد"}
            </h3>

            {/* Role */}
            <p
              className="
                mb-3

                text-sm
                font-normal
                leading-[1.4]
                text-[#777777]
              "
            >
              {selectedPost?.author?.role ||
                selectedPost?.authorRole ||
                "مصور محترف"}
            </p>

            {/* Bio */}
            <p
              className="
                text-[14px]
                font-normal
                leading-[1.9]
                text-[#a1a1a1]

                max-[1024px]:text-[15px]

                max-[768px]:text-[14px]
              "
            >
              {selectedPost?.author?.bio ||
                selectedPost?.authorBio ||
                "مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي."}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ArticleMain;
