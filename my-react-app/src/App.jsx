import Header from "./components/header";
import Footer from "./components/footer";
import ProfileCard from "./components/profilecard";
import profileImage from "./assets/react.svg"; 

function App() {
  return (
    <>
      <Header />

      <div style={{ marginTop: "120px", padding: "20px", textAlign: "center" }}>
        <ProfileCard
          name="Abhinav Tripathi"
          role="Frontend Developer"
          image={profileImage}
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
