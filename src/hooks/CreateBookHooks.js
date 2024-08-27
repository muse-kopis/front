import { useEffect, useState, useRef } from 'react';
import { getDetailPerformanceApi } from '../api/performanceApi';
import { postTicketBookApi, updateTicketBookApi } from '../api/ticketBookApi';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { format, parse } from 'date-fns';

export const useCreateBook = (id) => {
  const navigate = useNavigate();
  const location = useLocation();
  const editData = location.state?.data;
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
  const [editId, setEditId] = useState(null);
  const buttonDisabled = sendData.viewDate === '' || sendData.castMembers === '' || sendData.content === '' || sendData.star === 0;
  const existEditImages = editData?.photos.length > 0;

  const fetchDetail = async (performanceId) => {
    const response = await getDetailPerformanceApi(performanceId);
    setSendData((prev) => ({
      ...prev,
      performanceId: response.data.id,
    }));
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

  const handleEdit = async () => {
    const formData = new FormData();
    if (sendData.photos.length === 0) {
      formData.append('photos', null);
    }
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
      const response = await updateTicketBookApi(editId, formData);
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
  }, []);

  useEffect(() => {
    if (editData) {
      setEditId(editData.id);

      const parsedDate = parse(editData.viewDate, 'yyyy-MM-dd a hh:mm', new Date());
      const formattedDate = format(parsedDate, "yyyy-MM-dd'T'HH:mm");

      setSendData({
        performanceId: editData.performanceId,
        viewDate: formattedDate,
        castMembers: editData.reviewResponse.castMembers,
        content: editData.reviewResponse.content,
        star: editData.reviewResponse.star,
        visible: editData.reviewResponse.visible,
        photos: editData.photos,
      });
    } else {
      setEditId(null);
    }
  }, [editData]);

  return {
    existEditImages,
    buttonDisabled,
    editData,
    editId,
    fileRef,
    sendData,
    previewImages,
    performanceData,
    handleEdit,
    handleCreate,
    setSendData,
    handleFileChange,
    handleAddPhoto,
    handleDataChange,
  }
}