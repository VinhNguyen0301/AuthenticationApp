import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
import AuthenticationPage, {
  action as authAction,
} from "./pages/Authentication";
import { action as LogoutAction } from "./pages/LogOut";
import { checkAuthLoader, loaderAuthToken } from "./util/auth";
import MovieDetailPage, {
  loader as movieDetailLoader,
} from "./pages/MovieDetail";
import MoviesRootLayout from "./pages/MoviesRoot";
import MoviesPage, { loader as moviesLoader } from "./pages/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: loaderAuthToken,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                loader: checkAuthLoader,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            loader: checkAuthLoader,
            action: manipulateEventAction,
          },
        ],
      },
      // movies
      {
        path: "movies",
        element: <MoviesRootLayout />,
        children: [
          {
            index: true,
            element: <MoviesPage />,
            loader: moviesLoader,
          },
          {
            path: ":movieId",
            id: "movie-detail",
            loader: movieDetailLoader,
            element: <MovieDetailPage />,
          },
          {
            path: "new",
            element: <NewEventPage />,
            loader: checkAuthLoader,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "auth",
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: "logout",
        action: LogoutAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
