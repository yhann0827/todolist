import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  container: {
    display: "flex",
    marginTop: "5%",
    alignItems: "center",
    flexDirection: "column",
  },

  header: {
    fontFamily: "Arial",
    color: "white",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  input: {
    margin: "15px",
    padding: "10px",
    borderRadius: "10px",
    fontFamily: "sans-serif",
  },
  button: {
    background: "black",
    color: "white",
    border: "1px solid white",
    "&:hover": {
      color: "white",
      background: "#282929",
    },
  },
  grid: { marginTop: "25px", marginBottom: "25px" },

  card: {
    backgroundImage: "linear-gradient(to top, #3A41DA, #2D34B6)",
    display: "flex",
    color: "white",
  },
  completedCard: {
    background: `linear-gradient(to top, #00ff00, #008000)`,
    color: "white",
  },
  taskName: {
    fontFamily: "Segoe UI",
    fontSize: "22px",
  },
  completedTask: {
    textDecoration: "line-through",
  },
  checkbox: {
    color: "white",
    "&$checked": {
      color: "white",
    },
  },
  checked: {},
  deleteIcon: {
    color: "white",
    fontSize: "35px",
  },
});

export default useStyles;
