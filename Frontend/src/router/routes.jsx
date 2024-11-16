import React from "react";
import Home from "../pages/home";
import { Category } from "../pages/category";
import SignIn from "../pages/auth/login";
import SignUp from "../pages/auth/signup";
import { EventDetails } from "../pages/event";
import BookingPage from "../pages/booking";

export const routes = [
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/concerts",
    element: (
      <Category
        image="https://media.timeout.com/images/105995698/image.jpg"
        name="Concerts"
      />
    ),
  },
  {
    path: "/sports",
    element: (
      <Category
        image="https://media.timeout.com/images/105995698/image.jpg"
        name="Sports"
      />
    ),
  },
  {
    path: "/arts",
    element: (
      <Category
        image="https://media.timeout.com/images/105995698/image.jpg"
        name="Arts, Theater & Comedy"
      />
    ),
  },
  {
    path: "/family",
    element: (
      <Category
        image="https://media.timeout.com/images/105995698/image.jpg"
        name="Family"
      />
    ),
  },
  {
    path: "/events/:eventID",
    element: <EventDetails />,
  },
  {
    path: "/events/booking/:eventID",
    element: <BookingPage />,
  },
];
