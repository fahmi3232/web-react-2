import React, { useEffect, useState } from "react";

const LifecycleFunc = () => {
  const [name, setName] = useState("");
  const [isUpdate, setUpdate] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/7")
      .then((response) => response.json())
      .then((json) => {
        setName(json.name);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        name: name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setUpdate(true);
      });
  };

  useEffect(() => {
    if (isUpdate) {
      alert("Nama berhasil diupdate");
      setUpdate(false)
    }
  }, [isUpdate]);

  useEffect(() => {

      return () => {
          console.log('Komponen dicopot')
      }
  }, [])

  return (
    <div>
      <h3>Nama: {name}</h3>
      <hr />
      <br />
      <h3>Update Nama: {isUpdate}</h3>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="name"
          placeholder="Change Name"
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LifecycleFunc;
