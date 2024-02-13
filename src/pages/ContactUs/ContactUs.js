import React, { useState } from "react";
import "./ContactUs.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToComments, removeFromComments } from "../../rtk/commentslice";
import { motion } from "framer-motion";


export default function ContactUs() {
  const [nameInput, setNameInput] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const comments = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  const onchangename = (e) => setNameInput(e.target.value);
  const onchangecomment = (e) => setCommentInput(e.target.value);
  const onsubmithandle = (e) => {
    e.preventDefault();
    const post = {
      id: Math.random(),
      name: nameInput,
      comment: commentInput,
    };
    dispatch(addToComments(post));
    setNameInput("");
    setCommentInput("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="ContactUs"
    >
      <GlobalTitle title={"Contact Us"} />
      <div className="ContactUs__container container">
        <form onSubmit={onsubmithandle} className="ContactUs__form">
          <label htmlFor="Name">Name</label>
          <input
            id="Name"
            placeholder="Enter Your Name.."
            maxLength={25}
            required
            onChange={onchangename}
            value={nameInput}
          />
          <label htmlFor="Comment">Comment</label>
          <textarea
            id="Comment"
            placeholder="Leave Your Comment.."
            required
            onChange={onchangecomment}
            value={commentInput}
          />
          <button className="my-btn">Add Comment</button>
        </form>

        <div className="ContactUs__comments">
          {comments.length > 0 ? (
            comments.map((comm) => {
              return (
                <div key={comm.id} className="ContactUs__comment">
                  <div className="ContactUs__comment-user">
                    <h1 className="ContactUs__comment-user-img">
                      {comm.name[0].toUpperCase()}
                    </h1>
                    <h3 className="ContactUs__comment-user-name">
                      {comm.name}
                    </h3>
                    <div
                      className="ContactUs__comment-user-dlt my-circle-btn"
                      onClick={() => dispatch(removeFromComments(comm))}
                    >
                      X
                    </div>
                  </div>
                  <h3 className="ContactUs__comment-user-msg">
                    {comm.comment}
                  </h3>
                </div>
              );
            })
          ) : (
            <h3 className="ContactUs__comment-noMsg">No Comments Yet..</h3>
          )}
        </div>
      </div>
    </motion.div>
  );
}
