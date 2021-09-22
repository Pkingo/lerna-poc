import "./App.css";
import { Typography, Button, Stack } from "@leenus/components";
import { Receipt, ReminderIcon } from "@leenus/icons";
import { User } from "@leenus/types";
import { isValidEmail } from "@leenus/utils";

function App() {
  const user: User = {
    email: "email@test.com",
    firstName: "Agent",
    lastName: "Smith ",
  };
  return (
    <Stack>
      <Typography variant="h1">Lerna POX</Typography>
      <Typography variant="body1">
        Components from @leenus/components
      </Typography>
      <Typography variant="body1">And Icons from @leenus/components</Typography>
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
