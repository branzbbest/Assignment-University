module.exports = function NumberTypeParamValidator(id) {
  if (Number.isNaN(parseInt(id)))
    return {
      error: `params: ${id} is not supported, please use number type param instead`,
    };

  return {};
};
