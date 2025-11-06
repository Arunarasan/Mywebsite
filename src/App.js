import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const pathAbout = ()=>{
    navigate('/about');
  }
  const pathContact = ()=>{
    navigate('/contact');
  }
  const pathHome = ()=>{
    navigate('/');
  }
  const pathProject = ()=>{
    navigate('/project');
  }
  const pathSkill = ()=>{
    navigate('/skills');
  }
  const pathResume = ()=>{
    navigate('/');
  }
  

  return (

    <div className="body">
      <Header 
        pathAbout={pathAbout}
        pathContact={pathContact}
        pathHome={pathHome}
        pathProject={pathProject}
        pathResume={pathResume}
        pathSkill={pathSkill} />
        <main>
          <Main />
        </main>
      <Footer />     
    </div>
  );
}

export default App;
