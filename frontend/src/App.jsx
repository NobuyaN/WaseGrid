import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import CreatePage from './pages/CreatePage.jsx';
import NoteDetailPage from './pages/NoteDetailPage';
import CourseSearchPage from './pages/CourseSearchPage.jsx';
import TimeGridPage from './pages/TimeGridPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const router = createBrowserRouter([
    {path: "/", element: <HomePage />},
    {path: "/create", element: <CreatePage />},
    {path: "/note/:id", element: <NoteDetailPage />},
    {path: "/courses", element: <CourseSearchPage />},
    {path: "/timegrid", element: <TimeGridPage />},
    {path: "*", element: <NotFoundPage />},
]);

const App = () => {
  return (
    <div data-theme="forest">
      <RouterProvider router={router} />
    </div>
  )
};

export default App;