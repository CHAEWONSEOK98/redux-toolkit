import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import SinglePostPage from './features/posts/SinglePostPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/post/:postId',
        element: <SinglePostPage />,
      },
    ],
  },
]);

export default router;
