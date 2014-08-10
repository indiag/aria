'use strict';

describe('my app', function () {

    browser.get('index.html');

    it('should automatically redirect to /view1 when location hash/fragment is empty', function () {
        expect(browser.getLocationAbsUrl()).toMatch('view1');
    });

    describe('view2', function () {

        beforeEach(function () {
            browser.get('index.html#/view2');
        });

        it('should render view2 when user navigates to /view2'
            , function () {
            expect(element.all(by.css('[ng-view] h4')).first().getText()).
                toMatch(/Find a Pool Coach/);
        });

    });

    describe('view3', function () {

        beforeEach(function () {
            browser.get('index.html#/view3');
        });


        it('should render view3 when user navigates to /view3', function () {
            expect(element.all(by.css('[ng-view] h1')).first().getText()).
                toMatch(/Find Our Pool Locations/);
        });

    });

    describe('view4', function () {

        beforeEach(function () {
            browser.get('index.html#/view4');
        });


        it('should render view4 when user navigates to /view4', function () {
            expect(element.all(by.css('[ng-view] h1')).first().getText()).
                toMatch(/Workout Data/);
        });
    });

    describe('view5', function () {

        beforeEach(function () {
            browser.get('index.html#/view5');
        });


        it('should render view5 when user navigates to /view5', function () {
            expect(element.all(by.css('[ng-view] iframe')).first().getText()).
                toMatch('');
        });

    });

    describe('Gymnasium App Title', function () {

        beforeEach(function () {
            browser.get('index.html');
        });

        describe("index", function () {

            it('should display the correct title', function () {
                expect(browser.getTitle()).toBe('Pool App')
            });
        });
    });

    describe('ng-bind-html', function () {

        beforeEach(function () {
            browser.get('index.html#/view2');
        });

        describe("sort options", function () {

            it('should check ng-bind-html', function () {
                expect(element(by.binding('HTMLalpha')).getText()).toBe(
                    'Alphabetical');
                expect(element(by.binding('HTMLlowestPrice')).getText()).toBe(
                    'Lowest Price');
                expect(element(by.binding('HTMLhighestPrice')).getText()).toBe(
                    'Highest Price');
                expect(element(by.binding('HTMLCategory')).getText()).toBe(
                    'Category');
                expect(element(by.binding('HTMLemail')).getText()).toBe(
                    'Email');
                expect(element(by.binding('HTMLcreated_at')).getText()).toBe(
                    'Created At');
                expect(element(by.binding('HTMLupdatedAt')).getText()).toBe(
                    'Updated At');
                expect(element(by.binding('HTMLemail')).getText()).toBe(
                    'Email');
            });

        });
    });

    describe('Repeater Function', function () {

        beforeEach(function () {
            browser.get('index.html#/view2');
        });

        describe('Number of items', function () {
            it('should have twelve items', function() {
                var elems = element.all(by.repeater('coach in coachList'));
                expect(elems.count()).toBe(12);
            });
        });
    });

    describe('ng-click functions', function () {

        beforeEach(function () {
            browser.get('index.html#/view3');
        });

        describe("Google maps function", function () {

            it('should show correct text for pool location ', function () {

                var ptor = protractor.getInstance();

                //This will not get the option required

                expect(ptor.element(by.css('#l1')).getText()).toMatch('Parnell Street');

                ptor.findElement(protractor.By.css('#addressinput option:nth-child(2)')).click();
                ptor.findElement(protractor.By.css('#Button1')).click();
                expect(ptor.findElement(protractor.By.css('#l1')).getText()).toMatch('Arjun Nagar, Agra, India');

                ptor.findElement(protractor.By.css('#addressinput option:nth-child(3)')).click();
                ptor.findElement(protractor.By.css('#Button1')).click();
                expect(ptor.findElement(protractor.By.css('#l1')).getText()).toMatch('Malakpet,Hyderbad, India');




            });

        });
    });

    describe('Search Functionality', function () {

        beforeEach(function () {
            browser.get('index.html#/view2');
        });

        describe('Dynamic Search Box', function () {

            it('should return first name', function () {

                var ptor = protractor.getInstance();

                //This will not get the option required

                ptor.findElements(protractor.By.repeater("coach in coachList"));

                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Balaji');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Balaji O Shea');

            });

            it('should return the correct sort-by result', function () {

                var ptor = protractor.getInstance();

                ptor.findElement(protractor.By.css('#sortBy option:nth-child(2)')).click();
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('James');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('James Mason');

                ptor.findElement(protractor.By.css('#sortBy option:nth-child(3)')).click();
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Henry');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Hungry Henry');

                ptor.findElement(protractor.By.css('#sortBy option:nth-child(4)')).click();
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Balaji');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Balaji Murphy');

                ptor.findElement(protractor.By.css('#sortBy option:nth-child(5)')).click();
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Balaji');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Enda Kenny');

                ptor.findElement(protractor.By.css('#sortBy option:nth-child(6)')).click();
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('karthik');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('karthik Jones');

            });

            it('should return the correct search result', function () {

                var ptor = protractor.getInstance();

                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('balaji');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Balaji');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Jimmy');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Jimmy');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Jimmy Johnston');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Karthik');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('karthik');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('karthin');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Kiran');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Kiran');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Kieran');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Latif');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Latif');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Gatif');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Pavan');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Pavan');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Aavan');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Venkat');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Venkat');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Vikas');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Vivek');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Vivek');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Livek');

            });
        });
    });

    describe('nav bar functionality', function () {
        beforeEach(function () {
            browser.get('index.html#/view2');
        });

        describe('Click on menu links', function () {

            it('should visit the correct page', function () {

                var ptor = protractor.getInstance();

                //This will not get the option required

                ptor.findElement(protractor.By.css('.home')).click();
                expect(browser.getLocationAbsUrl()).toMatch('view1');
                expect(browser.getLocationAbsUrl()).not.toMatch('view2');

                ptor.findElement(protractor.By.css('.partialTwo')).click();
                expect(browser.getLocationAbsUrl()).toMatch('view2');
                expect(browser.getLocationAbsUrl()).not.toMatch('view1');

                ptor.findElement(protractor.By.css('.partialThree')).click()
                expect(browser.getLocationAbsUrl()).toMatch('view3');
                expect(browser.getLocationAbsUrl()).not.toMatch('view1');

                ptor.findElement(protractor.By.css('.partialFour')).click()
                expect(browser.getLocationAbsUrl()).toMatch('view4');
                expect(browser.getLocationAbsUrl()).not.toMatch('view1');

                ptor.findElement(protractor.By.css('.partialFive')).click()
                expect(browser.getLocationAbsUrl()).toMatch('view5');
                expect(browser.getLocationAbsUrl()).not.toMatch('view1');
            });
        });
    });
});
