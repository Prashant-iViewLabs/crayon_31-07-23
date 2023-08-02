import React from 'react'

import { Avatar, Box, Typography } from '@mui/material'

const getRandomColor = () => {
    const colors = ['red', 'blue', 'green', 'orange', 'purple', 'pink', 'teal'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};
const NameInfo = ({ name, email }) => {

    const randomColor = getRandomColor();
    return (
        <Box sx={{
            display: "flex",
            gap: 2,
            alignItems: "center"
        }}>
            <Avatar sx={{ bgcolor: randomColor }}>{name[0]}</Avatar>
            <Box>
                <Typography sx={{
                    fontWeight: "Bold",
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    maxWidth: '200px',
                }} textOverflow={'ellipsis'}>{name}</Typography>
                <Typography>{email}</Typography>
            </Box>
        </Box>
    )
}

export default NameInfo