import React, { ImgHTMLAttributes } from 'react';

import imgLogo from '../../assets/logofull-eprogress-black.png';
import { Container } from './styles';

type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

const ImgLogo: React.FC<ImageProps> = ({ ...rest }) => {
  return (
    <Container>
      <img src={imgLogo} alt="eProgress" {...rest} />
    </Container>
  );
};

export default ImgLogo;
