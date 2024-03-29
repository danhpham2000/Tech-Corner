import NotFound from "./NotFound";
import NewBlog from "./components/Blog/NewBlog";
import BlogDetails from "./components/Blog/BlogDetails";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import EditBlog from "./components/Blog/EditBlog";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/new-blog" element={<NewBlog />} />
          <Route path="/blogs/:id/edit-blog" element={<EditBlog />} />

          {/* Content, Sign Up and Login */}
          <Route path="/" element={<Home />} />

          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Contact, About and Not Found */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
