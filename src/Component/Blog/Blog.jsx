import { useState, useEffect } from "react";
import postsData from "../../data/posts.json";
import ArticleDetails from "./ArticleDetails";
import BlogList from "./BlogList";

function Blog({
  selectedCategory: categoryFromHome,
  selectedPost,
  onSelectPost,
  onGoHome,
}) {
  const posts = postsData.posts || [];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromHome || "جميع المقالات"
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (categoryFromHome) {
      setSelectedCategory(categoryFromHome);
      setCurrentPage(1);
    }
  }, [categoryFromHome]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSpecialViewAll = () => {
    setSelectedCategory("جميع المقالات");
    setCurrentPage(1);

    if (typeof onSelectPost === "function") {
      onSelectPost(null);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (selectedPost) {
    return (
      <ArticleDetails
        selectedPost={selectedPost}
        posts={posts}
        onSelectPost={onSelectPost}
        copied={copied}
        handleCopyLink={handleCopyLink}
        onSpecialViewAll={handleSpecialViewAll}
        onGoHome={onGoHome}
      />
    );
  }

  return (
    <BlogList
      posts={posts}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      onPostClick={onSelectPost}
    />
  );
}

export default Blog;
