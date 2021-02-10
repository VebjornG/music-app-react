import React from "react";
import { SongRowContainer, 
         Image, 
         SongRow_Info, 
         H1, 
         Text } from "./songrow-styles"

function SongRow({ track, playSong }) {
  console.log(track);

  return (
    <SongRowContainer onClick={() => playSong(track.id)}>
      <Image src={track.album.images[0].url} alt="" />
      <SongRow_Info>
        <H1>{track.name}</H1>
        <Text>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </Text>
      </SongRow_Info>
    </SongRowContainer>
  );
}

export default SongRow;