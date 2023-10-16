import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DirectoryContext } from "../context/directory-context";
import completeFileList from "../data/files.json";

const Directory = ({ files }) => {
  const { add, selectedFileFolder, handleSelect, removeAdd } =
    useContext(DirectoryContext);
  const [name, setName] = useState("");

  const [isExpanded, setIsExpanded] = useState(false);
  const isRightFolder = () => {
    return selectedFileFolder === files.id;
  };

  if (files.type === "file") {
    return (
      <div className="nameBox" onClick={() => handleSelect(files)}>
        {/* <img /> */}
        <span
          class="material-symbols-outlined  icons-light"
          style={{ fontSize: "19px", padding: "3px" }}
        >
          draft
        </span>
        <div className="links">
          <Link to={`${files.name}`}> {files.name} </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <p
        className="nameBox"
        onClick={() => {
          handleSelect(files);
          setIsExpanded((prev) => !prev);
        }}
      >
        {!isExpanded ? (
          <span className="material-symbols-outlined icons-light">
            expand_more
          </span>
        ) : (
          <span className="material-symbols-outlined icons-light">
            expand_less
          </span>
        )}{" "}
        <p className="folderTitle"> {files.name} </p>
      </p>
      {add?.isAdd && isRightFolder() && (
        <>
          <input onChange={(e) => setName(e.target.value)} />
          <button onClick={removeAdd}>X</button>
        </>
      )}
      <div className="folder">
        {isExpanded &&
          files.items.map((item) => <Directory files={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Directory;
