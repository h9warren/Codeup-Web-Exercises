<?php



function randomThing() {
  $things = ['barbecue','flux capacitor', 'flutes', 'vanilla', 'pepperoni', 'phone charger', 'benjamins','grapefruit', 'headphones', 'sleeping', 'ice', 'precious stones'];

  $rand = mt_rand(1, count($things));
  $favThing = $things[($rand -1)];
  $favoriteThing = [
    'favThing' => $favThing,
    'things' => $things
  ];
  return $favoriteThing;
}
  extract(randomThing());
 ?>

 <!DOCTYPE html>
 <html>
   <head>
     <meta charset="utf-8">
     <title></title>
     <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
     <style media="screen">
       tr {
         background-color: #eee;
         height:60px
       }
       table {
         width:100%;
         text-align: center;
         font-size: 30px;
       }
     </style>
   </head>
   <body>
     <h1 style="text-align:center">My Favorite Things</h1>
     
     <table class="table-striped">
       <?php foreach($things as $thing): ?>
        <tr><td>
        <?php echo $thing; ?>
      </td></tr>
    <?php endforeach; ?>

     </table>

   </body>
 </html>
