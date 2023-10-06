import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled, SxProps, Theme } from '@mui/material/styles';
import { gap, halfGap, headerGutterTop, hideScrollBars, sectionGuttersY, sx } from '../sx';
import { ReactNode } from 'react';
import { resume } from '../data';
import { Experience } from '../components/experience';
import { Divider } from '../components/divider';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import Place from '@mui/icons-material/Place';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export type GridArea = `contact` | `experience` | `education` | `interests`;

const logoSize = [`1.5rem`, `1.5rem`, `1.5rem`, `1.75rem`, `1.75rem`];


export const headerSize = (theme: Theme) =>
  sectionGuttersY.map(
    (gutter, index) =>
      `calc(${theme.spacing(gutter + headerGutterTop[index])} + ${
        logoSize[index]
      })`,
  );

export const GridRoot = styled(Box)(
  sx([
    (theme) => ({
      height: `100vh`,
      maxHeight: `-webkit-fill-available`, // prevents overflow on iOS Safari
      // px: gap,
      gap,
      display: `grid`,
      gridTemplateAreas: `
        'contact'
        'experience'
      `,
      gridTemplateColumns: `auto`,
      gridTemplateRows: `auto`,
    }),
  ]),
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
    (theme) => ({
      display: `flex`,
      flexDirection: `column`,
      gridColumnStart: 1,
      gridColumnEnd: 3,
      gridRowStart: 1,
      gridRowEnd: 12,
      padding: gap,
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
      gridRowEnd: 12,
      padding: gap,
      borderLeft: `1px solid ${theme.palette.grey[200]}`,
    }),
  ]),
);

export default function Home() {
  return (
    <Container fixed>
      <Box sx={{ display: `flex`, justifyContent: `space-between` }}>
        <Box>
            <Typography variant="h1">Shannen Lambdin</Typography>
            <Typography variant="h3" sx={{ paddingBottom: gap }}>Senior Fullstack Engineer</Typography>
        </Box>
        <Box sx={{ display: `flex`, flexDirection: `column`, justifyContent: `space-evenly` }}>
            <Chip icon={<Place />} label="Raleigh, NC" />
            <Chip clickable icon={<LinkedInIcon />} label="LinkedIn" component="a" href="https://www.linkedin.com/in/shannen-lambdin-90313850/" />
        </Box>
      </Box>
            
            
      <Divider />

      <GridRoot>
        <SkillsGridItem>
        <Typography variant="h3">Who I am & What I do</Typography>
        <Typography variant="subtitle1" sx={{ paddingBottom: gap }}>{resume.tldr}</Typography>

        <Typography variant="h3">Education</Typography>
          <Typography variant="subtitle1" sx={{ paddingBottom: halfGap }}>{resume.education.school} </Typography>
          <Typography variant="subtitle1" sx={{ paddingBottom: halfGap }}>{resume.education.program} </Typography>
          {resume.education.degrees.map(degree => (
              <Typography variant="subtitle1" sx={{ fontWeight: `bold` }}>{degree.degree} in {degree.study}</Typography>
          ))}
        </SkillsGridItem>

        <ExperienceGridItem gridArea='experience'>
          <Typography variant="h3">7+ years of experience</Typography>
          
          {resume.experiences.map(experience => (
            <Experience experience={experience} />
          ))}
        </ExperienceGridItem>
      </GridRoot>
    </Container>
      
  )
}
