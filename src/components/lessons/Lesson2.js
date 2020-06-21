import React from "react";
import pc from "../img/lesson1/pc.png";
import SelectQuestionsWithoutButtons from "../selectQuestions/selectQuestionsWithoutButtons";
import RadioQuestionsWithoutButton from "../selectQuestions/radioQuestionsWithoutButton";
import SelectSentencesQuestionsWithoutButton from "../selectQuestions/selectSentencesQuestionsWithoutButton";
import InputSentencesQuestionsWithoutButton from "../selectQuestions/inputSentencesQuestionsWithoutButton";

function Lesson2() {
  const variables = [
    "monitor",
    "case",
    "motherboard",
    "CPU(Central Processing Unit)",
    "Main Memory(RAM)",
    "GPU(graphics processing unit)",
    "Power Supply",
    "Optical Disk Drive",
    "Hard Disk Drive",
    "Keyboard",
    "Mouse",
  ];

  const quizData = [
    {
      name: "first",
      options: variables,
      answer: `monitor`,
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "second",
      options: variables,
      answer: `case`,
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "third",
      options: variables,
      answer: `motherboard`,
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "fourth",
      options: variables,
      answer: `CPU(Central Processing Unit)`,
      selectedValue: "Select answer",
      showAnswer: false,
    },
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
      <div className="container">
        <img src={pc} alt="PC"></img>
        <SelectQuestionsWithoutButtons quizData={quizData} />
        <RadioQuestionsWithoutButton quizData={quizData1} />
        <SelectSentencesQuestionsWithoutButton quizData={quizData2} />
        <InputSentencesQuestionsWithoutButton quizData={quizData3} />
      </div>
    </div>
  );
}

export default Lesson2;
