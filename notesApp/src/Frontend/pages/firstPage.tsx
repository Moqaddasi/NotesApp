import NotesBro from "../assets/Notes-bro.png";
export default function LandingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 p-6">
      <div className="text-center max-w-2xl text-white">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Take Notes, Stay Organized
        </h1>
        <p className="text-lg opacity-80 mb-6">
          Capture your thoughts, ideas, and to-dos effortlessly with our smart
          and intuitive note-taking platform. modern tools.
        </p>
        <img src={NotesBro} alt="Notes" />
        <button
          className="w-full px-6 py-3 mt-4 text-blue-500 bg-white border border-blue-600 rounded-lg shadow-md
          hover:bg-blue-100 focus:outline-none focus:ring-2"
          onClick={() => {
            window.location.href = "/signup";
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
