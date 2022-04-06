import { SectionTitle } from '../sharedComponents/sharedComponents';
import { Link, Partner, PartnerLink, PartnerRow1, PartnerRow2, TeamBlock, TeamBlocks, TeamImage, TeamText, TeamTitle, TeamWrapper } from './styledTeam';
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
        <TeamWrapper id='team'>
            <TeamTitle>{teamTitle}</TeamTitle>
            <TeamBlocks>
                {members.map((member) => {
                    return (
                        <TeamBlock
                            key={members.indexOf(member)}>
                            <TeamImage src={member.image} />
                            <TeamText>{member.name}</TeamText>
                            <TeamText>{member.role}</TeamText>
                            <Link
                                href={member.link}
                                target='_blank' />
                        </TeamBlock>
                    )
                })}
            </TeamBlocks>
            <TeamTitle>{partnersTitle}</TeamTitle>
            <PartnerRow1>
                {partners1.map((part) => {
                    return (
                        <PartnerLink href={part.link} target='_blank'>
                            <Partner src={part.image} />
                        </PartnerLink>
                    )
                })}
            </PartnerRow1>
            <PartnerRow2>
                {partners2.map((part) => {
                    return (
                        <PartnerLink href={part.link} target='_blank'>
                            <Partner src={part.image} />
                        </PartnerLink>
                    )
                })}
            </PartnerRow2>
        </TeamWrapper>
    )
}

export default Team;