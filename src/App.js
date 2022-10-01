import * as React from "react";
// Perhatikan di sini kita import Routes, Route, Link
// Routes = Seluruh Rute yang bisa didefinisikan
// Route = satuan rute yang didefinisikan
//    (ketika pathnya ke mana, akan memanggil component apa)
// Link = anggap seperti anchor (<a></a>), namun untuk Router
import { Routes, Route, useNavigate, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Salam dari React Router!</h1>
      {/* Definisikan Routes di sini */}
      <Routes>
        {/* Di sini kita mendefinisikan path / akan memanggil Component Home */}
        <Route path="/" element={<Home />} />
        {/* Di sini kita mendefinisikan path /about akan memanggil Component About */}
        <Route path="about" element={<About />} />
        <Route path="formulir" element={<CustomForm />} />
      </Routes>
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
        <p>Mari belajar Routing, yuk yuk yuk !</p>
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

export default App;