import React from "react";
import Title from "../Title/title";

const Home = () => {
  return (
    <div className="pages">
      <Title title="Web Development and User Experience" />
      <p>
        Welcome to Birkbeck's Web Development and User Experience module.
        <br />
        The module is focused on a user-centred approach to Web design and on a
        standards-based, accessible approach to Web development.
        <br />
        If this is your first time here:
        <ul>
          <li>
            Find the slides or topics covered for each of the{" "}
            <a href="/sessions/">sessions</a>
          </li>
          <li>
            Sign up for the course <a href="/contacts/">Contacts</a>
          </li>
          <li>
            Find usernames and URLs for each of the{" "}
            <a href="/students/">students</a>
          </li>
          <li>
            Check out the <a href="/reading-list/">reading list</a>
          </li>
          <li>
            Meet the <a href="/staff/">staff</a>
          </li>
          <li>
            Read about the final <a href="/assignment/">assignment</a>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Home;
