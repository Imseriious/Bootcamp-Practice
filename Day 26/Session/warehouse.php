<?php

class Warehouse
{
    public $name = null;
    protected $nr_of_crates = null;
    protected $crates = [];

    public function addCrate($contents)
    {
        $this->crates[] = $contents;
        $this->nr_of_crates++;
    }
}

