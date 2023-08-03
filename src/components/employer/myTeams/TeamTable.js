import React from "react";
import { Box, Typography, Link, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TeamsDataTable from "./TeamsDataTable";
import SmallButton from "../../common/SmallButton";
import { getAllTeamMembers } from "../../../redux/employer/myTeams";
import { useDispatch } from "react-redux";
import { setAlert } from "../../../redux/configSlice";
import { ALERT_TYPE, ERROR_MSG } from "../../../utils/Constants";
import { useEffect } from "react";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
function createData(id, user, Status, dateAdded, lastActive, permissions) {
  console.log(permissions);
  return {
    id,
    name: {
      fullname: `${user?.first_name} ${user?.last_name}`,
      email: user?.email,
      avatarInitial: `${user?.first_name[0]}${user?.last_name[0]}`
    },
    Status,
    dateAdded,
    lastActive,
    permissions,
  };
}
const TeamTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [rows, setRows] = useState([]);
  const handleAddNewMemberClick = () => {
    navigate("add-new-member");
  };
  const getTeamsMember = async () => {
    try {
      const { payload } = await dispatch(getAllTeamMembers());
      if (payload?.status === "success") {
        console.log(payload?.data.employer_role_type);
        setRows(
          payload?.data?.map((team) => {
            return createData(
              nanoid(),
              team?.user,
              "Offline",
              "24 July, 2023",
              team?.user?.last_login_at,
              team?.employer_role_type !== null && team?.employer_role_type?.name,
            );
          })
        );
      } else {
        dispatch(
          setAlert({
            show: true,
            type: ALERT_TYPE.ERROR,
            msg: payload?.message,
          })
        );
      }
    } catch (error) {
      dispatch(
        setAlert({
          show: true,
          type: ALERT_TYPE.ERROR,
          msg: ERROR_MSG,
        })
      );
    }
  };
  console.log(rows)
  useEffect(() => {
    getTeamsMember();
  }, []);
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
        width: "57vh",
      }}
    >
      {/* HeaderSection Starts*/}
      <Box
        className="HeaderSection"
        sx={{
          p: "24px 54px 0 54px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
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
          <Typography variant="p">
            Add and manage your team's and recruiter account permissions
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "30px 0",
            display: "flex",
            gap: 2,
          }}
        >
          {/* <Link to={`add-new-member`}> */}
          <Button
            variant="contained"
            color="redButton"
            onClick={handleAddNewMemberClick}
          >
            add new member
          </Button>
          {/* </Link> */}
          <Button variant="contained" color="grayButton">
            download CSV
          </Button>
        </Box>
      </Box>
      {/* HeaderSection Ends*/}
      <Divider />
      {/* DataTable Section Starts */}
      <TeamsDataTable rows={rows} />
      {/* DataTable Section Ends */}
    </Box>
  );
};
export default TeamTable;