import "../css/app.css";
import { Box, Button, Container, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { RippleBadge } from "./MaterialTheme/styled";

function App() {
  return (
    <Container sx={{ background: "orange" }}>
      <Stack direction="column">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h4">
            Create React App pn TypeScript with REDUX
          </Typography>
        </Box>
        <Box>
          <RippleBadge badgeContent={4}>
            <Button variant="contained">Click</Button>
          </RippleBadge>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
