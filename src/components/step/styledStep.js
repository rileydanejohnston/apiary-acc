import styled from "styled-components/macro";
import topLeftImg from '../../images/up-right-arrow.svg'

export const StepWrapper = styled.div`
  width: ${({ styles }) => (styles.width)};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: ${({ styles }) => (styles.position)};
  top: ${({ styles }) => (styles.top)};
  left: ${({ styles }) => (styles.left)};
  order: ${({ order }) => (order)};

  @media( max-width: 767px) {
    width: 343px;
    position: static;
  }
`;

export const Image = styled.div`
  background: center / cover no-repeat;
  background-image: url(${({ styles }) => (styles.img)});
  width: ${({ styles }) => (styles.width)};
  height: ${({ styles }) => (styles.height)};
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  white-space: pre-line;
  margin-top: ${({ styles }) => (styles)};
`;

export const ArrowBase = styled.div`
  width: 46px;
  height: 46px;
  position: absolute;

  @media( max-width: 767px) {
    position: static;
  }
`;

export const Arrow = styled(ArrowBase)`
  background: center / cover no-repeat url(${topLeftImg});
  position: absolute;
  top: ${({ styles }) => (styles.top)};
  left: ${({ styles }) => (styles.left)};
  transform: rotate(${({ styles }) => (styles.deg)});

  /*  345 /  1240  = 27.82%  */
  /*  860 /  1240  = 69.35%  */
`;