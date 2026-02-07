//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
  if (typeof str !== "string" || str === "") {
    return "Invalid";
  }
  const words = str.split(" ");
  let long = "";
  let tok = 0;
  for (const word of words) {
    if (word.length > long.length) {
      long = word;
    }
    tok = tok + word.length;
  }
  return {
    longwords: long,
    token: tok,
  };
}
