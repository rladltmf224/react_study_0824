import React, { Component } from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "춘식이",
    comment: "제가 만든 첫 컴포넌트 입니다.",
    src: "./chun.png",
  },
  {
    name: "라이언",
    comment: "어쩌라고",
    src: "./rion.png",
  },
  {
    name: "춘식이",
    comment: "오늘 밥 뭐먹지",
    src: "./chun.png",
  },
  {
    name: "라이언",
    comment: "마라탕어때?",
    src: "./rion.png",
  },
  {
    name: "네오",
    comment: "삼겹살먹자?",
    src: "./neo.png",
  },
];

const CommentLists = (props) => {
  return (
    <div>
      {comments.map((comments) => {
        return (
          <Comment
            name={comments.name}
            comment={comments.comment}
            src={comments.src}
          />
        );
      })}
    </div>
  );
};

export default CommentLists;
