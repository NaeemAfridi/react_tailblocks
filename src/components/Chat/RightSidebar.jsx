import User from "./User";

const RightSidebar = () => {
  return (
    <aside className="hidden md:block  bg-gray-100  p-4">
      <User user_name="Jon" />
      <User user_name="Jon the don" />
      <User user_name="Jon balo" />
      <User user_name="Jon carry" />
      <User user_name="Jon" />
      <User user_name="Jon" />
      <User user_name="Jon" />
      <User user_name="Jon" />
    </aside>
  );
};

export default RightSidebar;
