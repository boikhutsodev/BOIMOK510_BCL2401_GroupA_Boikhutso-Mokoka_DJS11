// utils/api.js

const BASE_URL = "https://podcast-api.netlify.app";

export async function fetchPreviews() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch previews: ${response.status}`);
  }
  return response.json();
}

export async function fetchGenreById(id) {
  const response = await fetch(`${BASE_URL}/genre/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch genre ${id}: ${response.status}`);
  }
  return response.json();
}

export async function fetchShowById(id) {
  const response = await fetch(`${BASE_URL}/id/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch show ${id}: ${response.status}`);
  }
  return response.json();
}
