import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-cardmix to-navbar flex items-center justify-center px-4">
      <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-xl p-8 sm:p-12 max-w-md w-full text-white text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Oops!</h1>
        <p className="text-white/80 text-base sm:text-lg mb-6">
          Something went wrong. Please try again or check the URL.
        </p>
        <div className="text-sm sm:text-base font-medium text-white/80">
          <p>
            <span className="text-white font-semibold">Error Code:</span>{" "}
            {err?.status || "Unknown"}
          </p>
          <p>
            <span className="text-white font-semibold">Message:</span>{" "}
            {err?.statusText || "Unexpected Error"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;