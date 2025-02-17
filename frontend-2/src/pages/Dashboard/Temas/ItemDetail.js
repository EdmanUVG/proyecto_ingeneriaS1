import React, { useState, useContext } from "react";
import "../item-detail.scss";
import database from "../../../firebase";
import ProfileImg from "../../../assets/profile.jpg";
import GradeSelection from "../Components/GradeSelection";
import SubjectSelection from "../Components/SubjectSelection";
import Context from "../../../store/context";
import InputTemaId from "../../Upload/InputTemaId";
import EditorModal from "../../Modals/Editor";
import InputVideoId from "../Components/InputVideoId";
import InputTemaTitle from "../Components/InputTemaTitle";
import useGetTemaDetail from "../../../hooks/useGetTemaDetail";
import RenderDate from "../../../components/RenderDate/RenderDate";

const ItemDetail = ({ itemId }) => {
  const [show, setShow] = useState(false);
  const { isItemVisible, activeIndex, showEditor, actions } =
    useContext(Context);

  const tema = useGetTemaDetail(itemId);

  const temaTitleUpdate = (answer) => {
    database.ref(`temas/${itemId}`).update({ title: answer });
  };

  const gradeSelection = (answer) => {
    database.ref(`temas/${itemId}`).update({ grade: answer });
  };

  const subjectSelection = (answer) => {
    database.ref(`temas/${itemId}`).update({ subject: answer });
  };
  const temaIdUpdate = (answer) => {
    database.ref(`temas/${itemId}`).update({ tema_id: answer });
  };

  const videoIdUpdate = (answer) => {
    database.ref(`temas/${itemId}`).update({ video_url: answer });
  };

  const onClose = () => {
    actions({
      type: "setActiveIndex",
      payload: { ...activeIndex, value: -1 },
    });
    actions({
      type: "setIsItemVisible",
      payload: { ...isItemVisible, value: false },
    });
  };

  const openEditorModal = () => {
    actions({
      type: "setShowEditor",
      payload: { ...showEditor, value: true },
    });
  };

  return (
    <div className="quizDetailContainer">
      <div className="quizHeader">
        <span onClick={() => onClose()}>
          <i className="uil uil-minus"></i>
        </span>
      </div>
      <div className="quizId">
        {tema.map((data) => {
          return (
            <InputTemaTitle
              temaTitleInput={temaTitleUpdate}
              title={data.title}
            />
          );
        })}
      </div>
      <div className="userAndDate">
        <div className="user">
          <img src={ProfileImg} alt="Profile" width="27" height="27" />
          <p>Usuario Admin</p>
        </div>
        <div className="date">
          {tema.map((data) => {
            return <RenderDate key={data.date_added} date={data.date_added} />;
          })}
        </div>
      </div>
      <hr />
      <div className="selectionsToggle">
        {tema.map((data) => {
          return (
            <>
              <GradeSelection
                gradeSelection={gradeSelection}
                grade={data.grade}
              />
              <SubjectSelection
                subjectSelection={subjectSelection}
                subject={data.subject}
              />
            </>
          );
        })}
      </div>
      <div className="inputTemaId">
        {tema.map((data) => {
          return (
            <>
              <InputTemaId temaIdInput={temaIdUpdate} temaId={data.tema_id} />
              <InputVideoId
                temaIdInput={videoIdUpdate}
                temaId={data.video_url}
              />
            </>
          );
        })}
      </div>
      <div className="updateContentContainer">
        <button onClick={() => openEditorModal()}>
          Visualizar o actualizar contenido
          <i className="uil uil-calender openInNewIcon"></i>
          {/* <EditorModal show={show} temaId={itemId} /> */}
        </button>
      </div>
      {/* <div>
        {tema.map((data) => {
          return data.body;
        })}
      </div> */}
    </div>
  );
};

export default ItemDetail;
