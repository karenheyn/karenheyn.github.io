import React from "react";
import "./projects.css";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const Projects = () => {
  return (
    <div className='projects'>
      <div className='paper-div'>
        <Paper className='paper'>
          <Typography variant='h5' component='h3'>
            This is a sheet of paper.
          </Typography>
          <Typography component='div'>
            <div className='project-square'>
              Paper can be used to build surface or other elements for your
              application.
            </div>
            <div className='project-square'>
              Paper can be used to build surface or other elements for your
              application.
            </div>
            <div className='project-square'>
              Paper can be used to build surface or other elements for your
              application.
            </div>
            <div className='project-square'>
              Paper can be used to build surface or other elements for your
              application.
            </div>
          </Typography>
        </Paper>
      </div>
    </div>
  );
};

export default Projects;
