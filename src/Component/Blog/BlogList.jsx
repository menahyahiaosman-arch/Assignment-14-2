import { useMemo, useState } from "react";

const normalizeText = (text = "") => {
  return String(text)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u064B-\u065F\u0670]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .trim();
};

function BlogList({
  posts,
  selectedCategory,
  setSelectedCategory,
  currentPage,
  setCurrentPage,
  onPostClick,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const normalizedSearch = useMemo(() => {
    return normalizeText(searchTerm);
  }, [searchTerm]);

  const categoryPosts = useMemo(() => {
    if (selectedCategory === "جميع المقالات") {
      return posts;
    }

    return posts.filter(
      (post) => post.category === selectedCategory
    );
  }, [posts, selectedCategory]);

  const filteredPosts = useMemo(() => {
    if (!normalizedSearch) {
      return categoryPosts;
    }

    return categoryPosts.filter((post) => {
      const normalizedCategory = normalizeText(
        post.category || ""
      );

      return normalizedCategory.includes(
        normalizedSearch
      );
    });
  }, [categoryPosts, normalizedSearch]);

  const postsPerPage = 6;

  const totalPages = Math.ceil(
    filteredPosts.length / postsPerPage
  );

  const showPagination =
    selectedCategory === "جميع المقالات" ||
    selectedCategory === "تقنيات";

  const startIndex =
    (currentPage - 1) * postsPerPage;

  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const categories = [
    "جميع المقالات",
    "إضاءة",
    "بورتريه",
    "مناظر طبيعية",
    "تقنيات",
    "معدات",
  ];

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("جميع المقالات");
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (
      page === currentPage ||
      page < 1 ||
      page > totalPages
    ) {
      return;
    }

    setCurrentPage(page);

    requestAnimationFrame(() => {
      const articlesSection =
        document.querySelector(".blog-articles");

      if (articlesSection) {
        const top =
          articlesSection.getBoundingClientRect().top +
          window.scrollY -
          170;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    });
  };

  return (
    <section
      dir="rtl"
      className="
        min-h-screen
        overflow-visible
        bg-[#090909]
        text-white
      "
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          isolate
          flex
          min-h-[300px]
          items-center
          justify-center
          overflow-hidden
          bg-[#090909]

          max-[955px]:min-h-[400px]
          max-[768px]:min-h-[390px]
        "
      >
        {/* Grid Background */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />

        {/* Orange Glow */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            bg-[radial-gradient(circle_at_35%_50%,rgba(190,76,19,0.20)_0%,rgba(80,28,3,0.14)_20%,rgba(50,18,2,0.08)_38%,transparent_58%)]
          "
        />

        {/* Hero Content */}
        <div
          className="
            relative
            z-[1]
            flex
            flex-col
            items-center
            px-5
            pb-[75px]
            pt-10
            text-center

            max-[955px]:pb-[65px]
            max-[955px]:pt-[55px]

            max-[768px]:pb-[55px]
            max-[768px]:pt-[50px]
          "
        >
          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-[30px]
              border
              border-[#5A2806]
              bg-[#2C1B0B]
              px-[14px]
              py-2
              text-[14px]
              font-medium
              text-[#f97316]
            "
          >
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

            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>

            <span>مدونتنا</span>
          </div>

          {/* Title */}
          <h1
            className="
              mt-[34px]
              text-[60px]
              font-bold
              leading-[1.25]
              tracking-[-2px]
              text-[#f7f7f7]

              max-[955px]:text-[58px]
              max-[820px]:text-[56px]
              max-[768px]:text-[52px]
              max-[600px]:text-[44px]
              max-[450px]:text-[35px]
            "
          >
            استكشف{" "}

            <span
              className="
                bg-linear-to-r
                from-[#F97F18]
                via-[#FAA11E]
                to-[#FBB423]
                bg-clip-text
                text-transparent
              "
            >
              مقالاتنا
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-[22px]
              text-[20px]
              font-normal
              leading-7
              text-[#a1a1a1]

              max-[820px]:text-[19px]
              max-[768px]:text-[18px]
              max-[600px]:text-[15px]
              max-[450px]:text-[12px]
            "
          >
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </section>

      {/* =====================================================
          SEARCH + CATEGORIES NAVBAR
      ====================================================== */}

      <section
        className="
          sticky
          top-[78px]
          z-[999]
          w-full
          min-h-[100px]
          border-b
          border-[#292929]
          bg-[#090909]

          max-[955px]:min-h-[145px]

          max-[768px]:top-[92px]
          max-[768px]:min-h-[170px]
        "
      >
        <div
          className="
            mx-auto
            flex
            min-h-[100px]
            w-[80%]
            items-center
            justify-between
            gap-[50px]

            max-[955px]:w-[90%]
            max-[955px]:gap-[28px]

            max-[820px]:w-[92%]
            max-[820px]:gap-5

            max-[768px]:w-[calc(100%-54px)]
            max-[768px]:flex-col
            max-[768px]:items-stretch
            max-[768px]:justify-center
            max-[768px]:gap-5
            max-[768px]:py-5

            max-[600px]:w-[calc(100%-32px)]
          "
        >
          {/* =================================================
              SEARCH - RIGHT
          ================================================== */}

          <div
            className="
              relative
              h-[50px]
              w-[320px]
              shrink-0

              max-[955px]:h-[62px]
              max-[955px]:w-[320px]

              max-[820px]:w-[290px]

              max-[768px]:order-1
              max-[768px]:h-[62px]
              max-[768px]:w-full
            "
          >
            <input
              type="text"
              placeholder="إبحث في المقالات..."
              value={searchTerm}
              autoComplete="off"
              spellCheck={false}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="
                h-full
                w-full
                rounded-[14px]
                border
                border-[#292929]
                bg-[#171717]
                py-0
                pl-5
                pr-[55px]
                text-right
                text-[16px]
                text-white
                outline-none
                transition-all
                duration-[250ms]
                placeholder:text-[#555]

                focus:border-[#EC5D0E]
              "
            />

            <svg
              className="
                pointer-events-none
                absolute
                left-5
                top-1/2
                h-[23px]
                w-[23px]
                -translate-y-1/2
                text-[#777]
              "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
              />

              <path d="m20 20-4-4" />
            </svg>
          </div>

          {/* =================================================
              CATEGORIES - LEFT
          ================================================== */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-2

              max-[955px]:flex-1
              max-[955px]:justify-center

              max-[820px]:justify-center

              max-[768px]:order-2
              max-[768px]:w-full
              max-[768px]:flex-none
              max-[768px]:justify-center

              max-[640px]:justify-center
            "
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`
                  h-[40px]
                  shrink-0
                  rounded-[14px]
                  border
                  px-[15px]
                  text-[14px]
                  font-medium
                  transition-all
                  duration-[250ms]

                  hover:border-[#5B300E]
                  hover:text-white

                  max-[955px]:h-[47px]
                  max-[955px]:px-[17px]

                  max-[820px]:px-[15px]

                  max-[768px]:h-[47px]
                  max-[768px]:px-[17px]

                  max-[640px]:h-[43px]
                  max-[640px]:px-[14px]
                  max-[640px]:text-[12px]

                  ${
                    selectedCategory === category
                      ? `
                        border-[#ff6d0b]
                        bg-linear-[80deg,#FF6600,#F64C00]
                        text-white
                        shadow-[0_8px_25px_rgba(255,109,11,0.12)]
                      `
                      : `
                        border-[#292929]
                        bg-[#171717]
                        text-[#a1a1a1]
                      `
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ARTICLES
      ====================================================== */}

      <section
        className="
          blog-articles
          min-h-[600px]
          bg-[#090909]
          px-6
          pb-[100px]
          pt-[55px]

          max-[700px]:px-4
          max-[700px]:pb-[70px]
          max-[700px]:pt-10
        "
      >
        <div
          className="
            mx-auto
            w-[80%]

            max-[1024px]:w-[94%]

            max-[955px]:w-[92%]

            max-[768px]:w-[94%]
          "
        >
          {/* =================================================
              TOP ROW
          ================================================== */}

          <div
            className="
              mb-[30px]
              flex
              items-center
              justify-between
              gap-5

              max-[450px]:mb-[25px]
            "
          >
            {/* Count */}
            <div
              className="
                text-[16px]
                font-normal
                text-[#a1a1a1]
              "
            >
              عرض{" "}

              <strong className="font-bold text-white">
                {filteredPosts.length}
              </strong>{" "}

              مقالات

              {selectedCategory !== "جميع المقالات" && (
                <>
                  {" "}
                  في{" "}

                  <span className="font-bold text-[#ff6500]">
                    {selectedCategory}
                  </span>
                </>
              )}
            </div>

            {/* View + Reset */}
            <div className="flex items-center gap-4">
              {/* View Buttons */}
              <div
                className="
                  flex
                  items-center
                  rounded-[14px]
                  border
                  border-[#292929]
                  bg-[#171717]
                  p-[5px]
                "
              >
                {/* Grid */}
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`
                    flex
                    h-[35px]
                    w-[35px]
                    items-center
                    justify-center
                    rounded-[10px]
                    border-0
                    transition-all
                    duration-[250ms]

                    ${
                      viewMode === "grid"
                        ? "bg-[#ff6d0b] text-white"
                        : "bg-transparent text-[#777] hover:text-white"
                    }
                  `}
                  aria-label="عرض شبكي"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>

                {/* List */}
                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  className={`
                    flex
                    h-[35px]
                    w-[35px]
                    items-center
                    justify-center
                    rounded-[10px]
                    border-0
                    transition-all
                    duration-[250ms]

                    ${
                      viewMode === "list"
                        ? "bg-[#ff6d0b] text-white"
                        : "bg-transparent text-[#777] hover:text-white"
                    }
                  `}
                  aria-label="عرض قائمة"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>

              {/* Reset */}
              {(searchTerm ||
                selectedCategory !== "جميع المقالات") && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-1
                    border-0
                    bg-transparent
                    p-0
                    text-[14px]
                    font-medium
                    text-[#777777]
                    transition-colors
                    duration-200

                    hover:text-white
                  "
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>

                  <span>
                    مسح الفلتر
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* =================================================
              NO RESULTS
          ================================================== */}

          {filteredPosts.length === 0 ? (
            <div
              className="
                flex
                min-h-[500px]
                w-full
                flex-col
                items-center
                justify-center
                pb-10
                text-center
              "
            >
              {/* Empty Icon */}
              <div
                className="
                  mb-8
                  flex
                  h-[92px]
                  w-[92px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#292929]
                  bg-[#171717]
                  text-[#777777]
                "
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                  />

                  <circle
                    cx="9"
                    cy="10"
                    r="0.7"
                    fill="currentColor"
                    stroke="none"
                  />

                  <circle
                    cx="15"
                    cy="10"
                    r="0.7"
                    fill="currentColor"
                    stroke="none"
                  />

                  <path
                    d="M8.5 16c1-1.3 2.1-1.9 3.5-1.9s2.5.6 3.5 1.9"
                  />
                </svg>
              </div>

              <h3
                className="
                  m-0
                  text-[24px]
                  font-black
                  leading-[1.4]
                  text-white
                "
              >
                لا توجد مقالات
              </h3>

              <p
                className="
                  mt-3
                  text-[16px]
                  font-normal
                  leading-[1.8]
                  text-[#a1a1a1]
                "
              >
                حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
              </p>

              <button
                type="button"
                onClick={handleResetFilters}
                className="
                  mt-8
                  flex
                  h-[60px]
                  min-w-[260px]
                  cursor-pointer
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border-0
                  bg-linear-[90deg,#F66F14,#ED5D0E]
                  px-8
                  text-[17px]
                  font-extrabold
                  text-white
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                "
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>

                <span>
                  إعادة تعيين الفلتر
                </span>
              </button>
            </div>
          ) : (
            <>
              {/* =================================================
                  GRID VIEW
              ================================================== */}

              {viewMode === "grid" && (
                <div
                  className="
                    grid
                    grid-cols-3
                    gap-[38px]

                    max-[1200px]:gap-[30px]

                    max-[1024px]:grid-cols-2
                    max-[1024px]:gap-[40px]

                    max-[900px]:gap-[28px]

                    max-[820px]:gap-[22px]

                    max-[768px]:grid-cols-1
                    max-[768px]:gap-[28px]

                    max-[500px]:gap-[22px]
                  "
                >
                  {currentPosts.map((post) => (
                    <article
                      key={post.id}
                      onClick={() => {
                        onPostClick?.(post);

                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="
                        group
                        w-full
                        cursor-pointer
                        overflow-hidden
                        rounded-[22px]
                        border
                        border-[#292929]
                        bg-[#171717]
                        transition-[transform,border-color]
                        duration-300
                        ease-out

                        hover:-translate-y-0.5
                        hover:border-[#333333]

                        max-[1024px]:rounded-[28px]

                        max-[820px]:rounded-[24px]

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
                          w-full
                          overflow-hidden

                          max-[1024px]:h-[260px]

                          max-[900px]:h-[240px]

                          max-[820px]:h-[220px]

                          max-[768px]:h-[260px]

                          max-[640px]:h-[235px]

                          max-[500px]:h-[210px]
                        "
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="
                            block
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-500
                            ease-out

                            group-hover:scale-[1.04]
                          "
                        />

                        {/* Hover Overlay */}
                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            z-10
                            translate-y-full
                            bg-linear-to-t
                            from-black/75
                            via-black/25
                            to-transparent
                            transition-transform
                            duration-500
                            ease-out

                            group-hover:translate-y-0
                          "
                        />

                        {/* Category */}
                        <span
                          className="
                            absolute
                            right-4
                            top-4
                            z-20
                            rounded-[20px]
                            bg-[rgba(20,20,20,0.92)]
                            px-[14px]
                            py-[7px]
                            text-[11px]
                            font-extrabold
                            text-white

                            max-[1024px]:right-[18px]
                            max-[1024px]:top-[18px]
                            max-[1024px]:px-[15px]
                            max-[1024px]:py-[8px]
                            max-[1024px]:text-[12px]

                            max-[820px]:right-4
                            max-[820px]:top-4
                            max-[820px]:px-[13px]
                            max-[820px]:py-[6px]
                            max-[820px]:text-[11px]

                            max-[768px]:right-5
                            max-[768px]:top-5
                            max-[768px]:px-[16px]
                            max-[768px]:py-[8px]
                            max-[768px]:text-[12px]

                            max-[500px]:right-3
                            max-[500px]:top-3
                            max-[500px]:px-3
                            max-[500px]:py-1.5
                          "
                        >
                          {post.category}
                        </span>
                      </div>

                      {/* =====================================
                          CONTENT
                      ===================================== */}

                      <div
                        className="
                          p-[23px]

                          max-[1024px]:p-[30px]

                          max-[900px]:p-[25px]

                          max-[820px]:p-[22px]

                          max-[768px]:p-[30px]

                          max-[500px]:p-5
                        "
                      >
                        {/* META */}
                        <div
                          className="
                            mb-[10px]
                            flex
                            items-center
                            gap-3
                            text-[14px]
                            font-normal
                            text-[#737373]

                            max-[1024px]:mb-[18px]
                            max-[1024px]:text-[14px]

                            max-[900px]:text-[13px]

                            max-[820px]:mb-[14px]
                            max-[820px]:gap-2
                            max-[820px]:text-[12px]

                            max-[768px]:mb-[18px]
                            max-[768px]:gap-3
                            max-[768px]:text-[14px]

                            max-[500px]:text-[12px]
                          "
                        >
                          {/* Read Time */}
                          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
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

                            <span>
                              {post.readTime || "5 دقائق للقراءة"}
                            </span>
                          </span>

                          {/* Dot */}
                          <span
                            className="
                              h-1
                              w-1
                              shrink-0
                              rounded-full
                              bg-neutral-600
                            "
                          />

                          {/* Date */}
                          <span className="whitespace-nowrap">
                            {new Date(post.date).toLocaleDateString(
                              "ar-EG",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }
                            )}
                          </span>
                        </div>

                        {/* TITLE */}
                        <h3
                          className="
                            m-0
                            line-clamp-2
                            text-[20px]
                            font-bold
                            leading-[1.45]
                            text-[#f4f4f4]
                            transition-colors
                            duration-300

                            group-hover:text-[#ff6500]

                            max-[1024px]:text-[22px]
                            max-[1024px]:font-extrabold
                            max-[1024px]:leading-[1.5]

                            max-[900px]:text-[20px]

                            max-[820px]:text-[18px]

                            max-[768px]:text-[24px]
                            max-[768px]:leading-[1.5]

                            max-[600px]:text-[21px]

                            max-[500px]:text-[19px]
                          "
                        >
                          {post.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p
                          className="
                            mt-3
                            line-clamp-2
                            text-[14px]
                            font-normal
                            leading-[23px]
                            text-[#a1a1a1]

                            max-[1024px]:mt-[16px]
                            max-[1024px]:text-[15px]
                            max-[1024px]:leading-[1.8]

                            max-[900px]:text-[14px]

                            max-[820px]:mt-3
                            max-[820px]:text-[13px]
                            max-[820px]:leading-6

                            max-[768px]:mt-[14px]
                            max-[768px]:text-[15px]
                            max-[768px]:leading-[1.8]

                            max-[500px]:text-[13px]
                            max-[500px]:leading-6
                          "
                        >
                          {post.excerpt}
                        </p>

                        {/* Divider */}
                        <div
                          className="
                            my-5
                            h-px
                            w-full
                            bg-[#292929]

                            max-[1024px]:my-[24px]

                            max-[820px]:my-[18px]

                            max-[768px]:my-[25px]

                            max-[500px]:my-5
                          "
                        />

                        {/* =================================
                            BOTTOM
                        ================================= */}

                        <div
                          className="
                            flex
                            w-full
                            items-center
                            justify-between
                          "
                          dir="rtl"
                        >
                          {/* Author */}
                          <div className="flex min-w-0 items-center gap-3">
                            {post.author?.avatar ? (
                              <img
                                src={post.author.avatar}
                                alt={
                                  post.author?.name ||
                                  "كاتب عدسة"
                                }
                                className="
                                  h-11
                                  w-11
                                  shrink-0
                                  rounded-full
                                  border
                                  border-[#505050]
                                  object-cover

                                  max-[1024px]:h-[46px]
                                  max-[1024px]:w-[46px]

                                  max-[820px]:h-10
                                  max-[820px]:w-10

                                  max-[768px]:h-[48px]
                                  max-[768px]:w-[48px]

                                  max-[500px]:h-10
                                  max-[500px]:w-10
                                "
                              />
                            ) : (
                              <div
                                className="
                                  h-11
                                  w-11
                                  shrink-0
                                  rounded-full
                                  border
                                  border-[#505050]
                                  bg-[#2a2a2a]
                                "
                              />
                            )}

                            <div
                              className="
                                flex
                                min-w-0
                                flex-col
                                items-start
                                justify-center
                                text-right
                              "
                            >
                              {/* Name */}
                              <div
                                className="
                                  whitespace-nowrap
                                  text-[14px]
                                  font-bold
                                  leading-[18px]
                                  text-white

                                  max-[1024px]:text-[14px]

                                  max-[820px]:text-[12px]

                                  max-[768px]:text-[15px]

                                  max-[500px]:text-[13px]
                                "
                              >
                                {post.author?.name || "كاتب عدسة"}
                              </div>

                              {/* Role */}
                              <div
                                className="
                                  mt-1
                                  whitespace-nowrap
                                  text-[12px]
                                  font-normal
                                  leading-4
                                  text-[#737373]

                                  max-[820px]:text-[10px]

                                  max-[768px]:text-[13px]

                                  max-[500px]:text-[11px]
                                "
                              >
                                {post.author?.role || "مصور محترف"}
                              </div>
                            </div>
                          </div>

                          {/* Arrow */}
                          <button
                            type="button"
                            aria-label="اقرأ المقال"
                            onClick={(e) => {
                              e.stopPropagation();

                              onPostClick?.(post);

                              window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                              });
                            }}
                            className="
                              flex
                              h-10
                              w-10
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-[#6a320b]
                              bg-[#27170c]
                              text-[#ff6500]
                              transition-all
                              duration-300

                              group-hover:scale-105
                              group-hover:border-[#ff6500]
                              group-hover:bg-[#ff6500]
                              group-hover:text-white

                              max-[1024px]:h-[42px]
                              max-[1024px]:w-[42px]

                              max-[820px]:h-[38px]
                              max-[820px]:w-[38px]

                              max-[768px]:h-[42px]
                              max-[768px]:w-[42px]

                              max-[500px]:h-[38px]
                              max-[500px]:w-[38px]
                            "
                          >
                            <svg
                              className="
                                h-4
                                w-4
                                rotate-180
                                transition-transform
                                duration-300

                                group-hover:-translate-x-0.5
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
              )}

              {/* =================================================
                  LIST VIEW
              ================================================== */}

              {viewMode === "list" && (
                <div className="flex flex-col gap-[30px]">
                  {currentPosts.map((post) => (
                    <article
                      key={post.id}
                      onClick={() => {
                        onPostClick?.(post);

                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="
                        group
                        flex
                        min-h-[265px]
                        w-full
                        cursor-pointer
                        overflow-hidden
                        rounded-[20px]
                        border
                        border-[#292929]
                        bg-[#151515]
                        transition-all
                        duration-300

                        hover:border-[#3a3a3a]

                        max-[768px]:flex-col
                      "
                    >
                      {/* Image */}
                      <div
                        className="
                          relative
                          w-[390px]
                          shrink-0
                          overflow-hidden

                          max-[955px]:w-[340px]

                          max-[820px]:w-[300px]

                          max-[768px]:h-[260px]
                          max-[768px]:w-full
                        "
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

                            group-hover:scale-[1.04]
                          "
                        />

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-linear-to-l
                            from-transparent
                            via-transparent
                            to-[#151515]/20
                          "
                        />
                      </div>

                      {/* Content */}
                      <div
                        className="
                          flex
                          flex-1
                          flex-col
                          justify-between
                          px-[34px]
                          py-7

                          max-[955px]:px-7

                          max-[768px]:p-6
                        "
                        dir="rtl"
                      >
                        <div>
                          {/* Category + Meta */}
                          <div
                            className="
                              mb-6
                              flex
                              items-center
                              gap-4

                              max-[820px]:gap-3

                              max-[600px]:flex-wrap
                            "
                          >
                            {/* Category */}
                            <span
                              className="
                                rounded-full
                                border
                                border-[#7a3510]
                                bg-[#2a170d]
                                px-4
                                py-1.5
                                text-[13px]
                                font-bold
                                text-[#ff6500]
                              "
                            >
                              {post.category}
                            </span>

                            {/* Read Time */}
                            <span className="flex items-center gap-1.5 text-[14px] text-[#777777]">
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="9"
                                  strokeWidth="2"
                                />

                                <path
                                  d="M12 7v5l3 2"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>

                              <span>
                                {post.readTime || "5 دقائق للقراءة"}
                              </span>
                            </span>

                            {/* Date */}
                            <span className="flex items-center gap-1.5 text-[14px] text-[#777777]">
                              <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <rect
                                  x="3"
                                  y="4"
                                  width="18"
                                  height="17"
                                  rx="2"
                                  strokeWidth="2"
                                />

                                <path
                                  d="M8 2v4M16 2v4M3 10h18"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>

                              <span>
                                {new Date(post.date).toLocaleDateString(
                                  "ar-EG",
                                  {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                  }
                                )}
                              </span>
                            </span>
                          </div>

                          {/* Title */}
                          <h2
                            className="
                              m-0
                              text-[24px]
                              font-bold
                              leading-[1.45]
                              text-white
                              transition-colors
                              duration-300

                              group-hover:text-[#ff6500]
                            "
                          >
                            {post.title}
                          </h2>

                          {/* Excerpt */}
                          <p
                            className="
                              mt-3
                              line-clamp-2
                              max-w-[850px]
                              text-[17px]
                              font-normal
                              leading-[1.8]
                              text-[#8d8d8d]
                            "
                          >
                            {post.excerpt}
                          </p>
                        </div>

                        {/* Bottom */}
                        <div className="mt-5 flex items-end justify-between">
                          {/* Author */}
                          <div className="flex items-center gap-3">
                            {post.author?.avatar ? (
                              <img
                                src={post.author.avatar}
                                alt={
                                  post.author?.name ||
                                  "كاتب عدسة"
                                }
                                className="
                                  h-10
                                  w-10
                                  rounded-full
                                  border
                                  border-[#363636]
                                  object-cover
                                "
                              />
                            ) : (
                              <div
                                className="
                                  h-10
                                  w-10
                                  rounded-full
                                  bg-[#292929]
                                "
                              />
                            )}

                            <div className="flex flex-col">
                              <span className="text-[16px] font-bold text-white">
                                {post.author?.name || "كاتب عدسة"}
                              </span>

                              <span className="mt-1 text-[13px] text-[#777777]">
                                {post.author?.role || "مصور محترف"}
                              </span>
                            </div>
                          </div>

                          {/* Read Article */}
                          <div
                            className="
                              flex
                              items-center
                              gap-3
                              text-[16px]
                              font-bold
                              text-[#ff6500]
                            "
                          >
                            <span>
                              اقرأ المقال
                            </span>

                            <svg
                              className="
                                h-5
                                w-5
                                rotate-180
                                transition-transform
                                duration-300

                                group-hover:-translate-x-1
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
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {/* =================================================
                  PAGINATION
                  جميع المقالات + تقنيات فقط
              ================================================== */}

              {showPagination && totalPages > 1 && (
                <>
                  <div
                    className="
                      mt-[55px]
                      flex
                      items-center
                      justify-center
                      gap-[10px]
                      [direction:ltr]
                    "
                  >
                    {/* Previous */}
                    <button
                      type="button"
                      onClick={() =>
                        handlePageChange(
                          Math.min(
                            currentPage + 1,
                            totalPages
                          )
                        )
                      }
                      disabled={
                        currentPage === totalPages
                      }
                      className="
                        flex
                        h-[45px]
                        w-[45px]
                        items-center
                        justify-center
                        rounded-[15px]
                        border
                        border-[#252525]
                        bg-[#111111]
                        text-[#888]
                        transition-all
                        duration-300

                        hover:border-[#ff5a00]

                        disabled:cursor-not-allowed
                        disabled:opacity-[0.35]
                        disabled:hover:border-[#252525]
                      "
                    >
                      <svg
                        className="h-6 w-6 rotate-180"
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

                    {/* Pages */}
                    <div className="flex items-center gap-[9px]">
                      {Array.from(
                        { length: totalPages },
                        (_, index) =>
                          totalPages - index
                      ).map((page) => (
                        <button
                          type="button"
                          key={page}
                          onClick={() =>
                            handlePageChange(page)
                          }
                          className={`
                            flex
                            h-[45px]
                            w-[45px]
                            items-center
                            justify-center
                            rounded-[15px]
                            border
                            text-[14px]
                            font-medium
                            transition-all
                            duration-300

                            ${
                              currentPage === page
                                ? `
                                  border-[#ff5a00]
                                  bg-[#ff5a00]
                                  text-white
                                `
                                : `
                                  border-[#252525]
                                  bg-[#111111]
                                  text-[#888]
                                  hover:border-[#ff5a00]
                                `
                            }
                          `}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    {/* Next */}
                    <button
                      type="button"
                      onClick={() =>
                        handlePageChange(
                          Math.max(
                            currentPage - 1,
                            1
                          )
                        )
                      }
                      disabled={currentPage === 1}
                      className="
                        flex
                        h-[45px]
                        w-[45px]
                        items-center
                        justify-center
                        rounded-[15px]
                        border
                        border-[#252525]
                        bg-[#111111]
                        text-[#888]
                        transition-all
                        duration-300

                        hover:border-[#ff5a00]

                        disabled:cursor-not-allowed
                        disabled:opacity-[0.35]
                        disabled:hover:border-[#252525]
                      "
                    >
                      <svg
                        className="h-6 w-6 rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Pagination Info */}
                  <p
                    className="
                      mb-[35px]
                      mt-5
                      text-center
                      text-[15px]
                      text-[#777]
                    "
                  >
                    صفحة {currentPage} من {totalPages}
                  </p>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </section>
  );
}

export default BlogList;