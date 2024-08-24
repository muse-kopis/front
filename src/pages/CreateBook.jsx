import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CreateBookHeader from "../components/pages/createBook/CreateBookHeader";
import { CalendarIcon, CastIcon, LockIcon, MapIcon, ReviewIcon, PlusIcon } from "../assets/icons";
import { Div, Text, TextArea, Button } from "../components/common/div";
import { GRAY2, GRAY3, GRAY4, GRAY5, NAVY } from "../constants/color";
import ReactStars from "react-rating-stars-component";

const Poster = styled.img`
  width: 166px;
  height: 226px;
  border-radius: 16px;
`;

const InputItem = styled(Div)`
  display: flex;
  justify-content: start;
  border-bottom: 1px solid ${GRAY2};
  width: 100%;
  height: 43px;
  padding: 0 18px;
  &:last-child {
    border-bottom: none;
  }
`;

const Input = styled.input`
  border: none;
  flex-grow: 1;
  &::placeholder {
    color: ${GRAY3};
  }
`;

const AddPhoto = styled(Div)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: ${GRAY2};
  border: 1px solid ${GRAY4};
  border-radius: 10px;
  height: 110px;
  cursor: pointer;
`;

const CreateBook = () => {
  const fileRef = useRef(null);
  const [previewImages, setPreviewImages] = useState([]);
  const [sendData, setSendData] = useState({
    performanceId: '',
    viewDate: '',
    castMembers: '',
    content: '',
    star: 0,
    visible: false,
    photos: []
  });

  const handleAddPhoto = () => {
    fileRef.current.click();
  };

  const handleDataChange = (type, value) => {
    setSendData({ ...sendData, [type]: value });
  }

  const handleFileChange = (e) => {
    const fileArr = Array.from(e.target.files);
    setSendData({ ...sendData, photos: fileArr });

    const fileURLs = fileArr.map(file => URL.createObjectURL(file));
    setPreviewImages(fileURLs);
  }

  useEffect(() => {
    console.log(sendData);
  }, [sendData]);

  return (
    <>
      <CreateBookHeader />
      <Div $flex={true} $direction='column' $margin='26px 0 0'>
        <Div>
          <Poster 
            src="https://i.namu.wiki/i/wWf_gvAGbtYPSicZAksRKhEJpQ7Uon-VpBiZkNRxLWwCsqWhCuWVKMHQjQ3bw1_Lco2APb9nh3mJUufZUfXJFGBaqrM4xtMcXCg9Q8Bbq7-ZhMYf_9QsSa82IkH_perN5uAtHMFUzGPtsqJLvP-mzQ.webp"
            alt="poster"
          />
          <Text $size={14} $weight='BOLD' $margin='12px 0 0'>영웅</Text>
        </Div>
        <Div $width='100%' $margin='30px 0 0'>
          <InputItem>
            <Div $width='43px' $grow='0'>
              <CalendarIcon />
            </Div>
            <Input type="datetime-local" onChange={e => handleDataChange('viewDate', e.target.value)} />
          </InputItem>
          <InputItem>
            <Div $width='43px' $grow='0'>
              <MapIcon />
            </Div>
            <Input type="text" placeholder="장소를 입력해주세요" readOnly />
          </InputItem>
          <InputItem>
            <Div $width='43px' $grow='0'>
              <CastIcon />
            </Div>
            <Input type="text" onChange={e => handleDataChange('castMembers', e.target.value)} placeholder="출연자 정보를 입력해주세요" />
          </InputItem>
          <InputItem>
            <Div $width='43px' $grow='0'>
              <ReviewIcon />
            </Div>
            <Text $size={14} $color='GRAY4'>후기</Text>
          </InputItem>
        </Div>
        <Div $flex={true} $width='100%' $padding='0 30px' $direction='column'>
          <Div $justify='space-between' $flex={true} $width='100%'>
            <ReactStars
              count={5}
              onChange={rating => handleDataChange('star', rating)}
              size={22}
              isHalf={false}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor={NAVY}
              value={sendData.star}
            />
            <LockIcon isLock={sendData.visible} setSendData={setSendData} />
          </Div>
          <TextArea 
            type='text' 
            $margin='4px 0 0' 
            $padding='12px 14px' 
            placeholder='공연을 보며 느꼈던 것, 기억에 남았던 것들을 기록해보세요. 좋았던 장면, 넘버, 무대 연출, 출연진들의 합, 다양한 감상을 솔직하게 남겨 오늘을 추억하세요 :)'
            onChange={e => handleDataChange('content', e.target.value)}
          />
        </Div>
        <Div $padding='0 18px' $width='100%' $margin='40px 0 0'>
          <Div $flex={true} $gap='8px' $justify='start'>
            {previewImages.map((url, index) => (
              <img 
                key={index} 
                src={url} 
                alt={`preview-${index}`}
                style={{ borderRadius: '10px', height: '110px', width: '110px' }}
              />
            ))}
          </Div>
          {previewImages.length === 0 && (
            <AddPhoto onClick={handleAddPhoto} $backgroundColor={GRAY2} $border={`1px solid ${GRAY4}`} $radius='10px' $height='110px'>
              <Text $weight='SEMIBOLD' $color={GRAY5}>함께 기록할 사진을 추가해주세요</Text>
              <PlusIcon />
            </AddPhoto>
          )}
          <input 
            type="file" 
            ref={fileRef}
            onChange={handleFileChange}
            multiple
            accept="image/*" 
            hidden 
          />
          <Button disabled={false} $width='100%' $margin='30px 0 40px 0'>티켓북 저장하기</Button>
        </Div>
      </Div>
    </>
  )
}

export default CreateBook;