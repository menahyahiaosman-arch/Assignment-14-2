function SpecialRelatedPosts({
  relatedPosts,
  titleClamp = 2,
  onSelectPost,
  onViewAll,
}) {
  const titleClassName =
    titleClamp === 1
      ? "line-clamp-1 text-[20px] font-extrabold leading-[1.6] text-white"
      : "line-clamp-2 text-[20px] font-extrabold leading-[1.6] text-white";

  return (
    <section
      dir="rtl"
      className="
        w-[85%]
        mx-auto
        border-y
        border-[#252525]
        bg-[#090909]
        px-6
        py-12.5

        max-[1024px]:w-[95%]
        max-[1024px]:px-0

        max-[640px]:w-[95%]
        max-[640px]:px-0
        max-[640px]:py-[40px]
      "
    >
      <div className="w-full max-w-[1520px]">

        {/* Header */}
        <div
          className="
            mb-[54px]
            flex
            items-center
            justify-between
            gap-8

            max-[640px]:mb-[50px]
            max-[640px]:gap-4
          "
        >

          <div
            className="
              flex
              items-center
              gap-5

              max-[640px]:gap-4
            "
          >
            <div
              className="
                w-12
                h-12
                bg-orange-500/10
                rounded-2xl
                flex
                items-center
                justify-center
                border
                border-orange-500/30
                text-orange-500
                text-xl

                max-[640px]:h-[60px]
                max-[640px]:w-[60px]
                max-[640px]:shrink-0
                max-[640px]:rounded-[20px]
                max-[640px]:text-[24px]
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 640 640"
              >
                <title>images</title>

                <path
                  fill="currentColor"
                  d="M128 160c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64zm-72 32c13.3 0 24 10.7 24 24v296c0 8.8 7.2 16 16 16h360c13.3 0 24 10.7 24 24s-10.7 24-24 24H96c-35.3 0-64-28.7-64-64V216c0-13.3 10.7-24 24-24m168 32c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32m196.5 11.5c-4.4-7.1-12.1-11.5-20.5-11.5s-16.1 4.4-20.5 11.5l-56.3 92.1l-24.5-30.6c-4.6-5.7-11.4-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4S206.8 416 216 416h272c8.7 0 16.7-4.7 20.9-12.3s4.1-16.8-.5-24.3l-88-144z"
                />
              </svg>
            </div>

            <div>
              <h2
                className="
                  text-2xl
                  font-bold
                  text-white

                  max-[640px]:text-[28px]
                  max-[640px]:leading-[1.3]
                "
              >
                مقالات قد تعجبك
              </h2>

              <p
                className="
                  mt-2
                  text-sm
                  font-normal
                  text-neutral-500

                  max-[640px]:mt-1
                  max-[640px]:text-[15px]
                "
              >
                استكشف المزيد من المحتوى المميز
              </p>
            </div>
          </div>

          {/* عرض الكل */}
          <button
            type="button"
            onClick={onViewAll}
            className="
              group
              flex
              items-center
              gap-3
              border-none
              bg-transparent
              text-[17px]
              font-medium
              text-[#ff6500]
              transition-colors
              duration-300
              hover:text-[#ff8533]

              max-[640px]:hidden
            "
          >
            <span>عرض الكل</span>

            <svg
              className="
                h-6
                w-6
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 12H5m6-6-6 6 6 6"
              />
            </svg>
          </button>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-3
            gap-[30px]

            max-[1024px]:grid-cols-2
            max-[1024px]:gap-[30px]

            max-[640px]:grid-cols-1
            max-[640px]:gap-[30px]
          "
        >
          {relatedPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => {
                if (typeof onSelectPost === "function") {
                  onSelectPost(post);
                }

                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="
                group
                h-92
                cursor-pointer
                overflow-hidden
                rounded-[20px]
                border
                border-[#292929]
                bg-[#111111]
                transition-colors
                duration-300
                hover:border-[#5A2B0C]

                max-[640px]:h-auto
                max-[640px]:min-h-[365px]
              "
            >

              {/* Image */}
              <div
                className="
                  relative
                  h-[245px]
                  w-full
                  overflow-hidden

                  max-[640px]:h-[245px]
                "
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    brightness-[0.72]
                    transform-gpu
                    origin-center
                    will-change-transform
                    [backface-visibility:hidden]
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-[1.12]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-[#111111]
                    via-black/20
                    to-transparent
                  "
                />

                <span
                  className="
                    absolute
                    right-5
                    top-5
                    rounded-full
                    bg-[#ff6500]
                    px-4
                    py-1.5
                    text-[13px]
                    font-extrabold
                    text-white

                    max-[640px]:right-5
                    max-[640px]:top-5
                  "
                >
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div
                className="
                  flex
                  h-[121px]
                  flex-col
                  justify-between
                  px-6
                  pb-5
                  pt-4

                  max-[640px]:h-[121px]
                  max-[640px]:px-6
                  max-[640px]:pb-5
                  max-[640px]:pt-4
                "
              >
                <h3
                  className="
                    font-bold
                    text-white
                    group-hover:text-orange-500
                    transition-colors
                    line-clamp-2
                    mb-3

                    max-[640px]:text-[18px]
                    max-[640px]:leading-[1.7]
                  "
                >
                  {post.title}
                </h3>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-5
                    text-[14px]
                    text-[#666666]

                    max-[640px]:gap-3
                  "
                >

                  {/* Author */}
                  <div className="flex min-w-0 items-center gap-3">
                    {post.author?.avatar && (
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="
                          h-8
                          w-8
                          shrink-0
                          rounded-full
                          object-cover
                        "
                      />
                    )}

                    <span className="truncate">
                      {post.author?.name || "كاتب عدسة"}
                    </span>
                  </div>

                  {/* Reading Time */}
                  <div
                    className="
                      flex
                      shrink-0
                      items-center
                      gap-2
                      whitespace-nowrap
                    "
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="1.8"
                    >
                      <circle cx="12" cy="12" r="9" />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 7v5l3 2"
                      />
                    </svg>

                    <span>
                      {post.readTime || "5 دقائق للقراءة"}
                    </span>
                  </div>

                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SpecialRelatedPosts;
