# Ibexa : Ibexa Task
**call external service and creat translation draft when article is published**


## files
The code is splitted in the following files:
* **src\API\NiceAPI.php** : the API towards the external service. The NiceAPI service performs the JSON/http request towards external service. The remote server (www.example.com) and endpoint shall be configured in _config/services.yaml_
* **src\EventListener\ContentPublicationSubscriber.php** : listener of "publish event" that performs the 2 requested actions when an article in english is publisehd. The source language (english) and target language (french) for creation of translation draft are set up in _config/services.yaml_


## test
No unit test have been coded (lack of time).
But the service can be manually tested via Ibexa admin GUI: each time a article in english is published, a translation draft of this article is created and can be edited. The json/http request to external service can be checked in Symfony Profiler (debug environment) in http-client tab.