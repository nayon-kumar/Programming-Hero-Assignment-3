//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
  if (Array.isArray(array) === false) {
    return "Invalid";
  }
  let ha = 0;
  let na = 0;
  for (const vote of array) {
    if (vote === "ha") {
      ha++;
    } else {
      na++;
    }
  }
  if (ha > na) {
    return true;
  } else if (ha === na) {
    return "equal";
  } else {
    return false;
  }
}
