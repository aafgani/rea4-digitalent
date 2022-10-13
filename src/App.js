import * as React from "react";
// Perhatikan di sini kita import Routes, Route, Link
// Routes = Seluruh Rute yang bisa didefinisikan
// Route = satuan rute yang didefinisikan
//    (ketika pathnya ke mana, akan memanggil component apa)
// Link = anggap seperti anchor (<a></a>), namun untuk Router
import { Outlet, useNavigate, Link } from "react-router-dom";
import { Typography } from "@mui/material";

// Dan juga harus menggunakan useAuthState untuk mengecek apakah sedang ada user yang login

// Dan membutuhkan auth dari authentication/firebase.js karena dibutuhkan oleh useAuthState
import { auth } from "./authentication/firebase";
import NavBar from "./components/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user, isLoading, error] = useAuthState(auth);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (isLoading) {
      return;
    }
    if (!user) {
      navigate("/login");
    }
  }, [user, isLoading, navigate]);

  return (
    <div className="App">
      <NavBar />
      <br />
      <Outlet />
    </div>
  );
}

// Sangat tidak disarankan membuat multi component di App.js
// Hanya untuk pembelajaran belaka yah !
function Home() {
  return (
    <>
      <main>
        <h2>Halo dari Homepage</h2>
      </main>
      <nav>
        {/* Ini adalah anchor nya untuk Route */}
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

// Sangat tidak disarankan membuat multi component di App.js
// Hanya untuk pembelajaran belaka yah !
function About() {
  return (
    <>
      <main>
        <h2>Siapakah pembuat halaman ini?</h2>
        <p>Duh, ga usah diragukan lagi, orang ga jelas !</p>
      </main>
      <nav>
        {/* Ini adalah anchor nya untuk Route */}
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function CustomForm() {
  // declare hooks di sini
  let navigate = useNavigate();

  function onFormSubmitHandler() {
    // di sini kita hanya menggunakan navigate untuk berpindah ke halaman "/", anggap seperti Link yang mengarah ke "/"
    navigate("/");
  }

  return (
    <>
      <main>
        <form onSubmit={onFormSubmitHandler}>
          <button type="submit">Submit Formulir</button>
        </form>
      </main>
    </>
  );
}

export { Home };
export default App;
