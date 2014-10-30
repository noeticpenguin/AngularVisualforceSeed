@isTest
public with sharing class TestUtils {

	public static User getStandardTestUser() {
		String unique = String.valueOf(DateTime.now().getTime());
		Profile p = [SELECT Id FROM Profile WHERE Name = 'Standard User'];
		User u = new User(Alias = 'standt', Email = 'standarduser55@testorg.com',
		                  EmailEncodingKey = 'UTF-8', LastName = 'Testing', LanguageLocaleKey = 'en_US',
		                  LocaleSidKey = 'en_US', ProfileId = p.Id,
		                  TimeZoneSidKey = 'America/Los_Angeles', UserName = 'standarduser@' + unique + 'testorg.com');
		insert u;
		return u;
	}

	public static Account getAccount() {
		Account a = new Account();
		String unique = String.valueOf(DateTime.now().getTime());
		a.name = 'foo company ' + unique;
		insert a;
		return a;
	}

	public static Opportunity getOpp(Boolean doInsert) {
		Account a = TestUtils.getAccount();
		Opportunity o = new Opportunity(
		  accountId = a.Id,
		  StageName = 'Qualification'
		);
		if (doInsert) {
			Insert o;
		}
		return o;
	}

	public static Opportunity getOpp(Boolean doInsert, Account a) {
		Opportunity o = new Opportunity(
		  accountId = a.Id,
		  name = 'Test Opportunity' + TestUtils.getRandomNumber(10),
		  closeDate = Date.today(),
		  StageName = 'Qualification'
		);
		if (doInsert) {
			Insert o;
		}
		return o;
	}

	public static List<Opportunity> getNOpportunities(Integer n, Boolean doInsert) {
		Account a = TestUtils.getAccount();
		List<Opportunity> returnList = new List<Opportunity>();
		for (Integer i = 0; i <= n; i++) {
			returnList.add(TestUtils.getOpp(false, a));
		}
		if (doInsert) {
			insert returnList;
		}
		return returnList;
	}

	public static Integer getRandomNumber(Integer size) {
		Double d = math.random() * size;
		return d.intValue();
	}

}