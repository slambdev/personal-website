import { Place } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import { styled, SxProps, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

import { Divider } from '../components/divider';
import { Experience } from '../components/experience';
import { resume } from '../data';
import { breakpointDown, fourthGap, gap, halfGap, hideScrollBars, sx } from '../sx';

export type GridArea = `contact` | `experience` | `education` | `interests`;

export const GridRoot = styled(Box)(
  sx([{
    height: `100vh`,
    maxHeight: `-webkit-fill-available`, // prevents overflow on iOS Safari
    display: `grid`,
    gridTemplateAreas: `
      'contact'
      'experience'
    `,
    gridTemplateColumns: `auto`,
    gridTemplateRows: `auto`,
  }]),
);

const StyledGridItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== `gridArea`,
})<{ gridArea: GridArea }>(({ gridArea }) =>
  sx([
    {
      overflowX: `hidden`,
      zIndex: `body`,
      gridArea,
    },
    hideScrollBars,
  ]),
);

export interface GridItemProps {
  children: ReactNode;
  gridArea: GridArea;
  sx?: SxProps<Theme>;
}

export const GridItem = ({ gridArea, ...props }: GridItemProps) => (
  <StyledGridItem
    gridArea={gridArea}
    {...props}
  />
);
          
const SkillsGridItem = styled(Box)(
  sx([
    {
      display: `flex`,
      flexDirection: `column`,
      gridColumnStart: 1,
      gridColumnEnd: 3,
      gridRowStart: 1,
      gridRowEnd: 10,
      padding: gap,
    },
    breakpointDown(`md`, {
      gridColumnStart: 1,
      gridColumnEnd: 12,
      gridRowStart: 1,
      gridRowEnd: 3,
    }),
  ]),
);

const ExperienceGridItem = styled(Box)(
  sx([
    (theme) => ({
      display: `flex`,
      flexDirection: `column`,
      gridColumnStart: 3,
      gridColumnEnd: 10,
      gridRowStart: 1,
      gridRowEnd: 10,
      padding: gap,
      borderLeft: `1px solid`,
      borderColor: theme.palette.grey[200],
    }),
    breakpointDown(`md`, (theme) => ({
      gridColumnStart: 1,
      gridColumnEnd: 12,
      gridRowStart: 3,
      gridRowEnd: 10,
      borderLeft: `none`,
      borderTop: `1px solid`,
      borderColor: theme.palette.grey[200],
    })),
  ]),
);

const BottomGridItem = styled(Box)(
  sx([
    (theme) => ({
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      gridColumnStart: 1,
      gridColumnEnd: 12,
      gridRowStart: 10,
      gridRowEnd: 12,
      paddingY: gap * 5,
      paddingX: gap,
      borderTop: `1px solid ${theme.palette.grey[200]}`,
      textAlign: `center`,
    }),
  ]),
);

export default function Home() {
  return (
    <Container fixed>
      <Box sx={{ display: `flex`, justifyContent: `space-between` }}>
        <Box>
            <Typography variant="h1">Shannen Lambdin</Typography>
            <Box sx={[{ display: `flex`, flexDirection: `column` }]}>
              <Typography variant="h3" sx={{ paddingRight: halfGap }}>Senior Fullstack Engineer</Typography>
              <Box sx={{ display: `flex`, paddingBottom: fourthGap, alignItems: `center` }}>
                <Place fontSize='small' /> <Typography variant="h4">Raleigh, NC</Typography>
              </Box>
            </Box>
        </Box>
        <Box sx={{ display: `flex`, flexDirection: `column`, justifyContent: `space-evenly` }}>
            <Chip clickable icon={<SentimentVerySatisfiedIcon />} label="Contact me" component="a" href="mailto:slambdin123@gmail.com" />
            <Chip clickable icon={<LinkedInIcon />} label="LinkedIn" component="a" href="https://www.linkedin.com/in/shannen-lambdin-90313850/" />
        </Box>
      </Box>
            
            
      <Divider />

      <GridRoot>
        <SkillsGridItem>
          <Typography variant="h3">Who I am & What I do</Typography>
          <Typography variant="subtitle1" sx={{ paddingBottom: gap }}>{resume.tldr}</Typography>

          <Typography variant="h3">Education</Typography>
          <Typography variant="subtitle1" sx={{ paddingBottom: halfGap, fontWeight: `bold` }}>{resume.education.school} </Typography>
          <Typography variant="subtitle1" sx={{ paddingBottom: halfGap, fontWeight: `bold` }}>{resume.education.program} </Typography>
          
          {resume.education.degrees.map((degree, i) => (
              <Typography key={i} variant="subtitle1">{degree.degree} in {degree.study}</Typography>
          ))}
        </SkillsGridItem>

        <ExperienceGridItem gridArea='experience'>
          <Typography variant="h3">7+ years of experience</Typography>
          
          {resume.experiences.map((experience, i) => (
            <Experience key={i} experience={experience} />
          ))}
        </ExperienceGridItem>

        <BottomGridItem>
          <Typography variant="h2" sx={{paddingBottom: gap}}>Congratulations! You scrolled all the way to the bottom!</Typography>
          <Typography variant="h4" sx={{paddingBottom: gap}}>This must mean you&apos;re interested in stopping and having a chat. </Typography>
          
          <Button variant='outlined' color='primary' size='small' startIcon={<SentimentVerySatisfiedIcon />} href='mailto:slambdin123@gmail.com'>Contact me</Button>
        </BottomGridItem>
      </GridRoot>
    </Container>
      
  )
}
