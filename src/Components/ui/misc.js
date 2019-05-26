import React from "react";
import { Link } from "react-router-dom";
import { DataSnapshot } from "@firebase/database";

export const Tag = props => {
  const template = (
    <div
      style={{
        background: props.bck,
        fontSize: props.size,
        color: props.color,
        padding: "5px 10px",
        display: "inline-block",
        fontFamily: "Righteous",
        ...props.addStyles
      }}
    >
      {props.children}
    </div>
  );

  if (props.link) {
    return <Link to={props.linkto}>{template}</Link>;
  } else {
    return template;
  }
};

export const firebaseLooper = snapshot => {
  let data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
  return data;
};

export const reverseArray = actualArray => {
  // let reversedArray = [];
  return actualArray.map((item, index) => actualArray[actualArray.length - 1 - index]);
  // console.log("actualArray", actualArray);
  // }
  // actualArray.reverse().forEach(function(item) {
  //   reversedArray.push(item);
  //   console.log("item", item);
  //   console.log("reversed", reversedArray);
  // });
  // return reversedArray;
};

export const validate = element => {
  let error = [true, ""];

  if (element.validation.email) {
    const valid = /\S+@\S+\.\S+/.test(element.value);
    const message = `${!valid}` ? "Must be a valid email" : "";
    error = !valid ? [valid, message] : error;
  }
  if (element.validation.required) {
    const valid = element.value.trim() !== "";
    const message = `${!valid}` ? "This field is required" : "";
    error = !valid ? [valid, message] : error;
  }
  return error;
};
