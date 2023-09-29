import styled from 'styled-components';
import { Fragment, useEffect, useState } from 'react';
function Content() {
  const [image, setImage] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  
  useEffect(() => {
    setImage(fileUrl);
    return () => {
      URL.revokeObjectURL(image);
    }
  }, [image, fileUrl]);
  
  const handleFileInput = (e) => {
    let url = e.target.files[0];
    setFileUrl(URL.createObjectURL(url));
  }

  return (
    <Container>
      <Title>Avatar Preview App</Title>
      <StyledInput type="file" onChange={handleFileInput}></StyledInput>
      {image && <PreviewImage src={image} />}
    </Container>
  );
}

export default Content;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 12px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const StyledInput = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const PreviewImage = styled.img`

  width: 400px;
  height: 400px;
  border-radius: 50%;
`;
