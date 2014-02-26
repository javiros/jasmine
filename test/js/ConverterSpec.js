describe("My Converter", function(){
    it("should convert imperial to metric", function(){
        expect(Converter.convertFromImperialToMetric(2.2)).toBe(1);
    })

    it("should be able to deal with stings", function(){
        expect(function()
        {Converter.convertFromImperialToMetric("hello")}).toThrow(new Error("not a number"));
    })
})