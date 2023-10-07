import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Card, Chip as MuiChip, ListItem, styled, Theme, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import type { SxProps } from '@mui/material/styles';
import _ from 'lodash';
import Image from 'next/image';

import { breakpointDown, FlexBox, fourthGap, gap, halfGap, sx } from '../../sx';
import { Experience as ExperienceType } from '../../types/resume';
import { Divider } from '../divider';
import { Link } from '../link';

interface ExperienceProps {
  experience: ExperienceType;
  sx?: SxProps<Theme>;
}

const ExperienceWrapper = styled(FlexBox)(
    sx([
        (theme) => ({
            margin: theme.spacing(halfGap),
        }),
      ]),
    );

const ExperienceBox = styled(Card)(
    sx([
        (theme) => ({
            paddingX: theme.spacing(gap),
            borderRadius: `4px`,
            backgroundColor: theme.palette.background.default,
        }),
      ]),
    );

const ExperienceHeader = styled(FlexBox)(sx([
    {
        justifyContent: `space-between`,
        width: `100%`,
    },
    breakpointDown(`sm`, {
        flexDirection: `column`,
    }),
]));

const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const formatDate = (date: Date) => {
    return `${month[date.getMonth()]} ${date.getFullYear()}`;
}

const Chip = styled(MuiChip)(sx([
    (theme) => ({
        marginX: theme.spacing(fourthGap),
        marginY: theme.spacing(fourthGap / 2),
    }),
  ]),
);

const CompanyLogo = styled(Image)(sx([
    (theme) => ({
        backgroundColor: theme.palette.common.black,
        borderRadius: halfGap,
    }),
  ]));

export const Experience = ({
  experience,
  sx: sxProps,
}: ExperienceProps) => {
  const sortedTechnologies: string[] = _.orderBy(experience.technologies, [(tech: string) => tech.toLowerCase()], ['asc']);

  return (
    <ExperienceWrapper sx={sxProps}>
        <CompanyLogo 
            src={`${experience.logoPath}`}
            width={48}
            height={48}
            alt={`${experience.company} logo`}
        />
        <Box sx={{ width: `100%`}}>
            <ExperienceHeader>
                <FlexBox sx={{ alignItems: `center` }}>
                    <Typography variant="h5" sx={{ paddingLeft: gap, paddingRight: fourthGap }}>{experience.team ? `${experience.company} - ${experience.team}` : `${experience.company}`}</Typography>
                    { experience.link && 
                      <Link
                      href={experience.link}
                      aria-label={experience.link}
                      target="_blank"
                      passHref
                      sx={{ display: `flex`}}
                    >
                        <OpenInNewIcon fontSize='small' />
                    </Link>}
                </FlexBox>
                <Typography variant="h5" sx={{ paddingX: gap }}>{`${formatDate(experience.startDate)} - ${formatDate(experience.endDate)}`}</Typography>
            </ExperienceHeader>
            <ExperienceBox>
                <Typography variant="h3" sx={{ paddingBottom: halfGap }}>{experience.role}</Typography>
                <Typography>{experience.description}</Typography>

                <List sx={{ listStyle: `circle` }}>
                    {experience.callouts.map((callout, i) => (
                        <ListItem key={i} sx={{ paddingY: 0, display: `list-item`, paddingLeft: 0, marginLeft: gap }}>
                            <Typography variant='subtitle1'>{callout}</Typography>
                        </ListItem>
                    ))}
                </List>

                <FlexBox sx={{ flexWrap: `wrap`}}>
                    {sortedTechnologies.map((tech, i) => (
                        <Chip key={i} label={tech} sx={{ marginRight: fourthGap, marginBottom: fourthGap }} />
                    ))}
                </FlexBox>
            </ExperienceBox>

        </Box>  
        <Divider />  
    </ExperienceWrapper>
  );
};
