import { useOnboarding } from "../hooks/OnboardingHooks";
import OnboardingHeader from "../components/pages/onboarding/OnboardingHeader"
import { Div } from "../components/common/div";
import Onboarding1 from "../components/pages/onboarding/Onboarding1";
import Onboarding2 from "../components/pages/onboarding/Onboarding2";
import Onboarding3 from "../components/pages/onboarding/Onbaording3";
import OnboardingLoading from "../components/pages/onboarding/OnboardingLoading";
import OnboardingEnd from "../components/pages/onboarding/OnboardingEnd";

const Onboarding = () => {
  const { 
    datas,
    selectedDatas,
    rankType,
    username,
    step,
    carouselSettings,
    handleGoMain,
    setStep,
    setRankType,
    setUsername,
    selectPerformance
  } = useOnboarding();

  console.log(step)

  return (
    <>
      {step < 5 && <OnboardingHeader setStep={setStep} step={step} /> }
      <Div $margin='50px 0 0' $padding='0 18px'>
        {step === 1 ? (
          <Onboarding1
            username={username}
            setUsername={setUsername}
            setStep={setStep}
          />
        ) : step === 2 ? (
          <Onboarding2
            rankType={rankType}
            setRankType={setRankType}
            username={username}
            setStep={setStep}
          />
        ) : step === 3 || step === 4 ? (
          <Onboarding3
            step={step}
            datas={datas}
            selectedDatas={selectedDatas}
            selectPerformance={selectPerformance}
            username={username}
            setStep={setStep}
          />
        ) : step === 5 ?(
          <OnboardingLoading
            username={username}
          />
        ) : 
          <OnboardingEnd
            goMain={handleGoMain}
            settings={carouselSettings}
          />
        }
      </Div>
    </>
  )
}

export default Onboarding;