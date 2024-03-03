import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Bookstore from "./pages/Bookstore";
import Recommendation from "./pages/Recommendation";
import Profile from "./pages/Profile";
import ChatbotSideCol from "./pages/ChatbotSideCol";
import ChatBotFresh from "./pages/ChatBotFresh";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/recommendation":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/chatbot-sidecol":
        title = "";
        metaDescription = "";
        break;
      case "/chatbot-fresh":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Bookstore />} />
      <Route path="/recommendation" element={<Recommendation />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/chatbot-sidecol" element={<ChatbotSideCol />} />
      <Route path="/chatbot-fresh" element={<ChatBotFresh />} />
    </Routes>
  );
}
export default App;
