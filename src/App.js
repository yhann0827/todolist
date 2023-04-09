import "./App.css";
import ToDoList from "./component/ToDoList";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

const theme = createTheme({
  palette: {
    background: {
      default: "#373B3F",
      paper: "#FFFFFF",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <ToDoList />
      </main>
    </ThemeProvider>
  );
}

export default App;
