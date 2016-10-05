geodash.filters["ellipsis"] = function()
{
  return function(styleMap) {
    styleMap = styleMap || {};
    angular.extend(styleMap, geodash.ui.css.ellipsis());
    return styleMap;
  };
};
