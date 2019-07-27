<?php 

class Comment
{
    public $author = null;
    public $text = null;
    public $created_at = null;

    public function fillFromArray($array)
    {
        $this->author = $array['author'];
        $this->text = $array['text'];

        if(isset($array['created_at']))
        {
            $this->created_at = $array['created_at'];
        }
    }

    public function save()
    {
        $this->created_at = date('Y-m-d H:i:s');

        insert((array)$this); //cast to array and insert the resulting array into DB
    }

}

?>