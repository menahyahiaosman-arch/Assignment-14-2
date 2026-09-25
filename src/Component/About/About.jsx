import postsData from "../../data/posts.json";

function About({ onGoBlog }) {
    const stats = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 640 640"
                >
                    <title>users</title>
                    <path
                        fill="currentColor"
                        d="M320 80c57.4 0 104 46.6 104 104s-46.6 104-104 104s-104-46.6-104-104S262.6 80 320 80M96 152c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72s32.2-72 72-72M0 480c0-70.7 57.3-128 128-128c12.8 0 25.2 1.9 36.9 5.4C132 394.2 112 442.8 112 496v16c0 11.4 2.4 22.2 6.7 32H32c-17.7 0-32-14.3-32-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32v-16c0-53.2-20-101.8-52.9-138.6c11.7-3.5 24.1-5.4 36.9-5.4c70.7 0 128 57.3 128 128v32c0 17.7-14.3 32-32 32zM472 224c0-39.8 32.2-72 72-72s72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72M160 496c0-88.4 71.6-160 160-160s160 71.6 160 160v16c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32z"
                    />
                </svg>
            ),
            number: "+2مليون",
            label: "قارئ شهريًا",
        },

        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 640 640"
                >
                    <title>newspaper</title>
                    <path
                        fill="currentColor"
                        d="M64 480V184c0-13.3 10.7-24 24-24s24 10.7 24 24v288c0 13.3 10.7 24 24 24s24-10.7 24-24V160c0-35.3 28.7-64 64-64h288c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64m160-288v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32m24 240c-13.3 0-24 10.7-24 24s10.7 24 24 24h240c13.3 0 24-10.7 24-24s-10.7-24-24-24zm-24-72c0 13.3 10.7 24 24 24h240c13.3 0 24-10.7 24-24s-10.7-24-24-24H248c-13.3 0-24 10.7-24 24m200-120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24z"
                    />
                </svg>
            ),
            number: "+500",
            label: "مقالة منشورة",
        },

        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 512 512"
                >
                    <title>pen-nib</title>
                    <path
                        fill="currentColor"
                        d="m368.4 18.3l-55.7 55.8l125.2 125.2l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2l-46-46.1c-21.9-21.9-57.3-21.9-79.2 0M288 94.6l-9.2 2.8l-144.1 43.2c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4l153.6-153.5c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1l2.7-9.2z"
                    />
                </svg>
            ),
            number: "+50",
            label: "كاتب خبير",
        },

        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                >
                    <title>book-open-filled</title>
                    <path
                        fill="currentColor"
                        d="M21 3h-7c-.77 0-1.47.3-2 .78c-.53-.48-1.23-.78-2-.78H3c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1h5.76c.53 0 1.04.21 1.41.59l1.12 1.12s.02.01.03.02c.09.08.18.15.29.2c.12.05.25.08.38.08s.26-.03.38-.08c.11-.05.21-.12.29-.2c0 0 .02-.01.03-.02l1.12-1.12c.37-.37.89-.59 1.41-.59h5.76c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1Zm-1 15h-4.76c-.8 0-1.58.25-2.24.69V6c0-.55.45-1 1-1h6z"
                    />
                </svg>
            ),
            number: "+15",
            label: "تصنيف",
        },
    ];

    const values = [
        {
            title: "الجودة أولًا",
            description: "محتوى مدروس ومكتوب بخبرة",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 640 640"
                >
                    <title>bullseye</title>
                    <path
                        fill="currentColor"
                        d="M512 320c0-106-86-192-192-192s-192 86-192 192s86 192 192 192s192-86 192-192m-448 0C64 178.6 178.6 64 320 64s256 114.6 256 256s-114.6 256-256 256S64 461.4 64 320m256 80c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80m0-224c79.5 0 144 64.5 144 144s-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144m-32 144c0-17.7 14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32"
                    />
                </svg>
            ),
        },

        {
            title: "تركيز عملي",
            description: "أمثلة واقعية يمكنك تطبيقها اليوم",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 640 640"
                >
                    <title>bolt</title>
                    <path
                        fill="currentColor"
                        d="M434.8 54.1c11.9 8.6 16.3 24.2 10.9 37.8L367.3 288H512c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L272.7 352H128c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3"
                    />
                </svg>
            ),
        },

        {
            title: "المجتمع",
            description: "نتعلم مع آلاف المصورين",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 640 640"
                >
                    <title>handshake</title>
                    <path
                        fill="currentColor"
                        d="M300.9 149.2L184.3 278.8c-4.6 5.1-4.4 13 .5 17.9c30.5 30.5 80 30.5 110.5 0l31.8-31.8c4.2-4.2 9.5-6.5 14.9-6.9c6.8-.6 13.8 1.7 19 6.9L537.6 440l70.4-56V96l-112 64l-23.8-15.9a96.2 96.2 0 0 0-53.3-16.1h-70.4c-1.1 0-2.3 0-3.4.1c-16.9.9-32.8 8.5-44.2 21.1m-152.3 97.5L255.4 128h-39.6c-25.5 0-49.9 10.1-67.9 28.1L144 160L32 96v288l156.4 130.3c23 19.2 52 29.7 81.9 29.7H286l-7-7c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l41 41h9c19.1 0 37.8-4.3 54.8-12.3L391 505c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l32 32l17.5-17.5c8.9-8.9 11.5-21.8 7.6-33.1L344.1 315.7l-14.9 14.9c-49.3 49.3-129.1 49.3-178.4 0c-23-23-23.9-59.9-2.2-84z"
                    />
                </svg>
            ),
        },

        {
            title: "دائمًا محدث",
            description: "أحدث الاتجاهات وأفضل الممارسات",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 640 640"
                >
                    <title>arrows-rotate</title>
                    <path
                        fill="currentColor"
                        d="M129.9 292.5C143.2 199.5 223.3 128 320 128c53 0 101 21.5 135.8 56.2l.6.6l7.6 7.2h-47.9c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32s-32 14.3-32 32v53.4l-11.3-10.7C454.5 92.6 390.5 64 320 64C191 64 84.3 159.4 66.6 283.5c-2.5 17.5 9.6 33.7 27.1 36.2s33.7-9.7 36.2-27.1zm443.5 64c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5c-53 0-101-21.5-135.8-56.2l-.6-.6l-7.6-7.2h47.9c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 384c-8.5 0-16.7 3.4-22.7 9.5s-9.4 14.2-9.3 22.8l1 127c.1 17.7 14.6 31.9 32.3 31.7s31.9-14.6 31.7-32.3l-.4-51.5l10.7 10.1C185.6 547.4 249.5 576 320 576c129 0 235.7-95.4 253.4-219.5"
                    />
                </svg>
            ),
        },
    ];

    /*
      فريقنا بيتكوّن تلقائيًا من المؤلفين الموجودين في posts.json.
  
      Map بيستخدم اسم الكاتب كمفتاح،
      وبالتالي لو نفس الكاتب عنده أكثر من مقال مش هيتكرر في الفريق.
    */
    const teamMembers = Array.from(
        new Map(
            (postsData.posts || [])
                .filter((post) => post.author?.name)
                .map((post) => [
                    post.author.name,
                    {
                        image: post.author.avatar,
                        name: post.author.name,
                        role: post.author.role || "كاتب عدسة",
                    },
                ])
        ).values()
    );

    return (
        <section
            dir="rtl"
            className="
        about-page
        relative
        flex
        items-start
        justify-center
        overflow-hidden
        bg-[#090909]
        px-5
        pb-25
        pt-20
        text-center
        text-white

        max-[768px]:px-[30px]
        max-[768px]:pb-[55px]
        max-[768px]:pt-[20px]

        max-[600px]:px-5
        max-[600px]:pb-[45px]

        max-[450px]:px-4
      "
        >
            <div className="relative z-1 mx-auto w-full max-w-275">

                {/* =================================================
            BADGE
        ================================================== */}

                <div
                    className="
            mx-auto
            flex
            w-fit
            items-center
            gap-2
            rounded-[30px]
            border
            border-[#62310E]
            bg-[#22150B]
            px-4
            py-2
            text-sm
            font-medium
            text-[#f97316]

            max-[768px]:px-[18px]
            max-[768px]:py-[10px]
            max-[768px]:text-[14px]

            max-[500px]:px-4
            max-[500px]:py-2
            max-[500px]:text-[12px]
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

                    <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />

                    <span>من نحن</span>
                </div>

                {/* =================================================
            MAIN TITLE
        ================================================== */}

                <h1
                    className="
            mb-1
            text-[60px]
            font-bold
            text-white

            max-[900px]:text-[48px]

            max-[768px]:mt-[32px]
            max-[768px]:leading-[1.3]
            max-[768px]:tracking-[-1px]

            max-[600px]:text-[clamp(36px,7vw,44px)]

            max-[450px]:text-[32px]
          "
                >
                    مهمتنا هي{" "}

                    <span
                        className="
              bg-[linear-gradient(135deg,#f97316,#fbbf24)]
              bg-clip-text
              text-transparent
              [-webkit-text-fill-color:transparent]
            "
                    >
                        الإعلام والإلهام
                    </span>
                </h1>

                {/* =================================================
            DESCRIPTION
        ================================================== */}

                <p
                    className="
            mx-auto
            mb-12
            mt-3
            max-w-3xl
            text-xl
            leading-relaxed
            text-neutral-400

            max-[768px]:mb-0
            max-[768px]:mt-[28px]
            max-[768px]:max-w-[700px]
            max-[768px]:text-[20px]
            max-[768px]:leading-[2]

            max-[600px]:mt-5
            max-[600px]:text-[17px]
            max-[600px]:leading-[1.9]

            max-[450px]:text-[15px]
            max-[450px]:leading-[1.8]
          "
                >
                    مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار
                    المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة
                    المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى
                    عالي الجودة.
                </p>


                <div
                    className="
            mx-auto
            mt-14
            grid
            w-full
            max-w-255
            grid-cols-4
            gap-5

            max-[1000px]:gap-4
            max-[900px]:gap-3
            max-[820px]:gap-2.5

            max-[768px]:mt-[60px]
            max-[768px]:grid-cols-2
            max-[768px]:gap-5

            max-[600px]:mt-[50px]
            max-[600px]:gap-4

            max-[450px]:gap-3
          "
                >
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="
                flex
                h-39
                w-full
                min-w-0
                flex-col
                items-center
                justify-center
                rounded-[28px]
                border
                border-white/[0.07]
                bg-[#141414]
                backdrop-blur-[2px]

                max-[1000px]:h-[150px]
                max-[1000px]:rounded-[24px]

                max-[900px]:h-[142px]
                max-[900px]:rounded-[22px]

                max-[820px]:h-[135px]
                max-[820px]:rounded-[20px]

                max-[768px]:h-[178px]
                max-[768px]:rounded-[28px]

                max-[600px]:h-[160px]
                max-[600px]:rounded-[23px]

                max-[500px]:h-[145px]
                max-[500px]:rounded-[20px]

                max-[400px]:h-[132px]
                max-[400px]:rounded-[18px]
              "
                        >
                            <div
                                className="
                  mb-2
                  block
                  text-2xl
                  text-orange-500

                  max-[1000px]:[&_svg]:h-[28px]
                  max-[1000px]:[&_svg]:w-[28px]

                  max-[900px]:[&_svg]:h-[27px]
                  max-[900px]:[&_svg]:w-[27px]

                  max-[820px]:[&_svg]:h-[26px]
                  max-[820px]:[&_svg]:w-[26px]

                  max-[768px]:mb-[12px]
                  max-[768px]:[&_svg]:h-[32px]
                  max-[768px]:[&_svg]:w-[32px]

                  max-[600px]:[&_svg]:h-[29px]
                  max-[600px]:[&_svg]:w-[29px]

                  max-[450px]:[&_svg]:h-[26px]
                  max-[450px]:[&_svg]:w-[26px]
                "
                            >
                                {stat.icon}
                            </div>

                            <div
                                className="
                  bg-[linear-gradient(135deg,#f97316,#fbbf24)]
                  bg-clip-text
                  text-[30px]
                  font-bold
                  leading-none
                  tracking-[-0.5px]
                  text-transparent
                  [-webkit-text-fill-color:transparent]

                  max-[1000px]:text-[28px]
                  max-[900px]:text-[26px]
                  max-[820px]:text-[24px]

                  max-[768px]:text-[34px]

                  max-[600px]:text-[30px]
                  max-[500px]:text-[27px]
                  max-[400px]:text-[24px]
                "
                            >
                                {stat.number}
                            </div>

                            <div
                                className="
                  mt-3
                  text-[14px]
                  font-normal
                  leading-none
                  text-[#737373]

                  max-[1000px]:text-[13px]
                  max-[900px]:text-[12px]

                  max-[820px]:mt-[10px]
                  max-[820px]:text-[11px]

                  max-[768px]:mt-[12px]
                  max-[768px]:text-[15px]

                  max-[600px]:text-[13px]

                  max-[450px]:mt-[9px]
                  max-[450px]:text-[12px]
                "
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* =================================================
            VALUES SECTION
        ================================================== */}

                <section
                    className="
            values-section
            relative
            z-2
            mx-auto
            mt-40
            w-full
            max-w-350
            box-border
            bg-[#101010]
            px-5
            pb-20

            max-[1100px]:mt-[120px]
            max-[1100px]:px-[30px]
            max-[1100px]:pb-[58px]

            max-[768px]:mt-[100px]
            max-[768px]:px-[30px]
            max-[768px]:pb-[55px]

            max-[600px]:px-5
          "
                >
                    {/* Top Line */}
                    <div
                        className="
              pointer-events-none
              absolute
              left-1/2
              -top-10
              h-px
              w-screen
              -translate-x-1/2
              bg-[#252525]
            "
                    />

                    {/* Bottom Line */}
                    <div
                        className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              h-px
              w-screen
              -translate-x-1/2
              bg-[#252525]
            "
                    />

                    <div
                        className="
              relative
              z-2
              mb-10
              text-center

              max-[1100px]:mb-[80px]

              max-[768px]:mb-[75px]
            "
                    >
                        <h2
                            className="
                mt-10
                flex
                items-center
                justify-center
                gap-4.5
                text-[36px]
                font-bold
                leading-[1.3]
                text-white

                max-[1100px]:mt-[50px]

                max-[768px]:mt-[38px]
                max-[768px]:text-[34px]

                max-[500px]:text-[30px]
              "
                        >
                            <span
                                className="
                  block
                  h-8
                  w-1.5
                  rounded-[5px]
                  bg-linear-to-b
                  from-[#ff6200]
                  to-[#ffad00]

                  max-[768px]:h-[40px]
                "
                            />

                            قيمنا

                            <span
                                className="
                  block
                  h-8
                  w-1.5
                  rounded-[5px]
                  bg-linear-to-b
                  from-[#ffad00]
                  to-[#ff6200]

                  max-[768px]:h-[40px]
                "
                            />
                        </h2>

                        <p
                            className="
                mb-0
                mt-5.5
                text-[18px]
                font-normal
                text-[#a1a1a1]

                max-[1100px]:mt-[24px]

                max-[768px]:mt-[26px]

                max-[500px]:text-[15px]
              "
                        >
                            المبادئ التي توجه كل ما نقوم بإنشائه
                        </p>
                    </div>

                    <div
                        className="
              relative
              z-2
              grid
              w-full
              grid-cols-4
              gap-7
              [direction:rtl]

              max-[1100px]:grid-cols-2
              max-[1100px]:gap-[30px]

              max-[900px]:gap-[24px]

              max-[820px]:gap-[20px]

              max-[768px]:grid-cols-1
              max-[768px]:gap-[30px]

              max-[600px]:gap-5
            "
                    >
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="
                  group
                  flex
                  min-h-[160px]
                  w-full
                  box-border
                  flex-col
                  items-center
                  justify-center
                  rounded-[19px]
                  border
                  border-[#292929]
                  bg-[#151515]
                  px-[18px]
                  py-[27px]
                  text-center

                  transition-[background-color,border-color]
                  duration-300
                  ease-out

                  hover:border-[#5d2f0f]
                  hover:bg-[#2e2214]

                  max-[1100px]:min-h-[198px]
                  max-[1100px]:rounded-[20px]
                  max-[1100px]:px-[25px]
                  max-[1100px]:py-[28px]

                  max-[900px]:min-h-[190px]

                  max-[820px]:min-h-[185px]

                  max-[768px]:min-h-[198px]

                  max-[500px]:min-h-[180px]
                "
                            >
                                <div
                                    className="
                    mb-[13px]
                    flex
                    h-[58px]
                    w-[58px]
                    items-center
                    justify-center
                    text-[#ff6b00]

                    [&_svg]:h-12
                    [&_svg]:w-12
                    [&_svg]:stroke-[#ff6b00]

                    max-[1100px]:mb-[14px]

                    max-[768px]:mb-[15px]

                    max-[500px]:[&_svg]:h-[42px]
                    max-[500px]:[&_svg]:w-[42px]
                  "
                                >
                                    {value.icon}
                                </div>

                                <h3
                                    className="
                    m-0
                    mb-2.5
                    max-w-full
                    text-[18px]
                    font-bold
                    leading-normal
                    text-[#f5f5f5]

                    transition-colors
                    duration-300

                    group-hover:text-[#ff6900]

                    max-[1100px]:mb-[11px]
                    max-[1100px]:text-[20px]

                    max-[900px]:text-[19px]

                    max-[820px]:text-[18px]

                    max-[768px]:mb-[12px]
                    max-[768px]:text-[20px]

                    max-[500px]:text-[18px]
                  "
                                >
                                    {value.title}
                                </h3>

                                <p
                                    className="
                    m-0
                    w-full
                    max-w-full
                    break-words
                    text-[14px]
                    leading-normal
                    text-[#a1a1a1]

                    max-[1100px]:text-[15px]
                    max-[1100px]:leading-[1.7]

                    max-[900px]:text-[14px]

                    max-[768px]:text-[15px]
                    max-[768px]:leading-[1.7]

                    max-[500px]:text-[13px]
                  "
                                >
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section
                    dir="rtl"
                    className="
            team-section
            relative
            z-[1]
            isolate
            w-full
            box-border
            bg-black
            px-5
            pb-[100px]
            pt-[85px]

            max-[1024px]:px-[30px]
            max-[1024px]:pb-[85px]
            max-[1024px]:pt-[75px]

            max-[800px]:px-[24px]

            max-[640px]:px-5
            max-[640px]:pb-[70px]
            max-[640px]:pt-[60px]

            max-[450px]:px-[15px]
          "
                >
                    <div
                        className="
              mx-auto
              w-full
              max-w-[1100px]

              max-[1024px]:max-w-none
            "
                    >
                        {/* Section Heading */}
                        <div
                            className="
                mb-[78px]
                text-center

                max-[1024px]:mb-[78px]

                max-[800px]:mb-[65px]

                max-[640px]:mb-[75px]

                max-[500px]:mb-[55px]
              "
                        >
                            {/* Badge */}
                            <div
                                className="
                  mx-auto
                  mb-5
                  flex
                  w-fit
                  items-center
                  gap-2.5
                  rounded-[30px]
                  border
                  border-[rgba(255,105,0,0.4)]
                  bg-[#22150B]
                  px-4
                  py-2
                  text-[14px]
                  font-medium
                  text-[#ff6900]
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

                                <span>فريقنا</span>
                            </div>

                            {/* Title */}
                            <h2
                                className="
                  text-[36px]
                  font-bold
                  text-white

                  max-[800px]:text-[34px]

                  max-[640px]:text-[36px]

                  max-[500px]:text-[30px]
                "
                            >
                                تعرف على كتابنا
                            </h2>

                            {/* Description */}
                            <p
                                className="
                  mx-auto
                  mb-0
                  mt-2
                  max-w-[850px]
                  text-[18px]
                  font-normal
                  leading-[1.8]
                  text-[#a1a1a1]

                  max-[900px]:max-w-[700px]

                  max-[800px]:text-[17px]

                  max-[640px]:max-w-[620px]
                  max-[640px]:text-[18px]
                  max-[640px]:leading-[2]

                  max-[500px]:text-[15px]
                "
                            >
                                فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم
                                مع المجتمع.
                            </p>
                        </div>

                        {/* Team Grid */}
                        <div
                            className="
                grid
                w-full
                grid-cols-3
                gap-10

                max-[1024px]:grid-cols-2
                max-[1024px]:gap-[40px]

                max-[900px]:gap-[30px]

                max-[800px]:gap-[24px]

                max-[700px]:gap-5

                max-[640px]:grid-cols-1
                max-[640px]:gap-[40px]

                max-[500px]:gap-[28px]
              "
                        >
                            {teamMembers.map((member) => (
                                <article
                                    key={member.name}
                                    className="
                    group
                    flex
                    min-h-40
                    box-border
                    flex-col
                    items-center
                    rounded-2xl
                    border
                    border-[#262626]
                    bg-[#161616]
                    px-3
                    pb-3
                    pt-10
                    text-center

                    hover:border-orange-500/30
                    transition-all
                    duration-300

                    max-[1024px]:min-h-[335px]
                    max-[1024px]:px-6
                    max-[1024px]:pb-[30px]
                    max-[1024px]:pt-[27px]
                    max-[1024px]:rounded-[20px]

                    max-[900px]:min-h-[320px]
                    max-[900px]:px-5

                    max-[800px]:min-h-[305px]
                    max-[800px]:px-4
                    max-[800px]:pb-[26px]
                    max-[800px]:pt-[24px]

                    max-[700px]:min-h-[290px]

                    max-[640px]:min-h-[335px]
                    max-[640px]:px-6
                    max-[640px]:pb-[30px]
                    max-[640px]:pt-[27px]
                    max-[640px]:rounded-[20px]

                    max-[500px]:min-h-[305px]
                    max-[500px]:px-4
                  "
                                >
                                    {/* Image */}
                                    <div
                                        className="
                      relative
                      h-32
                      w-32

                      max-[1024px]:mb-[24px]

                      max-[900px]:h-[116px]
                      max-[900px]:w-[116px]

                      max-[800px]:h-[108px]
                      max-[800px]:w-[108px]

                      max-[700px]:h-[100px]
                      max-[700px]:w-[100px]

                      max-[640px]:mb-[27px]
                      max-[640px]:h-32
                      max-[640px]:w-32

                      max-[500px]:h-[112px]
                      max-[500px]:w-[112px]
                    "
                                    >
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="
                        block
                        h-24
                        w-24
                        box-border
                        rounded-full

                        group-hover:border-orange-500/30

                        border-4
                        border-[#262626]

                        transition-all
                        object-cover

                        max-[1024px]:h-[120px]
                        max-[1024px]:w-[120px]

                        max-[900px]:h-[110px]
                        max-[900px]:w-[110px]

                        max-[800px]:h-[102px]
                        max-[800px]:w-[102px]

                        max-[700px]:h-[94px]
                        max-[700px]:w-[94px]

                        max-[640px]:h-[120px]
                        max-[640px]:w-[120px]

                        max-[500px]:h-[104px]
                        max-[500px]:w-[104px]
                      "
                                        />

                                        {/* Verified */}
                                        <div
                                            className="
                        absolute
                        bottom-8
                        right-2
                        flex
                        h-6
                        w-6
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        border-[#161616]
                        bg-orange-500

                        max-[1024px]:bottom-[3px]
                        max-[1024px]:right-[2px]
                        max-[1024px]:h-[28px]
                        max-[1024px]:w-[28px]

                        max-[900px]:h-[26px]
                        max-[900px]:w-[26px]

                        max-[700px]:h-[24px]
                        max-[700px]:w-[24px]

                        max-[640px]:h-[28px]
                        max-[640px]:w-[28px]
                      "
                                        >
                                            <svg
                                                className="
                          h-3
                          w-3
                          text-white

                          max-[1024px]:h-[14px]
                          max-[1024px]:w-[14px]

                          max-[700px]:h-3
                          max-[700px]:w-3

                          max-[640px]:h-[14px]
                          max-[640px]:w-[14px]
                        "
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <h3
                                        className="
                      text-center
                      m-0
                      -mt-4
                      ml-6
                      text-lg
                      font-bold
                      leading-[1.4]
                      text-white

                      max-[1024px]:mt-0
                      max-[1024px]:ml-0
                      max-[1024px]:text-[19px]

                      max-[900px]:text-[18px]

                      max-[800px]:text-[17px]

                      max-[700px]:text-[16px]

                      max-[640px]:text-[20px]

                      max-[500px]:text-[18px]
                    "
                                    >
                                        {member.name}
                                    </h3>

                                    {/* Role */}
                                    <p
                                        className="
                      m-0
                      ml-6
                      text-[16px]
                      font-semibold
                      text-[#ff6900]

                      max-[1024px]:ml-0
                      max-[1024px]:mt-[4px]
                      max-[1024px]:text-[14px]

                      max-[900px]:text-[13px]

                      max-[800px]:text-[12px]

                      max-[700px]:text-[11px]

                      max-[640px]:mt-[5px]
                      max-[640px]:text-[15px]

                      max-[500px]:text-[13px]
                    "
                                    >
                                        {member.role}
                                    </p>

                                    <div
                                        className="
                      mt-6
                      ml-6
                      flex
                      items-center
                      justify-center
                      gap-3.5

                      max-[1024px]:ml-0
                      max-[1024px]:mt-[25px]

                      max-[900px]:mt-[22px]

                      max-[800px]:mt-[20px]

                      max-[700px]:mt-[18px]
                      max-[700px]:gap-[10px]

                      max-[640px]:mt-[24px]
                      max-[640px]:gap-3.5
                    "
                                    >

                                        <a
                                            href="#"
                                            className="
                        w-9
                        h-9
                        bg-[#262626]
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        text-neutral-500
                        hover:bg-orange-500
                        hover:text-white
                        transition-colors
                      "
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        </a>


                                        <a
                                            href="#"
                                            className="
                        w-9
                        h-9
                        bg-[#262626]
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        text-neutral-500
                        hover:bg-neutral-700
                        hover:text-white
                        transition-colors
                      "
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>

                                        <a
                                            href="#"
                                            className="
                        w-9
                        h-9
                        bg-[#262626]
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        text-neutral-500
                        hover:bg-blue-600
                        hover:text-white
                        transition-colors
                      "
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section
                    dir="rtl"
                    className="
  relative
  -mb-25

  max-[768px]:mb-[-55px]
  max-[600px]:mb-[-45px]

  -ml-[calc((100vw-100%)/2)]
  -mr-[calc((100vw-100%)/2)]
    w-screen
    max-w-none
    box-border
    overflow-hidden

    bg-linear-to-br
    from-orange-600
    via-orange-500
    to-yellow-500

    px-5
    py-8

    text-center
    text-white

    max-[640px]:min-h-[550px]
    max-[640px]:px-5
    max-[640px]:pb-[80px]
    max-[640px]:pt-[92px]
  "
                >
                    <div
                        className="
      mx-auto
      flex
      w-full
      max-w-300
      flex-col
      items-center

      max-[640px]:max-w-none
    "
                    >
                        {/* Title */}
                        <h2
                            className="
        mt-8
        text-3xl
        font-bold
        text-white

        md:text-4xl

        max-[640px]:mt-0
        max-[640px]:text-[34px]
        max-[640px]:font-bold
        max-[640px]:leading-[1.35]

        max-[500px]:text-[30px]

        max-[400px]:text-[27px]
      "
                        >
                            لديك أسئلة؟ دعنا نتحدث!
                        </h2>

                        {/* Description */}
                        <p
                            className="
        mx-auto
        mb-8
        mt-4
        max-w-2xl
        text-lg
        text-white/80

        max-[640px]:mb-[36px]
        max-[640px]:mt-[28px]
        max-[640px]:max-w-[600px]
        max-[640px]:text-[18px]
        max-[640px]:leading-[2]

        max-[500px]:mt-[24px]
        max-[500px]:text-[16px]
        max-[500px]:leading-[1.9]

        max-[400px]:text-[15px]
      "
                        >
                            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد
                            المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
                        </p>

                        {/* Buttons */}
                        <div
                            className="
        mt-9.5
        flex
        flex-col
        items-center
        justify-center
        gap-4

        min-[641px]:flex-row

        max-[640px]:mt-0
        max-[640px]:w-full
        max-[640px]:gap-[20px]
      "
                        >
                            {/* تواصل معنا */}
                            <a
                                href="mailto:hello@adasah.com"
                                className="
          inline-flex
          items-center
          justify-center
          gap-2

          rounded-xl

          bg-[#0a0a0a]

          px-8
          py-4

          font-semibold
          text-white

          transition-all
          duration-300

          hover:-translate-y-0.5
          hover:bg-neutral-900

          max-[640px]:h-[70px]
          max-[640px]:w-full
          max-[640px]:rounded-[14px]
          max-[640px]:px-6
          max-[640px]:py-0
          max-[640px]:text-[17px]

          max-[500px]:h-[64px]
          max-[500px]:text-[16px]
        "
                            >
                                <svg
                                    className="
            h-5
            w-5

            max-[640px]:h-[21px]
            max-[640px]:w-[21px]
          "
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>

                                تواصل معنا
                            </a>

                            {/* تصفح المقالات */}
                            <button
                                type="button"
                                onClick={onGoBlog}
                                className="
          inline-flex
          items-center
          justify-center
          gap-2

          rounded-xl

          border-2
          border-white/40

          bg-transparent

          px-8
          py-4

          font-semibold
          text-white

          transition-all
          duration-300

          hover:bg-white
          hover:text-[#0a0a0a]

          max-[640px]:h-[74px]
          max-[640px]:w-full
          max-[640px]:rounded-[14px]
          max-[640px]:px-6
          max-[640px]:py-0
          max-[640px]:text-[17px]

          max-[500px]:h-[66px]
          max-[500px]:text-[16px]
        "
                            >
                                تصفح المقالات
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default About;