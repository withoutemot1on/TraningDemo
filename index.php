<?php
require_once('index.html');

?>

    <!-- modal -->

    <!-- header -->
    <header>
    <a href=""><img src="images/Logo.png" alt=""> </a>
     <nav>
       <button class="Enter" id="Enter">Войти</button>
       <button class="Reg" id="Reg">Зарегистрироваться</button>
     </nav>
       <!-- Modal -->
       <dialog id="favDialog">
         <form method="dialog">
             <fieldset>
               <legend>Form</legend>
               <p>Required fields are labelled with "required".</p>
               <div>
                 <label for="fname">First name: </label>
                 <input id="fname" name="fname" type="text" required="">
                 <span></span>
               </div>
               <div>
                 <label for="lname">Last name: </label>
                 <input id="lname" name="lname" type="text" required="">
                 <span></span>
               </div>
               <div>
                 <label for="email">Email address (include if you want a response): </label>
                 <input id="email" name="email" type="email">
                 <span></span>
               </div>
               <div><button>Submit</button></div>
             </fieldset>
           </form>
       </dialog>
       
       <output aria-live="polite"></output>

 </header>
    <!-- main -->
    <main>
    
    <?php

$link = mysqli_connect("localhost","root","","grooming");
if (!$link) {
    die('Ошибка соединения:');
}


error_reporting(E_ALL);
require_once('C:\Users\user\OSPanel\domains\TraningDemo\index.php');

$query = mysqli_query($link,"SELECT * FROM `orders`");
while ($result = mysqli_fetch_assoc($query)){
    echo "<div class = 'card'>
    <img class='img' src ='\images/{$result['foto-before']}' widht=300 height=300>
    
    </div>";}
    












?>
    </main>
    <!-- footer -->
    <footer>    

    </footer>
    <script src="index.js"></script>
</body>
</html>
