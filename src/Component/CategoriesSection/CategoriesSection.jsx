import postsData from "../../data/posts.json";

const categoryIcons = {
  إضاءة: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0"
      />

      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.017 2.8a1 1 0 0 0-1.562.664l-.442 2.82a1 1 0 0 1-.815.831l-2.812.493a1 1 0 0 0-.636 1.574l1.683 2.306a1 1 0 0 1 .01 1.164l-1.64 2.337a1 1 0 0 0 .664 1.562l2.82.442a1 1 0 0 1 .83.815l.493 2.812a1 1 0 0 0 1.574.636l2.307-1.683a1 1 0 0 1 1.164-.01l2.336 1.64a1 1 0 0 0 1.563-.664l.44-2.82a1 1 0 0 1 .817-.83l2.812-.493a1 1 0 0 0 .635-1.574l-1.682-2.307a1 1 0 0 1-.011-1.164l1.64-2.336a1 1 0 0 0-.663-1.563l-2.821-.441a1 1 0 0 1-.83-.816l-.493-2.812a1 1 0 0 0-1.574-.635L12.518 4.43a1 1 0 0 1-1.164.01zM17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0"
        clipRule="evenodd"
      />
    </svg>
  ),

  بورتريه: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 12.75c3.942 0 7.987 2.563 8.249 7.712a.75.75 0 0 1-.71.787c-2.08.106-11.713.171-15.077 0a.75.75 0 0 1-.711-.787C4.013 15.314 8.058 12.75 12 12.75m0-9a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"
      />
    </svg>
  ),

  "مناظر طبيعية": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 640 640"
    >
      <path
        fill="currentColor"
        d="M288.5 64c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S518.6 544 504.6 544h-432c-14.1 0-27.1-7.4-34.3-19.5s-7.5-27.1-.8-39.5l216-400l2.9-4.6c7.3-10.2 19.2-16.4 32.1-16.4m-86.1 249.9l26.8 26.8c6.2 6.2 16.4 6.2 22.6 0l43.3-43.3c6-6 14.1-9.4 22.6-9.4h42.8l-72.1-133.5l-86.1 159.4zM528.5 224c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80"
      />
    </svg>
  ),

  تقنيات: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 640 640"
    >
      <path
        fill="currentColor"
        d="M96 128c-17.7 0-32 14.3-32 32s14.3 32 32 32h86.7c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H329.3C317 99.7 288.8 80 256 80s-61 19.7-73.3 48zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h246.7c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48H544c17.7 0 32-14.3 32-32s-14.3-32-32-32h-54.7c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h54.7c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H297.3c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48z"
      />
    </svg>
  ),

  معدات: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0"
      />

      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.017 2.8a1 1 0 0 0-1.562.664l-.442 2.82a1 1 0 0 1-.815.831l-2.812.493a1 1 0 0 0-.636 1.574l1.683 2.306a1 1 0 0 1 .01 1.164l-1.64 2.337a1 1 0 0 0 .664 1.562l2.82.442a1 1 0 0 1 .83.815l.493 2.812a1 1 0 0 0 1.574.636l2.307-1.683a1 1 0 0 1 1.164-.01l2.336 1.64a1 1 0 0 0 1.563-.664l.44-2.82a1 1 0 0 1 .817-.83l2.812-.493a1 1 0 0 0 .635-1.574l-1.682-2.307a1 1 0 0 1-.011-1.164l1.64-2.336a1 1 0 0 0-.663-1.563l-2.821-.441a1 1 0 0 1-.83-.816l-.493-2.812a1 1 0 0 0-1.574-.635L12.518 4.43a1 1 0 0 1-1.164.01zM17 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0"
        clipRule="evenodd"
      />
    </svg>
  ),
};

function CategoriesSection({
  selectedCategory,
  onSelectCategory,
}) {
  const categories = postsData.categories || [];

  const getCategoryCount = (categoryName) => {
    return postsData.posts.filter(
      (post) => post.category === categoryName
    ).length;
  };

  return (
    <section
      className="
        relative
        min-h-107.5
        overflow-hidden
        border-b
        border-t
        border-[#292929]
        bg-[#111111]
        px-6
        py-23
        text-white

        max-[768px]:px-[30px]
        max-[768px]:py-[70px]

        max-[500px]:px-4
        max-[500px]:py-[55px]
      "
      dir="rtl"
    >
      {/* =========================================
          BACKGROUND GRID
      ========================================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)]
          bg-size-[60px-60px]
        "
      />

      {/* =========================================
          ORANGE GLOW
      ========================================= */}
      <div
        className="
          pointer-events-none
          absolute
          right-[-5%]
          top-[45%]
          h-75
          w-75
          rounded-full
          bg-orange-500/2.5
          blur-[100px]
        "
      />

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}
      <div
        className="
          relative
          z-1
          mx-auto
          w-full
          max-w-285
        "
      >
        {/* =========================================
            HEADER
        ========================================= */}
        <div
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >
          {/* Badge */}
          <div
            className="
              inline-flex
              flex-row-reverse
              items-center
              gap-2.5
              rounded-full
              border
              border-[#a94f0c]/70
              bg-[#291b12]
              px-5
              py-3
              text-[15px]
              font-bold
              text-[#ff710f]

              max-[768px]:px-[20px]
              max-[768px]:py-[10px]
              max-[768px]:text-[14px]

              max-[500px]:px-4
              max-[500px]:text-[13px]
            "
          >
            التصنيفات

            {/* Big Dot */}
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
          </div>

          {/* Title */}
          <h2
            className="
              mt-6.25
              text-[clamp(35px,4vw,54px)]
              font-black
              leading-[1.3]
              tracking-[-1.5px]
              text-[#f5f5f5]

              max-[768px]:mt-[28px]
              max-[768px]:text-[clamp(36px,6vw,48px)]

              max-[500px]:text-[clamp(30px,9vw,38px)]
            "
          >
            استكشف حسب الموضوع
          </h2>

          {/* Description */}
          <p
            className="
              mt-3.25
              text-[18px]
              font-normal
              text-[#a1a1a1]

              max-[768px]:mt-4
              max-[768px]:text-[18px]

              max-[500px]:text-[15px]
            "
          >
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>
        </div>

        {/* =========================================
            CATEGORIES GRID
        ========================================= */}
        <div
          className="
            mt-12
            grid
            grid-cols-4
            gap-5.5

            max-[900px]:grid-cols-3

            max-[768px]:mt-[60px]
            max-[768px]:grid-cols-2
            max-[768px]:gap-5

            max-[600px]:gap-4

            max-[480px]:gap-3
          "
        >
          {categories.map((category, index) => {
            const categoryName =
              typeof category === "string"
                ? category
                : category.name || category.title;

            const isSelected =
              selectedCategory === categoryName;

            const categoryCount =
              typeof category === "string"
                ? getCategoryCount(categoryName)
                : category.count ??
                  getCategoryCount(categoryName);

            return (
              <button
                key={categoryName || index}
                type="button"
                onClick={() =>
                  onSelectCategory?.(categoryName)
                }
                className={`
                  group
                  relative
                  flex
                  min-h-[157px]
                  flex-col
                  items-end
                  rounded-[15px]
                  border
                  px-6
                  py-[23px]
                  text-right
                  text-white
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-transparent

                  max-[768px]:min-h-[206px]
                  max-[768px]:rounded-[20px]
                  max-[768px]:px-[30px]
                  max-[768px]:py-[30px]

                  max-[600px]:min-h-[185px]
                  max-[600px]:px-[22px]
                  max-[600px]:py-[24px]

                  max-[480px]:min-h-[165px]
                  max-[480px]:rounded-[16px]
                  max-[480px]:px-4
                  max-[480px]:py-5

                  ${
                    isSelected
                      ? "border-[#292929] bg-[#171717]"
                      : "border-[#292929] bg-[#171717]"
                  }

                  ${
                    categoryName === "بورتريه"
                      ? "hover:bg-[linear-gradient(135deg,#f64f00_0%,#ff8500_100%)]"
                      : "hover:bg-linear-to-br hover:from-[#ff710f] hover:via-[#ff9500] hover:to-[#f5c400]"
                  }
                `}
              >
                {/* =================================
                    ICON
                ================================= */}
                <div
                  className={`
                    ml-auto
                    mb-4
                    flex
                    h-[46px]
                    w-[46px]
                    shrink-0
                    items-center
                    justify-center
                    self-end
                    rounded-xl
                    border
                    transition-all
                    duration-300

                    max-[768px]:mb-[24px]
                    max-[768px]:h-[60px]
                    max-[768px]:w-[60px]
                    max-[768px]:rounded-[15px]
                    max-[768px]:[&_svg]:h-[30px]
                    max-[768px]:[&_svg]:w-[30px]

                    max-[600px]:mb-5
                    max-[600px]:h-[54px]
                    max-[600px]:w-[54px]
                    max-[600px]:[&_svg]:h-[27px]
                    max-[600px]:[&_svg]:w-[27px]

                    max-[480px]:mb-4
                    max-[480px]:h-[48px]
                    max-[480px]:w-[48px]
                    max-[480px]:[&_svg]:h-6
                    max-[480px]:[&_svg]:w-6

                    ${
                      isSelected
                        ? "border-orange-500 bg-orange-500/15 text-[#ff710f]"
                        : "border-orange-500/38 bg-orange-500/8 text-[#ff710f]"
                    }

                    group-hover:border-white/10
                    group-hover:bg-white/20
                    group-hover:text-white
                  `}
                >
                  {categoryIcons[categoryName] || (
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="8"
                      />
                    </svg>
                  )}
                </div>

                {/* =================================
                    CATEGORY TITLE
                ================================= */}
                <h3
                  className="
                    w-full
                    text-right
                    text-[16px]
                    font-extrabold
                    leading-normal
                    text-[#f1f1f1]
                    transition-colors
                    duration-300

                    group-hover:text-white

                    max-[768px]:text-[22px]

                    max-[600px]:text-[19px]

                    max-[480px]:text-[16px]
                  "
                >
                  {categoryName}
                </h3>

                {/* =================================
                    POSTS COUNT
                ================================= */}
                <span
                  className="
                    mt-1.75
                    w-full
                    text-right
                    text-[12px]
                    font-medium
                    text-[#656565]
                    transition-colors
                    duration-300

                    group-hover:text-white

                    max-[768px]:mt-2
                    max-[768px]:text-[16px]

                    max-[600px]:text-[14px]

                    max-[480px]:text-[12px]
                  "
                >
                  {categoryCount} مقالة
                </span>

                {/* =================================
                    HOVER ARROW
                ================================= */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    left-13
                    top-[30%]
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-white/15
                    text-white
                    opacity-0
                    transition-all
                    duration-300

                    group-hover:-translate-x-1.25
                    group-hover:opacity-100

                    max-[768px]:left-5
                    max-[768px]:top-[28%]

                    max-[500px]:left-3
                  "
                >
                  <svg
                    className="h-4 w-4 rotate-180"
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
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;