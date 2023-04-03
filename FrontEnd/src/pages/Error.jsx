import { useRouteError } from "react-router-dom";
import Box from "@mui/material/Box";

export default function ErrorPage() {
  //catches and returns type of error
  const error = useRouteError();

  return (
    <Box
      id="error-page"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "500px",
        height: "70vh",
      }}
    >
      <div>
        <h1>Oops!</h1>
        <p>Sorry, a '{error.statusText}' error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </Box>
  );
}
