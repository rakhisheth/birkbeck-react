import React from "react";
import Title from "../Title/title";

const Contact = () => {
  return (
    <div className="pages">
      <Title title="Gitter Channel" />

      <p>
        Starting the current here, we created{" "}
        <a href="https://gitter.im/GiacomoSorbi/wdux1819" target="_blank">
          a gitter channel
        </a>{" "}
        that all students should join. To be able to join and post messages, you
        must create a{" "}
        <a href="https://github.com/" target="_blank">
          GitHub account
        </a>
        , which is still free.
      </p>
      <p>
        This form of communication is to be preferred for the current year: feel
        free to post any question of public interest in the main channel.
        Optionally, you can also contact your tutors using a direct message
        (DM), although we discourage such practice unless strictly necessary, as
        it might be the case for private/confidential information (like
        communicating the password for your webspace).{" "}
      </p>
      <p>
        <i>
          Note that while this course would not require students to master a git
          related work-flow, it is strongly encouraged that students wishing to
          get a better feel of the modern techniques of development consider
          reading some documentation about it. In this regard, we would like to
          recommend both the{" "}
          <a href="https://www.codecademy.com/learn/learn-git" target="_blank">
            introductory class on CodeCademy
          </a>{" "}
          and the most advanced{" "}
          <a href="https://www.atlassian.com/git/tutorials" target="_blank">
            tutorial by Atlassian
          </a>
          .
        </i>
      </p>
      <Title title="Mailing List" />

      <p>
        We also have a mailing list that all students must join. We will use
        this list to contact you, but you should also use it as a discussion
        forum to help each other with problems you may be having and to share
        details of good resources you have found. To join the list, go to the
        list's Web page and subscribe. (Note that it's a two step process and
        you'll be sent an email containing a URL that you need to follow in
        order to subscribe. Please check your junk mail if you don't receive the
        email.) The membership of the list is restricted and all new members
        must be authorised by the course tutors. To send messages to the list,
        you should email:
      </p>
      <ul>
        <li>
          <a href="mailto:wdux1819@bbkweb.org">wdux1718@bbkweb.org</a>
        </li>
      </ul>
      <p>
        We would prefer all questions to be sent to the above mailing list, but
        if you need to contact the course tutors then you should send a message
        to:
      </p>
      <ul>
        <li>
          <a href="mailto:wduxtutors@bbkweb.org">wduxtutors@bbkweb.org</a>
        </li>
      </ul>
      <p>
        Only the tutors and administrative staff receive emails sent to
        wduxtutors@bbkweb.org. Please don't email any of the tutors
        individually, but instead always email the above address. You'll get a
        much faster response that way. Although you'll get an even faster
        response if you email the mailing list.
      </p>
    </div>
  );
};

export default Contact;
