import React from "react";
import pc from "../../img/pc.png";
import SelectQuestions from "../selectQuestions/selectQuestions";
import RadioQuestions from "../selectQuestions/radioQuestions";
import SelectSentencesQuestions from "../selectQuestions/selectSentencesQuestions";
import SelectSentencesQuestions1 from "../selectQuestions/selectSentencesQuestions1";
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
    {
      name: "option3",
      options: variables,
      answer: `CPU(Central Processing Unit)`,
      showAnswer: false,
    },
    {
      name: "option4",
      options: variables,
      answer: `Motherboard`,
      showAnswer: false,
    },
    {
      name: "option5",
      options: variables,
      answer: `GPU(Graphics processing unit)`,
      showAnswer: false,
    },
    {
      name: "option6",
      options: variables,
      answer: `Main Memory(RAM)`,
      showAnswer: false,
    },
    {
      name: "option7",
      options: variables,
      answer: `Hard Disk Drive`,
      showAnswer: false,
    },
    {
      name: "option8",
      options: variables,
      answer: `Power Supply`,
      showAnswer: false,
    },
    {
      name: "option9",
      options: variables,
      answer: `Monitor`,
      showAnswer: false,
    },
    {
      name: "option10",
      options: variables,
      answer: `Keyboard`,
      showAnswer: false,
    },
    {
      name: "option11",
      options: variables,
      answer: `Mouse`,
      showAnswer: false,
    },
  ];

  const quizData1 = [
    {
      name: "1",
      beforeSelect: ["Bob: What do you think? Which (1)"],
      afterSelect: " is better for the sales team?",
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "2",
      beforeSelect: ["Daisy: I'm not sure. This computer has a (2)"],
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "3",
      beforeSelect: ["memory and I think it has a (3)"],
      afterSelect: " processor",
      lastSelect: "",
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "4",
      beforePhrase: ["Bob: And the other one?"],
      beforeSelect: ["Daisy: Well, it is (4)"],
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "5",
      beforeSelect: ["Bob: And (5)"],
      lastSelect: "Daisy: Yes, you're right. Lighter and smaller.",
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "6",
      beforeSelect: ["Bob: But the bigger one is (6)"],
      afterPhrase: [
        "Daisy: So what is our decision?",
        "Bob: I'm not sure. Let's go for a coffee and discuss this again.",
      ],
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
  ];

  const quizData2 = [
    {
      name: "1",
      beforePhrase: [
        "Tim: What do you think about these three photo imaging packages?",
        "Simone:  It's a difficult choice. All three are very good but they have different strengths.",
        "Tim: I agree.",
      ],
      beforeSelect: "Simone: Serif Image Plus has (1)",
      afterSelect: "",
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "2",
      beforeSelect: "(2) image ",
      afterSelect: "",
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "3",
      beforePhrase: ["Tim:  OK."],
      beforeSelect: "Simone: But Magic Extreme has the (3)",
      afterSelect: "processing of images.",
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "4",
      beforeSelect: "Tim: You're right. Also, Serif has (4)",
      afterSelect: "",
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "5",
      beforeSelect: "special (5)",
      afterSelect: ". But what about Snap Pro?",
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "6",
      beforeSelect: "Simone: Well, it has the (6)",
      afterSelect: "dubbing options",
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "7",
      beforeSelect: "Tim: And Snap Pro is the best for (7)",
      afterSelect: "photos.",
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "8",
      beforeSelect: "Simone: I'm not sure. Serif has (8)",
      afterSelect: "",
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "9",
      beforeSelect: "efficient (9)",
      afterSelect: "",
      afterPhrase: [
        "Tim: Which is the most expensive?",
        "Simone: Oh, Serif Image Plus.",
        "Tim: And the cheapest?",
        "Simone: Snap Pro.",
        "Tim: Let's get Snap Pro then.",
        "Simone: I'm still not sure!",
      ],
      answer: "pointer",
      selectedValue: "Select answer",
      showAnswer: false,
    },
  ];

  const quizData3 = [
    {
      name: "1",
      title: '1. To turn on the computer, __________ the "Start" button:',
      options: [
        {
          value: "A. touch",
        },
        {
          value: "B. press",
        },
        {
          value: "C. switch",
        },
      ],
      answer: "A. touch",
      hint: "SELECT 1",
    },
    {
      name: "2",
      title: "2. The printer has __________ of ink:",
      options: [
        {
          value: "A. finished",
        },
        {
          value: "B. ended",
        },
        {
          value: "C. run out",
        },
      ],
      answer: "C. run out",
      hint: "SELECT 3",
    },
    {
      name: "3",
      title: "3. Unfortunately, my scanner isn't __________ at the moment.",
      options: [
        {
          value: "A. working",
        },
        {
          value: "B. going",
        },
        {
          value: "C. doing",
        },
      ],
      answer: "A. working",
      hint: "SELECT 1",
    },
    {
      name: "4",
      title: "4. Please __________ the CD ROM.",
      options: [
        {
          value: "A. insert",
        },
        {
          value: "B. introduce",
        },
        {
          value: "C. inject ",
        },
      ],
      answer: "A. insert",
      hint: "SELECT 3",
    },
    {
      name: "5",
      title: "5. The projector isn't working because it isn't __________.",
      options: [
        {
          value: "A. plugged",
        },
        {
          value: "B. plugged in",
        },
        {
          value: "C. plugged into ",
        },
      ],
      answer: "B. plugged in",
      hint: "SELECT 2",
    },
    {
      name: "6",
      title:
        "6. The batteries in my digital camera are nearly dead. They need __________.",
      options: [
        {
          value: "A. to change",
        },
        {
          value: "B. exchanging",
        },
        {
          value: "C. changing",
        },
      ],
      answer: "C. changing",
      hint: "SELECT 3",
    },
    {
      name: "7",
      title: "7. I have to __________ a computer screen for eight hours a day.",
      options: [
        {
          value: "A. see",
        },
        {
          value: "B. look at",
        },
        {
          value: "C. watch",
        },
      ],
      answer: "B. look at",
      hint: "SELECT 2",
    },
    {
      name: "8",
      title:
        "8. Switch off your computer, and __________ it from the wall socket",
      options: [
        {
          value: "A. de-plug",
        },
        {
          value: "B. unplug",
        },
        {
          value: "C. non-plug",
        },
      ],
      answer: "B. unplug",
      hint: "SELECT 2",
    },
    {
      name: "9",
      title: "9. I turned off the photocopier and ___________ the plug.",
      options: [
        {
          value: "A. pulled out",
        },
        {
          value: "B. extracted",
        },
        {
          value: "C. took away",
        },
      ],
      answer: "B. extracted",
      hint: "SELECT 2",
    },
    {
      name: "10",
      title: "10. __________ any key to continue.",
      options: [
        {
          value: "A. kick",
        },
        {
          value: "B. smash",
        },
        {
          value: "C. hit",
        },
      ],
      answer: "C. hit",
      hint: "SELECT 3",
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

  const quizData4 = [
    {
      name: "1",
      beforeSelect: "",
      afterSelect: "to see pages above.",
      options: variablesForSelectSentences,
      answer: "scroll up",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "2",
      beforeSelect: "",
      afterSelect: "to see pages below.",
      options: variablesForSelectSentences,
      answer: "scroll down",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "3",
      beforeSelect: "To select text, ",
      afterSelect: " the left button, and move the mouse pointer.",
      options: variablesForSelectSentences,
      answer: "hold down",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "4",
      beforeSelect: "With a laptop computer, plug in a mouse, or use the ",
      afterSelect: "in front of the keyboard.",
      options: variablesForSelectSentences,
      answer: "touchpad",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "5",
      beforeSelect: "To play some games, you need to use a",
      afterSelect: "instead of a mouse.",
      options: variablesForSelectSentences,
      answer: "joystick",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "6",
      beforeSelect: "To move up and down a page, you can",
      afterSelect: "the mouse wheel.",
      options: variablesForSelectSentences,
      answer: "scroll wheel",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "7",
      beforeSelect: "This mouse doesn't have a ball. It's an",
      afterSelect: "mouse.",
      options: variablesForSelectSentences,
      answer: "optical",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "8",
      beforeSelect: "One click of a mouse button is called a",
      afterSelect: "click.",
      options: variablesForSelectSentences,
      answer: "single",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "9",
      beforeSelect: "Two clicks of a mouse button are called a",
      afterSelect: "click.",
      options: variablesForSelectSentences,
      answer: "double",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "10",
      beforeSelect: "Click",
      afterSelect: "the folder to open it.",
      options: variablesForSelectSentences,
      answer: "left button",
      selectedValue: "Select answer",
      showAnswer: false,
    },
  ];

  const quizData5 = [
    {
      name: "1",
      beforeSelect: "",
      afterSelect: "to see pages above.",
      options: variablesForSelectSentences,
      answer: "scroll up",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "2",
      beforeSelect: "",
      afterSelect: "to see pages below.",
      options: variablesForSelectSentences,
      answer: "scroll down",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "3",
      beforeSelect: "To select text, ",
      afterSelect: " the left button, and move the mouse pointer.",
      options: variablesForSelectSentences,
      answer: "hold down",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "4",
      beforeSelect: "With a laptop computer, plug in a mouse, or use the ",
      afterSelect: "in front of the keyboard.",
      options: variablesForSelectSentences,
      answer: "touchpad",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "5",
      beforeSelect: "To play some games, you need to use a",
      afterSelect: "instead of a mouse.",
      options: variablesForSelectSentences,
      answer: "joystick",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "6",
      beforeSelect: "To move up and down a page, you can",
      afterSelect: "the mouse wheel.",
      options: variablesForSelectSentences,
      answer: "scroll wheel",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "7",
      beforeSelect: "This mouse doesn't have a ball. It's an",
      afterSelect: "mouse.",
      options: variablesForSelectSentences,
      answer: "optical",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "8",
      beforeSelect: "One click of a mouse button is called a",
      afterSelect: "click.",
      options: variablesForSelectSentences,
      answer: "single",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "9",
      beforeSelect: "Two clicks of a mouse button are called a",
      afterSelect: "click.",
      options: variablesForSelectSentences,
      answer: "double",
      selectedValue: "Select answer",
      showAnswer: false,
    },
    {
      name: "10",
      beforeSelect: "Click",
      afterSelect: "the folder to open it.",
      options: variablesForSelectSentences,
      answer: "left button",
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

          <Row>
            <Col md={{ span: 12 }}>
              <h2>3. Listen to two colleagues and complete this dialogue</h2>
            </Col>
            <Col md={{ span: 8, offset: 2 }}>
              <InputSentencesQuestions quizData={quizData1} />
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 12 }}>
              <h2>
                4. Listen to two colleagues discussing software and complete
                this dialogue.
              </h2>
            </Col>
            <Col md={{ span: 8, offset: 2 }}>
              <InputSentencesQuestions quizData={quizData2} />
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 12 }}>
              <h2>
                4. Listen to two colleagues discussing software and complete
                this dialogue.
              </h2>
            </Col>
            <Col md={{ span: 8, offset: 2 }}>
              <SelectSentencesQuestions quizData={quizData4} />
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 12 }}>
              <h2>5. Choose the best verb.</h2>
            </Col>
            <Col md={{ span: 8, offset: 2 }}>
              <RadioQuestions quizData={quizData3} />
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 12 }}>
              <h2>6. Match the verbs with the nouns.</h2>
            </Col>
            <Col md={{ span: 8, offset: 2 }}>
              <SelectSentencesQuestions1
                quizData={quizData5}
                set={variablesForSelectSentences}
              />
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}

export default Lesson;
