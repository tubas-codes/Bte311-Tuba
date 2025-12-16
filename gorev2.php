<?php
$rows = isset($_POST['rows']) ? (int)$_POST['rows'] : null;
$cols = isset($_POST['cols']) ? (int)$_POST['cols'] : null;
?>

<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>Görev 2 - Rastgele Tablo</title>
</head>
<body>

<h2>Satır ve Sütun Sayısı Girin</h2>

<form method="post" action="">
    Satır Sayısı: <input type="number" name="rows" required><br><br>
    Sütun Sayısı: <input type="number" name="cols" required><br><br>
    <button type="submit">Tabloyu Oluştur</button>
</form>

<hr>

<?php
if ($rows !== null && $cols !== null) {

    echo "<h3>Oluşturulan Tablo: {$rows} x {$cols}</h3>";
    echo "<table border='1' cellpadding='10' cellspacing='0'>";

    for ($i = 1; $i <= $rows; $i++) {
        echo "<tr>";
        for ($j = 1; $j <= $cols; $j++) {
            $num = rand(1, 100);
            echo "<td>$num</td>";
        }
        echo "</tr>";
    }

    echo "</table>";
}
?>

</body>
</html>
