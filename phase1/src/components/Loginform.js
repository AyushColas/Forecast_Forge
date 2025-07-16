import React, { useState } from "react";

const Loginform = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [allEntry, setallEntry] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    const newEntry = { email: Email, Password: Password };
    setallEntry(...allEntry, newEntry);
    console.log(allEntry);
  };

  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <div>
          <label htmlFor="emai" id="email1">
            Signin
          </label>
          <div>
            <input
              type="email"
              placeholder="email@gmail.com"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={Email}
              required
              autoComplete="off"
            />
            <p>
              <input
                type="password"
                name="password "
                id="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </p>
          </div>
          <button className="click">click</button>
        </div>
      </form>
      <div>
        {
        allEntry.map((curElem) => {
          return (
            <div className="onsubmit1">
              <p>{curElem.Email}</p>
              <p>{curElem.Password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Loginform;
