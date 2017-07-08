import { AngularmService, memoryDAO, entityType } from 'angularm';
export let describeDomain = (angularm: AngularmService) => {
  angularm.setupDomain(
    memoryDAO(
      entityType('bug', 'bugs', {id: 'code'})
        .propertyType('code', 'string').propertyType('product', 'string').propertyType('component', 'string')
        .propertyType('version', 'string').propertyType('summary', 'string').propertyType('description', 'string')
        .propertyType('importance', 'integer').propertyType('targetmilestone', 'string')
        .propertyType('assignedto', 'string').propertyType('qacontact', 'string').propertyType('url', 'string')
        .propertyType('whiteboard', 'string').propertyType('keywords', 'string').propertyType('tags', 'string')
        .propertyType('dependson', 'string').propertyType('blocks', 'string').propertyType('origestimated', 'float')
        .propertyType('hoursworked', 'float').propertyType('hoursleft', 'float').propertyType('deadline', 'date')
        .propertyType('additionalcomments', 'string').propertyType('status', 'string')
    ),
    memoryDAO(
      entityType('bugzillauser', 'bugzillausers', {id: 'loginname'})
        .propertyType('loginname', 'string').propertyType('realname', 'string').propertyType('password', 'string')
        .propertyType('bugmaildisabled', 'boolean').propertyType('disabletext', 'string')
        .propertyType('adminpermission', 'boolean').propertyType('creategroupspermission', 'boolean')
        .propertyType('edituserspermission', 'boolean')
    ),
    memoryDAO(
      entityType('bugzillaproduct', 'bugzillaproducts', {id: 'code'})
        .propertyType('code', 'string').propertyType('product', 'string').propertyType('description', 'string')
        .propertyType('openforbugentry', 'boolean').propertyType('enableunconfirmedstatus', 'boolean')
        .propertyType('maxvotesperperson', 'integer').propertyType('maxvotespersonperbug', 'integer')
        .propertyType('confirmbugsvotes', 'integer').propertyType('version', 'string')
        .propertyType('createchartdatasets', 'boolean').propertyType('component', 'string')
        .propertyType('componentdescription', 'string').propertyType('defaultassignee', 'string')
        .propertyType('defaultcclist', 'string')
    ),
    memoryDAO(
      entityType('issue', 'issues', {id: 'code'})
        .propertyType('code', 'string').propertyType('project', 'string').propertyType('issuetype', 'string')
        .propertyType('summary', 'string').propertyType('storypoints', 'integer').propertyType('priority', 'string')
        .propertyType('dueDate', 'date').propertyType('components', 'string').propertyType('affectsversions', 'string')
        .propertyType('fixversions', 'string').propertyType('assignee', 'string').propertyType('environment', 'string')
        .propertyType('description', 'string').propertyType('labels', 'string').propertyType('epic', 'string')
        .propertyType('sprint', 'string')
    ),
    memoryDAO(
      entityType('product', 'products', {id: 'code'})
        .propertyType('code', 'string').propertyType('name', 'string').propertyType('model', 'string')
        .propertyType('sku', 'string').propertyType('weight', 'float').propertyType('manufacturer', 'string')
        .propertyType('status', 'string').propertyType('taxclass', 'string').propertyType('urlkey', 'string')
        .propertyType('visibility', 'string').propertyType('setProductasNewFromDate', 'date')
        .propertyType('setproductasnewtodate', 'date').propertyType('countryofmanufacture', 'string')
        .propertyType('price', 'float').propertyType('cost', 'float').propertyType('specialprice', 'float')
        .propertyType('specialpricefromdate', 'date').propertyType('specialpricetodate', 'date')
        .propertyType('applymap', 'string').propertyType('displayactualprice', 'float')
        .propertyType('suggestedretailprice', 'float').propertyType('metatitle', 'string')
        .propertyType('metakeywords', 'string').propertyType('metadescription', 'string')
        .propertyType('shortdescription', 'string').propertyType('description', 'string')
        .propertyType('indepth', 'string').propertyType('dimensions', 'string')
        .propertyType('activationinformation', 'string').propertyType('color', 'string')
        .propertyType('customdesign', 'string').propertyType('activefrom', 'date')
        .propertyType('activeto', 'date').propertyType('customlayoutupdate', 'string')
        .propertyType('displayproductoptionsin', 'string').propertyType('pagelayout', 'string')
        .propertyType('enablerecurringprofile', 'boolean').propertyType('allowgiftmessage', 'boolean')
        .propertyType('managestock', 'boolean').propertyType('qty', 'float')
        .propertyType('qtyforitemsstatustobecomeoutofstock', 'float')
        .propertyType('minimumqtyallowedinshoppingcart', 'float')
        .propertyType('maximumqtyallowedinshoppingcart', 'float').propertyType('qtyusesdecimals', 'boolean')
        .propertyType('backorders', 'string').propertyType('notifyforquantitybelow', 'float')
        .propertyType('enableqtyincrements', 'boolean').propertyType('stockavailability', 'boolean')
        .propertyType('tags', 'string')
    ),
    memoryDAO(
      entityType('project', 'projects', {id: 'identifier'})
        .propertyType('name', 'string').propertyType('description', 'string').propertyType('identifier', 'string')
        .propertyType('homepage', 'string').propertyType('public', 'boolean').propertyType('subprojectof', 'string')
        .propertyType('bugtracker', 'boolean').propertyType('featuretracker', 'boolean')
        .propertyType('supporttracker', 'boolean')
    ),
    memoryDAO(
      entityType('testcase', 'testcases', {id: 'code'})
        .propertyType('code', 'string').propertyType('title', 'string').propertyType('summary', 'string')
        .propertyType('preconditions', 'string').propertyType('status', 'string').propertyType('importance', 'string')
        .propertyType('minutes', 'integer')
    ),
    memoryDAO(
      entityType('salesforceuser', 'salesforceusers', {id: 'username'})
        .propertyType('name', 'string').propertyType('alias', 'string').propertyType('email', 'string')
        .propertyType('username', 'string').propertyType('communitynickname', 'string').propertyType('title', 'string')
        .propertyType('company', 'string').propertyType('department', 'string').propertyType('division', 'string')
        .propertyType('address', 'string').propertyType('timezone', 'string').propertyType('locale', 'string')
        .propertyType('language', 'string').propertyType('delegatedapprover', 'string')
        .propertyType('manager', 'string').propertyType('role', 'string').propertyType('userlicense', 'string')
        .propertyType('profile', 'string').propertyType('active', 'boolean').propertyType('marketingUser', 'boolean')
        .propertyType('offlineuser', 'boolean').propertyType('knowledgeuser', 'boolean')
        .propertyType('forcecomflowuser', 'boolean').propertyType('serviceclouduser', 'boolean')
        .propertyType('sitecomcontributoruser', 'boolean').propertyType('sitecompublisheruser', 'boolean')
        .propertyType('mobileuser', 'boolean')
    ),
    memoryDAO(
      entityType('lead', 'leads', {id: 'code'})
        .propertyType('code', 'string').propertyType('owner', 'string').propertyType('firstname', 'string')
        .propertyType('lastname', 'string').propertyType('company', 'string').propertyType('title', 'string')
        .propertyType('status', 'string').propertyType('phone', 'string').propertyType('email', 'string')
        .propertyType('street', 'string').propertyType('city', 'string').propertyType('state', 'string')
        .propertyType('zipcode', 'string').propertyType('county', 'string').propertyType('website', 'string')
        .propertyType('numberofemployees', 'integer').propertyType('annualrevenue', 'integer')
        .propertyType('source', 'string').propertyType('industry', 'string').propertyType('description', 'string')
    ),
    memoryDAO(
      entityType('campaign', 'campaigns', {id: 'code'})
        .propertyType('code', 'string').propertyType('owner', 'string').propertyType('name', 'string')
        .propertyType('active', 'boolean').propertyType('type', 'string').propertyType('status', 'string')
        .propertyType('start', 'date').propertyType('end', 'date').propertyType('expectedrevenue', 'integer')
        .propertyType('budgetedcost', 'integer').propertyType('actualcost', 'integer')
        .propertyType('expectedresponse', 'float').propertyType('numsent', 'integer')
        .propertyType('parentcampaign', 'string')
    ),
    memoryDAO(
      entityType('quiz', 'quizzes', {id: 'code'})
        .propertyType('code', 'string').propertyType('name', 'string').propertyType('description', 'string')
        .propertyType('displaydescription', 'boolean').propertyType('open', 'datetime')
        .propertyType('close', 'datetime').propertyType('timelimit', 'integer')
        .propertyType('whentimeexpires', 'string').propertyType('submissiongraceperiod', 'integer')
        .propertyType('gradecategory', 'string').propertyType('attemptsallowed', 'string')
        .propertyType('gradingmethod', 'string')
    ),
    memoryDAO(
      entityType('course', 'courses', {id: 'code'})
        .propertyType('code', 'string').propertyType('fullname', 'string').propertyType('shortname', 'string')
        .propertyType('courseidnumber', 'integer').propertyType('summary', 'string').propertyType('format', 'string')
        .propertyType('numberofweekstopics', 'integer').propertyType('start', 'date')
        .propertyType('hiddensections', 'string').propertyType('newsitemstoshow', 'integer')
        .propertyType('showgrades', 'boolean').propertyType('showactivityreports', 'boolean')
        .propertyType('maxuploadsize', 'integer').propertyType('defaultroles', 'string')
    )
  );
};
