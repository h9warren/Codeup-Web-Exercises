<?php
require_once'../budgetyourtrip_api/accommodation.php';
require_once'../budgetyourtrip_api/categories.php';
require_once'../budgetyourtrip_api/costs.php';


$categories = new Categories('david.jex@me.com');
$objects = $categories->getCategories();

$accommodation = new Accommodation('david.jex@me.com');
$location = $accommodation->geosearch('29.4440434','-98.4677852');

$costs = new Costs('david.jex@me.com');



?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
 
<!--list of data categories -->
<!-- <?php foreach($objects as $category=>$details) : ?>
<?php echo '<p>' . $details->name . '—' . $details->description . '</p>' .PHP_EOL; ?>
<?php endforeach; ?> -->


<!--geosearch method returns 3 local hotels near coordinates-->
<!-- <?php foreach($location as $locations) :
		foreach($locations as $key=>$value) {
			echo '<p>' . $key . ': ' . $value . '</p>';
		} endforeach; ?> -->


<!--returns list of accommodations with keyword -->
<!-- <?php $search = $accommodation->search('Texas');
	foreach($search as $results) :
		foreach($results as $key=>$value) {
			echo '<p>' . $key . ': ' . $value . '</p>';
		}
	endforeach;
	?> -->
<?php var_dump($costs); ?>









</body>
</html>






<?php

// $name = 'costs/location/4167147';
// //Server url
// $url = "http://www.budgetyourtrip.com/api/v3/$name";
// $apiKey = 'david.jex@me.com'; // should match with Server key
// $headers = array(
//      'X-API-KEY: '.$apiKey
// );
// // Send request to Server
// $ch = curl_init($url);
// // To save response in a variable from server, set headers;
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
// // Get response
// $response = curl_exec($ch);
// // Decode
// $result = json_decode($response);
?>