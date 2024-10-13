<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurant Bill Calculator</title>
</head>
<body>

<h1>Restaurant Meal Calculator</h1>

<form method="POST" action="">
    <label for="hamburgers">Number of Hamburgers ($3.87 each): </label>
    <input type="number" id="hamburgers" name="hamburgers" value="2" min="0" required><br><br>
    
    <label for="milkshakes">Number of Milkshakes ($2.89 each): </label>
    <input type="number" id="milkshakes" name="milkshakes" value="1" min="0" required><br><br>

    <label for="colas">Number of Colas ($0.85 each): </label>
    <input type="number" id="colas" name="colas" value="1" min="0" required><br><br>

    <input type="submit" name="submit" value="Calculate Total">
</form>

<?php
if (isset($_POST['submit'])) {

    $hamburger_price = 3.87;
    $milkshake_price = 2.89;
    $cola_price = 0.85;


    $num_hamburgers = (int) $_POST['hamburgers'];
    $num_milkshakes = (int) $_POST['milkshakes'];
    $num_colas = (int) $_POST['colas'];


    $meal_cost = ($num_hamburgers * $hamburger_price) + ($num_milkshakes * $milkshake_price) + ($num_colas * $cola_price);


    $sales_tax = 0.064 * $meal_cost; 
    $tip = 0.15 * $meal_cost;


    $total_cost = $meal_cost + $sales_tax + $tip;


    echo "<h3>Meal Cost Breakdown:</h3>";
    echo "<p>$num_hamburgers Hamburgers = $" . number_format($num_hamburgers * $hamburger_price, 2) . "</p>";
    echo "<p>$num_milkshakes Milkshake(s) = $" . number_format($num_milkshakes * $milkshake_price, 2) . "</p>";
    echo "<p>$num_colas Cola(s) = $" . number_format($num_colas * $cola_price, 2) . "</p>";
    echo "<p><strong>Total Meal Cost (Before Tax & Tip):</strong> $" . number_format($meal_cost, 2) . "</p>";
    echo "<p>Sales Tax (6.4%): $" . number_format($sales_tax, 2) . "</p>";
    echo "<p>Pre-Tax Tip (15%): $" . number_format($tip, 2) . "</p>";
    echo "<h3>Total Cost (With Tax & Tip): $" . number_format($total_cost, 2) . "</h3>";
}
?>

</body>
</html>
