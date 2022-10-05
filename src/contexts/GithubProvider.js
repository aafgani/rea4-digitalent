import React, { createContext, useState, useContext } from "react";

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const [repositories, setRepositories] = useState([]);

  return (
    <GithubContext.Provider value={{ repositories, setRepositories }}>
      {children}
    </GithubContext.Provider>
  );
};

const useGithub = () => {
  const context = useContext(GithubContext);
  if (context === undefined) {
    throw new Error("useGithub wajib dipakai di dalam GithubProvider !");
  }

  return context;
};

export { GithubProvider, useGithub };
