<?php

function inputHas($key)
{
  return isset($_REQUEST[$key]);
}
function inputGet($key)
{
  $key = (inputHas($key)) ? $_REQUEST[$key] : null;

  return $key;
}
function escape($key)
{
  $escapeString = htmlspecialchars(strip_tags($key));
  return $escapeString;
}

?>
