geodash.filters["formatInteger"] = function()
{
  return function(value, type, delimiter)
  {
    return geodash.codec.formatInteger(value, type, delimiter);
  };
};
