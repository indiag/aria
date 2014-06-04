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

        it('should render view2 when user navigates to /view2'p
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
            expect(element.all(by.css('[ng-view] h3')).first().getText()).
                toMatch(/Find Our Pool Locations/);
        });

    });

    describe('view4', function () {

        beforeEach(function () {
            browser.get('index.html#/view4');
        });


        it('should render view4 when user navigates to /view4', function () {
            expect(element.all(by.css('[ng-view] h1')).first().getText()).
                toMatch(/Your Exercise Statistics/);
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
                expect(browser.getTitle()).toBe('Gymnasium App')
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

            it('should show correct text for gym location ', function () {

                var ptor = protractor.getInstance();

                //This will not get the option required

                expect(ptor.element(by.css('#l1')).getText()).toMatch('Cork Street');

                ptor.findElement(protractor.By.css('#addressinput option:nth-child(2)')).click();
                ptor.findElement(protractor.By.css('#Button1')).click();
                expect(ptor.findElement(protractor.By.css('#l1')).getText()).toMatch('Quarry Road');

                ptor.findElement(protractor.By.css('#addressinput option:nth-child(3)')).click();
                ptor.findElement(protractor.By.css('#Button1')).click();
                expect(ptor.findElement(protractor.By.css('#l1')).getText()).toMatch('Bishopstown Road');

                ptor.findElement(protractor.By.css('#addressinput option:nth-child(4)')).click();
                ptor.findElement(protractor.By.css('#Button1')).click();
                expect(ptor.findElement(protractor.By.css('#l1')).getText()).toMatch('Henry Street');

                ptor.findElement(protractor.By.css('#addressinput option:nth-child(5)')).click();
                ptor.findElement(protractor.By.css('#Button1')).click();
                expect(ptor.findElement(protractor.By.css('#l1')).getText()).toMatch('Ennis Road');

                ptor.findElement(protractor.By.css('#addressinput option:nth-child(6)')).click();
                ptor.findElement(protractor.By.css('#Button1')).click();
                expect(ptor.findElement(protractor.By.css('#l1')).getText()).toMatch('Rindoon Park');

                ptor.findElement(protractor.By.css('#addressinput option:nth-child(7)')).click();
                ptor.findElement(protractor.By.css('#Button1')).click();
                expect(ptor.findElement(protractor.By.css('#l1')).getText()).toMatch('Scarlett Street, Drogheda');
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

                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Bonnie');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Bonnie Dowling');

            });

            it('should return the correct sort-by result', function () {

                var ptor = protractor.getInstance();

                ptor.findElement(protractor.By.css('#sortBy option:nth-child(2)')).click();
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('George');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('George Best');

                ptor.findElement(protractor.By.css('#sortBy option:nth-child(3)')).click();
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Phil');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Phil Lynnott');

                ptor.findElement(protractor.By.css('#sortBy option:nth-child(4)')).click();
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Joe');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Joe Brolly');

                ptor.findElement(protractor.By.css('#sortBy option:nth-child(5)')).click();
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Kevin');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Kevin Heffernan');

                ptor.findElement(protractor.By.css('#sortBy option:nth-child(6)')).click();
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Seamus');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Seamus Heaney');

            });

            it('should return the correct search result', function () {

                var ptor = protractor.getInstance();

                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('mary');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Mary');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('bonnie');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Bonnie');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Bonnie Dowling');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Dwyer');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Mick');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Mick 0 Dwyer');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Bono');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Bono');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Mick');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Watson');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('James');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('James Watson');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('James');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('James');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('James Watson');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Heffernan');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Kevin');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Kevin H');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Pauling');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Linus');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Linus P');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Paidi');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Paidi');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Paidi O Shea');

                ptor.findElement(protractor.By.id("ngsearch")).clear();
                ptor.findElement(protractor.By.id("ngsearch")).sendKeys('Seamus');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).toMatch('Seamus');
                expect(ptor.findElement(protractor.By.css('#myFirstName')).getText()).not.toMatch('Seamus Heaney');

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