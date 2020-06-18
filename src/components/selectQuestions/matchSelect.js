import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import { useForm, Controller } from "react-hook-form";
import { Tooltip } from "../styled/Styled";

const MatchSelect = (props) => {
  const { quizData, set } = props;
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 100,
    },
  }));

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
        return <Tooltip correct>Верно</Tooltip>;
      }
      return (
        <Tooltip>
          Неверно, правильный ответ - <Tooltip correct>{item.answer}</Tooltip>
        </Tooltip>
      );
    }
  };

  const [selected, setSelected] = useState([]);

  const [options] = useState(new Set(set));

  const handleChange = (event) => {
    const value = event.target.value;
    const name = parseInt(event.target.name);
    selected[name] = value;
    setSelected(new Array(...selected));
    return value;
  };

  const useStyles2 = makeStyles({
    root: {
      color: "#ff767b !important",
      textDecoration: "line-through",
    },
  });

  const classes_check = useStyles2();

  const useStylesHide = makeStyles({
    root: {
      display: "none !important",
    },
  });

  const classes_hide = useStylesHide();

  const useStylesShow = makeStyles({
    root: {
      display: "block !important",
    },
  });

  const classes_show = useStylesShow();

  const useStyles3 = makeStyles({
    root: {
      color: "#ffc312 !important",
    },
  });

  const classes_uncheck = useStyles3();

  const neededClass = (item) => {
    if (selected.includes(item)) {
      return classes_check;
    }
    return classes_uncheck;
  };

  const neededClassForOption = (item) => {
    if (selected.includes(item)) {
      return classes_hide;
    }
    return classes_show;
  };

  return (
    <form className="quiz__form match" onSubmit={handleSubmit(onSubmit)}>
      <div className="box__items">
        {set.map((item, index) => {
          return (
            <Box component="div" classes={neededClass(item)} key={index}>
              {item}
            </Box>
          );
        })}
      </div>
      {quizData.map((item, index) => {
        return (
          <div className="match__box" key={index}>
            <p
              className="texto"
              style={{
                margin: "0px 10px",
                minWidth: "1.25rem",
                color: "#fff",
              }}
            >
              {index + 1}
            </p>
            <div
              className="drygoy_divak"
              style={{
                textAlign: "left",
                color: "#fff",
              }}
            >
              <span
                className="span"
                style={{
                  margin: "0px",
                  textAlign: "left",
                  color: "#fff",
                }}
              >
                {item.beforeSelect ? (
                  <div className="dialog dialog__before">
                    {item.beforeSelect}
                  </div>
                ) : null}
                <FormControl
                  className={classes.formControl}
                  error={Boolean(errors[item.name])}
                  name={item.name}
                >
                  <Controller
                    as={
                      <Select name={item.name}>
                        {Array.from(options).map((elem, index) => {
                          return (
                            <MenuItem
                              key={index}
                              value={elem}
                              classes={neededClassForOption(elem)}
                              disabled={selected.includes(elem)}
                            >
                              {elem}
                            </MenuItem>
                          );
                        })}
                        <MenuItem value="">Сбросить</MenuItem>
                      </Select>
                    }
                    name={item.name}
                    rules={{ required: "this is required" }}
                    control={control}
                    defaultValue=""
                    onChange={([event]) => handleChange(event)}
                  />
                  <FormHelperText>
                    {errors.wordlevel && errors.wordlevel.message}
                  </FormHelperText>
                </FormControl>
                {item.afterSelect ? (
                  <div className="dialog dialog__after">{item.afterSelect}</div>
                ) : null}
              </span>
              {errors[item.name] && (
                <div className="answer__tooltip">
                  Выберите ответ ({item.name})
                </div>
              )}
              {renderResult(item)}
            </div>
          </div>
        );
      })}
      <div className="multi-button">
        <button className="buttonR" type="submit">
          Проверить
        </button>
        <button
          type="button"
          className="buttonR"
          onClick={() => {
            for (let i = 0; i < quizData.length; i++) {
              setValue(quizData[i].name, "");
              errors[quizData[i].name] = null;
            }
            setFormReady(false);
            setSelected([]);
          }}
        >
          Сбросить
        </button>
      </div>
    </form>
  );
};

export default MatchSelect;
