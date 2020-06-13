import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import { useForm, Controller } from "react-hook-form";

const SelectSentencesQuestions = (props) => {
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
      if (answer[item.name] === item.answer) {
        return <p>Верно</p>;
      }

      return (
        <p style={{ margin: "0px 10px" }}>
          Не Верно, правильный ответ - {item.answer}
        </p>
      );
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
                      <Select
                        name={item.name}
                        ref={register({
                          required: true,
                        })}
                        defaultValue=""
                      >
                        <MenuItem value="" disabled="disabled">
                          Select answer
                        </MenuItem>
                        {item.options.map((elem, index) => {
                          return (
                            <MenuItem key={index} value={elem}>
                              {elem}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    }
                    name={item.name}
                    rules={{ required: "this is required" }}
                    // onChange={([event]) => handleChange(event)}
                    control={control}
                    defaultValue=""
                  />
                  <FormHelperText>
                    {errors.wordlevel && errors.wordlevel.message}
                  </FormHelperText>
                </FormControl>
                {item.afterSelect ? item.afterSelect : null}
              </span>
              {errors[item.name] && (
                <p
                  style={{
                    margin: "0px 10px",
                    width: "170px",
                  }}
                >
                  Need select answer
                </p>
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
      <button style={{ width: "40%" }} type="submit">
        Проверить
      </button>
    </form>
  );
};

export default SelectSentencesQuestions;
