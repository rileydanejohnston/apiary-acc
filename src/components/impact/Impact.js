import { SectionTitle } from "../sharedComponents/sharedComponents"
import { Box, BoxDiamond, BoxText, BoxTitle, BoxWrapper, ImpactWrapper, Row, Table, TableData, TableHead, TablePic, TableText } from "./styledImpact"
import { ImpactData } from "../../constants/impact";
const {
    diamond,
    boxes,
    table
} = ImpactData;
const {
    headers,
    rows
} = table;

const Impact = () => {

    return (
        <ImpactWrapper>
            <SectionTitle>Impact</SectionTitle>
            <BoxWrapper>
                {boxes.map(({ id, title, text }) => {
                    return (
                        <Box key={id}>
                            <BoxTitle>{title}</BoxTitle>
                            <BoxDiamond src={diamond} />
                            <BoxText>{text.line1}</BoxText>
                            <BoxDiamond src={diamond} />
                            <BoxText>{text.line2}</BoxText>
                            <BoxDiamond src={diamond} />
                            <BoxText>{text.line3}</BoxText>
                        </Box>
                    )
                })
                }
            </BoxWrapper>
            <SectionTitle>The Competition is no match</SectionTitle>
            <Table>
                <Row>
                    <TableHead>
                        <TablePic src={headers[0].content} />
                    </TableHead>
                    {headers.slice(1, headers.length).map(({ content, color }) => {
                        return (
                            <TableHead>
                                <TableText orange={color}>{content}</TableText>
                            </TableHead>
                        )
                    })}
                </Row>
                {rows.map((row) => {
                    return (
                        <Row>
                            <TableData
                                border={row[0].border}
                                left={row[0].left}>
                                <TableText left={row[0].left}>
                                    {row[0].content}
                                </TableText>
                            </TableData>
                            {row.slice(1, row.length).map(({ content, border }) => {
                                return (
                                    <TableData border={border}>
                                        <TablePic src={content} />
                                    </TableData>
                                )
                            })}
                        </Row>
                    )
                })}
            </Table>
        </ImpactWrapper>
    )
}

export default Impact;