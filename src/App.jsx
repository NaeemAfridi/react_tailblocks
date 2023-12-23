import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header1 from "./components/navbars/Header1";
import Chat from "./components/Chat/Chat";
import Login from "./components/login-signup/Login";
import AddReview from "./components/reviewsSections/AddReview";
import Reviews from "./components/reviewsSections/Reviews";
import SignUp from "./components/login-signup/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Header1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chat" element={<Chat />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="add-review" element={<AddReview />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
