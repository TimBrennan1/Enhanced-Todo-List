import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useState } from "react";
const paperStyle = {
  padding: 20,
  height: "50vh",
  width: 300,
  margin: "130px auto",
};

let flag = false;

const AuthForm = (props) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar sx={{ backgroundColor: "green" }}>?</Avatar>
          <h2>Sign In</h2>
        </Grid>
        {flag && (
          <TextField
            variant="standard"
            label="Email"
            placeholder="Enter Email"
            required
            type="Email"
            fullWidth
          />
        )}
        <TextField
          variant="standard"
          label="Username"
          placeholder="Enter Username"
          required
          type="text"
          fullWidth
        />
        <TextField
          variant="standard"
          label="Password"
          placeholder="Enter Password"
          required
          type="password"
          fullWidth
        />
        {flag && (
          <TextField
            variant="standard"
            label="Re-Enter Password"
            placeholder="Re-Enter Password"
            required
            type="password"
            fullWidth
          />
        )}

        <Button
          type="submit"
          color="primary"
          fullWidth
          variant="contained"
          sx={{ marginTop: "20px" }}
        >
          SIGN IN
        </Button>
        <Typography sx={{ display: "block", marginTop: " 10px" }}>
          <Link>Create an account?</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default AuthForm;
