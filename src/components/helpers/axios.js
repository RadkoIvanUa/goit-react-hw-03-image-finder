import axios from 'axios';

export async function getPhoto(searchValue, page) {
  const respone = await axios.get(
    `https://pixabay.com/api/?q=${searchValue}&page=${page}&key=8893918-1ac9b13bfa29139626e319dfc&image_type=photo&orientation=horizontal&per_page=12`
  );
  return respone.data.hits;
}
