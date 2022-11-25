import "./styles.css";
import { PostList } from "./redux/post/PostList";
import AddPostForm from "../src/redux/post/AddPostForm";
import SinglePostPage from "./redux/post/SinglePostPage";
import Layout from "./components/Layout";
import EditPostForm from "./redux/post/EditPostForm";
import { Routes, Route, Navigate } from "react-router-dom";
import UsersList from "./redux/user/UsersList";
import UserPage from "./redux/user/UserPage";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        {/* Catch all - replace with 404 component if you want */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
