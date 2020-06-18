import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import { useForm, Controller } from "react-hook-form";
import { Tooltip } from "../styled/Styled";

const SelectQuestions = (props) => {
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

  const [options] = useState(new Set(set));

  const [selected, setSelected] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    selected[name] = value;
    setSelected(new Array(...selected));
    return value;
  };

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

  const neededClassForOption = (item) => {
    if (selected.includes(item)) {
      return classes_hide;
    }
    return classes_show;
  };

  return (
    <form className="form selectForm" onSubmit={handleSubmit(onSubmit)}>
      {quizData.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "5px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                marginRight: "1rem",
                color: "#222",
                minWidth: "1.25rem",
              }}
            >
              {index + 1}
            </div>
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
                control={control}
                rules={{ required: "this is required" }}
                name={item.name}
                defaultValue=""
                onChange={([event]) => handleChange(event)}
              />
              <FormHelperText>
                {errors.wordlevel && errors.wordlevel.message}
              </FormHelperText>
            </FormControl>
            {errors[item.name] && (
              <div className="answer__tooltip">Выберите ответ</div>
            )}
            {renderResult(item)}
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

export default SelectQuestions;
