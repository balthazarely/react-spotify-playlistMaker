import React, { useState } from "react";
import { Loader, Header, Icon, Modal, Input } from "semantic-ui-react";

export default function MyModal({
  modalOpen,
  setModalOpen,
  getTopSongsSimilarArtists,
}) {
  const [playlistName, setPlaylistName] = useState("");
  return (
    <Modal
      open={modalOpen}
      // trigger={<Button>Show Modal</Button>}
      onClose={() => setModalOpen(false)}
      onOpen={() => setModalOpen(true)}
      className="main-modal"
      style={{
        color: "red",
        height: "400px",
        width: "450px",
        borderRadius: "20px",
      }}
    >
      <Modal.Content
        className="main-modal"
        style={{
          borderRadius: "20px",
          height: "300px",
        }}
      >
        <h2>Name your playlist</h2>
        <Input
          style={{ marginTop: "50px" }}
          fluid
          placeholder="Playlist name"
          size="medium"
          onChange={(e) => setPlaylistName(e.target.value)}
        />
      </Modal.Content>
      <Modal.Actions className="modal-btn-wrapper">
        <button
          className={"modal-btn success"}
          onClick={() => getTopSongsSimilarArtists(playlistName)}
        >
          Make Playlist
        </button>
        <button
          className={"modal-btn cancle"}
          onClick={() => setModalOpen(false)}
        >
          cancle
        </button>
      </Modal.Actions>
    </Modal>
  );
}
