<form action="" method="post">

    <?php foreach ($items as $i => $text) : ?>

        <input type="text" name="items[<?= $i ?>]" value="<?= htmlspecialchars($text) ?>"><br>

    <?php endforeach; ?>

    <input type="text" name="items[0]" value="">

    <input type="submit" value="Add">
    
</form>