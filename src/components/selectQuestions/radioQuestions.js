import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { useForm, Controller } from "react-hook-form";

const RadioQuestions = (props) => {
  const { quizData } = props;
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 100,
    },
    radio: {
      checked: {
        color: "green !important",
      },
    },
  }));

  const useStyles2 = makeStyles({
    checked: {
      color: "green !important",
    },
  });

  const classes_green = useStyles2();

  const useStyles3 = makeStyles({
    checked: {
      color: "red !important",
    },
  });

  const classes_red = useStyles3();

  const classes = useStyles();

  const { handleSubmit, errors, setValue, control } = useForm();

  const [formReady, setFormReady] = useState(false);

  const [answer, setAnswer] = useState({});

  const onSubmit = (data) => {
    setAnswer(data);
    setFormReady(true);
  };

  const renderResult = (item) => {
    if (formReady) {
      if (answer[item.name] === item.answer) {
        return <p>Верно</p>;
      }

      return <p>Не Верно, подсказка - {item.hint}</p>;
    }
  };

  const handleChange = (event) => {
    setFormReady(false);
    return event.target.value;
  };

  const neededClass = (item) => {
    if (formReady) {
      if (answer[item.name] === item.answer) {
        return classes_green;
      }

      return classes_red;
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      {quizData.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <p
              style={{
                margin: 0,
                textAlign: "left",
              }}
            >
              {item.title}
            </p>
            <FormControl
              className={classes.formControl}
              error={Boolean(errors[item.name])}
            >
              <Controller
                as={
                  <RadioGroup name={item.name}>
                    {item.options.map((elem, index) => {
                      return (
                        <FormControlLabel
                          key={index}
                          value={elem.value}
                          control={<Radio classes={neededClass(item)} />}
                          className={classes.radio}
                          label={elem.value}
                        />
                      );
                    })}
                  </RadioGroup>
                }
                name={item.name}
                rules={{ required: "this is required" }}
                onChange={([event]) => handleChange(event)}
                control={control}
                defaultValue=""
              />
              <FormHelperText>
                {errors.wordlevel && errors.wordlevel.message}
              </FormHelperText>
            </FormControl>
            {errors[item.name] && (
              <div className="answer__tooltip" style={{ textAlign: "left" }}>
                Выберите ответ
              </div>
            )}
            {renderResult(item)}
          </div>
        );
      })}
      <button
        style={{ width: "40%" }}
        type="button"
        onClick={() => {
          for (let i = 0; i < quizData.length; i++) {
            setValue(quizData[i].name, "");
          }
          setFormReady(false);
        }}
      >
        Сбросить
      </button>
      <button style={{ width: "40%" }} type="submit">
        Проверить
      </button>
    </form>
  );
};

export default RadioQuestions;
