import { createContext, useState } from "react";
import { retrieveDisease } from "../Data/data";

export async function getResult(file) {
  const fd = new FormData();
  fd.append("file", file);
  let result;
  try {
    await fetch("http://localhost:8000/predict", {
      method: "POST",
      body: fd
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("This is an error")
        }
        return res.json();
      })
      .then(data => result = { response: "ok", data })
      .catch(err => result = { response: "error", err })
  } catch (error) {
    console.error(error);
  }
  return result;
}

export const ResultContext = createContext();

export const ResultProvider = function ({ children }) {
  const [result, setResult] = useState(null);
  const [disease, setDisease] = useState("");
  const [description, setDescription] = useState("");
  const [cures, setCures] = useState("");

  async function predict(file) {
    const data = await getResult(file);
    setResult(data);
    const info = retrieveDisease(data.data.class);
    setDisease(data.data.class);
    setDescription(info.description);
    setCures(info.cures);
  }
  return (<ResultContext.Provider value={{ result, predict, disease, description, cures }}>
    {children}
  </ResultContext.Provider>)
}
