import AiChat from "./AiChat";
import RightSidebar from "./Rightsidebar";
// import Rightsidebar from "./Rightsidebar";

const ChatApp = () => {
  return (
    <>
      <div className="h-screen pt-20 bg-gray-100">
        <div className="flex flex-row h-[89vh] w-full overflow-x-hidden">
          {/* Main Content */}
          <div className="flex flex-row gap-10 h-full w-4/5 bg-slate-200">
            <AiChat />
          </div>

          {/* Right Sidebar */}
          <div className="w-1/5">
            <RightSidebar />
          </div>
          {/* <Rightsidebar /> */}
        </div>
      </div>
    </>
  );
};

export default ChatApp;
