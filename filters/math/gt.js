geodash.filters["gt"] = function()
{
  return function(value, arg)
  {
    if(angular.isNumber(value) && angular.isNumber(arg))
    {
      return value > arg;
    }
    else
    {
      return false;
    }
  };
};
