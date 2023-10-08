import { GitHub, Place } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { common } from '@mui/material/colors';
import Container from '@mui/material/Container';
import { emphasize, styled, SxProps, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import _ from 'lodash';
import { ReactNode } from 'react';

import { Divider } from '../components/divider';
import { Experience } from '../components/experience';
import { resume } from '../data';
import {
  breakpointDown,
  FlexBox,
  fourthGap,
  gap,
  halfGap,
  hideScrollBars,
  sx,
} from '../sx';

export type GridArea = `contact` | `experience` | `education` | `interests`;

export const GridRoot = styled(Box)(
  sx([
    {
      height: `100vh`,
      maxHeight: `-webkit-fill-available`, // prevents overflow on iOS Safari
      display: `grid`,
      gridTemplateAreas: `
      'contact'
      'experience'
    `,
      gridTemplateColumns: `auto`,
      gridTemplateRows: `auto`,
    },
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
  <StyledGridItem gridArea={gridArea} {...props} />
);

const SkillsGridItem = styled(FlexBox)(
  sx([
    {
      flexDirection: `column`,
      gridColumnStart: 1,
      gridColumnEnd: 3,
      gridRowStart: 1,
      gridRowEnd: 10,
      padding: gap,
      alignItems: `start`,
    },
    breakpointDown(`md`, {
      gridColumnStart: 1,
      gridColumnEnd: 12,
      gridRowStart: 1,
      gridRowEnd: 3,
    }),
  ]),
);

const ExperienceGridItem = styled(FlexBox)(
  sx([
    (theme) => ({
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

const BottomGridItem = styled(FlexBox)(
  sx([
    (theme) => ({
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

const PrimaryChip = styled(Chip)(
  sx([
    (theme) => ({
      border: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: emphasize(theme.palette.primary.main, 0.7),
      color: common.black,
    }),
  ]),
);

const IntroWrapper = styled(FlexBox)(
  sx([
    {
      justifyContent: `space-between`,
      marginBottom: halfGap,
    },
    breakpointDown(`sm`, {
      flexDirection: `column`,
    }),
  ]),
);

const Intro = () => {
  return (
    <IntroWrapper>
      <Box>
        <Typography variant='h1'>Shannen Lambdin</Typography>
        <FlexBox sx={{ flexDirection: `column` }}>
          <Typography
            variant='h3'
            sx={{ paddingRight: halfGap, marginBottom: fourthGap }}
          >
            Senior Fullstack Engineer
          </Typography>
          <FlexBox sx={{ paddingBottom: fourthGap, alignItems: `center` }}>
            <Place fontSize='small' />{' '}
            <Typography variant='h4'>Raleigh, NC</Typography>
          </FlexBox>
        </FlexBox>
      </Box>
      <FlexBox sx={{ flexDirection: `column`, justifyContent: `space-evenly` }}>
        <Button
          variant='outlined'
          color='secondary'
          size='small'
          startIcon={<SentimentVerySatisfiedIcon />}
          href='mailto:slambdin123@gmail.com'
          sx={{ marginY: halfGap }}
        >
          Contact me
        </Button>

        <FlexBox>
          <Button
            variant='text'
            color='secondary'
            size='small'
            startIcon={<LinkedInIcon />}
            href='https://www.linkedin.com/in/shannen-lambdin-90313850/'
          >
            LinkedIn
          </Button>

          <Button
            variant='text'
            color='secondary'
            size='small'
            startIcon={<GitHub />}
            href='https://github.com/slambdev'
            sx={{ marginLeft: gap }}
          >
            GitHub
          </Button>
        </FlexBox>
      </FlexBox>
    </IntroWrapper>
  );
};

const Footer = () => {
  return (
    <BottomGridItem>
      <Typography variant='h2' sx={{ paddingBottom: gap }}>
        Congratulations! You scrolled all the way to the bottom!
      </Typography>
      <Typography variant='h4' sx={{ paddingBottom: gap }}>
        This must mean you&apos;re interested in stopping and having a chat.{' '}
      </Typography>

      <Button
        variant='outlined'
        color='secondary'
        size='small'
        startIcon={<SentimentVerySatisfiedIcon />}
        href='mailto:slambdin123@gmail.com'
      >
        Contact me
      </Button>
    </BottomGridItem>
  );
};

const Skills = ({ skills }: { skills: string[] }) => {
  const sortedSkills: string[] = _.orderBy(
    skills,
    [(skill: string) => skill.toLowerCase()],
    ['asc'],
  );

  return (
    <SkillsGridItem>
      <Typography variant='h3'>Who I am & What I do</Typography>
      <Typography variant='subtitle1'>{resume.tldr}</Typography>

      <Typography variant='h3' sx={{ paddingTop: gap }}>
        Skills
      </Typography>

      <Box>
        {sortedSkills.map((skill, i) => (
          <PrimaryChip
            key={i}
            label={skill}
            sx={{ marginTop: halfGap, marginRight: halfGap }}
            color='primary'
          />
        ))}
      </Box>

      <Typography variant='h3' sx={{ paddingTop: gap }}>
        Education
      </Typography>
      <Typography
        variant='subtitle1'
        sx={{ paddingBottom: halfGap, fontWeight: `bold` }}
      >
        {resume.education.school}{' '}
      </Typography>
      <Typography
        variant='subtitle1'
        sx={{ paddingBottom: halfGap, fontWeight: `bold` }}
      >
        {resume.education.program}{' '}
      </Typography>

      {resume.education.degrees.map((degree, i) => (
        <Typography key={i} variant='subtitle1'>
          {degree.degree} in {degree.study}
        </Typography>
      ))}
    </SkillsGridItem>
  );
};

export default function Home() {
  return (
    <Container fixed>
      <Intro />

      <Divider />

      <GridRoot>
        <Skills skills={resume.skills} />

        <ExperienceGridItem gridArea='experience'>
          <Typography variant='h3'>7+ years of experience</Typography>

          {resume.experiences.map((experience, i) => (
            <Experience key={i} experience={experience} />
          ))}
        </ExperienceGridItem>

        <Footer />
      </GridRoot>
    </Container>
  );
}
