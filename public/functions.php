<?php

function inputHas($key)
{
  return isset($_REQUEST[$key]);
}
function inputGet($key)
{
  $input = (inputHas($key)) ? $_REQUEST[$key] : null;

  return $input;
}
function escape($input)
{
  $escapeString = htmlspecialchars(strip_tags($input));
  return $escapeString;
}

?>
