import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/',
});

// const BASE_IMAGE_URL = 'https://ftp.goit.study/img/campers-test-task/';
// const IMAGE_SIZE = '?width=292&height=320';

// export function getImageUrl(path) {
//   const defaultImg = '../img/default-image.jpg';
//   return path ? `${BASE_IMAGE_URL}${IMAGE_SIZE}${path}` : defaultImg;
// }
