import logo from '../../images/indeed.svg';
import { SectionTitle } from '../sharedComponents/sharedComponents';
import { Link, LinkImg, Partner, PartnerRow, PartnerRow1, PartnerRow2, TeamBlock, TeamBlocks, TeamImage, TeamText, TeamWrapper } from './styledTeam';
import { TeamData } from '../../constants/teamConst';

const {
    teamTitle,
    members,
    partnersTitle,
    partners1,
    partners2
} = TeamData;

const Team = () => {

    return (
        <TeamWrapper>
            <SectionTitle>{teamTitle}</SectionTitle>
            <TeamBlocks>
                {members.map((member) => {
                    return (
                        <TeamBlock>
                            <TeamImage src={member.image} />
                            <TeamText>{member.name}</TeamText>
                            <TeamText>{member.role}</TeamText>
                            <Link
                                href={member.link}
                                target='_blank'>
                                <LinkImg src={logo} />
                            </Link>
                        </TeamBlock>
                    )
                })}
            </TeamBlocks>
            <SectionTitle>{partnersTitle}</SectionTitle>
            <PartnerRow1>
                {partners1.map((part) => {
                    return (
                        <Partner src={part} />
                    )
                })}
            </PartnerRow1>
            <PartnerRow2>
                {partners2.map((part) => {
                    return (
                        <Partner src={part} />
                    )
                })}
            </PartnerRow2>
        </TeamWrapper>
    )
}

export default Team;