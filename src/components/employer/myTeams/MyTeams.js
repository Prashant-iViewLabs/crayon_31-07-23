import React from 'react'

import { Grid, Box, Typography, Button, Divider } from '@mui/material'

import ButtonPanel from '../../common/ButtonPanel'

import {
    MY_TEAMS_LEFT_PANEL
} from "../../../utils/Constants";
import SmallButton from '../../common/SmallButton';
import TeamsDataTable from './TeamsDataTable';
import { Link, Outlet } from 'react-router-dom';
import TeamTable from './TeamTable';


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