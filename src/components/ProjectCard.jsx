import * as React from "react";
import Card from "@mui/material/Card";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Button, CardActions, CardContent, Typography } from "@mui/material";
import { getProject } from "../data";

export default function ProjectCard(props) {
  let params = useParams();
  let navigate = useNavigate();
  // let project = getProject(parseInt(props.id, 10));
  let location = useLocation();

  return (
    // <h1>{props.project.title}</h1>
    <Card sx={{ minWidth: 275, display: "flex", flexDirection: "column" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Project {props.project.projectId}
        </Typography>
        <Typography variant="h5" component="div">
          {props.project.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.project.techStack}
        </Typography>
        <Typography variant="body2">{props.project.Description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            navigate("/projects" + location.search);
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
