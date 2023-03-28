import React from "react";
import styled from "styled-components";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/db/firebaseConfig";

const SideBarOption = ({ Icon, title, addChannelOption }) => {
    const addChannel = async () => {
        const channelName = prompt("Please enter the channel name");

        if (channelName) {
            try {
                const docRef = await addDoc(collection(db, "rooms"), {
                    name: channelName,
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    };

    const selectChannel = () => {};

    return (
        <SideBarOptionContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && (
                <Icon
                    fontSize="large"
                    style={{
                        margin: "0 1rem",
                    }}
                />
            )}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SideBarOptionChannel>
                    <span>#</span> {title}
                </SideBarOptionChannel>
            )}
        </SideBarOptionContainer>
    );
};

export default SideBarOption;

const SideBarOptionChannel = styled.h3`
    padding: 1rem 0;
    font-weight: 300;
`;
const SideBarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: var(--sidebar-options-font-size);
    padding-left: 0.2rem;
    margin: 1rem 0;
    cursor: pointer;

    :hover {
        opacity: 0.9;
        background: #340e36;
    }

    > h3 {
        font-weight: 500;
    }

    > h3 > span {
        padding: 1.5rem;
    }
`;
