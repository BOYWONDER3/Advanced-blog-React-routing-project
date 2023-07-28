import { Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/posts.js";
import { PostCard } from "../components/PostCard";

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      <h1 className="page-title">
        Posts{" "}
        <div className="title-btns">
          <Link className="btn btn-outline" to="new">
            New
          </Link>
        </div>
      </h1>
      <div className="card-grid">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </>
  );
}

function loader({ request: { signal } }) {
  return getPosts({ signal });
}

export const PostListRoute = {
  loader,
  element: <PostList />,
};
