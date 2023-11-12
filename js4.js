function spilni(word1, word2) {
    const set1 = new Set(word1);
    const set2 = new Set(word2);
  
    for (const letter of set1) {
      if (set2.has(letter)) {
        return true;
      }
    }
  
    return false;
  }
  
  const word1 = "кабачки";
  const word2 = "суперб";
  
  if (spilni(word1, word2)) {
    console.log("Слова мають спільні букви.");
  } else {
    console.log("Слова не мають спільних букв.");
  }