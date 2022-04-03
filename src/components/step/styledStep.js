import styled from "styled-components/macro";

export const StepWrapper = styled.div`
  width: ${({ styles }) => (styles.width)};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: ${({ styles }) => (styles.position)};
  top: ${({ styles }) => (styles.top)};
  left: ${({ styles }) => (styles.left)};
  order: ${({ order }) => (order)};

  @media( max-width: 1023px) {
    width: 343px;
    position: static;
    order: 0;
  }
  @media( max-width: 374px) {
    width: 100%;
  }
`;

export const Image = styled.div`
  background: center / cover no-repeat url(${({ styles }) => (styles.img)});
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

  @media( max-width: 1023px) {
    margin-top: 30px;
  }
`;

export const Arrow = styled.div`
  position: absolute;
  background: center / cover no-repeat url(${({ styles }) => (styles.img.desktop)});
  width: ${({ styles }) => (styles.size.desktop.width)};
  height: ${({ styles }) => (styles.size.desktop.height)};
  top: ${({ styles }) => (styles.top)};
  left: ${({ styles }) => (styles.left.desktop)};
  transform: rotate(${({ styles }) => (styles.deg)});

  @media( max-width: 1280px) {
    left: ${({ styles }) => (styles.left.laptop)};
  }

  @media( max-width: 1023px) {
    position: static;
    background-image: url(${({ styles }) => (styles.img.mobile)});
    width: ${({ styles }) => (styles.size.mobile.width)};
    height: ${({ styles }) => (styles.size.mobile.height)};
    transform: rotate(0deg);
    margin: 40px 0;

    &:last-of-type {
      margin: 47px 0 30.5px 0;
    }
  }
`;