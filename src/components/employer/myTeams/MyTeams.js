import React from 'react'

import { Grid, Box } from '@mui/material'

import ButtonPanel from '../../common/ButtonPanel'

import { Outlet } from 'react-router-dom';

import {
    MY_TEAMS_LEFT_PANEL
} from "../../../utils/Constants";

const InviteStatus = [
    {
        id: "Invite Status",
        name: "Invite Status"
    },
    {
        id: "accepted",
        name: "accepted"
    },
    {
        id: "pending",
        name: "pending"
    },
    {
        id: "rejected",
        name: "rejected"
    },
]
const MyTeams = () => {
    return (
        <Grid
            container
            spacing={0}
            // flexDirection={{ xs: "column", sm: "row" }}
            flexWrap={"nowrap"}
            justifyContent="space-between"
        >
            <Box>
                <ButtonPanel
                    panelData={MY_TEAMS_LEFT_PANEL}
                    side="left"
                // onChangeFilter={teamStatusFilter}
                />
            </Box>
            <Outlet />
            <Box>
                <ButtonPanel
                    panelData={InviteStatus}
                    side="right"

                // onChangeFilter={}
                />
            </Box>
        </Grid>
    )
}

export default MyTeams