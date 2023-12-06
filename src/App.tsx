import Navbar from "./component/Navbar"
import image1 from "./assets/1.png"
import image2 from "./assets/2.png"
import circle1 from "./assets/circle1 1.png"
import circle2 from "./assets/circle1 2.png"
import checklist from "./assets/checklist 1.png"
import profile1 from "./assets/fadel amili.jpeg"
import profile2 from "./assets/alifia mustika.jpg"
import profile3 from "./assets/azza farah.jpeg"
import profile4 from "./assets/fasya emilia.jpeg"
import profile5 from "./assets/inayah aulia.jpeg"
import profile6 from "./assets/ferdi gusnanto.jpeg"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const profiles = [
  {
    name: 'Fadel Amili',
    role: 'Machine Learning',
    university: 'University of Muhammadiyah Jakarta',
    image: profile1
  },
  {
    name: 'Alifia Mustika',
    role: 'Machine Learning',
    university: 'University of PGRI Madiun',
    image: profile2
  },
  {
    name: 'Azza Farah',
    role: 'Cloud Computing',
    university: 'University of Gadjah Mada',
    image: profile3
  },
  {
    name: 'Fasya Emilia',
    role: 'Cloud Computing',
    university: 'University of Gadjah Mada',
    image: profile4
  },
  {
    name: 'Inayah Aulia',
    role: 'Mobile Development',
    university: 'University of Mercubuana Yogyakarta',
    image: profile5
  },
  {
    name: 'Ferdi Gusnanto',
    role: 'Mobile Development',
    university: 'University of Mercubuana Yogyakarta',
    image: profile6
  },
];

const App = () => {

  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={
            <>
              <section id="hero">
                <div className="row" id="content">
                  <div className="content-1 col-5">
                    <div className="text-group">
                      <div className="text-heading">
                        Track Your Cash
                        <span style={{ display: "block", color: "black" }}>With Our Innovation</span>
                      </div>
                      <p className="text-description">
                        Cashcue hadir sebagai solusi pengelolaan keuangan yang dapat memudahkan pengguna dalam melakukan pencatatan secara otomatis
                      </p>
                    </div>
                  </div>
                  <div className="content-2 col-5">
                    <img src={image1} style={{ borderRadius: "10px" }} height={340} alt="" />
                    <img src={image2} style={{ borderRadius: "10px" }} height={340} alt="" />
                  </div>
                </div>
              </section>
              <section id="features">
                <div className="circle-content">
                  <img src={circle1} className="circle-1" alt="" />
                  <div className="content">
                    <span className="tittle">Main Features</span>
                  </div>
                  <img src={circle2} className="circle-2" alt="" />
                </div>
              </section>
              <section id="about">
                <div className="content-about">
                  <div className="tittle">
                    About Cashcue
                  </div>
                  <div className="row content">
                    <div className="content-1 col-5">
                      <div className="text-group">
                        <div className="text-heading">
                          Latar Belakang
                        </div>
                        <p className="text-description">
                          Cashcue dibentuk karena kami sadar bahwa implementasi teknologi kecerdasan buatan indonesia masih sangat minim meskipun hampir semua orang menggunakan gadget serperti handphone
                        </p>
                      </div>
                    </div>
                    <div className="content-2 col-5">
                      <p>
                        Visi kami adalah mempersiapkan masyarakat memasuki era revolusi industri digital dan mengenalkan teknologi kecerdasan buatan kepada masyarakat luas. Misi kami adalah :
                        <ul>
                          <li><img className="checklist-icon" src={checklist} alt="" />
                            Membuat produk kecerdasan buatan dengan rasa tanggung jawab yang mampu bersaing didunia teknologi.
                          </li>
                          <li><img className="checklist-icon" src={checklist} alt="" />
                            Mengedukasi masyarakat tentang penggunaan teknologi kecerdasan buatan dalam kehidupan sehari-hari
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section id="team">
                <div className="content-team mb-5">
                  <div className="tittle">
                    Team
                  </div>
                  <div className="tittle-desc">
                    <p>Dalam perkembangannya Cashcue, ada tim hebat yang berisikan orang-orang luar biasa yang ahli dibidangnya masing-masing dan saling bekerja sama dalam pengembangan Cashcue.</p>
                  </div>
                  <div className="container mt-5">
                    <div className="row">
                      {
                        profiles.map((val, index) => (
                          <div key={index} className="col d-flex justify-content-center mb-4">
                            <div className="card card-content" style={{ width: "30rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                              <div className="row">
                                <div className="col-5 image">
                                  <img src={val.image} alt="" />
                                </div>
                                <div className="col-6">
                                  <div className="header-name">
                                    {val.name}
                                  </div>
                                  <div className="role-tittle">
                                    {val.role}
                                  </div>
                                  <br />
                                  <div className="univ">
                                    {val.university}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </section>
              <section id="company">
                <div className="content-company">
                  <div className="tittle">
                    Company
                  </div>
                </div>
              </section>
            </>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App