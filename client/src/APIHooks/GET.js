import { useEffect } from "react";

const Get = (url, setData) => {
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [url, setData]);
};

export default Get;
