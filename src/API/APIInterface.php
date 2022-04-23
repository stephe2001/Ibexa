<?php
namespace App\API;

use Ibexa\Contracts\Core\Repository\Values\Content\ContentInfo;



// interface that shall be implemented by all nice API...
interface APIInterface
{
    public function send( ContentInfo $contentinfo ): void;
}