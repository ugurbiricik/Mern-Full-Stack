import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction, updatePostAction } from "../redux/actions/post";
import { toast } from "react-toastify";

const Modal = () => {
  const initialState = {
    user: "",
    title: "",
    description: "",
  };

  const [postData, setPostData] = useState(initialState);
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.modal);

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handlePost = () => {
    if (modal?.updatedId) {
      dispatch(updatePostAction(modal?.updatedId, postData));
    } else {
      dispatch(createPostAction(postData));
    }
    dispatch({ type: "MODAL", payload: false });
    toast.success("Post created successfully", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="w-full h-screen bg-opacity-50 bg-black fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center">
      <div className="bg-white w-1/3 p-2 rounded-md">
        <div
          onClick={() => dispatch({ type: "MODAL", payload: false })}
          className="flex items-center justify-between cursor-pointer"
        >
          <h1 className="font-bold text-2xl">
            {" "}
            {modal?.updatedId ? "Update Post" : "Share Post"}{" "}
          </h1>
          <AiOutlineClose size={25} className="cursor-pointer" />
        </div>
        <div className="my-4 flex flex-col space-y-3">
          <input
            className="input-style"
            type="text"
            placeholder="User"
            name="user"
            value={postData.user}
            onChange={handleChange}
          />
          <input
            className="input-style"
            type="text"
            placeholder="Title"
            name="title"
            value={postData.title}
            onChange={handleChange}
          />
          <input
            className="input-style"
            type="text"
            placeholder="Description"
            name="description"
            value={postData.description}
            onChange={handleChange}
          />
        </div>
        <div
          onClick={handlePost}
          className="w-full p-2 text-center bg-indigo-600 text-white cursor-pointer hover:bg-indigo-800"
        >
          {modal?.updatedId ? "Update" : "Share"}
        </div>
      </div>
    </div>
  );
};

export default Modal;
