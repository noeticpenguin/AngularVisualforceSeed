public with sharing class ngAppResourceComponentController {

	Public Boolean useLocalResources {get; private set;}

	Public ngAppResourceComponentController() {
		useLocalhostResources__c useLocal = useLocalhostResources__c.getValues('default');
		useLocalResources = useLocal.Use_Localhost_resources__c;
	}
}