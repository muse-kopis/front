import styled from "styled-components";
import { GRAY3, NAVY, BLACK } from "../../../constants/color";
import { Div, Text } from "../../common/div";

const TabText = styled(Text)`
  line-height: 40px;
  color: ${GRAY3};
  cursor: pointer;
  ${props => props.$active && `
    border-bottom: 2px solid ${NAVY};
    color: ${BLACK};
  `}
`;

const DetailTab = ({ type, setTab }) => {
  return (
    <Div $flex={true} $width='100%' $justify='space-around' $height='40px' style={{ borderBottom: `1px solid ${GRAY3}`}}>
      <TabText $size={12} $weight='SEMIBOLD' $active={type === 'info'} onClick={() => setTab('info')}>
        작품 정보
      </TabText>
      <TabText $size={12} $weight='SEMIBOLD' $active={type === 'review'} onClick={() => setTab('review')}>
        후기
      </TabText>
    </Div>
  )
}

export default DetailTab;