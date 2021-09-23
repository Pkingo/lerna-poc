import "./App.css";
import { Typography, Button, Stack } from "@lenuus/components";
import { Receipt, ReminderIcon } from "@lenuus/icons";
import { User } from "@lenuus/types";
import { isValidEmail } from "@lenuus/utils";

function App() {
  const user: User = {
    email: "email@test.com",
    firstName: "Agent",
    lastName: "Smith ",
  };
  return (
    <Stack>
      <Typography variant="h1">Lerna POC</Typography>
      <Typography variant="body1">
        Components from @lenuus/components
      </Typography>
      <Typography variant="body1">And Icons from @lenuus/icons</Typography>
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
