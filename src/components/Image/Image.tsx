import Img from 'react-optimized-image';

interface IImageProps {
    src: any
    className: string
}

export default function Image({ src, className }: IImageProps) {
  return (
    <Img src={src} className={className}  />
  )
}
