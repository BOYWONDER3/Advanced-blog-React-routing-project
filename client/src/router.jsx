import { Navigate, createBrowserRouter, useRouteError } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { PostListRoute } from "./pages/PostList";
import { userListRoute } from "./pages/UserList";
import { TodoListRouter } from "./pages/TodoList";
import { postRoute } from "./pages/Post";
import { userRoute } from "./pages/User";
import { newPostRoute } from "./pages/NewPost";
import { editPostRoute } from "./pages/EditPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          {
            path: "posts",
            children: [
              {
                index: true,
                ...PostListRoute,
              },
              {
                path: ":postId",
                children: [
                  { index: true, ...postRoute },
                  { path: "edit", ...editPostRoute },
                ],
              },
              { path: "new", ...newPostRoute },
            ],
          },
          {
            path: "users",
            children: [
              { index: true, ...userListRoute },
              { path: ":userId", ...userRoute },
            ],
          },
          { path: "todos", ...TodoListRouter },
          { path: "*", element: <h1>404 Page not found</h1> },
        ],
      },
    ],
  },
]);

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <h1>Error - Something went wrong</h1>
      {import.meta.env.MODE !== "production" && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  );
}
