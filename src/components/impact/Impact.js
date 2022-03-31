import { SectionTitle } from "../sharedComponents/sharedComponents"
import { Box, BoxDiamond, BoxText, BoxTitle, BoxWrapper, Grid, GridCell, GridPic, GridText, ImpactWrapper, Row, SmallGrid, Table, TableData, TableHead, TablePic, TableText } from "./styledImpact"
import { ImpactData } from "../../constants/impactConst";
import uniqueId from 'lodash.uniqueid'

const {
    diamond,
    boxes,
    table,
    smallTable
} = ImpactData;

const Impact = () => {

    return (
        <ImpactWrapper id='impact'>
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
            <SectionTitle>The competition is no match</SectionTitle>
            <Grid>
                {table.map((cell) => {
                    if (cell.hasOwnProperty('pic')) {
                        return (
                            <GridCell
                                key={uniqueId()}
                                right={cell.right}
                                bottom={cell.bottom}
                                top={cell.top}>
                                <GridPic src={cell.pic} />
                            </GridCell>
                        )
                    }
                    else if (cell.hasOwnProperty('content')) {
                        return (
                            <GridCell
                                key={uniqueId()}
                                right={cell.right}
                                bottom={cell.bottom}
                                top={cell.top}>
                                <GridText
                                    top={cell.top}
                                    orange={cell.color}>
                                    {cell.content}</GridText>
                            </GridCell>
                        )
                    }
                })}
            </Grid>
            <SmallGrid>
                {smallTable.map((cell) => {
                    if (cell.hasOwnProperty('pic')) {
                        return (
                            <GridCell
                                key={uniqueId()}
                                right={cell.right}
                                bottom={cell.bottom}
                                top={cell.top}>
                                <GridPic src={cell.pic} />
                            </GridCell>
                        )
                    }
                    else if (cell.hasOwnProperty('content')) {
                        return (
                            <GridCell
                                key={uniqueId()}
                                right={cell.right}
                                bottom={cell.bottom}
                                top={cell.top}>
                                <GridText
                                    top={cell.top}
                                    orange={cell.color}>
                                    {cell.content}</GridText>
                            </GridCell>
                        )
                    }
                })}
            </SmallGrid>
        </ImpactWrapper>
    )
}

export default Impact;

// In case we decide to go back to a table at some point
// although that is unlikely

{/* <Table>
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
                        <Row id={rows.indexOf(row)}>
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
            </Table> */}