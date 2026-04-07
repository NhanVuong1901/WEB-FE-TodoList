import "./App.css";
import BoxColor from "./components/BoxColor";
import Counter from "./components/Counter";
import {
  NavLink,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import TodoFeature from "./features/Todo/pages";

function RedirectPost() {
  const { postId } = useParams();
  return <Navigate to={`/posts/${postId}`} replace />;
}

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h2 className="logo">My App</h2>

        <div className="menu">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/todos"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Todo
          </NavLink>

          <NavLink
            to="/boxcolor"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Box
          </NavLink>

          <NavLink
            to="/counter"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            Counter
          </NavLink>
        </div>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<TodoFeature />} />

          <Route path="/todos" element={<TodoFeature />} />
          <Route path="/boxcolor" element={<BoxColor />} />
          <Route path="/counter" element={<Counter />} />

          <Route path="/post-list/:postId" element={<RedirectPost />} />

          <Route path="/posts/:postId" element={<h2>Post Detail Page</h2>} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;