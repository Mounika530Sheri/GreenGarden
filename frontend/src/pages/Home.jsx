import React,{useState} from "react";
import convention from '../assets/Image.png'
import Facilities from "../components/Facilities";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import InputForm from '../components/InputForm'


export default function Home() {
  const [isOpen, setIsOpen] = useState(false)


  const navigate=useNavigate()

  const addBooknow=()=>{
    let token=localStorage.getItem("token")
    if(token){
      navigate("/addEvent")
    }
    else{
      setIsOpen(true)
    }
  }
  

  return (
    <>
    <section className="home">
    <div className="left">
        <h1 >Welcome to <span>𝔾𝕣𝕖𝕖𝕟𝔾𝕒𝕣𝕕𝕖𝕟 ℂ𝕠𝕟𝕧𝕖𝕟𝕥𝕚𝕠𝕟</span></h1>
        <p >
          🌿 Celebrate your special moments in harmony with nature.  
          A perfect venue for weddings, birthdays, and grand occasions.✨
        </p><br/>
        <button onClick={addBooknow}>Book Now</button>
      </div>
      <div className="right">
        <img src={convention} width="320px" height="300px" ></img>
       
    </div>
    
    </section>
    <div className="bg">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#466D1D" fill-opacity="1" d="M0,224L40,208C80,192,160,160,240,160C320,160,400,192,480,208C560,224,640,224,720,192C800,160,880,96,960,74.7C1040,53,1120,75,1200,96C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
</div>
    
     {(isOpen) && <Modal onClose={() => setIsOpen(false)}><InputForm setIsOpen={() => setIsOpen(false)} /></Modal>}
    
    
    </>
  );
}
