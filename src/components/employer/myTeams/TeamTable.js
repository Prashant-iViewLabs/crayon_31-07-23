import React from 'react'
import { Box, Typography, Link, Button, Divider } from '@mui/material'

import { useNavigate } from 'react-router-dom';
import TeamsDataTable from './TeamsDataTable'
import SmallButton from '../../common/SmallButton'

const TeamTable = () => {
    const navigate = useNavigate();

    const handleAddNewMemberClick = () => {
        navigate('add-new-member');
    };
    return (
        <Box
            sx={{
                boxShadow: 2,
                borderRadius: "15px",
                backgroundColor: "#ffff",
                margin: "0 24px 24px 24px",
                // minHeight: "80vh",
                display: "flex",
                flexGrow: 1,
                flexDirection: "column",
                justifyContent: "space-between",
                width: "57vh"
            }}
        >
            {/* HeaderSection Starts*/}
            <Box
                className="HeaderSection"
                sx={{
                    p: "24px 54px 0 54px"
                }}
            >
                <Box sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center"
                }}>

                    <Typography sx={{
                        fontSize: "20px",
                        fontWeight: 700,
                    }}
                    >
                        Members
                    </Typography>
                    <SmallButton
                        backgroundColor={"lightGray"}
                        color={"black"}
                        m={0}
                        label={5}

                    />
                </Box>
                <Box>
                    <Typography variant='p'>
                        Add and manage your team's and recruiter account permissions
                    </Typography>
                </Box>
                <Box sx={{
                    margin: "30px 0",
                    display: "flex",
                    gap: 2
                }}>
                    {/* <Link to={`add-new-member`}> */}
                        <Button variant='contained' color='redButton' onClick={handleAddNewMemberClick}>
                            add new member
                        </Button>
                    {/* </Link> */}
                    <Button variant='contained' color='grayButton'>
                        download CSV
                    </Button>
                </Box>
            </Box>
            {/* HeaderSection Ends*/}

            <Divider />
            {/* DataTable Section Starts */}
            <TeamsDataTable />
            {/* DataTable Section Ends */}
        </Box>
    )
}

export default TeamTable