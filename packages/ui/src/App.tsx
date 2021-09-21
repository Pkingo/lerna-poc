import "./App.css";
import { Typography, Button, Stack } from "@lenus/components";
import { Receipt, ReminderIcon } from "@lenus/icons";

function App() {
  return (
    <Stack>
      <Typography variant="h1">Lerna POX</Typography>
      <Typography variant="body1">Components from @lenus/components</Typography>
      <Typography variant="body1">And Icons from @lenus/components</Typography>
      <Receipt />
      <ReminderIcon />
      <Button variant="outlined" color="primary">
        Click me!!
      </Button>
    </Stack>
  );
}

export default App;
