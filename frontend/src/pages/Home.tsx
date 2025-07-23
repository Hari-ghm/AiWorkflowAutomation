import GradientText from "../components/blocks/TextAnimations/GradientText";
import home_bg from "../assets/home_bg.jpg";
import { ExternalLink } from "lucide-react";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#050c16] overflow-hidden">
      <div className="flex">
        <div className="flex flex-col w-1/2 items-center ">
          <div className="text-2xl mt-[10vh] mb-8">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              <h1 className="text-4xl pl-3 mr-2">Dive into the world of</h1>
              <h1 className="text-5xl pl-3 mr-2">AI Workflow Automation</h1>
            </GradientText>
          </div>
          <div className="text-slate-300 w-1/2  ">
            <p>
              Build smart AI workflows with precision or drag and drop ease.
              Deploy on prem or in the cloud — your choice. Automate multi-step
              tasks, connect tools, and orchestrate AI agents with full control
              and flexibility.
            </p>
          </div>
        </div>
        <div className="mt-[5vh]">
          <img
            src={home_bg}
            alt="Home background"
            className="w-[600px] h-auto object-contain rounded-xl shadow-lg -ml-16 "
          />
        </div>
      </div>
      <div className="absolute left-[30vh] -mt-14 w-48">
        <button
          className="w-40 text-white font-semibold px-4 py-3 rounded-lg 
                   bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-600 
                   bg-[length:200%_200%] animate-gradientMove 
                   transition-transform duration-300 hover:scale-105 shadow-lg 
                   flex items-center justify-between"
        >
          Try Horizon
          <ExternalLink size={20} />
        </button>
      </div>
    </div>
  );
};

export default Home;
