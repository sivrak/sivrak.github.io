<?php
   	
   $myFile = "data.json";
   $arr_data = array(); // create empty array
    $handleG = fopen($myFile, "w+");
    fwrite($handleG,"[]");
    fclose($handleG);

  try
  {

    $dir = "./";
    $folderName = "water";
    
    // Open a directory, and read its contents
    if (is_dir($dir)){
      if ($dh = opendir($dir)){
        while (($file = readdir($dh)) !== false){
            if($file!=".." && $file!="." && $file!="data.json" && $file!="index.php" && $file!="update.php")
            {

                ///////////////////////////
                //Get form data
	   $formdata = array(
        'small'=> 'assets/slider/'.$folderName."/".$file,
        'medium'=> 'assets/slider/'.$folderName."/".$file,
        'big'=>'assets/slider/'.$folderName."/".$file
     );

     //Get data from existing json file
     $jsondata = file_get_contents($myFile);

     // converts json data into array
     $arr_data = json_decode($jsondata, true);

     // Push user data to array
     array_push($arr_data,$formdata);

     //Convert updated array to JSON
     $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);
     $jsondata = str_replace("\/","/",$jsondata);
     //write json data into data.json file
     if(file_put_contents($myFile,$jsondata)) {
      echo ".";
      }
     else 
          echo "error";
          //////////////////////////////////////////////
            }
        }
        closedir($dh);
      }
    }
    echo "Updated";

   }
   catch (Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
   }

?>