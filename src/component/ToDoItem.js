import React from "react";
import {
  Typography,
  Checkbox,
  Grid,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";
import useStyles from "./styles";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import IconButton from "@material-ui/core/IconButton";

function TodoItem({ task, onDeleteTask, onToggleTask }) {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.grid}>
      <Grid item xs={12} sm={6}>
        <Card
          className={`${classes.card} ${
            task.completed ? classes.completedCard : ""
          }`}
        >
          <Checkbox
            type="checkbox"
            classes={{ root: classes.checkbox, checked: classes.checked }}
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
          />
          <CardContent style={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              className={`${classes.taskName} ${
                task.completed ? classes.completedTask : ""
              }`}
            >
              {task.taskName}
            </Typography>
            <Typography variant="subtitle2">Due on: {task.deadLine}</Typography>
          </CardContent>
          <CardActions style={{ flexGrow: 0 }}>
            <IconButton
              aria-label="delete"
              onClick={() => onDeleteTask(task.id)}
            >
              <DeleteOutlineIcon className={classes.deleteIcon} />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default TodoItem;
