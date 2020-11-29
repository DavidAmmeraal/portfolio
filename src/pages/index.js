import React from "react"
import { Container, Typography, Grid, CssBaseline, Box, Link, Card, CardHeader, CardActionArea, CardActions, CardContent } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


import styled from "styled-components";

import Background from "../components/background";
import theme, { ThemeProvider } from "../utils/theme";

const Column = styled(Grid)`
  ${props => props.theme.breakpoints.up("sm")} {
    height: 100vh;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const SubtitleBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Links = styled(Box)`
  > * {
    :not(:first-child) {
      margin-left: 1em;
    }
  }
`;

const MyLinks = styled(Box)`
  font-family: Roboto Mono;
`;

const MyLink = styled(Link)`
  display: block;
  :before{
    content: ">";
    margin-right: .5em;
  }
  margin-bottom: .5em;
`;

const Skill = styled(Typography)`
  font-family: Roboto Mono;
  color: ${props => props.theme.palette.text.secondary}
`;

const Skills = ({ list }) => {
  return (
    <Grid container>
      {
        list.map((skill, index) => (
          <Grid item xs={6}>
            <Skill>{index + 1} — {skill}</Skill>
          </Grid>
        ))
      }
    </Grid>
  )
};

const Tags = styled.span`
  font-family: Roboto Mono;
  font-size: 1em;
  color: ${props => props.theme.palette.text.secondary}
`;

const ProjectTitle = styled.h3`
  ${props => props.theme.typography.h5}
  letter-spacing: 0.08em;
  margin-top: 0;
  margin-bottom: ${props => props.theme.spacing(2)}px;
  font-weight: bold;
`

const Projects = () => (
  <Box>
    <Card>
      <CardContent>
        <Typography variant="subtitle2" color="textSecondary">co-lead developer</Typography>
        <ProjectTitle>insync-ingest</ProjectTitle>
        <Box mb={2}>
          <Typography variant="body2">Media asset collection and integration tool. Used by globally renowned maritime research institute Marin in Wageningen.</Typography>
        </Box>
        <Tags>java, apache solr, javascript, mongodb</Tags>
      </CardContent>
    </Card>
  </Box>
)

const IndexPage = ({ location }) => {
  console.log("theme = ", theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Background />
      <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Column item xs={12} md={8}>
              <TitleBox mb={6}>
                <Typography variant="h1"><b>David</b> Ammeraal</Typography>
                <SubtitleBox>
                  <Typography color="textSecondary" variant="subtitle1">full-stack developer</Typography>
                  <Links>
                    <Link href="#" color="textPrimary" m={1}><GitHubIcon /></Link>
                    <Link href="#" color="textPrimary"><LinkedInIcon /></Link>
                  </Links>
                </SubtitleBox>
              </TitleBox>
              <Box mb={6}>
                <Box mb={2}><Typography variant="h6" component="h3">Hi there,</Typography></Box>
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel faucibus magna, quis mattis mi. Proin egestas velit dolor, nec rutrum lacus cursus id. Fusce ornare pellentesque massa. Maecenas vulputate efficitur erat a hendrerit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin id vehicula orci. Ut a sem maximus, rhoncus nibh sed, porta est. Sed aliquam maximus turpis, quis fermentum urna efficitur vitae.
                </Typography>
              </Box>
              <Box mb={6}>
                <MyLinks>
                  <MyLink color="textPrimary" href="#">More about me</MyLink>
                  <MyLink color="textPrimary" href="#">Get in contact</MyLink>
                </MyLinks>
              </Box>
              <Box>
                <Box mb={2}><Typography variant="h6" component="h3">Things I do</Typography></Box>
                <Skills list={["front-end development", "back-end development", "tooling/workflow"]} />
              </Box>
            </Column>
            <Grid item xs={12} md={4}>
              <Box mt={2} mb={2}>
                <Typography color="textSecondary" variant="subtitle1">projects</Typography>
                <Typography variant="h5" component="h2">Things I've made</Typography>
              </Box>
              <Projects />
            </Grid>
          </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default IndexPage
