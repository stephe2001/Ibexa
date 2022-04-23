<?php
namespace App\EventListener;

use Ibexa\Contracts\Core\Repository\Events\Content\PublishVersionEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Ibexa\Contracts\Core\Repository\Values\Content\Content;
use Ibexa\Contracts\Core\Repository\ContentService;
use Psr\Log\LoggerInterface;

use App\API\NiceAPI;


/**
 * subscriber to event "publish" to perform requested actions: call API, creation of translation draft
 */
class ContentPublicationSubscriber implements EventSubscriberInterface
{
    private LoggerInterface $logger;
    private ContentService $contentService;
    private NiceAPI $api;
    private string $sourceLanguageCode;
    private string $targetLanguageCode;


    /**
     * constructor
     * 2 parameters can be set in config/service.yaml file for easier configuration: $sourceLanguageCode and $targetLanguageCode
     * 
     * @param LoggerInterface   $logger
     * @param ContentService    $contentService
     * @param NiceAPI           $api                API towards external system
     * @param string            $sourceLanguageCode main language (eng-GB): all articles published in this language will generate the creation of a translation draft in targetlanguage
     * @param string            $targetLanguageCode 
     */
    public function __construct(LoggerInterface $logger, ContentService $contentService, NiceAPI $api, $sourceLanguageCode = 'eng-GB', $targetLanguageCode = 'fre-FR' )
    {
        $this->logger = $logger;
        $this->contentService = $contentService;
        $this->api = $api;
        $this->sourceLanguageCode = $sourceLanguageCode;
        $this->targetLanguageCode = $targetLanguageCode;
    }


    /**
     * @inherit
     */
    public static function getSubscribedEvents()
    {
        return [
            PublishVersionEvent::class => ['onPublishVersion', 0],
        ];
    }



    /**
     * action executed when a content is published
     * 
     * @param PublishVersionEvent $event
     */
    public function onPublishVersion(PublishVersionEvent $event): void
    {
        $content = $event->getContent();
        $contentVersionInfo = $content->getVersionInfo();
        $contentInfo = $contentVersionInfo->getContentInfo();
        
        // check if content is an article writen in source language (english)
        if ( $content->getContentType()->identifier === 'article' && $contentVersionInfo->initialLanguageCode === $this->sourceLanguageCode ) {
            
            // action 1: call external API with content info
            try {

                $this->api->send( $contentInfo );

            } catch (\Exception $e ) {
                // define here what to do if the API is not working...
                $this->logger->error( 'the NiceAPI was not so nice...' );
            }


            // action 2: create a translation draft linked to this content
            $this->createTranslationDraft( $content, $this->targetLanguageCode );
        }
    }



    /**
     * create a new translation draft for a given content
     * 
     * @param Content $content      content for which new translation draft shall be created
     * @param string  $languageCode language of the new translation
     */
    private function createTranslationDraft( Content $content, string $languageCode ) {
        
        $contentInfo = $content->getVersionInfo()->getContentInfo();

        // create draft
        $contentDraft = $this->contentService->createContentDraft($contentInfo);
        
        // create content structure
        $contentUpdateStruct = $this->contentService->newContentUpdateStruct();
        $contentUpdateStruct->initialLanguageCode = $languageCode;
        // copy fields
        $fields = $content->getFields();
        foreach( $fields as $field ) {
            $contentUpdateStruct->setField( $field->fieldDefIdentifier, $field->value );
        }

        // update content
        $this->contentService->updateContent($contentDraft->versionInfo, $contentUpdateStruct);
    }
}