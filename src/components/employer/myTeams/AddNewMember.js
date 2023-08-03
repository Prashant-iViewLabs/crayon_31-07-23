import React, { useState } from 'react'
import { Grid, Box, Divider, Typography, InputLabel, Button, InputBase } from '@mui/material'

import {
    MY_TEAMS_LEFT_PANEL
} from "../../../utils/Constants";
import ButtonPanel from '../../common/ButtonPanel'
import InputBox from '../../common/InputBox';
import CustomDialog from '../../common/CustomDialog';
import { IconButton } from '@mui/material';

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from 'react-router-dom';


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
const AddNewMember = () => {
    const navigate = useNavigate()
    const [invitSent, setInviteSent] = useState(false)
    const [showPassword, setShowPassword] = useState(true)
    const handleInviteSent = () => {
        setInviteSent(prevState => !prevState)
    }

    const handleShowPassword = () => {
        setShowPassword(prevState => !prevState)
    }

    const handleCancelButton = ()=> {
        navigate('/employer/my_team')
    }
    return (
        // <Grid
        //     container
        //     spacing={0}
        //     // flexDirection={{ xs: "column", sm: "row" }}
        //     justifyContent="space-between"
        //     flexWrap={"nowrap"}
        // >
        //     <Box>

        //         <ButtonPanel
        //             panelData={MY_TEAMS_LEFT_PANEL}
        //             side="left"
        //         // onChangeFilter={teamStatusFilter}
        //         />
        //     </Box>
            <Box
                sx={{
                    boxShadow: 2,
                    borderRadius: "15px",
                    backgroundColor: "#ffff",
                    margin: "0 24px 0 24px",
                    // minHeight: "80vh",
                    display: "flex",
                    flexGrow: 1,
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <Box
                    className="HeaderSection"
                    sx={{
                        p: "24px 54px 24px 54px"
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
                            Add a new user
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='p'>
                            Add a team member, recruiter or promoter to your team
                        </Typography>
                    </Box>
                </Box>
                <Divider />
                <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    sx={{
                        padding: "24px 54px 24px 54px"
                    }}>
                    <Grid item xs={12} md={6}>
                        <InputLabel
                            htmlFor="title"
                            sx={{
                                color: "black",

                                paddingBottom: "2px",
                                fontSize: "14px",
                                fontWeight: 700,
                            }}
                        >
                            Permission Type
                        </InputLabel>
                        <InputBox placeholder="Select permission for new user">

                        </InputBox>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel
                            htmlFor="title"
                            sx={{
                                color: "black",

                                paddingBottom: "2px",
                                fontSize: "14px",
                                fontWeight: 700,
                            }}
                        >
                            Email
                        </InputLabel>
                        <InputBox placeholder="Enter the new user's email address">

                        </InputBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel
                            htmlFor="title"
                            sx={{
                                color: "black",

                                paddingBottom: "2px",
                                fontSize: "14px",
                                fontWeight: 700,
                            }}
                        >
                            Company
                        </InputLabel>
                        <InputBox placeholder="Enter the user's company">

                        </InputBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel
                            htmlFor="title"
                            sx={{
                                color: "black",

                                paddingBottom: "2px",
                                fontSize: "14px",
                                fontWeight: 700,
                            }}
                        >
                            First Name
                        </InputLabel>
                        <InputBox placeholder="Enter their first name">

                        </InputBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel
                            htmlFor="title"
                            sx={{
                                color: "black",

                                paddingBottom: "2px",
                                fontSize: "14px",
                                fontWeight: 700,
                            }}
                        >
                            Surname
                        </InputLabel>
                        <InputBox placeholder="Enter their surname">

                        </InputBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel
                            htmlFor="title"
                            sx={{
                                color: "black",

                                paddingBottom: "2px",
                                fontSize: "14px",
                                fontWeight: 700,
                            }}
                        >
                            Phone Number
                        </InputLabel>
                        <InputBox placeholder="Enter their contact number">

                        </InputBox>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <InputLabel
                            htmlFor="title"
                            sx={{
                                color: "black",

                                paddingBottom: "2px",
                                fontSize: "14px",
                                fontWeight: 700,
                            }}
                        >
                            Create Temporary Password
                        </InputLabel>
                        <Box
                            sx={{
                                display: "flex",
                                height: "40px",
                                borderRadius: "25px",
                                boxShadow: "none",
                                justifyContent: "space-between",
                                padding: "0 10px",
                                border: `1px solid lightGray`,
                            }}
                        >

                            <InputBase sx={{
                                flexGrow: 1
                            }} type={showPassword ? 'password' : 'text'} placeholder="Enter a temporary password" >
                            </InputBase>
                            <IconButton
                                sx={{ py: 0 }}
                                color=""
                                aria-label="reset password"
                                component="button"
                                onClick={handleShowPassword}
                            >
                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        </Box>

                    </Grid>
                </Grid>
                <Box sx={{
                    margin: "auto"
                }}>
                    <Button variant='contained' sx={{
                        borderRadius: "20px 0 0 0",
                        backgroundColor: "lightgray",
                        width: "11rem",
                        padding: "25px 40px",
                        color: "black"
                    }} onClick={handleCancelButton}>
                        Cancel
                    </Button>
                    <Button variant='contained' backgroundColor={"redButton"} sx={{
                        borderRadius: "0 20px 0 0",
                        width: "11rem",
                        padding: "25px 40px",
                    }}
                        color="redButton100"
                        onClick={handleInviteSent}>
                        Send Invite
                    </Button>
                    <CustomDialog
                        show={invitSent}
                        hideButton={false}
                        dialogWidth="xs"
                        showFooter={false}
                        onDialogClose={handleInviteSent}
                        padding={0}
                    >
                        <Box sx={{
                            padding: 4
                        }}>
                            <Typography variant='h5' fontWeight={"Bold"} textAlign={"center"} sx={{
                                marginBottom: 3
                            }}>
                                invite sent!
                            </Typography>
                            <Typography fontSize={16} fontWeight={"bold"} textAlign={"center"} paragraph>
                                the new admin or member will receive an invite to join via email.
                            </Typography>
                        </Box>
                        <Box>
                            <Button
                                sx={{
                                    boxShadow: 0,
                                    fontSize: "14px",
                                    width: "50%",
                                    borderRadius: 0,
                                    height: "43px",
                                    background: "lightgray",
                                    color: "black",
                                    padding: 3
                                }}
                                variant="contained"
                            // onClick={handleGoBack}
                            >
                                Back To Team Status
                            </Button>

                            <Button
                                sx={{
                                    boxShadow: 0,
                                    fontSize: "14px",
                                    width: "50%",
                                    borderRadius: 0,
                                    height: "43px",
                                    padding: 3
                                }}
                                variant="contained"
                                color="redButton100"
                            // onClick={handleClick}
                            >
                                Add another user
                            </Button>
                        </Box>
                    </CustomDialog>
                </Box>
            </Box >
        //     <Box>

        //         <ButtonPanel
        //             panelData={InviteStatus}
        //             side="right"
        //         // onChangeFilter={}
        //         />
        //     </Box>
        // </Grid >
    )
}

export default AddNewMember