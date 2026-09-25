import ArticleHero from "./ArticleHero";
import ArticleSidebar from "./ArticleSidebar";
import ArticleMain from "./ArticleMain";
import SpecialRelatedPosts from "./SpecialRelatedPosts";
import {
  parseArticleContent,
  getSpecialRelatedConfig,
} from "./blogHelpers";

function ArticleDetails({
  selectedPost,
  posts,
  onSelectPost,
  copied,
  handleCopyLink,
  onSpecialViewAll,
  onGoHome,
}) {
  const formattedDate = new Date(
    selectedPost.date
  ).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const parsedContent = parseArticleContent(
    selectedPost.content || ""
  );

  const articleIntro = parsedContent.intro;
  const articleSections = parsedContent.sections;

  const specialRelatedConfig =
    getSpecialRelatedConfig(
      selectedPost,
      posts
    );

  return (
    <section
      className="min-h-screen bg-[#0b0b0b] text-white"
      dir="rtl"
    >
      <ArticleHero
        selectedPost={selectedPost}
        formattedDate={formattedDate}
        onBackToBlog={onSpecialViewAll}
        onGoHome={onGoHome}
      />

      <section className="bg-[#0b0b0b] px-6 py-10">
        <div
  className="
    mx-auto
    grid
    w-full
    max-w-[1380px]
    items-start

    grid-cols-1
    gap-[50px]

    min-[1025px]:grid-cols-[300px_minmax(0,1fr)]
    min-[1025px]:gap-6

    min-[1280px]:grid-cols-[340px_minmax(0,1fr)]
    min-[1280px]:gap-8
  "
  dir="ltr"
>
  {/* LEFT */}
  <ArticleSidebar
    selectedPost={selectedPost}
    articleSections={articleSections}
    onViewAll={onSpecialViewAll}
  />

  {/* RIGHT */}
  <ArticleMain
    selectedPost={selectedPost}
    articleIntro={articleIntro}
    articleSections={articleSections}
    copied={copied}
    handleCopyLink={handleCopyLink}
    posts={posts}
    onSelectPost={onSelectPost}
    showNormalRelatedPosts={!specialRelatedConfig}
  />
</div>

      </section>

      {specialRelatedConfig && (
        <SpecialRelatedPosts
          relatedPosts={
            specialRelatedConfig.relatedPosts
          }
          titleClamp={
            specialRelatedConfig.titleClamp
          }
          onSelectPost={onSelectPost}
          onViewAll={onSpecialViewAll}
        />
      )}
    </section>
  );
}

export default ArticleDetails;
