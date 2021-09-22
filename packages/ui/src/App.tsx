import "./App.css";
import { Typography, Button, Stack } from "@lenus/components";
import { Receipt, ReminderIcon } from "@lenus/icons";
import { User } from "@lenus/types";
import { isValidEmail } from "@lenus/utils";

function App() {
  const user: User = {
    email: "email@test.com",
    firstName: "Agent",
    lastName: "Smith ",
  };
  return (
    <Stack>
      <Typography variant="h1">Lerna POX</Typography>
      <Typography variant="body1">Components from @lenus/components</Typography>
      <Typography variant="body1">And Icons from @lenus/components</Typography>
      <Receipt />
      <ReminderIcon />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Button
        onClick={() => console.log(isValidEmail(user.email))}
        variant="outlined"
        color="primary"
      >
        Click me!!
      </Button>
    </Stack>
  );
}

export default App;
