#!/bin/bash
CONTENTS=$(cat)
cat << _EOF_
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <title>.NET/FRINGE/ - An atypical conference for open-source .NET developers.</title>
    <meta name="description" content=".NET/FRINGE/ - An atypical conference for open-source .NET developers. June 4 - 6, 2017, Portland, OR">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@dotnetfringe">
    <meta name="twitter:creator" content="@dotnetfringe">
    <meta name="twitter:title" content=".NET/FRINGE/ - An atypical conference for open-source .NET developers.">
    <meta name="twitter:description" content=".NET/FRINGE/ - An atypical conference for open-source .NET developers. June 4 - 6, 2017, Portland, OR">
    <meta name="twitter:image" content="">
    <!-- css: reset / layout -->
    <link rel="stylesheet" href="http://cdn.rawgit.com/necolas/normalize.css/master/normalize.css">
    <link rel="stylesheet" href="http://cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css">
    <!-- css: fonts -->
    <link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,500,700,900' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Righteous:100,300,400,500,700,900' rel='stylesheet' type='text/css'>
    <!-- css: fringe theme -->
    <link rel="stylesheet" href="../css/dotnetfringe.css" />
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="column">
          <h2 class="logo"><a href="../index.html">.netfr!nge</a></h2>
        </div>
      </div>
    </div>
    <div class="container fullwidth content-container">
      <div class="container">
        <div class="row">
          <div class="column column-80 column-offset-10">
            <style>
              .content-container .column {
                text-align: left;
              }
              .content-container a {
                font-weight: bold;
              }
              .content-container li p {
                display: inline;
              }
            </style>
            $CONTENTS
          </div>
        </div>
      </div>
    </div>
    <div class="container fullwidth footer-container">
      <div class="container">
        <div class="row">
          <div class="column">
            &copy; .NET Fringe 2017 - <a href="code-of-conduct.html"><span>Code Of Conduct</span></a> - <a href="index.html">Docs</a>
          </div>
          <div class="column">
            Videos: <a href="https://www.youtube.com/playlist?list=PLwZVRWVJepJvam4NiKwKfR9P1aInAHev_">2016</a> <a href="https://www.youtube.com/playlist?list=PLwZVRWVJepJsJ79H3GfoPC7TxsvExdIB1">2015</a>
          </div>
          <div class="column">
            Follow Us: <a href="https://twitter.com/dotnetfringe">@dotnetfringe</a>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
_EOF_
