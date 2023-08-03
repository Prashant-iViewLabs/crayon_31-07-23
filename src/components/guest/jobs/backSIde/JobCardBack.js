import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import job_logo from "../../../../assets/job_logo.svg";
import job_volume from "../../../../assets/job_volume.svg";
import job_star from "../../../../assets/job_star.svg";
import job_star_selected from "../../../../assets/job_star_selected.svg";
import job_exp from "../../../../assets/job_exp.png";
import job_apply from "../../../../assets/job_apply.svg";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import locale from "../../../../i18n/locale";
import {
    getAllQuestions,
    getAllQuestionsWithoutLogin,
} from "../../../../redux/guest/getQuestions";
import { ALERT_TYPE } from "../../../../utils/Constants";
import Tooltip from "@mui/material/Tooltip";
import SingleRadialChart from "../../../common/SingleRadialChart";
import SmallButton from "../../../common/SmallButton";
import CustomCard from "../../../common/CustomCard";
import PlaceIcon from "@mui/icons-material/Place";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TextWrapper from "../../../common/TextWrapper";
import { convertDatetimeAgo } from "../../../../utils/DateTime";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAlert } from "../../../../redux/configSlice";
import { favouriteJob } from "../../../../redux/guest/talentSlice";
import jwt_decode from "jwt-decode";
import { formatCurrencyWithCommas } from "../../../../utils/Currency";
import DOMPurify from "dompurify";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { he } from "date-fns/locale";


import profile_challenger from "../../../../assets/Profile Icons_Challenger.svg";
import profile_character from "../../../../assets/Profile Icons_Charater.svg";
import profile_collaborator from "../../../../assets/Profile Icons_Collaborator.svg";
import profile_contemplator from "../../../../assets/Profile Icons_Contemplator.svg";

const label1 = "applied";
const label2 = "shortlisted";
const label3 = "interviewed";

const JobCardFront = ({
    index,
    job,
    setQuestions,
    onHandleClose,
    setopenApplyJobDialog,
    setisFlipped
}) => {
    const i18n = locale.en;
    const theme = useTheme();
    const dispatch = useDispatch();
    const [isHovered, setIsHovered] = useState(false);
    const [isStar, setIsStarSelected] = useState(job?.favourite);
    const [arrSlider, setArrSlider] = useState([
        job?.industry_jobs[0],
        job?.type,
        job?.work_setup,
    ]);
    // console.log(job?.job_traits[0].trait?.name)
    const [arrSlider2, setArrSlider2] = useState([
        ...(job?.job_traits || []),
    ]);
    const [toolsArr, setToolsArr] = useState([
        ...(job?.job_tools || []),
    ]);

    const token = localStorage?.getItem("token");
    let decodedToken;
    if (token) {
        decodedToken = jwt_decode(token);
    }

    const handleStar = async () => {
        setIsStarSelected(!isStar);
        decodedToken?.data?.role_id === 3 &&
            (await dispatch(favouriteJob({ reqid: job?.job_id })));
    };
    const getquestions = async () => {
        const { payload } = await dispatch(getAllQuestions(job?.job_id));
        if (payload?.status === "success") {
            setQuestions(payload.data);
        } else {
            dispatch(
                setAlert({
                    show: true,
                    type: ALERT_TYPE.ERROR,
                    msg: payload?.message,
                })
            );
        }
    };
    const getquestionswithoutlogin = async () => {
        const { payload } = await dispatch(
            getAllQuestionsWithoutLogin(job?.job_id)
        );
        if (payload?.status === "success") {
            setQuestions(payload.data);
        } else {
            dispatch(
                setAlert({
                    show: true,
                    type: ALERT_TYPE.ERROR,
                    msg: payload?.message,
                })
            );
        }
    };
    const handleClick = () => {
        if (decodedToken?.data?.role_id !== 4) {
            console.log(decodedToken?.data?.role_id);
            setopenApplyJobDialog(true);
            if (decodedToken?.data?.role_id === undefined) {
                getquestionswithoutlogin();
            } else {
                getquestions();
            }
        } else {
            dispatch(
                setAlert({
                    show: true,
                    type: ALERT_TYPE.ERROR,
                    msg: "Login as candidate to apply for this job",
                })
            );
        }
    };

    // const handleRightClick = () => {
    //     setArrSlider2([...arrSlider2.slice(1), ...arrSlider2.slice(0, 1)]);
    // };
    // const handleLeftClick = () => {
    //     setArrSlider2([
    //         ...arrSlider2.slice(arrSlider2.length - 1),
    //         ...arrSlider2.slice(0, arrSlider2.length - 1),
    //     ]);
    // };

    return (
        <CustomCard
            handleMouseEnter={() => setIsHovered(true)}
            handleMouseLeave={() => setIsHovered(false)}
        >
            {/* Header Section */}
            <Grid
                container
                // padding={1}
                justifyContent="space-between"
                alignItems="start"
                overflow={"hidden"}
                sx={{
                    borderRadius: "25px 25px 0 0",
                    gap: 3
                }}
            >
                <Box
                    component="img"
                    sx={{
                        height: 40,
                        width: 40,
                        maxHeight: { xs: 40 },
                        maxWidth: { xs: 40 },
                        ml: 2,
                        mt: 1,
                        p: 1,
                    }}
                    alt="job_logo"
                    src={job?.profile_url !== "No URL" ? job?.profile_url : job_logo}
                />
                <Box sx={{
                    flexGrow: 1
                }}>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}>
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
                            {job?.stage?.name && (
                                <SmallButton color="lightGreenButton300" mr={1} label={job?.stage?.name} />
                            )}
                        </Box>

                        <Box sx={{
                            display: "flex"
                        }}>
                            <Box
                                sx={{
                                    height: 43,
                                    width: 50,
                                    maxHeight: { xs: 43 },
                                    maxWidth: { xs: 50 },
                                    borderRadius: "0 0 0 10px",
                                    background: theme.palette.purpleButton300.main,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Box
                                    component="img"
                                    sx={{
                                        height: 25,
                                        width: 25,
                                        maxHeight: { xs: 25 },
                                        maxWidth: { xs: 25 },
                                    }}
                                    alt="job_volume"
                                    src={job_volume}
                                    onClick={handleClick}
                                />
                            </Box>

                            <Button color="grayButton" onClick={() =>
                                decodedToken?.data?.role_id === "undefined"
                                    ? handleClick
                                    : handleStar(job?.job_id)
                            }
                                sx={{
                                    height: "auto",
                                    minWidth: 50,
                                    background: "#c9c9c9",
                                    borderRadius: 0,
                                    padding: 0
                                }}>
                                <StarRoundedIcon color={isStar ? "error" : "disabled"} />
                            </Button>
                            {/* {isStar ? (
                                <Box
                                    component="img"
                                    sx={{
                                        height: 43,
                                        width: 50,
                                        maxHeight: { xs: 43 },
                                        maxWidth: { xs: 50 },
                                    }}
                                    alt="job_star_selected"
                                    src={job_star_selected}
                                    onClick={() =>
                                        decodedToken?.data?.role_id === "undefined"
                                            ? handleClick
                                            : handleStar(job?.job_id)
                                    }
                                />
                            ) : (
                                // <Box
                                //     component="img"
                                //     sx={{
                                //         height: 43,
                                //         width: 50,
                                //         maxHeight: { xs: 43 },
                                //         maxWidth: { xs: 50 },
                                //         borderRadius: 0
                                //     }}
                                //     alt="job_star"
                                //     src={job_star}
                                //     onClick={() =>
                                //         decodedToken?.data?.role_id === "undefined"
                                //             ? handleClick
                                //             : handleStar(job?.job_id)
                                //     }
                                // />
                            )} */}
                        </Box>

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

            </Grid>
            {/* Header Section */}

            <Box sx={{
                display: "flex",
                width: "100%",
                height: "250px"
            }}>
                {/* Name and Info Section */}
                <Grid marginLeft={1} marginRight={1} sx={{
                    flexGrow: 1
                }}>
                    <Tooltip
                        arrow
                        // TransitionComponent={"Fade"}
                        // TransitionProps={{ timeout: 600 }}
                        title={job?.title}
                        placement="top"
                    >
                        <Link
                            to={`/jobs/job-detail/${`${job?.town?.name + " " + job?.town?.region?.name
                                }`}/${job?.job_id}`}
                            target={"_blank"}
                            style={{
                                textDecoration: "none",
                                color: theme.palette.black,
                            }}
                        >
                            <Typography
                                sx={{
                                    // minHeight: "60px",
                                    fontWeight: 700,
                                    fontSize: 20,
                                    overflow: "hidden",
                                    display: "-webkit-box",
                                    WebkitBoxOrient: "vertical",
                                    WebkitLineClamp: 1,
                                }}
                                gutterBottom
                            >
                                {job?.title}
                            </Typography>
                        </Link>
                    </Tooltip>
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: 12,
                            marginBottom: "4px",
                            letterSpacing: "0.25px",
                        }}
                    >
                        {job?.salary?.currency?.symbol}
                        {formatCurrencyWithCommas(job?.salary?.max)} per month
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "baseline" }}>
                        <Box
                            component="img"
                            sx={{
                                height: 16,
                                width: 16,
                                maxHeight: { xs: 15 },
                                maxWidth: { xs: 15 },
                                mr: 1,
                            }}
                            alt="job_exp"
                            src={job_exp}
                        />
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: 12,
                                letterSpacing: "0.25px",
                            }}
                        >
                            {job?.experience?.year} years Experience
                        </Typography>
                    </Box>
                    <Box
                        sx={{ display: "flex", alignItems: "center", marginBottom: "12px" }}
                    >
                        <IconButton
                            sx={{ padding: 0, marginLeft: "-5px", marginRight: "4px" }}
                            color="redButton100"
                            aria-label="search job"
                            component="button"
                        >
                            <PlaceIcon />
                        </IconButton>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: 12,
                                letterSpacing: "0.25px",
                            }}
                        >
                            {job?.town?.name}, {job?.town?.region?.name}
                        </Typography>
                    </Box>
                    {/* <Box sx={{ display: "flex", marginTop: "-5px" }}>
          {job?.industry_job?.industry?.name && (
            <>
              <SmallButton
                color="blueButton600"
                height={25}
                label={ job?.industry_job?.industry?.name
                }
                mr="4px"
              />
            </>
          )}
          {job?.type && (
            <SmallButton
              color="blueButton700"
              height={25}
              label={job?.type}
              mr="4px"
            />
          )}
          {job?.work_setup && (
            <SmallButton
              color="blueButton700"
              height={25}
              label={job?.work_setup}
              mr="4px"
            />
          )}
        </Box> */}
                    <Box mb={2}>
                        {
                            toolsArr.map(item => {
                                return (
                                    <SmallButton
                                        color={"yellowButton200"}
                                        height={25}
                                        value={item?.tool?.name}
                                        label={item?.tool?.name.split(" ")[0]}
                                        mr="4px"
                                    />)
                            })

                        }
                    </Box>
                    {/* Trait Section */}
                    <Box>
                        {
                            arrSlider2.map(item => {
                                return (
                                    <SmallButton
                                        color={"grayButton200"}
                                        height={25}
                                        value={item?.trait?.name}
                                        label={item?.trait?.name.split(" ")[0]}
                                        mr="4px"
                                        mt="4px"
                                    />)
                            })

                        }
                    </Box>
                    {/* Trait Section */}


                </Grid>
                {/* Name and Info Section */}
                {/* flip Button */}
                <Box sx={{
                    display: "flex",
                    alignItems: "end"
                }}>
                    <Button variant="contained" color="redButton" sx={{
                        width: "100%",
                        height: 150,
                        padding: 0,
                        minWidth: "20px",
                        marginBottom: 2,
                        borderRadius: "10px 0 0 10px",
                    }} onClick={() => setisFlipped(false)}>
                        <KeyboardArrowLeftOutlinedIcon sx={{
                            margin: 0, padding: 0
                        }} />
                    </Button>
                </Box>
                {/* flip Button */}
            </Box >
            {/* Radial Chart Section */}
            < Grid
                container
                spacing={2}
                padding="0 16px 8px 16px"
                justifyContent="space-around"
                alignItems="center"
            >
                <Box sx={{ margin: "0 -22px 0 -22px" }}>
                    <SingleRadialChart
                        max={1000}
                        labelsData={"grit score"}
                        series={[job?.grit_score]}
                        width={140}
                        color={theme.palette.chart.red}
                        index={index}
                        isHovered={isHovered}
                    />
                </Box>
                {/* <Box sx={{ margin: "0 -22px 0 -22px" }}> */}
                <Box
                    component="img"
                    height={90}
                    // sx={{ margin: "0 -22px 0 -22px" }}
                    alt="job_exp"
                    src={
                        (job?.primary?.name == "collaborator" &&
                            profile_collaborator) ||
                        (job?.primary?.name == "challenger" && profile_challenger) ||
                        (job?.primary?.name == "character" && profile_character) ||
                        (job?.primary?.name == "contemplator" && profile_contemplator)
                    }
                />
                {/* </Box> */}
                <Box
                    component="img"
                    height={90}
                    // sx={{ margin: "0 -22px 0 -22px" }}
                    alt="job_exp"
                    src={
                        (job?.shadow?.name == "collaborator" &&
                            profile_collaborator) ||
                        (job?.shadow?.name == "challenger" && profile_challenger) ||
                        (job?.shadow?.name == "character" && profile_character) ||
                        (job?.shadow?.name == "contemplator" && profile_contemplator)
                    }
                />
            </ Grid>
            {/* Radial Chart Section */}
            {/* Footer Section */}
            <Grid
                container
                // padding="0 8px 8px 8px"
                alignItems="center"

                overflow={"hidden"}
                sx={{
                    background: "green",
                    width: "100%",
                    borderRadius: "0 0 25px 25px",
                    height: 65,
                }}
            >
                {/* <Box
                    sx={{
                        height: 43,
                        width: 43,
                        maxHeight: { xs: 43 },
                        maxWidth: { xs: 43 },
                        borderRadius: "6px",
                        background: theme.palette.chart.yellow,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            height: 25,
                            width: 25,
                            maxHeight: { xs: 25 },
                            maxWidth: { xs: 25 },
                        }}
                        alt="job_apply"
                        src={job_apply}
                    />
                </Box>
                <Grid sx={{ width: "33.33%", padding: 0, ml: 1 }}>
                    <Button
                        sx={{
                            boxShadow: 0,
                            fontSize: "12px",
                            width: "100%",
                            height: "43px",
                        }}
                        variant="contained"
                        color="redButton100"
                        onClick={handleClick}
                    >
                        {i18n["jobCard.apply"]}
                    </Button>
                </Grid> */}
                <Button variant="contained" sx={{
                    borderRadius: 0,
                    width: "33.33%",
                    height: "100%"
                }} color="blueButton200">Match Now</Button>
                <Button variant="contained" sx={{
                    borderRadius: 0,
                    width: "33.33%",
                    height: "100%"
                }} color="grayButton200">View More</Button>
                <Button variant="contained" sx={{
                    borderRadius: 0,
                    width: "33.33%",
                    height: "100%"
                }} color="redButton"
                    onClick={handleClick}>apply</Button>
            </Grid>
            {/* Footer Section */}

        </CustomCard >
    )
}

export default JobCardFront