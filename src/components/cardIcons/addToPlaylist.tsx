import React, { MouseEvent, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { MoviesContext } from "../../contexts/moviesContext";
import {BaseMovieProps} from "../../types/interfaces";

const AddToPlaylistIcon: React.FC<BaseMovieProps> = (movie) => {
  // const context = useContext(MoviesContext);

  // const onUserRequest = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   context.removeFromFavourites(movie);
  // };

return (
  <IconButton
    aria-label="Add to Playlist"
    // onClick={onUserRequest}
  >
    <PlaylistAddIcon color="primary" fontSize="large" />
  </IconButton>
);
};

export default AddToPlaylistIcon;