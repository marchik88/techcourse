import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import { useForm, Controller } from "react-hook-form";

const InputSentencesQuestions = (props) => {
  const { quizData } = props;
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 100,
    },
  }));

  const classes = useStyles();

  const { register, handleSubmit, errors, setValue, control } = useForm();

  const [formReady, setFormReady] = useState(false);

  const [answer, setAnswer] = useState({});

  const onSubmit = (data) => {
    setAnswer(data);
    setFormReady(true);
  };

  const renderResult = (item) => {
    if (formReady) {
      if (
        answer[item.name].toString().toLowerCase().trim() ===
        item.answer.toString().toLowerCase().trim()
      ) {
        return <p style={{ margin: "0px 10px" }}>Верно</p>;
      }

      return (
        <p style={{ margin: "0px 10px" }}>
          Не Верно, правильный ответ - {item.answer}
        </p>
      );
    }
  };

  const handleChange = (event) => {
    setFormReady(false);
    return event.target.value;
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
              flexDirection: "row",
              justifyItems: "center",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <p
              style={{
                margin: "0px 10px",
              }}
            >
              {index + 1}
            </p>
            <div
              style={{
                display: "flex",
                flex: "1",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  margin: "0px",
                  textAlign: "left",
                }}
              >
                {item.beforeSelect ? item.beforeSelect : null}
                <FormControl
                  className={classes.formControl}
                  error={Boolean(errors[item.name])}
                >
                  <Controller
                    as={
                      <TextField
                        id="standard-basic"
                        ref={register({
                          required: true,
                        })}
                        style={{
                          margin: "0px !important",
                        }}
                      />
                    }
                    name={item.name}
                    rules={{ required: "this is required" }}
                    control={control}
                    onChange={([event]) => handleChange(event, index)}
                    defaultValue=""
                  />
                  <FormHelperText>
                    {errors.wordlevel && errors.wordlevel.message}
                  </FormHelperText>
                </FormControl>{" "}
                {item.afterSelect ? item.afterSelect : null}
              </span>
              {errors[item.name] && (
                <p style={{ margin: "0px 10px" }}>Need select answer</p>
              )}
              {renderResult(item)}
            </div>
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
      <button type="submit">Проверить</button>
    </form>
  );
};

export default InputSentencesQuestions;
