geodash.filters["css"] = function()
{
  return function(styleMap) { return geodash.codec.formatCSS(styleMap); };
};
