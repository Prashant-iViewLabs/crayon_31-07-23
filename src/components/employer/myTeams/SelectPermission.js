import React from 'react'
import { MenuItem, Select } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 12,
        position: 'relative',
        // backgroundColor: theme.palette.background.default,
        border: '1px solid #ced4da',
        fontSize: 14,
        fontWeight: "Bold",
        padding: '5px 26px 5px 12px',
        backgroundColor: 'lightGray',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 12,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

// const permissions = {
//     ""
// }

const SelectPermission = ({selectedPermission}) => {
    console.log(selectedPermission);
    return (
        <Select
            defaultValue={1}
            input={<BootstrapInput />}
            sx={{
                width: 200
            }}
        >
            <MenuItem
                value={1}>
                Super Admin
            </MenuItem>
            <MenuItem
                value={2}>
                Admin
            </MenuItem>
            <MenuItem
                value={3}>
                Team Member
            </MenuItem>
            <MenuItem
                value={4}>
                Recruiter
            </MenuItem>
            <MenuItem
                value={5}>
                Promoter
            </MenuItem>
        </Select>
    )
}

export default SelectPermission