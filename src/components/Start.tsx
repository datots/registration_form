import form from "../images/pngegg1.png";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigete = useNavigate();
  return (
    <div className="bg-image bg-cover bg-center h-screen bg-black pt-20">
      <div className="text-center items-center flex flex-col m">
        <img src={form} alt="Form" className="" />
        <h1 className="text-blue-600 text-4xl mt-10">Get Started Today</h1>
        <button
          className="text-blue-600 text-2xl mt-20 bg-blue-900 p-6 rounded-md"
          onClick={() => navigete("/registration")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Start;
