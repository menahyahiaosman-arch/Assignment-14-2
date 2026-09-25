export const parseArticleContent = (content = "") => {
  const blocks = content
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  const intro = [];
  const sections = [];
  let currentSection = null;

  blocks.forEach((block) => {
    if (block.startsWith("## ")) {
      currentSection = {
        title: block.replace(/^##\s*/, "").trim(),
        content: [],
      };

      sections.push(currentSection);
    } else if (currentSection) {
      currentSection.content.push(block);
    } else {
      intro.push(block);
    }
  });

  return {
    intro: intro.join("\n\n"),
    sections,
  };
};

export const getSpecialRelatedConfig = (selectedPost, posts) => {
  const isLandscapeGuide =
    selectedPost.id === 3 ||
    selectedPost.slug === "landscape-photography-guide";

  if (isLandscapeGuide) {
    return {
      titleClamp: 1,
      relatedPosts: posts
        .filter(
          (post) =>
            post.id !== selectedPost.id &&
            post.category === "مناظر طبيعية"
        )
        .slice(0, 3),
    };
  }

  const isGoldenHourGuide =
    selectedPost.id === 1 ||
    selectedPost.slug === "mastering-golden-hour-photography";

  if (isGoldenHourGuide) {
    return {
      titleClamp: 1,
      relatedPosts: [7, 14, 20]
        .map((id) => posts.find((post) => post.id === id))
        .filter(Boolean),
    };
  }

  const isPortraitGuide =
    selectedPost.id === 2 ||
    selectedPost.slug === "portrait-photography-secrets";

  if (isPortraitGuide) {
    return {
      titleClamp: 1,
      relatedPosts: [8, 15, 19]
        .map((id) => posts.find((post) => post.id === id))
        .filter(Boolean),
    };
  }

  const isNightGuide =
    selectedPost.id === 7 ||
    selectedPost.slug === "night-photography-techniques";

  if (isNightGuide) {
    return {
      titleClamp: 1,
      relatedPosts: [1, 14, 20]
        .map((id) => posts.find((post) => post.id === id))
        .filter(Boolean),
    };
  }

  const isLongExposureGuide =
    selectedPost.id === 14 ||
    selectedPost.slug === "long-exposure-photography-guide";

  if (isLongExposureGuide) {
    return {
      titleClamp: 1,
      relatedPosts: [1, 7, 20]
        .map((id) => posts.find((post) => post.id === id))
        .filter(Boolean),
    };
  }

  const isFlashGuide =
    selectedPost.id === 20 ||
    selectedPost.slug === "flash-photography-basics";

  if (isFlashGuide) {
    return {
      titleClamp: 1,
      relatedPosts: [1, 7, 14]
        .map((id) => posts.find((post) => post.id === id))
        .filter(Boolean),
    };
  }

  const isStreetGuide =
    selectedPost.id === 8 ||
    selectedPost.slug === "street-photography-guide";

  if (isStreetGuide) {
    return {
      titleClamp: 1,
      relatedPosts: [2, 15, 19]
        .map((id) => posts.find((post) => post.id === id))
        .filter(Boolean),
    };
  }

  const isWeddingGuide =
    Number(selectedPost.id) === 15 ||
    selectedPost.slug === "wedding-photography-guide" ||
    selectedPost.title?.trim() ===
    "تصوير حفلات الزفاف: دليل المصور المحترف";

  if (isWeddingGuide) {
    return {
      titleClamp: 1,
      relatedPosts: [2, 8, 19]
        .map((id) => posts.find((post) => post.id === id))
        .filter(Boolean),
    };
  }

  const isSportsGuide =
    Number(selectedPost.id) === 19 ||
    selectedPost.title?.trim() ===
    "تصوير الرياضة والحركة: تجميد اللحظة الحاسمة";

  if (isSportsGuide) {
    return {
      titleClamp: 2,
      relatedPosts: [2, 8, 15]
        .map((id) => posts.find((post) => Number(post.id) === id))
        .filter(Boolean),
    };
  }

  const isWildlifeGuide =
    Number(selectedPost.id) === 10 ||
    selectedPost.slug === "wildlife-photography-tips" ||
    selectedPost.title?.trim() ===
    "تصوير الحياة البرية: كيف تلتقط عجائب الطبيعة";

  if (isWildlifeGuide) {
    const titles = [
      "دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",
      "تصوير العمارة: كيف تلتقط روح المباني",
      "تصوير السفر: كيف توثق رحلاتك بصور لا تُنسى",
    ];

    return {
      titleClamp: 2,
      relatedPosts: titles
        .map((title) => posts.find((post) => post.title?.trim() === title))
        .filter(Boolean),
    };
  }

  const isArchitectureGuide =
    Number(selectedPost.id) === 18 ||
    selectedPost.slug === "architecture-photography" ||
    selectedPost.title?.trim() ===
    "تصوير العمارة: كيف تلتقط روح المباني";

  if (isArchitectureGuide) {
    return {
      titleClamp: 2,
      relatedPosts: [3, 10, 21]
        .map((id) => posts.find((post) => Number(post.id) === id))
        .filter(Boolean),
    };
  }

  const isTravelGuide =
    Number(selectedPost.id) === 21 ||
    selectedPost.slug === "travel-photography-tips" ||
    selectedPost.title?.trim() ===
    "تصوير السفر: كيف توثق رحلاتك بصور لا تُنسى";

  if (isTravelGuide) {
    return {
      titleClamp: 2,
      relatedPosts: [3, 10, 18]
        .map((id) => posts.find((post) => Number(post.id) === id))
        .filter(Boolean),
    };
  }

  const isCameraSettingsGuide =
    Number(selectedPost.id) === 4 ||
    selectedPost.slug === "camera-settings-basics" ||
    selectedPost.title?.trim() ===
    "أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي";

  if (isCameraSettingsGuide) {
    return {
      titleClamp: 2,
      relatedPosts: [5, 9, 11]
        .map((id) => posts.find((post) => Number(post.id) === id))
        .filter(Boolean),
    };
  }

  const isCompositionGuide =
    Number(selectedPost.id) === 5 ||
    selectedPost.slug === "photo-composition-rules" ||
    selectedPost.title?.trim() ===
    "قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية";

  if (isCompositionGuide) {
    return {
      titleClamp: 2,
      relatedPosts: [4, 9, 11]
        .map((id) => posts.find((post) => Number(post.id) === id))
        .filter(Boolean),
    };
  }

  const isFoodGuide =
    Number(selectedPost.id) === 9 ||
    selectedPost.slug === "food-photography-basics" ||
    selectedPost.title?.trim() ===
    "تصوير الطعام: كيف تجعل أطباقك تبدو شهية";

  if (isFoodGuide) {
    return {
      titleClamp: 2,
      relatedPosts: [4, 5, 11]
        .map((id) => posts.find((post) => Number(post.id) === id))
        .filter(Boolean),
    };
  }

  const isBlackWhiteGuide =
    Number(selectedPost.id) === 11 ||
    selectedPost.slug === "black-white-photography" ||
    selectedPost.title?.trim() ===
    "التصوير بالأبيض والأسود: فن الضوء والظل";

  if (isBlackWhiteGuide) {
    return {
      titleClamp: 2,
      relatedPosts: [4, 5, 9]
        .map((id) => posts.find((post) => Number(post.id) === id))
        .filter(Boolean),
    };
  }

  const isMobilePhotographyGuide =
    Number(selectedPost.id) === 6 ||
    selectedPost.slug === "mobile-photography-tips" ||
    selectedPost.title?.trim() ===
    "تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك";

  if (isMobilePhotographyGuide) {
    return {
      titleClamp: 2,
      relatedPosts: [12, 16, 25]
        .map((id) => posts.find((post) => Number(post.id) === id))
        .filter(Boolean),
    };
  }

  const isLightroomGuide =
    Number(selectedPost.id) === 12 ||
    selectedPost.slug === "photo-editing-lightroom" ||
    selectedPost.title?.trim() === "أساسيات تعديل الصور في Lightroom";

  if (isLightroomGuide) {
    return {
      titleClamp: 2,
      relatedPosts: [6, 16, 25]
        .map((id) => posts.find((post) => Number(post.id) === id))
        .filter(Boolean),
    };
  }

  const isDroneGuide =
    Number(selectedPost.id) === 16 ||
    selectedPost.slug === "drone-photography-basics" ||
    selectedPost.title?.trim() === "التصوير بالدرون: منظور جديد للعالم";

  if (isDroneGuide) {
    return {
      titleClamp: 2,
      relatedPosts: [6, 12, 25]
        .map((id) => posts.find((post) => Number(post.id) === id))
        .filter(Boolean),
    };
  }
  const isRawJpegGuide =
    Number(selectedPost.id) === 25 ||
    selectedPost.slug === "raw-vs-jpeg-explained" ||
    selectedPost.title?.trim() ===
    "RAW مقابل JPEG: متى تستخدم كلاً منهما";

  if (isRawJpegGuide) {
    return {
      titleClamp: 2,
      relatedPosts: [6, 12, 16]
        .map((id) =>
          posts.find((post) => Number(post.id) === id)
        )
        .filter(Boolean),
    };
  }
  const isMacroGuide =
    Number(selectedPost.id) === 13 ||
    selectedPost.slug === "macro-photography-world" ||
    selectedPost.title?.trim() ===
    "عالم التصوير الماكرو: اكتشف التفاصيل الخفية";

  if (isMacroGuide) {
    return {
      titleClamp: 2,

      relatedPosts: [4, 5, 9]
        .map((id) =>
          posts.find(
            (post) => Number(post.id) === id
          )
        )
        .filter(Boolean),
    };
  }
  /* ================================
   PRODUCT PHOTOGRAPHY
================================ */

  const isProductPhotographyGuide =
    Number(selectedPost.id) === 17 ||
    selectedPost.slug === "product-photography-essentials" ||
    selectedPost.title?.trim() ===
    "تصوير المنتجات: أساسيات التصوير التجاري";

  if (isProductPhotographyGuide) {
    return {
      titleClamp: 2,

      relatedPosts: [4, 5, 9]
        .map((id) =>
          posts.find(
            (post) => Number(post.id) === id
          )
        )
        .filter(Boolean),
    };
  }
  /* ================================
   COLOR THEORY PHOTOGRAPHY
================================ */

  const isColorTheoryGuide =
    Number(selectedPost.id) === 22 ||
    selectedPost.slug === "color-theory-photography" ||
    selectedPost.title?.trim() ===
    "نظرية الألوان في التصوير: كيف تستخدم الألوان بذكاء";

  if (isColorTheoryGuide) {
    return {
      titleClamp: 2,

      relatedPosts: [4, 5, 9]
        .map((id) =>
          posts.find(
            (post) => Number(post.id) === id
          )
        )
        .filter(Boolean),
    };
  }
  /* ================================
   NEWBORN PHOTOGRAPHY
================================ */

  const isNewbornGuide =
    Number(selectedPost.id) === 23 ||
    selectedPost.slug === "newborn-baby-photography" ||
    selectedPost.title?.trim() ===
    "تصوير المواليد: فن التقاط البراءة";

  if (isNewbornGuide) {
    return {
      titleClamp: 2,

      relatedPosts: [2, 8, 15]
        .map((id) =>
          posts.find(
            (post) => Number(post.id) === id
          )
        )
        .filter(Boolean),
    };
  }
  /* ================================
   REAL ESTATE PHOTOGRAPHY
================================ */

  const isRealEstateGuide =
    Number(selectedPost.id) === 24 ||
    selectedPost.slug === "real-estate-photography" ||
    selectedPost.title?.trim() ===
    "تصوير العقارات: كيف تجعل المنزل يبيع نفسه";

  if (isRealEstateGuide) {
    return {
      titleClamp: 2,

      relatedPosts: [4, 5, 9]
        .map((id) =>
          posts.find(
            (post) => Number(post.id) === id
          )
        )
        .filter(Boolean),
    };
  }
  /* ================================
   SELF PORTRAIT PHOTOGRAPHY
================================ */

  const isSelfPortraitGuide =
    Number(selectedPost.id) === 26 ||
    selectedPost.slug === "self-portrait-photography" ||
    selectedPost.title?.trim() ===
    "تصوير البورتريه الذاتي: كن موضوعك الخاص";

  if (isSelfPortraitGuide) {
    return {
      titleClamp: 2,

      relatedPosts: [2, 8, 15]
        .map((id) =>
          posts.find(
            (post) => Number(post.id) === id
          )
        )
        .filter(Boolean),
    };
  }
  /* ================================
   LENS GUIDE FOR BEGINNERS
================================ */

  const isLensGuide =
    Number(selectedPost.id) === 27 ||
    selectedPost.slug === "lens-guide-beginners" ||
    selectedPost.title?.trim() ===
    "دليل العدسات للمبتدئين: كيف تختار عدستك الأولى";

  if (isLensGuide) {
    return {
      titleClamp: 2,

      relatedPosts: [6, 12, 16]
        .map((id) =>
          posts.find(
            (post) => Number(post.id) === id
          )
        )
        .filter(Boolean),
    };
  }
  /* ================================
   MINIMALIST PHOTOGRAPHY
================================ */

const isMinimalistGuide =
  Number(selectedPost.id) === 28 ||
  selectedPost.slug === "minimalist-photography" ||
  selectedPost.title?.trim() ===
    "التصوير البسيط (Minimalist): قوة الفراغ";

if (isMinimalistGuide) {
  return {
    titleClamp: 2,

    relatedPosts: [4, 5, 9]
      .map((id) =>
        posts.find(
          (post) => Number(post.id) === id
        )
      )
      .filter(Boolean),
  };
}


  return null;
};
