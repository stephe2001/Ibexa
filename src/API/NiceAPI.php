<?php
namespace App\API;

use Ibexa\Contracts\Core\Repository\Values\Content\ContentInfo;
use Symfony\Contracts\HttpClient\HttpClientInterface;


/**
 * fake API to external service
 */
class NiceAPI implements APIInterface
{

    private HttpClientInterface $httpclient;
    private string $host;
    private string $endpoint;
    

    /**
     * constructor recovers service information (host, endpoint) from config/service.yaml
     * 
     * @param HttpClientInterface   $httpclient
     * @param string                $host       service host (ex: www.exmaple.com)
     * @param string                $endpoint   service endpoint in service host (ex: /foo/bar)
     */
    public function __construct( HttpClientInterface $httpclient, $host, $endpoint )
    {
        $this->httpclient = $httpclient;
        $this->host = $host;
        $this->endpoint = $endpoint;
    }

    

    /**
     * sends a request to the external service. Only empty answer with 200 OK is expected back.
     * 
     * @param ContentInfo $contentinfo
     * 
     * an exception is generated if remote service cannot be invocated or if NOK answer is received
     */
    public function send( ContentInfo $contentinfo ): void
    {
        $body = [
            'name' => $contentinfo->name,
            'contentId' => $contentinfo->id,
            'locationId' => $contentinfo->mainLocationId,
            'languageCode' => $contentinfo->mainLanguageCode
        ];

        $uri = 'http://'.($this->host).($this->endpoint);

        $response = $this->httpclient->request(
            'POST',
            $uri,
            [ 'json' => $body ]
        );


        if ( $response->getStatusCode() !== 200 ) throw new \Exception ('Issue with the NiceAPI !!');
    }

}