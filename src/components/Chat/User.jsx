const User = ({ user_name }) => {
  return (
    <div className="flex gap-2 items-center text-center mb-4">
      <img
        className="w-8 h-8 object-cover rounded-full"
        src="https://placekitten.com/100/100" // Replace with the actual image URL
        alt="User Avatar"
      />
      <div className="mt-2">
        <p className="text-sm font-medium text-gray-900">{user_name}</p>
      </div>
    </div>
  );
};

export default User;
