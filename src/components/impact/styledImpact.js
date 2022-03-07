import styled from "styled-components";

export const ImpactWrapper = styled.section`
    background: #F4F4F4;
    padding: 120px 0;
    display: flex;
    flex-direction: column;
`
export const BoxWrapper = styled.div`
    display: flex;
    width: 94.44%;
    justify-content: space-between;
    margin: 60px auto 120px auto;
`
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 48.53%;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
`
export const BoxTitle = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    margin-top: 40px;
`
export const BoxText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin: 0 6.4%;

    &:last-of-type {
        margin-bottom: 60px;
    }
`
export const BoxDiamond = styled.img`
    width: 10px;
    height: 10px;
    margin: 20px 0;
`
export const Grid = styled.div`
    width: 83.33%;
    display: grid;
    margin: 60px auto 0 auto;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(8, 1fr);
    border-radius: 20px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`
export const GridCell = styled.div`
    border-right: ${props => props.right ? 'none' : '1px solid gray'};
    border-bottom: ${props => props.bottom ? 'none' : '1px solid gray'};
    max-width: 200px;
    height: ${props => props.top ? '80px' : '82px'};
    display: flex;
    padding: ${props => props.top ? null : '20px'};
    align-items: center;
    justify-content: center;
`
export const GridText = styled.p`
    font-size: 18px;
    line-height: 21px;
    text-align: ${props => props.top ? 'center' : null};
    color: ${props => props.orange ? '#FF9820' : 'inherit'}
`
export const GridPic = styled.img`
`
// export const Table = styled.table`
//     width: 83.33%;
//     margin: 60px auto 0 auto;
//     box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
//     border-radius: 20px;
// `
// export const Row = styled.tr`
// `
// export const TableHead = styled.th`
//     width: 16.82%;
//     height: 80px;
//     border-bottom: 1px solid gray;
//     border-right: 1px solid gray;

//     &:last-of-type {
//         border-right: none;
//     }
// `
// export const TableData = styled.td`
//     width: 16.82%;
//     max-height: 82px;
//     border-right: 1px solid gray;
//     border-bottom: ${props => props.border ? 'none' : '1px solid gray'};
//     text-align: ${props => props.left ? null : 'center'};

//     &:last-of-type {
//         border-right: none;
//     }
// `
// export const TableText = styled.p`
//     margin: ${props => props.left ? '18.5px' : null};
//     font-weight: normal;
//     font-size: 18px;
//     line-height: 21px;
//     color: ${props => props.orange ? '#FF9820' : 'inherit'}
// `
// export const TablePic = styled.img`
// `