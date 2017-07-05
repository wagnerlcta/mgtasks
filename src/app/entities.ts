import { AngularmService, memoryDAO, entityType } from 'angularm';
export let describeDomain = (angularm: AngularmService) => {
  angularm.setupDomain(
    memoryDAO(
      entityType('bug', 'bugs', {id: 'code'})
        .propertyType('code', 'string').propertyType('product', 'string').propertyType('component', 'string')
        .propertyType('version', 'string').propertyType('summary', 'string').propertyType('description', 'string')
        .propertyType('importance', 'integer').propertyType('targetMilestone', 'string')
        .propertyType('assignedTo', 'string').propertyType('qaContact', 'string').propertyType('url', 'string')
        .propertyType('whiteboard', 'string').propertyType('keywords', 'string').propertyType('tags', 'string')
        .propertyType('dependsOn', 'string').propertyType('blocks', 'string').propertyType('origEstimated', 'float')
        .propertyType('hoursWorked', 'float').propertyType('hoursLeft', 'float').propertyType('deadline', 'date')
        .propertyType('additionalComments', 'string').propertyType('status', 'string')
    ),
    memoryDAO(
      entityType('bugzillaUser', 'bugzillaUsers', {id: 'loginName'})
        .propertyType('loginName', 'string').propertyType('realName', 'string').propertyType('password', 'string')
        .propertyType('bugmailDisabled', 'boolean').propertyType('disableText', 'string')
        .propertyType('adminPermission', 'boolean').propertyType('createGroupsPermission', 'boolean')
        .propertyType('editUsersPermission', 'boolean')
    ),
    memoryDAO(
      entityType('bugzillaProduct', 'bugzillaProducts', {id: 'code'})
        .propertyType('code', 'string').propertyType('product', 'string').propertyType('description', 'string')
        .propertyType('openForBugEntry', 'boolean').propertyType('enableUnconfirmedStatus', 'boolean')
        .propertyType('maxVotesPerPerson', 'integer').propertyType('maxVotesPersonPerBug', 'integer')
        .propertyType('confirmBugsVotes', 'integer').propertyType('version', 'string')
        .propertyType('createChartDatasets', 'boolean').propertyType('component', 'string')
        .propertyType('componentDescription', 'string').propertyType('defaultAssignee', 'string')
        .propertyType('defaultCcList', 'string')
    ),
    memoryDAO(
      entityType('issue', 'issues', {id: 'code'})
        .propertyType('code', 'string').propertyType('project', 'string').propertyType('issueType', 'string')
        .propertyType('summary', 'string').propertyType('storyPoints', 'integer').propertyType('priority', 'string')
        .propertyType('dueDate', 'date').propertyType('components', 'string').propertyType('affectsVersions', 'string')
        .propertyType('fixVersions', 'string').propertyType('assignee', 'string').propertyType('environment', 'string')
        .propertyType('description', 'string').propertyType('labels', 'string').propertyType('epic', 'string')
        .propertyType('sprint', 'string')
    ),
    memoryDAO(
      entityType('product', 'products', {id: 'code'})
        .propertyType('code', 'string').propertyType('name', 'string').propertyType('model', 'string')
        .propertyType('sku', 'string').propertyType('weight', 'float').propertyType('manufacturer', 'string')
        .propertyType('status', 'string').propertyType('taxClass', 'string').propertyType('urlKey', 'string')
        .propertyType('visibility', 'string').propertyType('setProductasNewFromDate', 'date')
        .propertyType('setProductasNewToDate', 'date').propertyType('countryOfManufacture', 'string')
        .propertyType('price', 'float').propertyType('cost', 'float').propertyType('specialPrice', 'float')
        .propertyType('specialPriceFromDate', 'date').propertyType('specialPriceToDate', 'date')
        .propertyType('applyMap', 'string').propertyType('displayActualPrice', 'float')
        .propertyType('suggestedRetailPrice', 'float').propertyType('metaTitle', 'string')
        .propertyType('metaKeywords', 'string').propertyType('metaDescription', 'string')
        .propertyType('shortDescription', 'string').propertyType('description', 'string')
        .propertyType('inDepth', 'string').propertyType('dimensions', 'string')
        .propertyType('activationInformation', 'string').propertyType('color', 'string')
        .propertyType('customDesign', 'string').propertyType('activeFrom', 'date')
        .propertyType('activeTo', 'date').propertyType('customLayoutUpdate', 'string')
        .propertyType('displayProductOptionsIn', 'string').propertyType('pageLayout', 'string')
        .propertyType('enableRecurringProfile', 'boolean').propertyType('allowGiftMessage', 'boolean')
        .propertyType('manageStock', 'boolean').propertyType('qty', 'float')
        .propertyType('qtyForItemsStatusToBecomeOutOfStock', 'float')
        .propertyType('minimumQtyAllowedInShoppingCart', 'float')
        .propertyType('maximumQtyAllowedInShoppingCart', 'float').propertyType('qtyUsesDecimals', 'boolean')
        .propertyType('backorders', 'string').propertyType('notifyForQuantityBelow', 'float')
        .propertyType('enableQtyIncrements', 'boolean').propertyType('stockAvailability', 'boolean')
        .propertyType('tags', 'string')
    ),
    memoryDAO(
      entityType('project', 'projects', {id: 'identifier'})
        .propertyType('name', 'string').propertyType('description', 'string').propertyType('identifier', 'string')
        .propertyType('homepage', 'string').propertyType('public', 'boolean').propertyType('subProjectOf', 'string')
        .propertyType('bugTracker', 'boolean').propertyType('featureTracker', 'boolean')
        .propertyType('supportTracker', 'boolean')
    ),
    memoryDAO(
      entityType('testCase', 'testCases', {id: 'code'})
        .propertyType('code', 'string').propertyType('title', 'string').propertyType('summary', 'string')
        .propertyType('preConditions', 'string').propertyType('status', 'string').propertyType('importance', 'string')
        .propertyType('minutes', 'string')
    ),
    memoryDAO(
      entityType('salesforceUser', 'salesforceUsers', {id: 'username'})
        .propertyType('name', 'string').propertyType('alias', 'string').propertyType('email', 'string')
        .propertyType('username', 'string').propertyType('communityNickname', 'string').propertyType('title', 'string')
        .propertyType('company', 'string').propertyType('department', 'string').propertyType('division', 'string')
        .propertyType('address', 'string').propertyType('timeZone', 'string').propertyType('locale', 'string')
        .propertyType('language', 'string').propertyType('delegatedApprover', 'string')
        .propertyType('manager', 'string').propertyType('role', 'string').propertyType('userLicense', 'string')
        .propertyType('profile', 'string').propertyType('active', 'boolean').propertyType('marketingUser', 'boolean')
        .propertyType('offlineUser', 'boolean').propertyType('knowledgeUser', 'boolean')
        .propertyType('forceComFlowUser', 'boolean').propertyType('serviceCloudUser', 'boolean')
        .propertyType('siteComContributorUser', 'boolean').propertyType('siteComPublisherUser', 'boolean')
        .propertyType('mobileUser', 'boolean')
    ),
    memoryDAO(
      entityType('lead', 'leads', {id: 'code'})
        .propertyType('code', 'string').propertyType('owner', 'string').propertyType('firstName', 'string')
        .propertyType('lastName', 'string').propertyType('company', 'string').propertyType('title', 'string')
        .propertyType('status', 'string').propertyType('phone', 'string').propertyType('email', 'string')
        .propertyType('street', 'string').propertyType('city', 'string').propertyType('state', 'string')
        .propertyType('zipCode', 'string').propertyType('county', 'string').propertyType('website', 'string')
        .propertyType('numberOfEmployees', 'integer').propertyType('annualRevenue', 'integer')
        .propertyType('source', 'string').propertyType('industry', 'string').propertyType('description', 'string')
    ),
    memoryDAO(
      entityType('campaign', 'campaigns', {id: 'code'})
        .propertyType('code', 'string').propertyType('owner', 'string').propertyType('name', 'string')
        .propertyType('active', 'boolean').propertyType('type', 'string').propertyType('status', 'string')
        .propertyType('start', 'date').propertyType('end', 'date').propertyType('expectedRevenue', 'integer')
        .propertyType('budgetedCost', 'integer').propertyType('actualCost', 'integer')
        .propertyType('expectedResponse', 'float').propertyType('numSent', 'integer')
        .propertyType('parentCampaign', 'string')
    ),
    memoryDAO(
      entityType('quiz', 'quizzes', {id: 'code'})
        .propertyType('code', 'string').propertyType('name', 'string').propertyType('description', 'string')
        .propertyType('displayDescription', 'boolean').propertyType('open', 'datetime')
        .propertyType('close', 'datetime').propertyType('timeLimit', 'integer')
        .propertyType('whenTimeExpires', 'string').propertyType('submissionGracePeriod', 'integer')
        .propertyType('gradeCategory', 'string').propertyType('attemptsAllowed', 'string')
        .propertyType('gradingMethod', 'string')
    ),
    memoryDAO(
      entityType('course', 'courses', {id: 'code'})
        .propertyType('code', 'string').propertyType('fullName', 'string').propertyType('shortName', 'string')
        .propertyType('courseIdNumber', 'integer').propertyType('summary', 'string').propertyType('format', 'string')
        .propertyType('numberOfWeeksTopics', 'integer').propertyType('start', 'date')
        .propertyType('hiddenSections', 'string').propertyType('newsItemsToShow', 'integer')
        .propertyType('showGrades', 'boolean').propertyType('showActivityReports', 'boolean')
        .propertyType('maxUploadSize', 'integer').propertyType('defaultRoles', 'string')
    )
  );
};
