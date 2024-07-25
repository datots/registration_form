import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [OpenModal, setOpenModal] = useState(false);

  const navigation = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  useEffect(() => {
    const storedImage = localStorage.getItem("recent-image");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  const ModalOpen = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const LogOut = () => {
    localStorage.clear();
    navigation("/");
  };
  return (
    <div className="flex flex-row justify-evenly bg-stone-700 text-2xl text-neutral-50 h-14">
      <p>Form</p>
      <div className="flex flex-row gap-5">
        <button onClick={() => navigation("/apidata")}>API</button>
        <p>{name}</p>
      </div>
      <img src={image} className="rounded-full" onClick={ModalOpen} />

      {OpenModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="flex flex-col h-28 w-28">
            <button onClick={closeModal}>X</button>
            <button onClick={LogOut}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
