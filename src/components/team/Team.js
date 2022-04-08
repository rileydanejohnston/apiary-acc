import { Link, Partner, PartnerLink, PartnerRow1, PartnerRow2, PartnerWrapper, TeamBlock, TeamBlocks, TeamImage, TeamText, TeamTitle, TeamWrapper } from './styledTeam';
import { TeamData } from '../../constants/teamConst';
import { initial, whileInView, viewport, transition } from '../../constants/animateRevealConst';
import uniqueId from 'lodash.uniqueid';

const {
    teamTitle,
    members,
    partnersTitle,
    partners1,
    partners2
} = TeamData;

const Team = () => {

    return (
        <TeamWrapper
            id='team'
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            transition={transition}
        >
            <TeamTitle>{teamTitle}</TeamTitle>
            <TeamBlocks>
                {members.map((member) => {
                    return (
                        <TeamBlock
                            key={uniqueId()}>
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
            <PartnerWrapper
                initial={initial}
                whileInView={whileInView}
                viewport={viewport}
                transition={transition}
            >
                <TeamTitle>{partnersTitle}</TeamTitle>
                <PartnerRow1>
                    {partners1.map((part) => {
                        return (
                            <PartnerLink
                                key={uniqueId()}
                                href={part.link} target='_blank'>
                                <Partner src={part.image} />
                            </PartnerLink>
                        )
                    })}
                </PartnerRow1>
                <PartnerRow2>
                    {partners2.map((part) => {
                        return (
                            <PartnerLink
                                key={uniqueId()}
                                href={part.link} target='_blank'>
                                <Partner src={part.image} />
                            </PartnerLink>
                        )
                    })}
                </PartnerRow2>
            </PartnerWrapper>
        </TeamWrapper>
    )
}

export default Team;