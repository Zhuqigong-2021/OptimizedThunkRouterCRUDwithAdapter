import React from "react";

import { useSelector } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from "./postSlice";
import PostsExcerpt from "./PostsExcerpt";

export const PostList = () => {
  // const posts = useSelector(selectAllPosts);
  const orderedPostIds = useSelector(selectPostIds);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  // const [isLoading, setIsLoading] = useState(true);
  // const ref = useRef(true);

  let content;
  if (postStatus === "loading") {
    content = <p>"Loading ..."</p>;
  } else if (postStatus === "succeeded") {
    // const orderedPosts = posts
    //   .slice()
    //   .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPostIds.map((postId) => (
      <PostsExcerpt key={postId} postId={postId} />
    ));
  } else if (postStatus === "failed") {
    content = <p> {error} </p>;
  }

  return <section>{content}</section>;
};
