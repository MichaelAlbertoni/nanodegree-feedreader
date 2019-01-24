/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* It test to make sure that each feed has attribute URL defined
         * and this attribute can't be empty
         * allFeeds is array that contains all feeds
         */

        it('each feed must have a defined URL and the URL is not empty', function(){
            for (let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            };
        });

        /* It test to make sure that each feed has attribute name defined
         * and this attribute can't be empty
         * allFeeds is array that contains all feeds
         */

        it('each feed must have a defined name and the name is not empty', function(){
            for (let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            };
        });
    });


    /* Menu test suite*/
    describe('The menu', function() {

        /* This test verifies that the menu is hidden by default
         * with jQuery to identify if the body has class 'menu-hidden'
         */
        it('the menu element must be hidden by default',function(){
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
         /* This test verifies that the menu is visible when it receives a click
          * and checks to be hidden when when click again 
          */
        it('should show menu when click the menu and hide the menu when click again', function(){
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).not.toBeTruthy();
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });
    /* Initial Entries test suite */
    describe('Initial Entries', function(){

        /* This test verifies if when a loadFeed function is called and its job is completed
         * there is at least one 'entry' element in the container
         * with jQuery to identify if exists elements with class 'feed' and 'entry'
         */
         beforeEach(function(done){
            loadFeed(0, done);
         });

         it('should has least one entry', function(){
            expect($('.feed .entry').length).not.toBe(0);
         });
    });
    /* Feed Selection test suite */
    describe('New Feed Selection', function(){
        /* This test verifies if when a new feed is loaded by the loadFeed Function
         * the content actually changes, were called the first two feeds and compared
         */
        let initialFeed,
            newFeed;

        beforeEach(function(done){
            loadFeed(0, function(){
                initialFeed = $('.feed').html();
                loadFeed(1, done);
            });
            
        });

        it('should has a different content in feeds', function () {
            newFeed = $('.feed').html();
            expect(newFeed).not.toEqual(initialFeed);
        });
    });
}());
