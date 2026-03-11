// src/app/reviews/page.jsx
import ReviewsClient from "./ReviewsClient";

export const metadata = {
  title: "Client Reviews",
  description:
    "Read client reviews and testimonials for Premier Kitchen & Bath.",
};

export default function Page() {
  return <ReviewsClient />;
}