import React, { useContext } from "react";
import "./sideBar.css";
import Directory from "./directory";
import files from "../data/files.json";
import { DirectoryContext } from "../context/directory-context";
const SideBar = () => {
  const { handleAdd } = useContext(DirectoryContext);
  return (
    <div className="sideBar">
      <div className="folderHead">
        <p className="explorer-title">EXPLORER</p>
        <div className="icons-add-style">
          <span
            class="material-symbols-outlined  icons-light"
            onClick={() => handleAdd("file")}
          >
            note_add
          </span>
          <span
            class="material-symbols-outlined  icons-light"
            onClick={() => handleAdd("folders")}
          >
            create_new_folder
          </span>
        </div>
      </div>

      <Directory files={files} />
    </div>
  );
};

export default SideBar;
