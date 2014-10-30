public with sharing class ngAppController {

	Public Boolean useLocalResources {get; private set;}

	public ngAppController() {
		useLocalhostAngularResources__c useLocal = useLocalhostAngularResources__c.getValues('default');
		useLocalResources = useLocal.Use_Localhost_resources__c;
	}
}