import { useEffect, useState, useRef } from 'react';
import { getDetailPerformanceApi } from '../api/performanceApi';
import { postTicketBookApi } from '../api/ticketBookApi';
import { useNavigate } from 'react-router';

export const useCreateBook = (id) => {
  const navigate = useNavigate();
  const fileRef = useRef(null);
  const [previewImages, setPreviewImages] = useState([]);
  const [performanceData, setPerformanceData] = useState({});
  const [sendData, setSendData] = useState({
    performanceId: '',
    viewDate: '',
    castMembers: '',
    content: '',
    star: 0,
    visible: true,
    photos: []
  });

  const fetchDetail = async (performanceId) => {
    const response = await getDetailPerformanceApi(performanceId);
    setSendData({
      ...sendData,
      performanceId: response.data.id,
    });
    setPerformanceData(response.data);
  };

  const handleFileChange = (e) => {
    const fileArr = Array.from(e.target.files);
    setSendData({ ...sendData, photos: fileArr });

    const fileURLs = fileArr.map(file => URL.createObjectURL(file));
    setPreviewImages(fileURLs);
  }

  const handleAddPhoto = () => {
    fileRef.current.click();
  };

  const handleDataChange = (type, value) => {
    setSendData({ ...sendData, [type]: value });
  };

  const handleCreate = async () => {
    const formData = new FormData();
    sendData.photos.forEach(photo => {
      formData.append('photos', photo);
    });
    formData.append('performanceId', sendData.performanceId);
    formData.append('viewDate', sendData.viewDate);
    formData.append('castMembers', sendData.castMembers);
    formData.append('content', sendData.content);
    formData.append('star', sendData.star);
    formData.append('visible', sendData.visible);
    try {
      const response = await postTicketBookApi(formData);
      if (response.status === 200 || response.status === 201) {
        navigate('/ticket');
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchDetail(id);
    // eslint-disable-next-line
  }, [id]);

  return {
    fileRef,
    sendData,
    previewImages,
    performanceData,
    handleCreate,
    setSendData,
    handleFileChange,
    handleAddPhoto,
    handleDataChange,
  }
}