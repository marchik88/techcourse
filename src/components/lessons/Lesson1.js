import React from "react";
import pc from "../../img/pc.png";
import SelectQuestions from "../selectQuestions/selectQuestions";
import RadioQuestions from "../selectQuestions/radioQuestions";
import SelectSentencesQuestions from "../selectQuestions/selectSentencesQuestions";
import InputSentencesQuestions from "../selectQuestions/inputSentencesQuestions";
import { Container, Row, Col } from "react-bootstrap";

function Lesson() {
  const variables = [
    "Monitor",
    "Case",
    "Motherboard",
    "CPU(Central Processing Unit)",
    "Main Memory(RAM)",
    "GPU(Graphics processing unit)",
    "Power Supply",
    "Optical Disk Drive",
    "Hard Disk Drive",
    "Keyboard",
    "Mouse",
  ];

  const quizData = [
    {
      name: "option1",
      options: variables,
      answer: `Optical Disk Drive`,
      showAnswer: false,
    },
    {
      name: "option2",
      options: variables,
      answer: `Case`,
      showAnswer: false,
    },
    // {
    //   name: "option3",
    //   options: variables,
    //   answer: `CPU(Central Processing Unit)`,
    //   showAnswer: false,
    // },
    // {
    //   name: "option4",
    //   options: variables,
    //   answer: `Motherboard`,
    //   showAnswer: false,
    // },
    // {
    //   name: "option5",
    //   options: variables,
    //   answer: `GPU(Graphics processing unit)`,
    //   showAnswer: false,
    // },
    // {
    //   name: "option6",
    //   options: variables,
    //   answer: `Main Memory(RAM)`,
    //   showAnswer: false,
    // },
    // {
    //   name: "option7",
    //   options: variables,
    //   answer: `Hard Disk Drive`,
    //   showAnswer: false,
    // },
    // {
    //   name: "option8",
    //   options: variables,
    //   answer: `Power Supply`,
    //   showAnswer: false,
    // },
    // {
    //   name: "option9",
    //   options: variables,
    //   answer: `Monitor`,
    //   showAnswer: false,
    // },
    // {
    //   name: "option10",
    //   options: variables,
    //   answer: `Keyboard`,
    //   showAnswer: false,
    // },
    // {
    //   name: "option11",
    //   options: variables,
    //   answer: `Mouse`,
    //   showAnswer: false,
    // },
  ];

  const quizData1 = [
    {
      name: "first",
      title: "Select 1:",
      options: [
        {
          title: "1",
          value: "1",
        },
        {
          title: "2",
          value: "2",
        },
        {
          title: "3",
          value: "3",
        },
        {
          title: "4",
          value: "4",
        },
      ],
      answer: `1`,
      prompt: "SELECT 1",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "second",
      title: "Select 2:",
      options: [
        {
          title: "1",
          value: "1",
        },
        {
          title: "2",
          value: "2",
        },
        {
          title: "3",
          value: "3",
        },
        {
          title: "4",
          value: "4",
        },
      ],
      answer: `2`,
      prompt: "SELECT 2",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "third",
      title: "Select 3:",
      options: [
        {
          title: "1",
          value: "1",
        },
        {
          title: "2",
          value: "2",
        },
        {
          title: "3",
          value: "3",
        },
        {
          title: "4",
          value: "4",
        },
      ],
      answer: `3`,
      prompt: "SELECT 3",
      selectedValue: "Select answer",
      showAnswer: false,
    },
  ];

  const variablesForSelectSentences = [
    "pointer",
    "scroll up",
    "right button",
    "scroll wheel",
    "on",
    "scroll down",
    "joystick",
    "hold down",
    "optical",
    "touchpad",
    "single",
    "roll",
    "left button",
    "double",
  ];

  const quizData2 = [
    {
      name: "first",
      beforeSelect: "",
      afterSelect: "to see pages above.",
      options: variablesForSelectSentences,
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "second",
      beforeSelect: "",
      afterSelect: "to see pages below.",
      options: ["text1", "text2"],
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "third",
      beforeSelect: "To select text, ",
      afterSelect: " the left button, and move the mouse pointer.",
      options: variablesForSelectSentences,
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "fourth",
      beforeSelect: "With a laptop computer, plug in a mouse, or use the ",
      afterSelect:
        " in front of the keyboard  in front of the keyboard With a laptop computer, plug in a mouse, or use the.",
      options: variablesForSelectSentences,
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
  ];

  const quizData3 = [
    {
      name: "first",
      beforeSelect: "",
      afterSelect: " to see pages above.",
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "second",
      beforeSelect: "",
      afterSelect: " to see pages below.",
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "third",
      beforeSelect: "To select text, ",
      afterSelect: " the left button, and move the mouse pointer.",
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "fourth",
      beforeSelect: "With a laptop computer, plug in a mouse, or use the ",
      afterSelect:
        " in front of the keyboard With a laptop computer, plug in a mouse, or use the.",
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
  ];

  return (
    <div className="box">
      <>
        <Container>
          <Row>
            <Col xs={12}>
              <img className="img-fluid" src={pc} alt="PC"></img>
            </Col>
            <Col md={{ span: 8, offset: 2 }}>
              <SelectQuestions quizData={quizData} />
            </Col>
          </Row>
        </Container>
      </>
      <>
        <RadioQuestions quizData={quizData1} />
        <SelectSentencesQuestions quizData={quizData2} />
        <InputSentencesQuestions quizData={quizData3} />
      </>
    </div>
  );
}

export default Lesson;
