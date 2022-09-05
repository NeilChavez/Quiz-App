const API = "https://the-trivia-api.com";
const QUESTIONS = `${API}/api/questions`;
const DIFFICULTY = "difficulty=";
const LIMIT = "limit=";
const CATEGORIES = `?categories=`;
const listCategories = [
  "Arts and Literature",
  "Film and TV",
  "Food and Drink",
  "General Knowledge",
  "Geography",
  "History",
  "Music",
  "Science",
  "Society and Culture",
  "Sport and Leisure",
];
const listDifficulty = ["easy", "medium", "hard"];


export default {
  API,
  QUESTIONS,
  DIFFICULTY,
  LIMIT,
  CATEGORIES,
  listCategories,
  listDifficulty
};
