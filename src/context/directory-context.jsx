import { createContext, useState } from "react";
import files from "../data/files.json";

export const DirectoryContext = createContext(null);

export const DirectoryContextProvider = (props) => {
  const [completeFileList, setCompleteFileList] = useState(files);
  const [add, setAdd] = useState({ isAdd: false, type: "file" });
  const [selectedFileFolder, setSelectedFileFolder] = useState("");
  const [name, setName] = useState("");
  const handleSelect = (file) => {
    let folderId = null;
    if (file.type === "file") {
      folderId = file?.id?.slice(0, -2);
    }
    setSelectedFileFolder(folderId || file?.id);
  };
  const handleAdd = (type) => {
    setAdd({ isAdd: true, type });
  };
  const removeAdd = () => {
    setAdd({ isAdd: false, type: "files" });
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  const handleAddSubmit = () => {
    // selectedFileFolder;
  };

  const contextValue = {
    add,
    selectedFileFolder,
    handleSelect,
    handleAdd,
    removeAdd,
  };

  return (
    <DirectoryContext.Provider value={contextValue}>
      {props.children}
    </DirectoryContext.Provider>
  );
};
