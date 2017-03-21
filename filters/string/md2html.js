geodash.filters.md2html = function()
{
  return function(text, markdown)
  {
    if(geodash.util.isDefined(markdown) && (markdown == false || markdown == 0))
    {
      return text;
    }
    else
    {
      return geodash.codec.md2html(text);
    }
  };
};
