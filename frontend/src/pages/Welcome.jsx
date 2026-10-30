import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import picture from "../assets/picture.jpg";

const SHOW_MS = 3000;

function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(
      () => navigate("/home", { replace: true }),
      SHOW_MS,
    );
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center">
      <button
        type="button"
        onClick={() => navigate("/home", { replace: true })}
        className="absolute right-6 top-6 cursor-pointer text-sm text-slate-400 transition hover:text-gold"
      >
        Skip &rarr;
      </button>

      
      <div className="animate-zoom-in relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
        <div className="animate-glow absolute inset-0 rounded-full bg-gold/20 blur-3xl" />
        <div className="animate-orbit absolute inset-0 rounded-full border-2 border-dashed border-gold/50" />
        <div className="relative h-[78%] w-[78%] rounded-full bg-gradient-to-br from-yellow-300 via-gold to-amber-700 p-1.5">
          <img
            src={picture}
            alt="Yakunex Technologies (Pvt) Ltd logo"
            className="h-full w-full rounded-full bg-black object-contain p-4"
          />
        </div>
      </div>

      
      <p
        className="animate-fade-up mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-gold"
        style={{ animationDelay: "600ms" }}
      >
        Welcome to
      </p>

      <h1
        className="animate-fade-up mt-3 text-3xl font-bold sm:text-5xl"
        style={{ animationDelay: "900ms" }}
      >
        <span className="animate-shine bg-gradient-to-r from-gold via-yellow-200 to-gold bg-[length:200%_auto] bg-clip-text text-transparent">
          Yakunex Technologies (Pvt) Ltd
        </span>
      </h1>

      <p
        className="animate-fade-up mt-4 text-slate-400"
        style={{ animationDelay: "1200ms" }}
      >
        Technology with purpose · Kandy, Sri Lanka
      </p>

      <div className="mt-10 h-1 w-48 overflow-hidden rounded-full bg-slate-800">
        <div className="animate-progress h-full origin-left bg-gold" />
      </div>
    </div>
  );
}

export default Welcome;