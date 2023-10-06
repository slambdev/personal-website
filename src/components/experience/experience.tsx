import { Experience as ExperienceType } from '../../types/resume';
import { Card, Chip as MuiChip, styled, Theme, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import type { SxProps } from '@mui/material/styles';
import { fourthGap, gap, halfGap, sx } from '../../sx';
import Image from 'next/image';
import { useTheme } from '@emotion/react';

import _ from 'lodash';
import { Divider } from '../divider';

interface ExperienceProps {
  experience: ExperienceType;
  sx?: SxProps<Theme>;
}

const ExperienceWrapper = styled(Box)(
    sx([
        (theme) => ({
            margin: theme.spacing(halfGap),
            display: `flex`,
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

const ExperienceHeader = styled(Box)({
    display: `flex`,
    justifyContent: `space-between`,
    width: `100%`,
});

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
                <Typography variant="h5" sx={{ paddingLeft: gap }}>{experience.team ? `${experience.company} - ${experience.team}` : `${experience.company}`}</Typography>
                <Typography variant="h5" sx={{ paddingRight: gap }}>{`${formatDate(experience.startDate)} - ${formatDate(experience.endDate)}`}</Typography>
            </ExperienceHeader>
            <ExperienceBox>
                <Typography variant="h3" sx={{ paddingBottom: halfGap }}>{experience.role}</Typography>
                <Typography sx={{ paddingBottom: halfGap }}>{experience.description}</Typography>

                <Box sx={{ display: `flex`, flexWrap: `wrap`}}>
                    {sortedTechnologies.map(tech => (
                        <Chip label={tech} />
                    ))}
                </Box>
            </ExperienceBox>

        </Box>  
        <Divider />  
    </ExperienceWrapper>
  );
};
