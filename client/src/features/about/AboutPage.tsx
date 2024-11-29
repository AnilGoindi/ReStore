import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import agent from "../../app/api/agent";

export default function AboutPage() {
    return(
        <Container >
            <Typography gutterBottom variant="h2">Errors for testing purposes</Typography>
            <ButtonGroup fullWidth>
                <Button variant="contained" onClick={() => agent.TestErrors.get400Errors()}>Test 400 Error</Button>
                <Button variant="contained" onClick={() => agent.TestErrors.get401Errors()}>Test 401 Error</Button>
                <Button variant="contained" onClick={() => agent.TestErrors.get404Errors()}>Test 404 Error</Button>
                <Button variant="contained" onClick={() => agent.TestErrors.get500Errors()}>Test 500 Error</Button>
                <Button variant="contained" onClick={() => agent.TestErrors.getValidationError()}>Test Validation Error</Button>
            </ButtonGroup>
        </Container>
    )
}