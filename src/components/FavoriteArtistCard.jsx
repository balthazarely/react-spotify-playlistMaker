import React from "react";
import { Grid, Image, Icon } from "semantic-ui-react";

export default function FavoriteArtistCard({ artist, getSimilarArtists }) {
  return (
    <Grid.Column>
      <div className="favorite-wrapper">
        {/* <a target="BLANK" href={artist.external_urls.spotify}> */}
        <Image
          className="favorite-image-wrapper"
          src={artist.images.length > 0 ? artist.images[1].url : null}
          // wrapped
        />
        {/* </a> */}
        <div className="artist-name-bg"></div>

        <div className="artist-name">{artist.name}</div>
        <Icon
          className="artist-play-icon"
          size="large"
          name="play circle outline"
          onClick={() => getSimilarArtists(artist.id)}
        />
      </div>
    </Grid.Column>
  );
}
