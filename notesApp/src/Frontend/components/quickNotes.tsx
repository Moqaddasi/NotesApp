import { useEffect, useState } from "react";
import { Trash } from "lucide-react";

function QuickNotes() {
  const [notes, setNotes] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const addNote = () => {
    if (input.trim() === "") return;
    setNotes([...notes, input]);
    setInput("");
    console.log(notes);
    console.log(input);
  };

  const deleteNote = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  useEffect(() => {
    //call api
    console.log("call Api", notes);
    //for list of quick note you can call api to read from quick note category
  }, [notes]);

  return (
    <div className="bg-gray-700 shadow-lg rounded-lg p-4 ">
      <input
        className="text-lg font-semibold border-b border-gray-500 bg-transparent w-full focus:outline-none  "
        placeholder="Quick Notes"
        value={input}
        onChange={(e) =>
          setInput(e.target.value.length < 27 ? e.target.value : input)
        }
        onKeyDown={(e) => e.key === "Enter" && addNote()}
      />
      <ul className="mt-4 space-y-2">
        {notes.map((note, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-800 p-2 rounded "
          >
            <span className="text-white">{note}</span>
            <button
              onClick={() => deleteNote(index)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash size={18} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuickNotes;
