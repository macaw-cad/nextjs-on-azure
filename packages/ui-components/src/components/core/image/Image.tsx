import React from "react"

export type ImageProps = {
  src: string;
  alt?: string;
  srcSet?: string;
  className?: string;
  width?: string;
  height?: string;
  loading?: 'eager' | 'lazy';
}

export const Image: React.FC<ImageProps> = (props) => {
  const loading = props.loading ? props.loading : 'lazy';
  const alt = props.alt ? props.alt : '';
  return <img {...props} alt={alt} loading={loading} />
}
