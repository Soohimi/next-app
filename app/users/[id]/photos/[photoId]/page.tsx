import React from "react";

interface Props {
  params: { photoId: number; id: number };
}

const photos = ({ params: { photoId, id } }: Props) => {
  return (
    <div>
      photoPage {id} {photoId}
    </div>
  );
};

export default photos;
