<?php

require_once 'lib/DBBlackbox.php';

require_once 'comments.php'; //Adding comments php

//Step 3
$comment = new Comment;

//Step 4 If something is on post "Submited" you see the details of the post array
if($_POST) {
    var_dump($_POST);

    $comment->fillFromArray($_POST);

    $comment->save();
    
    header("Refresh: 0");

    exit();
}

$all_comments_as_arrays = select(); //select is provided by the file dbblack... we savbe all the comments as arrays (array of arrays)

$comments = [];

foreach ($all_comments_as_arrays as $comment_data)
{
    $one_comment = new Comment;
    $one_comment->fillFromArray($comment_data);

    $comments[] = $one_comment;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Disney buys Star Wars maker Lucasfilm from George Lucas | BBC News</title>

    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <article>

        <div class="img">
            <img src="img/article.jpg" alt="Disney buys Star Wars maker Lucasfilm from George Lucas">
        </div>
        
        <h1>Disney buys Star Wars maker Lucasfilm from George Lucas</h1>

        <p class="story">Disney is buying Lucasfilm, the company behind the Star Wars films, from its chairman and founder George Lucas for $4.05bn (£2.5bn).</p>

        <p>Mr Lucas said: "It's now time for me to pass Star Wars on to a new generation of film-makers."</p>

        <p>In a statement announcing the purchase, Disney said it planned to release a new Star Wars film, episode seven, in 2015.</p>

        <p>That will be followed by episodes eight and nine and then one new movie every two or three years, the company said.</p>

    </article>

    <div class="comments">
        <h2>Comment below:</h2>

        <!-- your code here -->
        <form action="" method="POST">
            <label for="">Author</label><br> <!-- Created label -->
            <input type="text" name="author" value="<?= htmlspecialchars($comment->author) ?>" > <!-- Created Text with name author -->
            <label for="">Text</label><br> <!-- Created label -->
            <textarea name="text" value="<?= htmlspecialchars($comment->text) ?>" cols="30" rows="10"></textarea>
            <input type="submit">
        </form>

        <h2>Previous comments:</h2>
        <div class="comments">
            <?php foreach ($comments as $one_comment) : ?>

            <div class="comment">
                <div class="author">
                    Author: <?= htmlspecialchars($one_comment->author) ?>
                </div>
                <div class="text">
                    Text: <?= htmlspecialchars($one_comment->text) ?>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
        
    </div>
        
    
</body>
</html>