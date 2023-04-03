import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "right" }}>
          <Button color="inherit">Log out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
