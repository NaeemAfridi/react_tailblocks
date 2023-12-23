import ratinguser from "../../assets/react.svg";
const Reviews = () => {
  const reviewsData = [
    {
      id: 1,
      user: {
        name: "John Doe",
        image: ratinguser, // Replace with the actual image URL
      },
      rating: 5,
      title: "Excellent Service!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      user: {
        name: "Jane Smith",
        image: ratinguser, // Replace with the actual image URL
      },
      rating: 4,
      title: "Good Product Quality",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    // Add more reviews as needed
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 border mt-4">
      <h2 className="text-3xl font-semibold mb-6">Customer Reviews</h2>
      {reviewsData.map((review) => (
        <div key={review.id} className="mb-8">
          <div className="flex items-center mb-4">
            <img
              src={review.user.image}
              alt={review.user.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <div className="flex gap-3 items-center">
              <p className="text-lg font-semibold">{review.user.name}</p>
              <div className="flex items-center">
                {[...Array(review.rating)].map((_, index) => (
                  <p key={index}>⭐</p>
                ))}
              </div>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
          <p className="text-gray-600">{review.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
