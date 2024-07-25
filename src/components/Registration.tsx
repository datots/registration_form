import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState<string | null>(null);
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  const uploader = (file: File) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      localStorage.setItem("recent-image", reader.result as string);
      setUrl(reader.result as string);
    });
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    setUrl(localStorage.getItem("recent-image"));
  }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      uploader(files[0]);
    }
  };

  const SignInhandle = () => {
    if (!name) {
      setError("Please Enter Name");
      return;
    }
    if (!url) {
      setError("Please Upload Image");
      return;
    }
    setError("");
    navigate("/form");
  };

  return (
    <div className="flex flex-col items-center bg-black h-screen">
      <div className="bg-white mt-20 p-14 rounded-lg flex flex-col items-center">
        <p className="m-4 text-2xl">Get Started</p>
        <p className="m-4 text-xl">Add photo</p>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <p className="m-4 text-xl">Fill your name</p>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Your name"
          className="mb-8"
        />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button
          className="bg-blue-500 rounded-lg w-36 h-8"
          onClick={SignInhandle}
        >
          <p className="text-white">Sign in</p>
        </button>
      </div>
    </div>
  );
};

export default Registration;
