const clientId = "75512e8899a34ca7a0dce9fb97ef9eab";
const redirectUri = "http://localhost:3000/";
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      console.log(accessToken);
      return accessToken;
    }

    const newAccessToken = window.location.href.match(/access_token=([^&]*)/);
    const newExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
    if (newAccessToken && newExpiresIn) {
      accessToken = newAccessToken[1];
      const expiresIn = Number(newExpiresIn[1]);
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
      console.log(accessToken);
      return accessToken;

      // "user-read-currently-playing",
      // "user-read-recently-played",
      // "user-read-playback-state",
      // "user-top-read",
      // "user-modify-playback-state",
      // "playlist-modify-public",
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&user-top-read&show_dialog=true&redirect_uri=${redirectUri}`;
      console.log(accessToken);
      window.location = accessUrl;
    }
  },
  searchArtists(searchTerm) {
    const accessToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return fetch(
      `https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`,
      {
        headers: headers,
      }
    )
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request failed!");
        },
        (networkError) => {
          console.log(networkError.message);
        }
      )
      .then((jsonResponse) => {
        return jsonResponse;
      });
  },

  getSimilarArtists(id) {
    const accessToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return fetch(`https://api.spotify.com/v1/artists/${id}/related-artists`, {
      headers: headers,
    })
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request failed!");
        },
        (networkError) => {
          console.log(networkError.message);
        }
      )
      .then((jsonResponse) => {
        return jsonResponse;
      });
  },
  getTopSongs(id) {
    const accessToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return fetch(
      `https://api.spotify.com/v1/artists/${id}/top-tracks?market=ES`,
      {
        headers: headers,
      }
    )
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request failed!");
        },
        (networkError) => {
          console.log(networkError.message);
        }
      )
      .then((jsonResponse) => {
        // console.log(jsonResponse);
        let filteredResponse = jsonResponse.tracks.map((track) => ({
          uri: track.uri,
        }));
        return filteredResponse.slice(0, 4);
      });
  },

  getUsersTopArtists() {
    const accessToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return fetch(
      // ` https://api.spotify.com/v1/me/top/artists`,
      ` https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=30&offset=0`,

      {
        headers: headers,
      }
    )
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request failed!");
        },
        (networkError) => {
          console.log(networkError.message);
        }
      )
      .then((jsonResponse) => {
        return jsonResponse.items;
      });
  },
  getUsersTopTracks() {
    const accessToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return fetch(
      // ` https://api.spotify.com/v1/me/top/tracks`,
      ` https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=30&offset=0`,

      {
        headers: headers,
      }
    )
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request failed!");
        },
        (networkError) => {
          console.log(networkError.message);
        }
      )
      .then((jsonResponse) => {
        console.log(jsonResponse, "TOP SONGS");
        return jsonResponse.items;
      });
  },

  getMyDetails() {
    const accessToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
    return fetch("https://api.spotify.com/v1/me", { headers: headers }).then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed!");
      },
      (networkError) => {
        console.log(networkError.message);
      }
    );
  },
  savePlaylist(playlistName, trackURIs) {
    if (playlistName && trackURIs.length) {
      const accessToken = Spotify.getAccessToken();
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      let userID;
      let playlistID;
      return fetch("https://api.spotify.com/v1/me", { headers: headers })
        .then(
          (response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Request failed!");
          },
          (networkError) => {
            console.log(networkError.message);
          }
        )
        .then((jsonResponse) => {
          userID = jsonResponse.id;
          return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ name: playlistName }),
          })
            .then(
              (response) => {
                if (response.ok) {
                  return response.json();
                }
                throw new Error("Request failed!");
              },
              (networkError) => {
                console.log(networkError.message);
              }
            )
            .then((jsonResponse) => {
              playlistID = jsonResponse.id;
              return fetch(
                `https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
                {
                  method: "POST",
                  headers: headers,
                  body: JSON.stringify({ uris: trackURIs }),
                }
              )
                .then(
                  (response) => {
                    if (response.ok) {
                      return response.json();
                    }
                    throw new Error("Request failed!");
                  },
                  (networkError) => {
                    console.log(networkError.message);
                  }
                )
                .then((jsonResponse) => jsonResponse);
            });
        });
    } else {
      return;
    }
  },
};

export default Spotify;
