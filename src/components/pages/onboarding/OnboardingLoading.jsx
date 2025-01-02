import Loading from "../../common/Loading";
import { Div, Text } from "../../common/div";
import { ErrorModal } from "../../modal/ErrorModal";

const OnboardingLoading = ({ username, isShowErrorModal, closeErrorModal, handleRetry }) => {
  return (
    <Div $flex={true} $direction='column' $justify='center'>
      <Text $size={18} $weight='SEMIBOLD' $lineHeight='1.7' $margin='100px 0 0' style={{ whiteSpace: 'pre-line' }}>
        이제, 모든 준비가 끝났어요!{'\n'}
        {username}님을 위한 추천 작품을 정리 중이에요
      </Text>
      <Loading />
      <ErrorModal 
        isOpen={isShowErrorModal} 
        closeModal={closeErrorModal}
        handleRetry={handleRetry}
      />
    </Div>
  )
};

export default OnboardingLoading;
