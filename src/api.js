import axios from 'axios';

const {
  REACT_APP_REMOTE_SERVER,
  REACT_APP_REMOTE_SERVER_PORT
} = process.env;

export default function getAPI(gameName) {
  return axios.create({
    baseURL: `${REACT_APP_REMOTE_SERVER}:${Number(REACT_APP_REMOTE_SERVER_PORT)}/games/${gameName}/`

    // baseURL: `https://king-vs-poo-server.herokuapp.com:46741/games/${gameName}/`
  });
}