describe("My Converter", function () {
    it("should convert imperial weight to metric", function () {
        expect(Converter.convertFromPoundsToKilo(2.2)).toBe(1);
    });
    it("should be able to deal with strings", function () {
        expect(function () {
            Converter.convertFromPoundsToKilo("hello")
        }).toThrow(new Error("Not a number"))
    })
});


