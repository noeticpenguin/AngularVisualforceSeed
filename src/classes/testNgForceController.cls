/*
  These tests are provided as-is, and are shipped *disabled*
  by default. These tests require existing setup or data
  within the org - they are tests that are not-possible to
  do via pure apex.
 */
@isTest
public class testNgForceController {
	/**
	 * This test requires a fieldset to exist on a given object.
	 * Modify the first line of the test to reference
	 * your object name, and it's fieldset
	 * ie: 'Account', 'AccountDetails'
	 * before uncommenting this test.
	 */
	static testMethod void testSoqlFromFieldSet() {
		String jsonResult = ngForceController.soqlFromFieldSet('Account', 'For_Testing_Only');
		System.assertNotEquals(null, jsonResult);
		Map<String, Object> result = (Map<String, Object>)JSON.deserializeUntyped(jsonResult);
		System.assertNotEquals(null, result.get('selectClause'));
		System.assertNotEquals(null, result.get('fromClause'));
		System.Assert(true);
	}

	/**
	 * This test requires a fieldset to exist on a given object.
	 * Modify the first two lines of the test to reference
	 * your object name, and it's fieldset
	 * ie: 'Account', 'AccountDetails'
	 * before uncommenting this test.
	 */
	static testMethod void testQueryFromFieldSet() {
        Account a = TestUtils.getAccount();
		Account li = [SELECT Id From Account WHERE Id = :a.Id LIMIT 1];
		String jsonResult = ngForceController.queryFromFieldSet(li.Id, 'For_Testing_Only');
		System.assertNotEquals(null, jsonResult);
		List<Object> result = (List<Object>)JSON.deserializeUntyped(jsonResult);
		System.assertNotEquals(null, result);
		System.Assert(true);
	}

	/**
	 * This test requires a fieldset to exist on a given object.
	 * Modify the first line of the test to reference
	 * your object name, and it's fieldset
	 * ie: 'Account', 'AccountDetails'
	 * before uncommenting this test.
	 */
	static testMethod void testDescribeFieldSet() {
		String jsonResult = ngForceController.describeFieldSet('account', 'For_Testing_Only');
		System.assertNotEquals(null, jsonResult);
		System.assert(true);
	}

}