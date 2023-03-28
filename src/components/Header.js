import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import { AccessTime, HelpOutline, Search } from "@mui/icons-material";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar
                // TODO:  Add onclick
                />
                <AccessTime />
            </HeaderLeft>

            <HeaderSearch>
                <Search />
                <input placeholder="Search" />
            </HeaderSearch>

            <HeaderRight>
                <HelpOutline />
            </HeaderRight>
        </HeaderContainer>
    );
};

export default Header;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    justify-content: flex-end;

    > .MuiSvgIcon-root {
        margin: 0 2rem 0 auto;
    }
`;

const HeaderSearch = styled.div`
    display: flex;
    align-items: center;
    flex: 0.4;
    opacity: 1;
    border-radius: 0.6rem;
    background: var(--main-color);
    text-align: center;
    padding: 0 5rem;
    color: var(--text-color);
    border: 1px solid var(--text-color);

    > input {
        background: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: var(--text-color);
    }
`;

// with styled components, we can edit the styleing of
// a mui component by using it as an arg
const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 2rem;

    > .MuiSvgIcon-root {
        margin: 0 3rem 0 auto;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    background: var(--main-color);
    color: var(--text-color);
`;
