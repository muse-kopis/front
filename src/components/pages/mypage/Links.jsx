import styled from "styled-components";
import { Link } from "react-router-dom";
import { Div, Text } from "../../common/div";
import { BLACK, GRAY5 } from "../../../constants/color";
import { GoIcon } from "../../../assets/icons";

const LinkButton = styled(Link)`
  text-decoration: none;
  color: ${BLACK};
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 26px;
`;

const Links = () => {
  return(
    <Div $flex={true} $width='100%' $direction='column' $gap='30px' $margin='50px 0 0'>
      <LinkButton to='/favorite'>
        <Text $size={12} $color={GRAY5} $weight='MEDIUM'>저장한 공연</Text>
        <GoIcon />
      </LinkButton>
      <LinkButton>
        <Text $size={12} $color={GRAY5} $weight='MEDIUM'>문의하기</Text>
        <GoIcon />
      </LinkButton>
      <LinkButton>
        <Text $size={12} $color={GRAY5} $weight='MEDIUM'>로그아웃</Text>
        <GoIcon />
      </LinkButton>
    </Div>
  )
}

export default Links;