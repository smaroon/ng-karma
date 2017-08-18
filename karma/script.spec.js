describe('userInfoCard', function() {
    var injector;
    var element;
    var scope;

    beforeEach(inject(function($rootScope, $compile){
        scope = $rootScope.$new();
        element = $compile('<remove-friend></remove-friend>')(scope);

        scope.$apply();
    }));

    it('should have a span element', function() {
        var spanElement = element.find('span');
        expect(spanElement).toBeDefined();
        });
    it('remove a friend', function() {

    });
});