

<html>
   <body>
      
      <form action="" method="POST" enctype="multipart/form-data">
         <input type="file" name="image" />
         <input type="submit"/>
      </form>
      
   </body>
</html>

<?php
   if(isset($_FILES['image'])){
      $errors= array();
      $file_name = $_FILES['image']['name'];
      $file_size =$_FILES['image']['size'];
      $file_tmp =$_FILES['image']['tmp_name'];
      $file_type=$_FILES['image']['type'];
      $file_inter_end = explode('.',$_FILES['image']['name']);
      $file_ext=strtolower(end($file_inter_end));
      
      $extensions= array("jpeg","jpg","png");
      
      if(in_array($file_ext,$extensions)=== false){
         $errors[]="extension not allowed, please choose a JPEG or PNG file.";
      }
      
      if($file_size > 2097152){
         $errors[]='File size must be excately 2 MB';
      }
      
      if(empty($errors)==true){
         move_uploaded_file($file_tmp,"./".$file_name);
         echo "Success, File is ".$file_name;
         echo '<form action="update.php" method="POST" enctype="multipart/form-data">
         <input type="text" name="update" value="update" hidden/>
         <input type="submit" value="Update"/>
         </form>';
      }else{
         print_r($errors);
      }
   }else if(isset($_POST['update'])){
       echo "updated";
   }
?>