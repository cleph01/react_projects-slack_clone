import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Chat from "./pages/Chat";

function App() {
    return (
        <div className="app">
            <Router>
                <>
                    <AppBody>
                        <Header />

                        <SideBar />
                        <Switch>
                            <Route exact path="/">
                                <h1>This is home</h1>
                            </Route>
                            {/* this will be a protected route  */}

                            {/* <Route path="/chat">
                                <Chat />
                            </Route> */}
                        </Switch>
                    </AppBody>
                </>
            </Router>
        </div>
    );
}

export default App;

const AppBody = styled.div`
    display: flex;
    height: 100vh;
`;
