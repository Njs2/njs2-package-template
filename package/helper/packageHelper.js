const packageHelper = {};

packageHelper.isValidInitParameters = (validateInp) => {
  const inValidInp = Object.keys(validateInp).filter(inp => !validateInp[inp]);
  if (!inValidInp || inValidInp.length > 0) return false;
  return true;
}

module.exports = packageHelper;