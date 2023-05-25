import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <img
          className="scale-50 pl-48"
          src="https://cdn.pixabay.com/photo/2020/07/21/16/10/pokemon-5426712_640.png"
        />
        <div className=" pt-24 text-8xl text-slate-600 dark:text-white">
          <p className=" drop-shadow-2xl font-bold">404</p>
          <p className="text-2xl text-yellow-500 pt-4">Pika pika..</p>
          <p className="text-3xl">Monster not found!</p>
          <p className="text-2xl font-normal">Here is a button for back home</p>
          <button
            onClick={() => navigate("/")}
            type="button"
            class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Back
          </button>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffd700"
          fill-opacity="1"
          d="M0,96L30,122.7C60,149,120,203,180,229.3C240,256,300,256,360,224C420,192,480,128,540,122.7C600,117,660,171,720,197.3C780,224,840,224,900,202.7C960,181,1020,139,1080,101.3C1140,64,1200,32,1260,26.7C1320,21,1380,43,1410,53.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}
