import React from "react";

const Nominee = props => {
  let activePhoto, name, q1, q2, qna;
  if (props.nData) {
    activePhoto = (
      <img
        src={`https://acb-2019-nominees.netlify.com/img/${props.nData.photo}`}
        alt=""
        className="img-fluid"
      />
    );
    name = props.nData.name;
    q1 = (
      <div className="q1">
        <p>
          <strong>{props.questions.aboutYourself}</strong>
        </p>
        <p>{props.nData.aboutYourself}</p>
      </div>
    );
    if (props.questions.previousExperience) {
      q2 = (
        <div className="q2">
          <p>
            <strong>{props.questions.previousExperience}</strong>
          </p>
          <p>{props.nData.previousExperience}</p>
        </div>
      );
    }
    qna = (
      <div className="restOfA">
        <p>
          <strong>{props.questions.whyYou}</strong>
        </p>
        <p>{props.nData.whyYou}</p>
        <p>
          <strong>{props.questions.nominatedBy}</strong>
        </p>
        <p>
          <em>{props.nData.nominatedBy}</em>
        </p>
      </div>
    );
  } else {
    activePhoto = <p>Image Loading</p>;
  }
  return (
    <div className="row nominee-wrap">
      <div className="col-sm col-lg-4">{activePhoto}</div>
      <div className="col-sm col-lg-8">
        <h2 className="nominee-name">{name}</h2>
        <div className="copy">
          {q1}
          {q2}
          {qna}
        </div>
      </div>
    </div>
  );
};

export default Nominee;

//
