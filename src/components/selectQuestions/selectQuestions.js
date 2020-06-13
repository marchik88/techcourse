import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const Tooltip = styled.p`
  font-size: 0.75em;
  margin: 0 0 0 1em;
  color: red;
  font-family: "Inter", sans-serif;
`;

const styledBy = (property, mapping) => (props) => mapping[props[property]];

const styles = {
  root: {
    background: styledBy("color", {
      default: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      blue: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    }),
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: styledBy("color", {
      default: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      blue: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    }),
  },
};

const StyledButton = withStyles(styles)(({ classes, color, ...other }) => (
  <Button className={classes.root} {...other} />
));

const SelectQuestions = (props) => {
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
        return (
          <div className="select__answer select__answer--right">Верно</div>
        );
      }

      return <Tooltip>Неверно, правильный ответ - {item.answer}</Tooltip>;
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
        paddingTop: "1rem",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      {quizData.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "flex-start",
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
            >
              <Controller
                as={
                  <Select
                    name={item.name}
                    ref={register({ required: true })}
                    defaultValue=""
                  >
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
                onChange={([event]) => handleChange(event)}
                control={control}
                defaultValue=""
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
      <button
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
      <StyledButton color={"default"} type="submit">
        Проверить
      </StyledButton>
    </form>
  );
};

export default SelectQuestions;
