import React from "react";
import { Grid, Image, Icon } from "semantic-ui-react";

export default function FavoriteArtistCard({ artist }) {
  return (
    <Grid.Column>
      <div className="favorite-wrapper">
        <Image
          className="favorite-image-wrapper"
          src={artist.images.length > 0 ? artist.images[1].url : null}
          // wrapped
        />

        <div className="artist-name-bg"></div>
        <div className="artist-name">{artist.name}</div>
        <a target="BLANK" href={artist.external_urls.spotify}>
          <Icon
            className="artist-play-icon"
            color="pink"
            size="big"
            name="play circle outline"
            onClick={() => console.log("what")}
          />
        </a>
      </div>
    </Grid.Column>
  );
}
