import React, { useState } from 'react'
import { Box, Typography, Switch, Button  } from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";
import CustomDialog from '../../common/CustomDialog';
import RoundCrossSign from '../../../assets/roundCrossSign.png'



const Actions = () => {
    const [openDelete, setOpenDelete] = useState(false)

    const handleOpenDelete = () => {
        setOpenDelete(prevState => !prevState)
    }
    return (
        <>
            <Box sx={{
                display: "flex",
                gap: 2
            }}>
                <smallButton onClick={handleOpenDelete}>
                    <DeleteIcon color='primary' />
                </smallButton>
                <smallButton >
                    <Box >

                        <img src={RoundCrossSign} alt='crossSign' height={25} />
                    </Box>
                </smallButton>
                <smallButton>
                    <EditIcon color='redButton100' />
                </smallButton>
            </Box>
            <CustomDialog
        show={openDelete}
        hideButton={false}
        dialogWidth="xs"
        showFooter={false}
        onDialogClose={handleOpenDelete}
        padding={0}
      >
        <Box sx={{
          padding: 4
        }}>
          <Typography variant='h5' fontWeight={"Bold"} textAlign={"center"} sx={{
            marginBottom: 3
          }}>
            Sure you want to delete?
          </Typography>
          <Typography fontSize={16} fontWeight={"bold"} textAlign={"center"} paragraph>
            Please confirm that you want to delete the selected user
          </Typography>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Typography >Click to confirm</Typography>
            <Switch />
          </Box>
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
            onClick={handleOpenDelete}
          >
            cancel
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
            adios amigo
          </Button>
        </Box>
      </CustomDialog>
        </>
    )

}

export default Actions