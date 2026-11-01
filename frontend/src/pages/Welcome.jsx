import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import picture from "../assets/picture.jpg";

const SHOW_MS = 9000;

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
    <div className="flex h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 text-center">
      <button
        type="button"
        onClick={() => navigate("/home", { replace: true })}
        className="absolute right-6 top-6 cursor-pointer text-sm text-slate-400 transition hover:text-gold"
      >
        Skip &rarr;
      </button>

      <div className="animate-zoom-in relative mx-auto flex h-[min(70vw,42vh)] w-[min(70vw,42vh)] shrink-0 items-center justify-center">
        <div className="animate-glow absolute inset-0 rounded-full bg-gold/20 blur-3xl" />
        <div className="animate-orbit absolute inset-0 rounded-full border-2 border-dashed border-gold/50" />
        <div className="relative h-[88%] w-[88%] rounded-full bg-gradient-to-br from-yellow-300 via-gold to-amber-700 p-1.5 sm:p-2">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-black">
            <img
              src={picture}
              alt="Yakunex Technologies (Pvt) Ltd logo"
              className="h-[66%] w-[66%] -translate-y-1 object-contain"
            />
          </div>
        </div>
      </div>

      <p
        className="animate-fade-up mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-gold"
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

      <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-slate-800">
        <div className="animate-progress h-full origin-left bg-gold" />
      </div>
    </div>
  );
}

export default Welcome;
