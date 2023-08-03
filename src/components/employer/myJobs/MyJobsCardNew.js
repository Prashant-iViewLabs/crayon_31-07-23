import React, { useState } from 'react'

import { useTheme } from "@mui/material/styles";
import { Box, Typography } from '@mui/material';


import CustomCard from "../../common/CustomCard";
import SmallButton from '../../common/SmallButton';
import ButtonMenu from "./ButtonMenu";
import { convertDatetimeAgo } from "../../../utils/DateTime";



const MyJobsCardNew = ({ index, job }) => {

    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <CustomCard
            handleMouseEnter={() => setIsHovered(true)}
            handleMouseLeave={() => setIsHovered(false)}
        >
            <Box >
                <ButtonMenu companyId={job?.company_id} />
                <Box>
                    <Box>
                        {job?.job_type === "crayon recruit" ? (
                            <SmallButton
                                color="yellowButton100"
                                label={job?.job_type?.slice(6)}
                                mr={1}
                            />
                        ) : job?.job_type === "crayon lite" ? (
                            <SmallButton
                                color="orangeButton"
                                label={job?.job_type?.slice(6)}
                                mr={1}
                            />
                        ) : null}
                        {job?.stageName && (
                            <SmallButton color="lightGreenButton300" label={job?.stageName} />
                        )}
                    </Box>
                    <Typography
                        sx={{
                            fontWeight: 400,
                            fontSize: 12,
                            letterSpacing: "0.75px",
                            opacity: 0.8,
                            marginBottom: "8px",
                        }}
                    >
                        posted {convertDatetimeAgo(job?.updated_at)}
                    </Typography>
                </Box>


            </Box>

        </CustomCard>
    )
}

export default MyJobsCardNew