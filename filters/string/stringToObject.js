geodash.filters["stringToObject"] = function()
{
  return function(x, properties)
  {
    var y = {};
    if(Array.isArray(properties))
    {
      for(var i = 0; i < properties.length; i++)
      {
        y[properties[i]] = x;
      }
    }
    return y;
  };
};
