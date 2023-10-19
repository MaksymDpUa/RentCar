import styled from "@emotion/styled";

export const ImageThumb = styled.div`
  width: 200px;
  height: 100px;
  background-image: url(${(props) => {
      return props.img;
  }});
`;
