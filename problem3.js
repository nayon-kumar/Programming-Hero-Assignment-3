//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
  if (omr.right + omr.wrong + omr.skip !== 100) {
    return "Invalid";
  }
  return Math.round(omr.right - omr.wrong * 0.5);
}
